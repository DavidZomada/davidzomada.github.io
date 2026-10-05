type Rock = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  spin: number;
  angle: number;
  verts: number[];
  age: number;
};

type Shot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
};

type Burst = {
  x: number;
  y: number;
  life: number;
};

let playing = false;
let over = false;
let raf = 0;
let last = 0;
let survived = 0;
let spawnIn = 0.7;
let fireIn = 0;
let placed = false;
let facing = -Math.PI / 2;
let pointerX = 0;
let pointerY = 0;
let shipX = 0;
let shipY = 0;
let rocks: Rock[] = [];
let shots: Shot[] = [];
let bursts: Burst[] = [];
let field: HTMLCanvasElement | null = null;
let hud: HTMLElement | null = null;
let card: HTMLElement | null = null;
let clock: HTMLElement | null = null;
let source: HTMLButtonElement | null = null;
let onKey: ((event: KeyboardEvent) => void) | null = null;
let onPointer: ((event: PointerEvent) => void) | null = null;
let onTouch: ((event: TouchEvent) => void) | null = null;
let onResize: (() => void) | null = null;

function irregular() {
  const count = 7 + Math.floor(Math.random() * 3);
  return Array.from({ length: count }, () => 0.7 + Math.random() * 0.4);
}

function edgePoint(radius: number, visible = false) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const edge = Math.floor(Math.random() * 4);
  const outside = radius + 16;
  const inside = radius + 28;
  if (edge === 0) return { x: Math.random() * width, y: visible ? inside : -outside };
  if (edge === 1) return { x: visible ? width - inside : width + outside, y: Math.random() * height };
  if (edge === 2) return { x: Math.random() * width, y: visible ? height - inside : height + outside };
  return { x: visible ? inside : -outside, y: Math.random() * height };
}

function spawnRock(radius: number, at?: { x: number; y: number }, visible = false) {
  let point = at ?? edgePoint(radius, visible);
  if (!at) {
    for (let attempt = 0; attempt < 4; attempt += 1) {
      const dx = point.x - shipX;
      const dy = point.y - shipY;
      if (dx * dx + dy * dy > 180 * 180) break;
      point = edgePoint(radius, visible);
    }
  }
  const width = window.innerWidth;
  const height = window.innerHeight;
  const targetX = at ? point.x + (Math.random() - 0.5) * 80 : width * (0.2 + Math.random() * 0.6);
  const targetY = at ? point.y + (Math.random() - 0.5) * 80 : height * (0.2 + Math.random() * 0.6);
  const angle = Math.atan2(targetY - point.y, targetX - point.x);
  const speed = (at ? 96 : 78 + Math.random() * 70) + Math.min(survived * 4, 120);
  const turn = at ? (Math.random() < 0.5 ? 0.7 : -0.7) : 0;
  rocks.push({
    x: point.x,
    y: point.y,
    vx: Math.cos(angle + turn) * speed,
    vy: Math.sin(angle + turn) * speed,
    r: radius,
    spin: (Math.random() - 0.5) * 1.4,
    angle: Math.random() * Math.PI * 2,
    verts: irregular(),
    age: 0,
  });
}

function fitCanvas() {
  if (!field) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  field.width = Math.floor(window.innerWidth * ratio);
  field.height = Math.floor(window.innerHeight * ratio);
  const context = field.getContext('2d');
  context?.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function clockLabel(seconds: number) {
  const total = Math.floor(seconds);
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${minutes}:${rest.toString().padStart(2, '0')}`;
}

function survivedLabel(seconds: number) {
  const whole = Math.max(1, Math.floor(seconds));
  const template = whole === 1 ? source?.dataset.one : source?.dataset.many;
  return (template ?? '').replace('{n}', String(whole));
}

function placeShip() {
  const dot = document.querySelector('[data-cursor]');
  if (!(dot instanceof HTMLElement)) return;
  const turn = facing + Math.PI / 2;
  dot.style.transform = `translate3d(${shipX}px, ${shipY}px, 0) translate(-50%, -50%) rotate(${turn}rad)`;
}

function showEnd() {
  if (!source || card) return;
  over = true;
  const panel = document.createElement('div');
  panel.className = 'flight-card';
  const line = document.createElement('p');
  line.textContent = survivedLabel(survived);
  const actions = document.createElement('div');
  actions.className = 'flight-actions';
  const again = document.createElement('button');
  again.type = 'button';
  again.className = 'flight-again';
  again.textContent = source.dataset.again ?? '';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'flight-close';
  close.textContent = source.dataset.close ?? '';
  again.addEventListener('click', () => resetWorld());
  close.addEventListener('click', () => stopFlight());
  actions.append(again, close);
  panel.append(line, actions);
  document.body.append(panel);
  card = panel;
  again.focus();
}

function resetWorld() {
  card?.remove();
  card = null;
  over = false;
  survived = 0;
  spawnIn = 0.7;
  fireIn = 0.15;
  rocks = [];
  shots = [];
  bursts = [];
  facing = -Math.PI / 2;
  if (clock) clock.textContent = clockLabel(0);
}

function step(dt: number) {
  if (!placed) return;
  survived += dt;
  if (clock) clock.textContent = clockLabel(survived);

  shipX += (pointerX - shipX) * 0.2;
  shipY += (pointerY - shipY) * 0.2;
  const dx = pointerX - shipX;
  const dy = pointerY - shipY;
  if (dx * dx + dy * dy > 9) {
    const aim = Math.atan2(dy, dx);
    let delta = aim - facing;
    while (delta > Math.PI) delta -= Math.PI * 2;
    while (delta < -Math.PI) delta += Math.PI * 2;
    facing += delta * 0.2;
  }

  fireIn -= dt;
  if (fireIn <= 0) {
    fireIn = 0.17;
    const nose = 16;
    shots.push({
      x: shipX + Math.cos(facing) * nose,
      y: shipY + Math.sin(facing) * nose,
      vx: Math.cos(facing) * 760,
      vy: Math.sin(facing) * 760,
      life: 0.62,
    });
  }

  spawnIn -= dt;
  if (spawnIn <= 0 && rocks.length < 16) {
    const roll = Math.random();
    const radius = roll > 0.72 ? 30 : roll > 0.38 ? 18 : 11;
    spawnRock(radius);
    spawnIn = Math.max(0.38, 1.15 - survived * 0.035);
  }

  for (const rock of rocks) {
    rock.x += rock.vx * dt;
    rock.y += rock.vy * dt;
    rock.angle += rock.spin * dt;
    rock.age += dt;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  rocks = rocks.filter((rock) => {
    if (rock.age < 0.4) return true;
    return rock.x > -140 && rock.x < width + 140 && rock.y > -140 && rock.y < height + 140;
  });

  for (const shot of shots) {
    shot.x += shot.vx * dt;
    shot.y += shot.vy * dt;
    shot.life -= dt;
  }

  const spent = new Set<Shot>();
  const gone = new Set<Rock>();
  const born: Rock[] = [];

  for (const shot of shots) {
    if (spent.has(shot)) continue;
    for (const rock of rocks) {
      if (gone.has(rock)) continue;
      const dx = shot.x - rock.x;
      const dy = shot.y - rock.y;
      if (dx * dx + dy * dy > rock.r * rock.r) continue;
      spent.add(shot);
      gone.add(rock);
      bursts.push({ x: rock.x, y: rock.y, life: 0.28 });
      if (rock.r > 14 && rocks.length < 22) {
        const child = rock.r > 24 ? 16 : 9;
        born.push({
          ...rock,
          r: child,
          verts: irregular(),
          vx: rock.vx + 50,
          vy: rock.vy - 36,
          age: 0.5,
        });
        born.push({
          ...rock,
          r: child,
          verts: irregular(),
          vx: rock.vx - 46,
          vy: rock.vy + 40,
          age: 0.5,
        });
      }
      break;
    }
  }

  shots = shots.filter((shot) => shot.life > 0 && !spent.has(shot));
  rocks = rocks.filter((rock) => !gone.has(rock)).concat(born);
  bursts = bursts.filter((burst) => {
    burst.life -= dt;
    return burst.life > 0;
  });

  const hit = rocks.some((rock) => {
    const dx = shipX - rock.x;
    const dy = shipY - rock.y;
    const reach = rock.r + 8;
    return dx * dx + dy * dy < reach * reach;
  });
  if (hit) showEnd();
}

function draw() {
  const context = field?.getContext('2d');
  if (!context || !field) return;
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (const rock of rocks) {
    context.beginPath();
    rock.verts.forEach((vert, index) => {
      const angle = rock.angle + (index / rock.verts.length) * Math.PI * 2;
      const x = rock.x + Math.cos(angle) * rock.r * vert;
      const y = rock.y + Math.sin(angle) * rock.r * vert;
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.closePath();
    context.fillStyle = '#e4d3b4';
    context.strokeStyle = '#1c1916';
    context.lineWidth = 1.5;
    context.fill();
    context.stroke();
  }

  context.strokeStyle = '#7c4e22';
  context.lineWidth = 2;
  context.lineCap = 'round';
  for (const shot of shots) {
    const length = 11;
    const mag = Math.hypot(shot.vx, shot.vy) || 1;
    context.beginPath();
    context.moveTo(shot.x, shot.y);
    context.lineTo(shot.x - (shot.vx / mag) * length, shot.y - (shot.vy / mag) * length);
    context.stroke();
  }

  for (const burst of bursts) {
    const alpha = Math.max(burst.life / 0.28, 0);
    context.beginPath();
    context.arc(burst.x, burst.y, 8 + (1 - alpha) * 16, 0, Math.PI * 2);
    context.strokeStyle = `rgba(124, 78, 34, ${alpha})`;
    context.lineWidth = 1;
    context.stroke();
  }
}

function frame(now: number) {
  if (!playing) return;
  try {
    const dt = Math.min(0.034, (now - last) / 1000);
    last = now;
    if (!over) step(dt);
    draw();
    placeShip();
  } catch (error) {
    console.error(error);
    stopFlight();
    return;
  }
  raf = requestAnimationFrame(frame);
}

export function stopFlight() {
  playing = false;
  over = false;
  if (raf) cancelAnimationFrame(raf);
  raf = 0;
  field?.remove();
  hud?.remove();
  card?.remove();
  field = null;
  hud = null;
  card = null;
  clock = null;
  rocks = [];
  shots = [];
  bursts = [];
  document.documentElement.classList.remove('is-flying');
  const dot = document.querySelector('[data-cursor]');
  if (dot instanceof HTMLElement) {
    dot.classList.remove('is-ship');
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) dot.classList.remove('is-on');
    dot.style.transform = `translate3d(${shipX}px, ${shipY}px, 0) translate(-50%, -50%)`;
  }
  if (onKey) window.removeEventListener('keydown', onKey);
  if (onPointer) {
    window.removeEventListener('pointermove', onPointer);
    window.removeEventListener('pointerdown', onPointer);
  }
  if (onTouch) window.removeEventListener('touchmove', onTouch);
  if (onResize) window.removeEventListener('resize', onResize);
  onKey = null;
  onPointer = null;
  onTouch = null;
  onResize = null;
  source = null;
}

function startFlight(button: HTMLButtonElement, origin: { x: number; y: number }) {
  if (playing) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  playing = true;
  source = button;
  button.blur();
  resetWorld();
  over = false;
  placed = true;
  shipX = origin.x;
  shipY = origin.y;
  pointerX = origin.x;
  pointerY = origin.y;
  spawnRock(26, undefined, true);

  const canvas = document.createElement('canvas');
  canvas.className = 'flight-field';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.append(canvas);
  field = canvas;
  fitCanvas();

  const bar = document.createElement('div');
  bar.className = 'flight-hud';
  const time = document.createElement('span');
  time.textContent = clockLabel(0);
  const quit = document.createElement('button');
  quit.type = 'button';
  quit.className = 'flight-close';
  quit.textContent = button.dataset.close ?? '';
  quit.addEventListener('click', () => stopFlight());
  bar.append(time, quit);
  document.body.append(bar);
  hud = bar;
  clock = time;

  const dot = document.querySelector('[data-cursor]');
  if (dot instanceof HTMLElement) {
    dot.classList.remove('is-hot');
    dot.classList.add('is-on', 'is-ship');
  }

  document.documentElement.classList.add('is-flying');

  onPointer = (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest('.flight-hud, .flight-card')) return;
    if (event.pointerType === 'touch' && event.buttons === 0) return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    placed = true;
  };
  onTouch = (event) => {
    if (playing) event.preventDefault();
  };
  onKey = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      stopFlight();
      return;
    }
    if (event.key === ' ' && playing && !over) event.preventDefault();
  };
  onResize = () => fitCanvas();

  window.addEventListener('pointermove', onPointer);
  window.addEventListener('pointerdown', onPointer);
  window.addEventListener('touchmove', onTouch, { passive: false });
  window.addEventListener('keydown', onKey);
  window.addEventListener('resize', onResize);

  last = performance.now();
  raf = requestAnimationFrame(frame);
}

export function bindFlight() {
  const button = document.querySelector('[data-flight]');
  if (!(button instanceof HTMLButtonElement) || button.dataset.bound === 'true') return;
  button.dataset.bound = 'true';
  button.addEventListener('click', (event) => {
    if (playing) stopFlight();
    else startFlight(button, { x: event.clientX, y: event.clientY });
  });
}

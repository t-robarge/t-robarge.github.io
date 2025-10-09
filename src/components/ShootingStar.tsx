// src/components/ShootingStar.tsx
import { useEffect, useMemo, useRef, useState } from "react";

type StarSpec = { id:number; dur:number; len:number; thick:number; left:number; top:number };

export default function ShootingStarsField({
  burstCount = 10,
  tricklePerMinute = 18,
  maxConcurrent = 18,
  directionDeg = 90,                       // 90 = straight down
  durationRange = [1200, 2200] as [number, number],
  trailRange = [140, 240] as [number, number],
  thicknessRange = [1.5, 2.5] as [number, number],
  startBandVw = [-100, 200] as [number, number],
  startTopVhRange = [-16, -10] as [number, number],
  z = 5,
}: {
  burstCount?: number; tricklePerMinute?: number; maxConcurrent?: number;
  directionDeg?: number; durationRange?: [number, number];
  trailRange?: [number, number]; thicknessRange?: [number, number];
  startBandVw?: [number, number]; startTopVhRange?: [number, number]; z?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const [stars, setStars] = useState<StarSpec[]>([]);
  const idRef = useRef(0);

  const spawn = (n = 1) => {
    if (reduced) return;
    setStars(curr => {
      const out = [...curr];
      for (let i = 0; i < n && out.length < maxConcurrent; i++) out.push(makeStar());
      return out;
    });
  };

  useEffect(() => {
    const id = setTimeout(() => spawn(burstCount), 200);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reduced || tricklePerMinute <= 0) return;
    const avgMs = 60000 / tricklePerMinute;
    let alive = true;
    const tick = () => {
      if (!alive) return;
      spawn(randInt(1, 2));
      timer = setTimeout(tick, avgMs * rand(0.6, 1.4));
    };
    let timer = setTimeout(tick, avgMs * rand(0.5, 1.2));
    return () => { alive = false; clearTimeout(timer); };
  }, [reduced, tricklePerMinute]);

  const handleEnd = (id: number, dur: number) => {
    const t = setTimeout(() => setStars(curr => curr.filter(s => s.id !== id)), dur + 150);
    return () => clearTimeout(t);
  };

  const makeStar = () => {
    const id = ++idRef.current;
    const dur = pick(durationRange);
    const len = pick(trailRange);
    const thick = pick(thicknessRange);
    const left = rand(startBandVw[0], startBandVw[1]);
    const top = rand(startTopVhRange[0], startTopVhRange[1]);
    return { id, dur, len, thick, left, top };
  };

  const layerStyle = useMemo<React.CSSProperties>(() => ({
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: z,
  }), [z]);

  if (reduced) return null;

  return (
    <div style={layerStyle} aria-hidden>
      {stars.map(s => (
        <StarWrap key={s.id} spec={s} onEnd={handleEnd(s.id, s.dur)}>
          <StarVisual len={s.len} thick={s.thick} directionDeg={directionDeg} />
        </StarWrap>
      ))}

      <style>{`
        @media (prefers-reduced-motion: reduce) { .ss-star, .ss-wrap { display: none; } }
        @keyframes ss-fall {
          0%   { opacity: 0; transform: translate3d(0, 0, 0); filter: blur(0.2px); }
          10%  { opacity: 1; }
          85%  { opacity: 1; filter: blur(0.6px); }
          100% { opacity: 0; transform: translate3d(0, 130vh, 0); filter: blur(1px); }
        }
      `}</style>
    </div>
  );

  function pick([a, b]: [number, number]) { return rand(a, b); }
  function rand(min: number, max: number) { return Math.random() * (max - min) + min; }
  function randInt(min: number, max: number) { return Math.floor(rand(min, max + 1)); }
}

function StarWrap({
  spec: { dur, left, top }, onEnd, children,
}: { spec: StarSpec; onEnd: () => void; children: React.ReactNode }) {
  const style = useMemo<React.CSSProperties>(() => ({
    position: "absolute",
    top: `${top}vh`,
    left: `${left}vw`,
    animation: `ss-fall ${dur}ms ease-out forwards`,
    animationDelay: `${Math.random() * 180}ms`,
    willChange: "transform, opacity, filter",
    pointerEvents: "none",
  }), [dur, left, top]);

  useEffect(onEnd, [onEnd]);
  return <div className="ss-wrap" style={style}>{children}</div>;
}

function StarVisual({ len, thick, directionDeg }: { len: number; thick: number; directionDeg: number }) {
  // Purples: 500 and 300
  const PURPLE = "168,85,247";   // #a855f7
  const PURPLE_LIGHT = "192,132,252"; // #c084fc

  const style = useMemo<React.CSSProperties>(() => ({
    width: `${len}px`,
    height: `${thick}px`,
    borderRadius: 999,
    // Make the trail purple (keep or remove the white core as you like)
    background: `linear-gradient(
      90deg,
      rgba(${PURPLE}, 0) 0%,
      rgba(${PURPLE}, 0.9) 55%,
      rgba(${PURPLE_LIGHT}, 1) 80%,
      rgba(${PURPLE}, 0) 100%
    )`,
    // Purple glow/aura
    boxShadow: `
      0 0 6px 2px rgba(${PURPLE_LIGHT}, 0.6),
      0 0 18px 6px rgba(${PURPLE}, 0.35)
    `,
    transform: `rotate(${directionDeg}deg)`,
    mixBlendMode: "screen",
  }), [len, thick, directionDeg]);

  return <div className="ss-star" style={style} />;
}

function usePrefersReducedMotion() {
  const [reduced, set] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => set(m.matches);
    on();
    m.addEventListener?.("change", on);
    return () => m.removeEventListener?.("change", on);
  }, []);
  return reduced;
}

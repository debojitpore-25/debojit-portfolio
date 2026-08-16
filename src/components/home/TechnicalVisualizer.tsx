import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Cpu, ShieldCheck } from 'lucide-react';

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
  pulsePhase: number;
  label?: string;
  isPrimary?: boolean;
}

export const TechnicalVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; isInside: boolean }>({
    x: -1000,
    y: -1000,
    isInside: false,
  });
  const [activeTelemetry, setActiveTelemetry] = useState<string>('NODE_ENGINE_ONLINE');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Handle high DPI
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Intersection observer to pause when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Node generation grounded in real stack
    const keyLabels = ['C', 'Python', 'HTML', 'CSS', 'Git', 'GitHub', 'VS Code', 'Logic'];
    const nodes: NodePoint[] = [];
    const nodeCount = 24;

    const initNodes = () => {
      nodes.length = 0;
      const width = canvas.parentElement?.clientWidth || 500;
      const height = canvas.parentElement?.clientHeight || 300;

      for (let i = 0; i < nodeCount; i++) {
        const isPrimary = i < keyLabels.length;
        const x = Math.random() * (width - 60) + 30;
        const y = Math.random() * (height - 60) + 30;
        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: isPrimary ? 3.5 : 2,
          baseX: x,
          baseY: y,
          pulsePhase: Math.random() * Math.PI * 2,
          label: isPrimary ? keyLabels[i] : undefined,
          isPrimary,
        });
      }
    };

    initNodes();

    // Mouse listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isInside: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isInside = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    let lastTime = performance.now();
    const maxDistance = 100;

    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (isVisible) {
        const width = canvas.parentElement?.clientWidth || 500;
        const height = canvas.parentElement?.clientHeight || 300;

        ctx.clearRect(0, 0, width, height);

        // Update positions & physics
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          node.pulsePhase += delta * 2;

          node.x += node.vx;
          node.y += node.vy;

          // Bounds bounce
          if (node.x <= 20 || node.x >= width - 20) node.vx *= -1;
          if (node.y <= 20 || node.y >= height - 20) node.vy *= -1;

          // Mouse proximity reaction
          if (mouseRef.current.isInside) {
            const dx = node.x - mouseRef.current.x;
            const dy = node.y - mouseRef.current.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 90 && dist > 0) {
              const force = (90 - dist) / 90;
              node.x += (dx / dist) * force * 1.2;
              node.y += (dy / dist) * force * 1.2;
            }
          }
        }

        // Draw connecting edges
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const n1 = nodes[i];
            const n2 = nodes[j];
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const dist = Math.hypot(dx, dy);

            if (dist < maxDistance) {
              const alpha = (1 - dist / maxDistance) * 0.2;
              ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.stroke();
            }
          }
        }

        // Draw Nodes
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;

          if (node.isPrimary) {
            ctx.fillStyle = `rgba(99, 102, 241, ${0.1 + pulse * 0.15})`;
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius + 5 + pulse * 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#818CF8';
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fill();

            if (node.label) {
              ctx.font = '500 10px "JetBrains Mono", monospace';
              ctx.fillStyle = 'rgba(243, 244, 248, 0.75)';
              ctx.fillText(node.label, node.x + 8, node.y + 3);
            }
          } else {
            ctx.fillStyle = 'rgba(157, 166, 185, 0.35)';
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const telemetryItems = [
      'SYS_NODE: C_STRUCTS // ACTIVE',
      'SYS_NODE: PYTHON_SIM // ACTIVE',
      'DEV_STATUS: SEEKING_INTERNSHIP',
      'WORKSPACE: VS_CODE // GIT_ACTIVE',
    ];
    let telIdx = 0;
    const interval = setInterval(() => {
      telIdx = (telIdx + 1) % telemetryItems.length;
      setActiveTelemetry(telemetryItems[telIdx]);
    }, 4000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[260px] sm:h-[300px] md:h-[320px] rounded-2xl border border-white/10 bg-background-subtle/80 backdrop-blur-xl overflow-hidden shadow-xl flex flex-col justify-between"
    >
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.08] bg-background-surface/60 font-mono text-xs text-text-muted select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/40 border border-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-amber-500/40 border border-amber-500/60" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/40 border border-emerald-500/60" />
          </div>
          <span className="ml-1 text-text-secondary font-medium tracking-wider text-[11px]">debojit.topology</span>
        </div>
        <div className="flex items-center gap-2 text-brand-400">
          <Cpu className="w-3.5 h-3.5 animate-pulse" />
          <span className="hidden sm:inline text-[10px]">{activeTelemetry}</span>
        </div>
      </div>

      {/* Canvas Layer */}
      <div className="relative flex-1 w-full h-full cursor-crosshair">
        <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      </div>

      {/* Bottom telemetry overlay */}
      <div className="px-4 py-2 border-t border-white/[0.06] bg-background-surface/40 flex items-center justify-between font-mono text-[10px] text-text-muted">
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3 text-text-muted" />
          <span className="text-text-secondary">SYSTEM: ACTIVE</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-400">
          <ShieldCheck className="w-3 h-3" />
          <span>BCA_FOUNDATIONS</span>
        </div>
      </div>
    </div>
  );
};

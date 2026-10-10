"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

type Line = { kind: "cmd" | "out"; text: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: `${profile.name.toLowerCase().replace(/\s+/g, "")} — ${profile.role.toLowerCase()}` },
  { kind: "cmd", text: "cat ./stack.txt" },
  { kind: "out", text: "backend:  node.js · laravel · rest · queues · auth" },
  { kind: "out", text: "realtime: websockets · webrtc · livekit · reverb" },
  { kind: "out", text: "frontend: next.js · react · typescript · tailwind" },
  { kind: "out", text: "data:     mysql · docker · caddy · linux" },
  { kind: "cmd", text: "./open_to_work.sh" },
  { kind: "out", text: `> ${profile.availability}` },
  { kind: "out", text: `> contact: ${profile.email}` },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function TerminalHero() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState(""); // command currently being typed
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      await sleep(0); // defer state updates out of the effect body

      if (prefersReducedMotion()) {
        setLines(SCRIPT);
        setFinished(true);
        return;
      }

      while (!cancelled) {
        setLines([]);
        setFinished(false);
        setTyping("");

        for (const line of SCRIPT) {
          if (cancelled) return;

          if (line.kind === "cmd") {
            for (let i = 1; i <= line.text.length; i++) {
              if (cancelled) return;
              setTyping(line.text.slice(0, i));
              await sleep(55);
            }
            await sleep(350);
            if (cancelled) return;
            setLines((prev) => [...prev, line]);
            setTyping("");
            await sleep(250);
          } else {
            await sleep(220);
            if (cancelled) return;
            setLines((prev) => [...prev, line]);
          }
        }

        setFinished(true);
        await sleep(9000); // pause before replaying
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-green-500/30 bg-black/70 shadow-[0_0_50px_rgba(34,197,94,0.12)]">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-green-500/20 bg-green-500/5 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-green-500/70">
          visitor@portfolio: ~
        </span>
      </div>

      {/* terminal body */}
      <div className="scanlines min-h-[320px] p-5 font-mono text-sm leading-relaxed sm:min-h-[340px]">
        {lines.map((line, i) =>
          line.kind === "cmd" ? (
            <p key={i} className="mt-3 first:mt-0">
              <span className="text-green-500/60">visitor@portfolio</span>
              <span className="text-zinc-500">:</span>
              <span className="text-sky-400/70">~</span>
              <span className="text-zinc-500"> $ </span>
              <span className="text-green-400 text-glow">{line.text}</span>
            </p>
          ) : (
            <p key={i} className="whitespace-pre-wrap text-green-300/90">
              {line.text}
            </p>
          )
        )}

        {/* currently typing command */}
        {(typing || !finished) && (
          <p className={lines.length === 0 && !typing ? "hidden" : "mt-3"}>
            <span className="text-green-500/60">visitor@portfolio</span>
            <span className="text-zinc-500">:</span>
            <span className="text-sky-400/70">~</span>
            <span className="text-zinc-500"> $ </span>
            <span className="text-green-400 text-glow">{typing}</span>
            <span className="caret" />
          </p>
        )}

        {/* idle cursor at fresh prompt */}
        {finished && (
          <p className="mt-3">
            <span className="text-green-500/60">visitor@portfolio</span>
            <span className="text-zinc-500">:</span>
            <span className="text-sky-400/70">~</span>
            <span className="text-zinc-500"> $ </span>
            <span className="caret" />
          </p>
        )}
      </div>
    </div>
  );
}

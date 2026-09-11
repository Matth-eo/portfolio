"use client";

import { useLayoutEffect, useRef, useState } from "react";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"pending" | "loading" | "complete" | "exiting" | "done">("pending");
  const content = useRef<HTMLDivElement>(null);
  const savedOverflow = useRef<string | null>(null);

  useLayoutEffect(() => {
    // Hydration is the readiness signal: never wait on a timer or unrelated assets.
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) {
      setPhase("done");
      return;
    }
    const node = content.current;
    const previousOverflow = document.body.style.overflow;
    savedOverflow.current = previousOverflow;
    if (node) node.inert = true;
    document.body.style.overflow = "hidden";
    setPhase("loading");
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => setPhase("complete"));
    });
    const onPreferenceChange = () => {
      if (preference.matches) setPhase("done");
    };
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      preference.removeEventListener("change", onPreferenceChange);
      document.body.style.overflow = previousOverflow;
      if (node) node.inert = false;
    };
  }, []);

  useLayoutEffect(() => {
    if (phase === "done") {
      if (content.current) content.current.inert = false;
      if (savedOverflow.current !== null) document.body.style.overflow = savedOverflow.current;
    }
  }, [phase]);

  return (
    <div data-loader={phase}>
      <noscript>
        <style>{`.page-loader { display: none !important; } [data-loader="pending"] > .page-content { visibility: visible; }`}</style>
      </noscript>
      {phase !== "done" && (
        <div
          className="page-loader"
          role="status"
          aria-label="Loading portfolio"
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget && phase === "exiting") setPhase("done");
          }}
        >
          <div className="loader-content" aria-hidden="true">
            <div className="loader-mark">&lt;m /&gt;</div>
            <p className="loader-label">LOADING...</p>
            <div className="loader-track">
              <span
                className="loader-progress"
                onAnimationEnd={(event) => {
                  if (event.animationName === "loader-complete") setPhase("exiting");
                }}
              />
            </div>
          </div>
        </div>
      )}
      <div ref={content} className="page-content">{children}</div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = element.current;
    if (
      !node ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    node.dataset.pending = "true";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          delete node.dataset.pending;
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 40px 0px", threshold: 0 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      delete node.dataset.pending;
    };
  }, []);
  return (
    <div ref={element} className="reveal">
      {children}
    </div>
  );
}

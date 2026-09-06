"use client";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <nav className="container nav-inner" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            m.
          </span>{" "}
          Matt
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
        <div
          id="navigation-links"
          className={`nav-links ${open ? "open" : ""}`}
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#tech" onClick={() => setOpen(false)}>
            Stack
          </a>
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk <FiArrowUpRight className="inline ml-2" />
          </a>
        </div>
      </nav>
    </header>
  );
}

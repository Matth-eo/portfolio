export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Matt</span>
        <span>
          Built with Next.js & Tailwind CSS · Always learning, always building.
        </span>
      </div>
    </footer>
  );
}

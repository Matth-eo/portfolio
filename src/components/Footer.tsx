// src/components/Footer/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-neutral-900 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Matt Navarro — Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}

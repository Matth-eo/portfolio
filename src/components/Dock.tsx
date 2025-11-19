"use client";

interface DockItem {
  icon: React.ReactNode;
  label: string;
}

interface DockProps {
  items: DockItem[];
  className?: string;
}

export default function Dock({ items, className = "" }: DockProps) {
  return (
    <div className={`flex gap-6 ${className}`}>
      {items.map((item: DockItem, index: number) => (
        <div key={index} className="group flex flex-col items-center gap-3">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-neutral-300 bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
            {item.icon}
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

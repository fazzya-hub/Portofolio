import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 text-sm text-slate-500 sm:flex-row">
        <span>&copy; 2026 Faraz Thifal</span>
        <span className="hidden sm:inline">&middot;</span>
        <span className="flex items-center gap-1.5">
          Dibuat dengan  React
        </span>
      </div>
    </footer>
  );
}

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-slate-500">
        <span>&copy; 2026 Faraz Thifal</span>
        <span className="hidden sm:inline">&middot;</span>
        <span className="flex items-center gap-1.5">
          using React
        </span>
      </div>
    </footer>
  );
}

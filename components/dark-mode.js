"use client";
import useDarkMode from "@/hooks/use-dark-mode";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="rounded px-3 py-1 border border-gray-500 text-sm"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

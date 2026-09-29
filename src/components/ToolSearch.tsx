"use client";

import { useEffect, useRef, useState } from "react";

export interface SearchableTool {
  id: string;
  label: string;
  categoryLabel: string;
  icon: string;
}

export default function ToolSearch({
  locale,
  tools,
  placeholder,
  noResultsText,
}: {
  locale: string;
  tools: SearchableTool[];
  placeholder: string;
  noResultsText: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const q = query.trim().toLowerCase();
  const results = q
    ? tools.filter((t) => t.label.toLowerCase().includes(q)).slice(0, 8)
    : [];

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        className="w-full rounded-full border-0 bg-white px-5 py-3 text-sm text-gray-900 shadow-lg outline-none ring-2 ring-transparent placeholder:text-gray-400 focus:ring-indigo-400"
      />
      {open && q && (
        <div className="absolute left-0 right-0 z-50 mt-2 max-h-80 overflow-y-auto rounded-lg border bg-white text-left shadow-xl">
          {results.length > 0 ? (
            <ul>
              {results.map((r) => (
                <li key={r.id}>
                  <a
                    href={`/${locale}/tool/${r.id}`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-800 hover:bg-indigo-50"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-lg">{r.icon}</span>
                    <span className="flex-1">
                      <span className="block font-medium">{r.label}</span>
                      <span className="block text-xs text-muted-foreground">
                        {r.categoryLabel}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-muted-foreground">
              {noResultsText}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

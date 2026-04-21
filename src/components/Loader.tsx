"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#f6f2eb] dark:bg-[#111111] flex items-center justify-center z-[9999]">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

        <p className="tracking-[0.4em] uppercase text-sm">
          Alvin.
        </p>
      </div>
    </div>
  );
}
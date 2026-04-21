"use client";

type Props = {
  language: string;
  setLanguage: (lang: string) => void;
};

export default function LanguageToggle({
  language,
  setLanguage,
}: Props) {
  return (
    <div className="flex border rounded-full overflow-hidden">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-sm ${
          language === "en"
            ? "bg-blue-600 text-white"
            : ""
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("id")}
        className={`px-3 py-1 text-sm ${
          language === "id"
            ? "bg-blue-600 text-white"
            : ""
        }`}
      >
        ID
      </button>
    </div>
  );
}

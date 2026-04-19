import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

type BackButtonProps = {
  fallbackTo?: string;
  className?: string;
};

export default function BackButton({ fallbackTo = "/", className = "" }: BackButtonProps) {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    setLocation(fallbackTo);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Zurück"
      className={`inline-flex min-h-10 items-center gap-2 px-1 text-sm font-medium text-[oklch(0.32_0.07_155)] hover:underline ${className}`}
    >
      <ArrowLeft className="h-4 w-4 shrink-0" />
      <span>Zurück</span>
    </button>
  );
}
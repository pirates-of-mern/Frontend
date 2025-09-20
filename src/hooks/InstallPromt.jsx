import { useEffect, useState } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choice) => {
      console.log(`User choice: ${choice.outcome}`);
      setDeferredPrompt(null);
    });
  };

  if (!deferredPrompt) return null;

  return (
    <button
      onClick={handleInstallClick}
      aria-label="Install the app"
      style={{
        position: "fixed",
        top: 16,
        right: 116,
        padding: "6px 12px",
        fontSize: "14px",
        borderRadius: "20px",
        background: "rgba(34,197,94,0.15)", // Tailwind green-500 with 15% opacity
        color: "#22c55e", // Tailwind green-500
        border: "1.5px solid #22c55e",
        cursor: "pointer",
        zIndex: 1000,
        userSelect: "none",
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(34,197,94,0.3)";
        e.currentTarget.style.color = "#16a34a"; // Tailwind green-600
        e.currentTarget.style.borderColor = "#16a34a";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(34,197,94,0.15)";
        e.currentTarget.style.color = "#22c55e";
        e.currentTarget.style.borderColor = "#22c55e";
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = "2px solid #16a34a";
        e.currentTarget.style.outlineOffset = "2px";
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = "none";
      }}
    >
      📲 Install
    </button>
  );
};

export default InstallPrompt;

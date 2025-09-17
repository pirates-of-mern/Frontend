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
        top: 28,
        right: 24,
        padding: "10px 22px",
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "30px",
        background: "linear-gradient(90deg, #4f46e5, #3b82f6)", // Indigo to blue gradient
        color: "#fff",
        border: "none",
        boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
        cursor: "pointer",
        zIndex: 1000,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(59, 130, 246, 0.4)";
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = "2px solid #3b82f6";
        e.currentTarget.style.outlineOffset = "2px";
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = "none";
      }}
    >
      📲 <span style={{ marginLeft: 8 }}>Install App</span>
    </button>
  );
};

export default InstallPrompt;

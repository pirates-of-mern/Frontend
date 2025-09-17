import { useEffect, useState } from 'react'

const InstallPromt = () => {

    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        });
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choice) => {
                console.log(`User choice: ${choice.outcome}`);
                setDeferredPrompt(null);
            });
        }   
    };



  return (
    deferredPrompt && (
      <button
        onClick={handleInstallClick}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "8px 16px",
          fontSize: "14px",
          borderRadius: "8px",
          background: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        📲 Install App
      </button>
    )
  );
}

export default InstallPromt

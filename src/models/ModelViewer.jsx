import React, { useEffect, useRef, useState } from "react";

const FullscreenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 3H5a2 2 0 00-2 2v3m0 8v3a2 2 0 002 2h3m8-16h3a2 2 0 012 2v3m0 8v3a2 2 0 01-2 2h-3"
    />
  </svg>
);

const ExitFullscreenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ModelViewer = ({
  src,
  iosSrc,
  alt,
  ar = true,
  arModes = "webxr scene-viewer quick-look",
  autoRotate = true,
  cameraControls = true,
  exposure = 1,
  shadowIntensity = 1,
  environmentImage = "neutral",
}) => {
  const modelRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (!window.customElements.get("model-viewer")) {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  useEffect(() => {
    const onFullScreenChange = () => {
      setIsFullScreen(
        document.fullscreenElement === modelRef.current ||
          document.fullscreenElement === document.body
      );
    };

    document.addEventListener("fullscreenchange", onFullScreenChange);
    document.addEventListener("webkitfullscreenchange", onFullScreenChange);
    document.addEventListener("mozfullscreenchange", onFullScreenChange);
    document.addEventListener("MSFullscreenChange", onFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        onFullScreenChange
      );
      document.removeEventListener("mozfullscreenchange", onFullScreenChange);
      document.removeEventListener("MSFullscreenChange", onFullScreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (modelRef.current.requestFullscreen) {
        modelRef.current.requestFullscreen();
      } else if (modelRef.current.webkitRequestFullscreen) {
        modelRef.current.webkitRequestFullscreen();
      } else if (modelRef.current.mozRequestFullScreen) {
        modelRef.current.mozRequestFullScreen();
      } else if (modelRef.current.msRequestFullscreen) {
        modelRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div className="text-center pt-2 bg-black min-h-screen flex flex-col items-center relative">
      <model-viewer
        ref={modelRef}
        src={src}
        ios-src={iosSrc || src}
        alt={alt}
        ar={ar}
        ar-modes={arModes}
        camera-controls={cameraControls}
        auto-rotate={autoRotate}
        exposure={exposure}
        shadow-intensity={shadowIntensity}
        environment-image={environmentImage}
        className="w-[90vw] max-w-[1000px] h-[70vh] rounded-lg shadow-cyan-500/50 border border-gray-800"
        style={{
          background: "radial-gradient(circle at center, #1a1a1a, #000)",
        }}
      ></model-viewer>

      <button
        onClick={toggleFullScreen}
        aria-label={isFullScreen ? "Exit Fullscreen" : "View Fullscreen"}
        className="mt-5 flex items-center justify-center gap-2 px-6 py-2 bg-cyan-400 text-black font-semibold rounded-md hover:bg-cyan-500 transition mx-auto"
      >
        {isFullScreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
        {isFullScreen ? "Exit Fullscreen" : "View Fullscreen"}
      </button>
    </div>
  );
};

export default ModelViewer;

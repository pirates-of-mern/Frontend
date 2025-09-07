// File: src/pages/LandingPage.jsx
// React + Tailwind implementation of the landing image you shared.
// Put 3 hero images into: src/assets/hero1.jpg, hero2.jpg, hero3.jpg
// Recommended font: Playfair Display (or any elegant serif) — add to index.html or via tailwind config.

import React from 'react';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-50 relative overflow-hidden font-sans">

      {/* Top Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-6">
        {/* left: hamburger */}
        <button className="p-3 rounded-xl bg-white/80 shadow-md backdrop-blur-sm">
          <svg width="22" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="2" rx="1" fill="#0f172a" />
            <rect x="2" y="11" width="20" height="2" rx="1" fill="#0f172a" />
            <rect x="2" y="18" width="20" height="2" rx="1" fill="#0f172a" />
          </svg>
        </button>

        {/* center: search */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-2xl px-3 py-2 rounded-full bg-white/90 shadow-lg flex items-center gap-3">
            <input
              aria-label="search"
              placeholder="Search here"
              className="flex-1 bg-transparent outline-none placeholder:italic text-sm"
            />
            <button className="p-2 rounded-full bg-white shadow-inner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-4.35-4.35" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="5" stroke="#0f172a" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* right: about */}
        <div className="flex-shrink-0">
          <button className="px-6 py-2 rounded-full bg-white/90 shadow-md font-medium">ABOUT US</button>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 py-8">

        {/* Left column: Title + CTA */}
        <section className="w-full md:w-1/2 py-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-emerald-700 leading-tight">
            BHARAT
            <br />
            SANSKRITI
            <br />
            ATLAS
          </h1>

          {/* decorative dots like the image */}
          <div className="mt-4 flex items-center gap-2">
            <div className="grid grid-cols-6 gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="w-1 h-1 bg-emerald-700 rounded-full" />
              ))}
            </div>
          </div>

          <button className="mt-8 inline-block bg-emerald-500 text-white px-6 py-2 rounded-full shadow-xl font-semibold">Start</button>

          <p className="mt-8 text-lg sm:text-xl text-slate-700 max-w-md">
            Mapping India’s
            <br />
            Timeless Traditions"
          </p>
        </section>

        {/* Right column: stacked tilted image cards + map-pin box */}
        <section className="w-full md:w-1/2 relative flex justify-end py-6">

          <div className="relative w-full max-w-lg h-[420px]">
            {/* Card group: using transform rotations + clip-path to mimic the slanted rounded cards */}

            <div className="absolute top-6 right-0 transform rotate-6 origin-top-right shadow-2xl rounded-2xl overflow-hidden" style={{ width: 220, height: 320, clipPath: 'polygon(12% 0, 100% 0, 88% 100%, 0 100%)' }}>
              <img src={hero1} alt="hero 1" className="w-full h-full object-cover" />
            </div>

            <div className="absolute top-28 right-12 transform -rotate-3 origin-center shadow-2xl rounded-2xl overflow-hidden" style={{ width: 220, height: 320, clipPath: 'polygon(6% 0, 100% 0, 90% 100%, 0 100%)' }}>
              <img src={hero2} alt="hero 2" className="w-full h-full object-cover" />
            </div>

            <div className="absolute top-48 right-28 transform rotate-3 origin-bottom-right shadow-2xl rounded-2xl overflow-hidden" style={{ width: 220, height: 320, clipPath: 'polygon(10% 0, 100% 0, 92% 100%, 0 100%)' }}>
              <img src={hero3} alt="hero 3" className="w-full h-full object-cover" />
            </div>

            {/* Green rounded square with location pin (foreground) */}
            <div className="absolute -bottom-6 right-8 w-24 h-24 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-2xl">
              {/* simple pin icon */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="#fff" />
                <path d="M12 2C9.243 2 7 4.243 7 7c0 4.418 5 11 5 11s5-6.582 5-11c0-2.757-2.243-5-5-5z" fill="#fff" />
              </svg>
            </div>

          </div>

        </section>

      </main>

      {/* Decorative shapes (background) */}
      {/* <div className="pointer-events-none absolute -left-16 -top-16 w-48 h-48 bg-emerald-200 rounded-full opacity-80 blur-sm transform rotate-12" /> */}
      <div className="pointer-events-none absolute -right-28 -bottom-20 w-64 h-64 bg-emerald-300 rounded-full opacity-70 blur-sm transform rotate-12" />

    </div>
  );
}


/*
  --- NOTES & USAGE ---
  1) Assets:
     - Put three images at: src/assets/hero1.jpg, src/assets/hero2.jpg, src/assets/hero3.jpg
     - You can replace the images with the screenshot crops you provided for a closer match.

  2) Fonts:
     - For a more accurate look use a serif for the big title (eg. Google Font: Playfair Display).
     - Add in public/index.html: <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"> and in tailwind config extend the fontFamily.

  3) Tailwind:
     - This uses standard Tailwind v3 classes. If you don't have tailwind set up yet, follow the official setup for Vite + React + Tailwind.

  4) GitHub Pages deployment notes:
     - If deploying to GitHub Pages (repo: sih-frontend) either use HashRouter or set BrowserRouter basename:
         <BrowserRouter basename="/sih-frontend"> ... </BrowserRouter>
       and in vite.config.js set: base: '/sih-frontend/'

  5) Responsiveness:
     - The layout stacks on small screens (mobile-first). You can tweak sizes, rotations, and clip-paths to better match the screenshot.

  6) Want a pixel-perfect replica?
     - I can further tune clip-path values, rotations, spacing and add CTA hover animations if you want — tell me which part you want exact (title spacing, card slant, color shades, etc.).
*/

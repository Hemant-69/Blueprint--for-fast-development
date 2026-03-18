import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      const transitionTimer = setTimeout(onDone, 600)
      return () => clearTimeout(transitionTimer)
    }, 2200)

    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-all duration-700 ${
        fadeOut ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />

      {/* Logo */}
      <div className="relative mb-6 animate-fadeIn">
        <img
          src="logo.png"
          alt="SIET Logo"
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* College Name */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-wide text-center">
        State Institute of Engineering & Technology
      </h1>

      <p className="text-sm text-primary font-medium mt-1 tracking-wide">
        Nilokheri, Karnal
      </p>

      {/* Motto */}
      <p className="text-xs text-gray-500 mt-2 italic tracking-wider">
        "Empowering Innovation Through Education"
      </p>

      {/* Divider */}
      <div className="w-16 h-[2px] bg-primary mt-4 mb-6 rounded-full" />

      {/* Loader Line */}
      <div className="w-48 h-[3px] bg-gray-200 rounded overflow-hidden">
        <div className="h-full bg-primary animate-loadingBar" />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-xs text-gray-400 tracking-widest">
        PLEASE WAIT...
      </p>

      {/* Animations */}
      <style>{`
        @keyframes loadingBar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }

        .animate-loadingBar {
          animation: loadingBar 2.2s ease-in-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
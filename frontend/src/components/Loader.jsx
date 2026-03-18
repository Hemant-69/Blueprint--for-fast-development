import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Show loader for at least 2 seconds, then fade out
    const timer = setTimeout(() => {
      setFadeOut(true)
      // Wait for fade-out animation to finish before calling onDone
      const transitionTimer = setTimeout(onDone, 600)
      return () => clearTimeout(transitionTimer)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        transition: 'opacity 0.6s ease, visibility 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? 'hidden' : 'visible',
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        borderRadius: '50%', top: '10%', left: '15%',
        animation: 'pulse-slow 4s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        borderRadius: '50%', bottom: '15%', right: '20%',
        animation: 'pulse-slow 4s ease-in-out infinite 2s',
        pointerEvents: 'none',
      }} />

      {/* Logo / Brand mark */}
      <div style={{ position: 'relative', marginBottom: 32 }}>
       <img className='size-50' src="logo.png" alt="SIET LOGO" />
      </div>

      {/* Brand name */}
      <h1 style={{
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: '0.15em',
        background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: 8,
        fontFamily: "'Inter', sans-serif",
      }}>
        SIET NILOKHERI
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: 13,
        color: 'rgba(148,163,184,0.7)',
        letterSpacing: '0.2em',
        fontFamily: "'Inter', sans-serif",
        marginBottom: 40,
      }}>
        LOADING...
      </p>

      {/* Progress bar */}
      <div style={{
        width: 200, height: 2,
        background: 'rgba(99,102,241,0.15)',
        borderRadius: 2,
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
          animation: 'progress 2s ease-in-out forwards',
          borderRadius: 2,
        }} />
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 12px rgba(99,102,241,0.8); }
          50% { box-shadow: 0 0 24px rgba(99,102,241,1), 0 0 40px rgba(6,182,212,0.5); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        @keyframes progress {
          0% { width: 0%; }
          30% { width: 40%; }
          70% { width: 75%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}

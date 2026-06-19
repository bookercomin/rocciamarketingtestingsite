'use client'

import { useEffect, useRef, useState } from 'react'

export default function TrustStatement() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState(0) // 0=hidden, 1=first line, 2=reveal second

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase(1)
          setTimeout(() => setPhase(2), 700)
        }
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-40 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#6FAEBD]/20 to-transparent" />

      <div className="text-center px-6 max-w-4xl mx-auto">
        <div className="line-reveal mb-2" style={{ display: 'block' }}>
          <span
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/80 leading-tight"
            style={{
              display: 'inline-block',
              transform: phase >= 1 ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 1s cubic-bezier(0.23, 1, 0.32, 1)',
              letterSpacing: '-0.025em',
              fontWeight: 700,
            }}
          >
            Marketing isn't about attention.
          </span>
        </div>

        <div style={{ overflow: 'hidden', display: 'block' }}>
          <span
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gradient"
            style={{
              display: 'inline-block',
              transform: phase >= 2 ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.1s',
              letterSpacing: '-0.025em',
              fontWeight: 800,
            }}
          >
            It's about trust.
          </span>
        </div>

        <div
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s',
          }}
          className="mt-8 text-[#DFDFE3]/45 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          The brands people return to aren't the loudest. They're the ones that
          earned something real — credibility, consistency, and results.
        </div>
      </div>
    </section>
  )
}

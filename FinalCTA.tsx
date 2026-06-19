'use client'

import { useEffect, useRef } from 'react'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="relative py-40 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(ellipse, #6FAEBD 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div ref={ref} className="fade-up">
          <span className="text-xs text-[#6FAEBD] tracking-widest uppercase font-medium">
            Let's Work Together
          </span>

          <h2
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mt-5 mb-6 leading-tight"
            style={{ letterSpacing: '-0.03em', fontWeight: 800 }}
          >
            Ready to Grow?
          </h2>

          <p className="text-lg text-[#DFDFE3]/45 max-w-lg mx-auto mb-12 leading-relaxed">
            Book a free 30-minute consultation. We'll audit your current marketing
            and show you exactly where the growth is hiding.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group relative px-10 py-4 rounded-full font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #427185 0%, #6FAEBD 100%)',
                boxShadow: '0 0 60px rgba(111,174,189,0.3)',
              }}
            >
              <span className="relative z-10">Book Your Free Consultation</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-xs text-[#DFDFE3]/25 tracking-wide">
            No commitment. No hard sell. Just clarity.
          </p>
        </div>
      </div>
    </section>
  )
}

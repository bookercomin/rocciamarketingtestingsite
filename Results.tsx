'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered', sub: 'Across diverse industries' },
  { value: 10, suffix: 'K+', label: 'Leads Generated', sub: 'For clients every year' },
  { value: 15, suffix: '+', label: 'Industries Served', sub: 'From local to national' },
  { value: 97, suffix: '%', label: 'Client Retention', sub: 'Because results speak' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1800
          const startTime = performance.now()
          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            start = Math.round(eased * value)
            setCount(start)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="counter-number">
      {count}
      {suffix}
    </span>
  )
}

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(ellipse, #427185 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="fade-up text-center mb-16">
          <span className="text-xs text-[#6FAEBD] tracking-widest uppercase font-medium">
            Proven Results
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl font-bold text-white mt-3"
            style={{ letterSpacing: '-0.025em' }}
          >
            Numbers that tell the story
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="fade-up text-center"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="relative p-8 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(66,113,133,0.1) 0%, rgba(13,16,48,0.5) 100%)',
                  border: '1px solid rgba(111,174,189,0.1)',
                }}
              >
                {/* Glow dot */}
                <div
                  className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#6FAEBD] opacity-60 animate-pulse"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />

                <div
                  className="font-display text-5xl md:text-6xl font-bold text-white mb-2 text-gradient"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
                <div className="text-xs text-[#DFDFE3]/35">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'

const reasons = [
  {
    number: '01',
    title: 'Custom Strategies',
    desc: 'No copy-paste playbooks. We study your market, audience, and goals before we write a single line of strategy.',
    icon: '◈',
  },
  {
    number: '02',
    title: 'Transparent Communication',
    desc: 'Weekly reports, real numbers, and a team that picks up the phone. You always know exactly what\'s happening.',
    icon: '◉',
  },
  {
    number: '03',
    title: 'Modern Technology',
    desc: 'AI automation, GEO optimization, and the latest ad tools — built into your stack from day one.',
    icon: '◎',
  },
  {
    number: '04',
    title: 'Measurable Results',
    desc: 'Every campaign is tied to real business outcomes — leads, revenue, retention — not just vanity metrics.',
    icon: '◆',
  },
]

export default function WhyRoccia() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const cards = section.querySelectorAll<HTMLElement>('.why-card')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 100)
          })
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-32 px-6" ref={sectionRef}>
      {/* Subtle top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#6FAEBD]/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="why-card fade-up mb-16 text-center">
          <span className="text-xs text-[#6FAEBD] tracking-widest uppercase font-medium">
            Why Roccia
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl font-bold text-white mt-3"
            style={{ letterSpacing: '-0.025em' }}
          >
            The difference is in
            <br />
            <span className="text-gradient">how we work.</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="why-card fade-up rounded-2xl p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-5">
                {/* Large decorative character */}
                <span
                  className="font-display text-5xl leading-none flex-shrink-0 opacity-20 text-[#6FAEBD]"
                  aria-hidden
                >
                  {r.icon}
                </span>
                <div>
                  <span className="text-xs text-[#6FAEBD]/60 tracking-widest">{r.number}</span>
                  <h3
                    className="font-display text-xl font-semibold text-white mt-1 mb-3"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-sm text-[#DFDFE3]/45 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

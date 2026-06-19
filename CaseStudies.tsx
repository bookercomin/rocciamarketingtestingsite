'use client'

import { useRef, useEffect } from 'react'

const caseStudies = [
  {
    tag: 'Home Services',
    title: 'HVAC Company Triples Inbound Leads',
    metric: '+312%',
    metricLabel: 'Lead increase in 90 days',
    desc: 'Full-funnel Meta Ads + Local SEO strategy that made them the dominant player in their market.',
    color: '#427185',
  },
  {
    tag: 'Restaurant',
    title: 'Local Restaurant Builds 40K Following',
    metric: '40K',
    metricLabel: 'Followers in 6 months',
    desc: 'Content strategy and social management that turned a hidden gem into a neighborhood institution.',
    color: '#6FAEBD',
  },
  {
    tag: 'SaaS Startup',
    title: 'B2B SaaS Cuts CAC by 40%',
    metric: '-40%',
    metricLabel: 'Customer acquisition cost',
    desc: 'AI-assisted lead qualification and workflow automation that made every ad dollar work harder.',
    color: '#427185',
  },
  {
    tag: 'E-Commerce',
    title: 'Product Brand Scales to 7 Figures',
    metric: '7-Fig',
    metricLabel: 'Annual revenue milestone',
    desc: 'GEO + Meta Ads combination driving high-intent buyers at scale — with proven ROI reporting.',
    color: '#6FAEBD',
  },
]

export default function CaseStudies() {
  const headRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Drag to scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onDown = (e: MouseEvent) => {
      isDown = true
      track.style.cursor = 'grabbing'
      startX = e.pageX - track.offsetLeft
      scrollLeft = track.scrollLeft
    }
    const onUp = () => { isDown = false; track.style.cursor = 'grab' }
    const onMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - track.offsetLeft
      const walk = (x - startX) * 1.5
      track.scrollLeft = scrollLeft - walk
    }

    track.addEventListener('mousedown', onDown)
    track.addEventListener('mouseup', onUp)
    track.addEventListener('mouseleave', onUp)
    track.addEventListener('mousemove', onMove)
    return () => {
      track.removeEventListener('mousedown', onDown)
      track.removeEventListener('mouseup', onUp)
      track.removeEventListener('mouseleave', onUp)
      track.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="fade-up mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs text-[#6FAEBD] tracking-widest uppercase font-medium">
              Case Studies
            </span>
            <h2
              className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 leading-tight"
              style={{ letterSpacing: '-0.025em' }}
            >
              Results that speak
              <br />
              <span className="text-gradient-subtle">for themselves.</span>
            </h2>
          </div>
          <a
            href="#portfolio"
            className="flex items-center gap-2 text-sm text-[#6FAEBD] hover:text-white transition-colors duration-300 flex-shrink-0"
          >
            View all work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Drag hint */}
      <p className="text-center text-xs text-[#DFDFE3]/25 mb-6 tracking-wider">DRAG TO EXPLORE</p>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-6 px-6"
        style={{
          scrollbarWidth: 'none',
          cursor: 'grab',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <style>{`.case-track::-webkit-scrollbar { display: none; }`}</style>
        <div className="flex gap-5 pl-[max(1.5rem,calc((100vw-1280px)/2))]">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.title}
              className="flex-shrink-0 w-80 md:w-96 rounded-2xl p-7 flex flex-col justify-between gap-6 group"
              style={{
                background: `linear-gradient(135deg, rgba(${cs.color === '#427185' ? '66,113,133' : '111,174,189'},0.12) 0%, rgba(13,16,48,0.7) 100%)`,
                border: '1px solid rgba(111,174,189,0.1)',
                minHeight: '340px',
                transition: 'border-color 0.4s ease, transform 0.4s ease',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(111,174,189,0.3)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(111,174,189,0.1)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <div>
                <span
                  className="inline-block text-[11px] tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                  style={{
                    background: 'rgba(111,174,189,0.1)',
                    color: '#6FAEBD',
                    border: '1px solid rgba(111,174,189,0.15)',
                  }}
                >
                  {cs.tag}
                </span>
                <h3
                  className="font-display text-xl font-semibold text-white leading-snug mb-3"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {cs.title}
                </h3>
                <p className="text-sm text-[#DFDFE3]/45 leading-relaxed">{cs.desc}</p>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div
                    className="font-display text-4xl font-bold text-gradient"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {cs.metric}
                  </div>
                  <div className="text-xs text-[#DFDFE3]/40 mt-1">{cs.metricLabel}</div>
                </div>
                <button className="flex items-center gap-2 text-sm text-[#6FAEBD] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View study
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          {/* Spacer */}
          <div className="flex-shrink-0 w-6" />
        </div>
      </div>
    </section>
  )
}

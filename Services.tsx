'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        <path d="M11 8v6M8 11h6" strokeLinecap="round"/>
      </svg>
    ),
    label: 'SEO & GEO',
    title: 'Rank Everywhere — Including AI',
    desc: 'Dominate Google search and appear in AI‑generated answers. We build the kind of organic authority that compounds over time.',
    tags: ['Google Rankings', 'AI Answers', 'Organic Traffic'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4" strokeLinecap="round"/>
        <path d="M7 8l3 3 2-2 3 3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Paid Advertising',
    title: 'Meta Ads That Actually Convert',
    desc: 'Precision‑targeted Meta campaigns built around your highest‑value customers — not just impressions.',
    tags: ['Meta Campaigns', 'Lead Generation', 'ROAS Focused'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.854V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h13a2 2 0 012 2v.146" strokeLinecap="round"/>
        <path d="M3 8l9 6 4-2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Content Creation',
    title: 'Content That Builds Authority',
    desc: 'Video editing, social content, and brand storytelling that turns your audience into advocates.',
    tags: ['Video Editing', 'Social Content', 'Brand Story'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round"/>
      </svg>
    ),
    label: 'AI Automation',
    title: 'Work Smarter with AI',
    desc: 'Lead qualification, workflow automation, and business efficiency tools that free you to focus on growth.',
    tags: ['Lead Qualifying', 'Automation', 'AI Workflows'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Social Media',
    title: 'A Presence Worth Following',
    desc: 'Consistent, on‑brand social management across platforms — posting, engaging, and growing the audience you actually want.',
    tags: ['Multi‑Platform', 'Engagement', 'Growth Strategy'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Branding & Strategy',
    title: 'Identity That Commands Respect',
    desc: 'Marketing strategy and brand identity built on data — so every decision has a reason and every dollar has a direction.',
    tags: ['Brand Identity', 'Market Strategy', 'Positioning'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible')
          }, index * 80)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="service-card fade-up rounded-2xl p-7 flex flex-col gap-5 cursor-default"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-[#6FAEBD] flex-shrink-0"
        style={{ background: 'rgba(111,174,189,0.08)' }}
      >
        {service.icon}
      </div>

      {/* Label */}
      <div>
        <span className="text-xs text-[#6FAEBD] tracking-widest uppercase font-medium">
          {service.label}
        </span>
        <h3
          className="font-display text-xl font-semibold text-white mt-1 leading-snug"
          style={{ letterSpacing: '-0.02em' }}
        >
          {service.title}
        </h3>
      </div>

      <p className="text-sm text-[#DFDFE3]/50 leading-relaxed flex-1">{service.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2.5 py-1 rounded-full border border-[#6FAEBD]/15 text-[#DFDFE3]/45"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative py-32 px-6">
      {/* Section header */}
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="fade-up mb-20">
          <span className="text-xs text-[#6FAEBD] tracking-widest uppercase font-medium">
            What We Do
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 max-w-xl leading-tight"
            style={{ letterSpacing: '-0.025em', fontWeight: 700 }}
          >
            Every channel.
            <br />
            <span className="text-gradient-subtle">One team.</span>
          </h2>
          <p className="mt-5 text-[#DFDFE3]/45 max-w-lg text-base leading-relaxed">
            We don't hand off your brand to different vendors. Strategy, execution,
            and optimization all live under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.label} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

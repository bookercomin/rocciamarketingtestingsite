'use client'

const items = [
  'SEO & GEO',
  'Meta Ads',
  'Social Media Management',
  'Content Creation',
  'AI Automation',
  'Brand Strategy',
  'Email Marketing',
  'Local SEO',
  'Lead Generation',
  'Video Editing',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="relative py-12 overflow-hidden border-y border-white/5">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10"
        style={{ background: 'linear-gradient(to right, #0D1030, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10"
        style={{ background: 'linear-gradient(to left, #0D1030, transparent)' }} />

      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6 flex-shrink-0">
            <span className="text-sm font-medium text-[#DFDFE3]/30 tracking-widest uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#6FAEBD]/30 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}

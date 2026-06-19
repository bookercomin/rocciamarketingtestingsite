'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 relative">
                <Image src="/logo.png" alt="Roccia Marketing" fill className="object-contain" />
              </div>
              <span className="font-display font-bold text-white text-lg" style={{ letterSpacing: '-0.02em' }}>
                Roccia Marketing
              </span>
            </div>
            <p className="text-sm text-[#DFDFE3]/35 max-w-xs leading-relaxed">
              Modern marketing for businesses ready to grow. Strategy, execution, and results
              — all in one team.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs text-[#DFDFE3]/50 tracking-widest uppercase mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['SEO & GEO', 'Paid Advertising', 'Social Media', 'Content Creation', 'AI Automation'].map(s => (
                <li key={s}>
                  <a href="#services" className="text-sm text-[#DFDFE3]/35 hover:text-white transition-colors duration-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs text-[#DFDFE3]/50 tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['Portfolio', 'Pricing', 'Partnership', 'Blog', 'Contact'].map(s => (
                <li key={s}>
                  <a href={`#${s.toLowerCase()}`} className="text-sm text-[#DFDFE3]/35 hover:text-white transition-colors duration-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-[#DFDFE3]/25">
            © {new Date().getFullYear()} Roccia Marketing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#DFDFE3]/25 hover:text-[#6FAEBD] transition-colors duration-300">Privacy</a>
            <a href="#" className="text-xs text-[#DFDFE3]/25 hover:text-[#6FAEBD] transition-colors duration-300">Terms</a>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {['IG', 'LI', 'X'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-[#DFDFE3]/30 hover:border-[#6FAEBD]/40 hover:text-[#6FAEBD] transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaTwitter, FaTelegram, FaGlobe, FaBolt, FaUsers, FaClock } from 'react-icons/fa'

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const calculateTimeLeft = () => {
    const difference = +new Date('2025-03-01') - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const features = [
    {
      icon: <FaBolt className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized for speed and efficiency on BSC"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Community Driven",
      description: "Built by the community, for the community"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Sustainable Growth",
      description: "Long-term vision with controlled tokenomics"
    }
  ]

  const socialLinks = [
    {
      icon: <FaTwitter className="w-6 h-6" />,
      href: "https://x.com/SylvanToken",
      label: "X (Twitter)"
    },
    {
      icon: <FaTelegram className="w-6 h-6" />,
      href: "t.me/sylvantoken",
      label: "Telegram"
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      href: "www.sylvantoken.org",
      label: "Website"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 text-teal-900 relative">
      {/* Background Watermark Pattern */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")'
        }}
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-100/30 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-teal-200/50 shadow-lg">
              <div className="flex items-center justify-center space-x-4">
                <div className="relative w-20 h-20">
                  <Image
                    src="/logo.png"
                    alt="SylvanToken Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold" style={{
                  background: 'linear-gradient(135deg, #0d9488 0%, #0e7490 50%, #059669 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  SylvanToken
                </h1>
              </div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-teal-700 max-w-2xl mx-auto">
            Revolutionizing DeFi with Sustainable Tokenomics on Binance Smart Chain
          </p>
        </header>

        <main className="max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-teal-200/50 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{
              background: 'linear-gradient(135deg, #0d9488 0%, #0e7490 50%, #059669 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Launching Soon
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/80 rounded-lg p-4 border border-teal-200/50 shadow-sm">
                    <div className="text-3xl md:text-4xl font-bold text-teal-600">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-teal-700 text-sm uppercase mt-2">
                      {unit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-teal-200/50 shadow-lg hover:border-teal-300/70 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-teal-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-teal-800">{feature.title}</h3>
                <p className="text-teal-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </main>

        <footer className="mt-16 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-800 transition-all duration-300 p-3 bg-white/60 rounded-xl hover:bg-white/80 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-teal-600">
            © 2025 SylvanToken. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}
import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <Image
        src="/logo.png"
        alt="PLAXIN COIN Logo"
        width={400}
        height={400}
        className="relative z-10 animate-float"
        priority
      />
    </div>
  )
} 
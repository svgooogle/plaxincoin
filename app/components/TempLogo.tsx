import React from 'react'

export default function TempLogo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="relative z-10 text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 animate-float">
        P
      </div>
    </div>
  )
} 
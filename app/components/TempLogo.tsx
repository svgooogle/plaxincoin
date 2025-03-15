import React from 'react'

export default function TempLogo() {
  return (
    <div className="relative w-full h-full">
      {/* Фоновое свечение */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 opacity-75 blur-3xl animate-pulse" />
      
      {/* Внутреннее свечение */}
      <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-xl" />
      
      {/* Основной круг */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 flex items-center justify-center border-4 border-purple-400/50 shadow-2xl animate-float">
        {/* Буква P */}
        <span className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
          P
        </span>
      </div>
    </div>
  )
} 
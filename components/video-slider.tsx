"use client"

import { useState, useEffect } from "react"

interface Video {
  src: string
  title: string
  location: string
}

interface VideoSliderProps {
  videos: Video[]
  autoPlay?: boolean
  interval?: number
}

export function VideoSlider({ videos, autoPlay = true, interval = 8000 }: VideoSliderProps) {
  const [currentVideo, setCurrentVideo] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const intervalId = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }, interval)

    return () => clearInterval(intervalId)
  }, [autoPlay, interval, videos.length])

  return (
    <div className="absolute inset-0">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentVideo ? "opacity-100" : "opacity-0"
          }`}
        >
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={video.src} type="video/mp4" />
            {/* Fallback image */}
            <img src="/iguazu-falls-aerial.png" alt={video.title} className="w-full h-full object-cover" />
          </video>
        </div>
      ))}

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

      {/* Video Info */}
      <div className="absolute bottom-20 left-8 text-white">
        <h3 className="text-xl font-semibold mb-1">{videos[currentVideo]?.title}</h3>
        <p className="text-sm text-white/80">{videos[currentVideo]?.location}</p>
      </div>

      {/* Video Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentVideo ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

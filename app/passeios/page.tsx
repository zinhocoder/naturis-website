"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { allTours } from "@/data/tours"
import { useLanguage } from "@/hooks/use-language"
import { Header } from "@/components/header"

export default function ToursPage() {
  const { language } = useLanguage()

  const toursByCountry = {
    brazil: allTours.filter((tour) => tour.country === "brazil"),
    argentina: allTours.filter((tour) => tour.country === "argentina"),
    paraguay: allTours.filter((tour) => tour.country === "paraguay"),
  }

  const countryFlags = {
    brazil: "🇧🇷",
    argentina: "🇦🇷",
    paraguay: "🇵🇾",
  }

  const countryNames = {
    brazil: { pt: "Brasil", es: "Brasil", en: "Brazil" },
    argentina: { pt: "Argentina", es: "Argentina", en: "Argentina" },
    paraguay: { pt: "Paraguai", es: "Paraguay", en: "Paraguay" },
  }

  const countryColors = {
    brazil: "from-green-500 to-emerald-600",
    argentina: "from-blue-500 to-cyan-600",
    paraguay: "from-red-500 to-orange-600",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header showBackButton={true} backUrl="/" />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <Image src="/images/hero-background.jpg" alt="Nossos Passeios" fill className="object-cover" priority />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Nossos Passeios
            </h1>
            <p className="text-xl text-gray-200">Descubra as maravilhas da Tríplice Fronteira</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {Object.entries(toursByCountry).map(([country, tours]) => (
          <div key={country} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">{countryFlags[country as keyof typeof countryFlags]}</span>
              <h2 className="text-4xl font-bold text-slate-800">
                {countryNames[country as keyof typeof countryNames][language]}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <Link key={tour.id} href={`/passeios/${tour.id}`}>
                  <Card className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <Image
                        src={tour.images[0] || "/placeholder.svg"}
                        alt={tour.name[language]}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`bg-gradient-to-r ${countryColors[country as keyof typeof countryColors]} text-white`}
                        >
                          {countryNames[country as keyof typeof countryNames][language]}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{tour.rating}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {tour.name[language]}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-3">{tour.description[language]}</p>

                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{tour.groupSize}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold text-slate-600">Consulte valores</div>
                        <Button
                          className={`bg-gradient-to-r ${countryColors[country as keyof typeof countryColors]} hover:opacity-90 text-white px-6 py-2 rounded-full transform group-hover:scale-105 transition-all duration-300`}
                        >
                          Ver Detalhes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

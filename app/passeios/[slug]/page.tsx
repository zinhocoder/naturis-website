"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { Star, Clock, Users, TrendingUp, Check, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { toursData } from "@/data/tours"
import { useLanguage } from "@/hooks/use-language"
import { Header } from "@/components/header"

interface TourPageProps {
  params: {
    slug: string
  }
}

export default function TourPage({ params }: TourPageProps) {
  const { language } = useLanguage()
  const tour = toursData[params.slug]

  if (!tour) {
    notFound()
  }

  const whatsappNumber = "5545991281353"
  const whatsappMessage = encodeURIComponent(`Olá! Gostaria de reservar o passeio: ${tour.name[language]}`)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const difficultyColors = {
    Fácil: "bg-green-100 text-green-800",
    Moderado: "bg-yellow-100 text-yellow-800",
    Difícil: "bg-red-100 text-red-800",
  }

  const countryFlags = {
    brazil: "🇧🇷",
    argentina: "🇦🇷",
    paraguay: "🇵🇾",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header showBackButton={true} backUrl="/passeios" />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30 z-10" />
        <Image
          src={tour.images[0] || "/placeholder.svg"}
          alt={tour.name[language]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">{countryFlags[tour.country]}</span>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {tour.country === "brazil" ? "Brasil" : tour.country === "argentina" ? "Argentina" : "Paraguai"}
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {tour.name[language]}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">{tour.description[language]}</p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{tour.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tour Details */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-slate-800">Duração</div>
                    <div className="text-slate-600">{tour.duration}</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-slate-800">Grupo</div>
                    <div className="text-slate-600">{tour.groupSize}</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="font-semibold text-slate-800">Dificuldade</div>
                    <Badge className={difficultyColors[tour.difficulty as keyof typeof difficultyColors]}>
                      {tour.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed">{tour.description[language]}</p>
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                  Destaques do Passeio
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {tour.highlights[language].map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-cyan-50 rounded-lg"
                    >
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Included */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">O que está incluído</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {tour.included[language].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Roteiro Detalhado</h3>
                <div className="space-y-4">
                  {tour.itinerary[language].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 font-medium">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Galeria de Fotos</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {tour.images.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-xl overflow-hidden group">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${tour.name[language]} - Foto ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white sticky top-6">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2">{tour.price}</div>
                  <div className="text-blue-100">por pessoa</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-blue-100">
                    <span>Avaliação:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-semibold">{tour.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-blue-100">
                    <span>Duração:</span>
                    <span className="text-white font-semibold">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-blue-100">
                    <span>Grupo:</span>
                    <span className="text-white font-semibold">{tour.groupSize}</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Reservar Agora
                  </a>
                </Button>

                <div className="text-center mt-4 text-blue-100 text-sm">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Resposta imediata via WhatsApp
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-bold text-slate-800 mb-4">Informações de Contato</h4>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>(45) 99128-1353</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Foz do Iguaçu - PR</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety Info */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-slate-800 mb-4">Segurança & Qualidade</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Guias certificados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Seguro de viagem incluído</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Equipamentos de segurança</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Cancelamento flexível</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

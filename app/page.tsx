"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Facebook, MessageCircle, Phone, Mail, Star, Clock, Users, Check } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

import { Header } from "@/components/header"
import Link from "next/link"

export default function HomePage() {
  const { language, setLanguage, t } = useLanguage()

  const openWhatsApp = () => {
    window.open("https://wa.me/5545991281353", "_blank")
  }



  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-background.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Enhanced overlay with gradient matching logo colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/60"></div>

        {/* Floating elements for visual appeal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-3000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="inline-block bg-slate-900/80 backdrop-blur-sm text-cyan-300 px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-cyan-400/30 shadow-lg">
                {t("hero.subtitle")}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              <span className="text-white block mb-4 drop-shadow-2xl">{t("hero.title1")}</span>
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-500 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                {t("hero.title2")}
              </span>
            </h1>

            <p className="text-xl md:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold px-12 py-5 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-green-500/25"
              >
                <Link href="/passeios">{t("hero.cta1")}</Link>
              </Button>
              <Button
                onClick={openWhatsApp}
                variant="outline"
                className="border-3 border-white text-white hover:bg-white hover:text-slate-900 px-12 py-5 rounded-full text-xl bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                {t("hero.cta2")}
              </Button>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">5000+</div>
                <div className="text-cyan-300 text-sm">Turistas Satisfeitos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-cyan-300 text-sm">Anos de Experiência</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-cyan-300 text-sm">Segurança Garantida</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-green-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Card className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-16 rounded-3xl overflow-hidden relative shadow-2xl border border-slate-700">
            {/* Decorative elements with logo colors */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full -translate-y-48 translate-x-48 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/10 to-green-500/10 rounded-full translate-y-32 -translate-x-32 animate-pulse delay-1000"></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="relative">
                      <img src="/images/naturis-logo.png" alt="Naturis" className="h-20 w-20 animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    </div>
                    <div>
                      <h2 className="text-white text-3xl font-bold">Naturis</h2>
                      <p className="text-cyan-300 text-sm tracking-wider font-semibold">TURISMO</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-green-400 text-5xl lg:text-6xl font-bold leading-tight animate-pulse">
                      {t("company.subtitle1")}
                    </h3>
                    <h3 className="text-cyan-400 text-5xl lg:text-6xl font-bold leading-tight animate-pulse delay-300">
                      {t("company.subtitle2")}
                    </h3>
                    <h3 className="text-white text-5xl lg:text-6xl font-bold leading-tight mb-8 animate-pulse delay-600">
                      {t("company.subtitle3")}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xl leading-relaxed max-w-lg">{t("company.description")}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold px-10 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      <Link href="/contato">Fale Conosco</Link>
                    </Button>
                    <Button
                      onClick={openWhatsApp}
                      variant="outline"
                      className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-10 py-4 rounded-full font-bold transform hover:scale-105 transition-all duration-300"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <img
                        src="/iguazu-falls.png"
                        alt="Cataratas"
                        className="rounded-2xl shadow-2xl hover:scale-110 transition-transform duration-500 border-2 border-cyan-400/30 hover:border-cyan-400/60"
                      />
                      <img
                        src="/colorful-parrot.png"
                        alt="Fauna"
                        className="rounded-2xl shadow-2xl hover:scale-110 transition-transform duration-500 border-2 border-green-400/30 hover:border-green-400/60"
                      />
                    </div>
                    <div className="space-y-6 pt-12">
                      <img
                        src="/itaipu-dam.png"
                        alt="Itaipu"
                        className="rounded-2xl shadow-2xl hover:scale-110 transition-transform duration-500 border-2 border-cyan-400/30 hover:border-cyan-400/60"
                      />
                      <img
                        src="/shopping-paraguay.png"
                        alt="Compras"
                        className="rounded-2xl shadow-2xl hover:scale-110 transition-transform duration-500 border-2 border-green-400/30 hover:border-green-400/60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div id="tours" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t("tours.title")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("tours.subtitle")}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Brasil Tours */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-green-600 mb-8 flex items-center justify-center lg:justify-start">
              <img src="/brazil-flag.png" alt="Brasil" className="mr-4 h-8 w-10 rounded shadow-md" />
              {t("country.brazil")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/passeios/cataratas-iguacu">
                <Card className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img
                      src="/tours/iguazu-panoramic.png"
                      alt="Cataratas do Iguaçu"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                        Brasil
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>4.9</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      Cataratas do Iguaçu
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{t("tour.iguazu.br")}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>4-6 horas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>2-15 pessoas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-slate-600">Consulte valores</div>
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white px-6 py-2 rounded-full transform group-hover:scale-105 transition-all duration-300">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/passeios/macuco-safari">
                <Card className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img
                      src="/tours/macuco-boat.png"
                      alt="Macuco Safari"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                        Brasil
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      Macuco Safari
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{t("tour.macuco")}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>3-4 horas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>2-20 pessoas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-slate-600">Consulte valores</div>
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white px-6 py-2 rounded-full transform group-hover:scale-105 transition-all duration-300">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/passeios/parque-das-aves">
                <Card className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img
                      src="/tours/bird-park-colorful.png"
                      alt="Parque das Aves"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                        Brasil
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>4.7</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      Parque das Aves
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{t("tour.birds")}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>2-3 horas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>2-25 pessoas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-slate-600">Consulte valores</div>
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white px-6 py-2 rounded-full transform group-hover:scale-105 transition-all duration-300">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/passeios/usina-itaipu">
                <Card className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img
                      src="/tours/itaipu-dam-aerial.png"
                      alt="Usina de Itaipu"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                        Brasil
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>4.6</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      Usina de Itaipu
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{t("tour.itaipu")}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>3-4 horas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>2-30 pessoas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-slate-600">Consulte valores</div>
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white px-6 py-2 rounded-full transform group-hover:scale-105 transition-all duration-300">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/passeios/marco-tres-fronteiras">
                <Card className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img
                      src="/tours/marco-panoramic.png"
                      alt="Marco das Três Fronteiras"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                        Brasil
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>4.5</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      Marco das Três Fronteiras
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{t("tour.marco")}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>3-4 horas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>2-30 pessoas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-slate-600">Consulte valores</div>
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white px-6 py-2 rounded-full transform group-hover:scale-105 transition-all duration-300">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/passeios/city-tour-foz">
                <Card className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img
                      src="/tours/city-buddhist-temple.png"
                      alt="City Tour"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                        Brasil
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>4.4</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      City Tour
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{t("tour.citytour")}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>6-7 horas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>2-25 pessoas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-slate-600">Consulte valores</div>
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white px-6 py-2 rounded-full transform group-hover:scale-105 transition-all duration-300">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Argentina Tours */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-blue-600 mb-8 flex items-center justify-center lg:justify-start">
              <img src="/argentina-flag.png" alt="Argentina" className="mr-4 h-8 w-10 rounded shadow-md" />
              {t("country.argentina")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/passeios/cataratas-argentina">
                <Card className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img
                      src="/tours/argentina-devils-throat.png"
                      alt="Cataratas (Lado Argentino)"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                        Argentina
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      Cataratas (Lado Argentino)
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{t("tour.iguazu.ar")}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>8-9 horas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>2-20 pessoas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-slate-600">Consulte valores</div>
                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:opacity-90 text-white px-6 py-2 rounded-full transform group-hover:scale-105 transition-all duration-300">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Paraguay Tours */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-red-600 mb-8 flex items-center justify-center lg:justify-start">
              <img src="/paraguay-flag.png" alt="Paraguai" className="mr-4 h-8 w-10 rounded shadow-md" />
              {t("country.paraguay")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/passeios/compras-paraguai">
                <Card className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img
                      src="/tours/paraguay-shopping.png"
                      alt="Compras Paraguai"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-red-500 to-orange-600 text-white">
                        Paraguai
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>4.3</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      Compras Paraguai
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{t("tour.shopping")}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>6-8 horas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>2-15 pessoas</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-slate-600">Consulte valores</div>
                      <Button className="bg-gradient-to-r from-red-500 to-orange-600 hover:opacity-90 text-white px-6 py-2 rounded-full transform group-hover:scale-105 transition-all duration-300">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full">
              <Link href="/passeios">{t("tours.viewall")}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Triple Border Section */}
      <div className="py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-green-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Conheça as maravilhas da 
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent block mt-2">
                TRÍPLICE FRONTEIRA
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experiências únicas com segurança e conforto que você merece em três países incríveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Entertainment */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/brazilian-dancers.png" 
                  alt="Entertainment" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    ENTRETENIMENTO
                  </span>
                  <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shows culturais e danças típicas
                  </p>
                </div>
              </div>
            </div>

            {/* Gastronomy */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/chef-traditional-cooking.png" 
                  alt="Gastronomy" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    GASTRONOMIA
                  </span>
                  <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Sabores únicos dos três países
                  </p>
                </div>
              </div>
            </div>

            {/* Wonders */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/iguazu-falls-aerial.png" 
                  alt="Wonders" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MARAVILHAS
                  </span>
                  <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Cataratas e belezas naturais
                  </p>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/city-skyline-transport.png" 
                  alt="Transport" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    TRANSPORTE
                  </span>
                  <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Conforto e segurança garantidos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/passeios">Ver Todos os Passeios</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-green-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              {t("why.title")}
              <br />
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                {t("why.company")}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Descubra por que milhares de turistas escolhem a Naturis para suas aventuras na Tríplice Fronteira
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Experiência Comprovada</h3>
                    <p className="text-slate-600">15+ anos de experiência na região, conhecendo cada detalhe dos destinos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Segurança Garantida</h3>
                    <p className="text-slate-600">Guias certificados, seguro de viagem e equipamentos de segurança</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Atendimento Personalizado</h3>
                    <p className="text-slate-600">Grupos pequenos e atenção especial para cada cliente</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Flexibilidade Total</h3>
                    <p className="text-slate-600">Cancelamento flexível e horários adaptáveis às suas necessidades</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {t("why.cta")}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-10 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/sobre">Saiba Mais</Link>
                </Button>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative group">
                    <img 
                      src="/happy-iguazu-tourist.png" 
                      alt="Turista feliz" 
                      className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group">
                    <img 
                      src="/iguazu-falls.png" 
                      alt="Cataratas" 
                      className="w-full h-48 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="relative group">
                    <img 
                      src="/colorful-parrot.png" 
                      alt="Aves coloridas" 
                      className="w-full h-48 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group">
                    <img 
                      src="/itaipu-dam.png" 
                      alt="Usina de Itaipu" 
                      className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Social Media Section */}
      <div className="py-16 bg-green-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-2">{t("social.title")}</h2>
              <h3 className="text-4xl font-bold mb-8">{t("social.subtitle")}</h3>
              <div className="flex space-x-4 mb-6">
                <Button size="icon" className="bg-white text-green-500 hover:bg-gray-100 rounded-full">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" className="bg-white text-green-500 hover:bg-gray-100 rounded-full">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  onClick={openWhatsApp}
                  size="icon"
                  className="bg-white text-green-500 hover:bg-gray-100 rounded-full"
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-lg">{t("social.description")}</p>
            </div>
            <div className="relative">
              <img src="/images/tucano.png?height=300&width=250" alt="Phone with social media" className="mx-auto" />
              
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("cta.title")}</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">{t("cta.subtitle")}</h3>
          <Button onClick={openWhatsApp} className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
            {t("cta.button")}
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">{t("footer.menu")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-yellow-400 transition-colors">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link href="/passeios" className="hover:text-yellow-400 transition-colors">
                    {t("nav.tours")} Brasil
                  </Link>
                </li>
                <li>
                  <Link href="/passeios" className="hover:text-yellow-400 transition-colors">
                    {t("nav.tours")} Argentina
                  </Link>
                </li>
                <li>
                  <Link href="/passeios" className="hover:text-yellow-400 transition-colors">
                    {t("nav.tours")} Paraguai
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="hover:text-yellow-400 transition-colors">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-yellow-400 transition-colors">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <img src="/images/naturis-logo.png" alt="Naturis Turismo" className="h-20 w-20" />
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.contact")}</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(45) 3574-2847</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@naturisturismo.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp: (45) 9128-1353</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.social")}</h4>
              <div className="flex space-x-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  onClick={openWhatsApp}
                  size="icon"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold mb-2">{t("footer.address")}</h5>
                <p className="text-sm">
                  Av. Brasil, 1234 - Centro
                  <br />
                  Foz do Iguaçu - PR
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openWhatsApp}
          size="icon"
          className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white rounded-full w-16 h-16 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </div>
    </div>
  )
}

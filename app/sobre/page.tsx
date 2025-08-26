"use client"

import Image from "next/image"
import { Star, Users, Award, MapPin, Clock, Heart, Shield, Compass } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { Header } from "@/components/header"
import Link from "next/link"

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    pt: {
      title: "Sobre a Naturis Turismo",
      subtitle: "Sua aventura na Tríplice Fronteira começa aqui",
      description:
        "Há mais de 15 anos, a Naturis Turismo é especialista em proporcionar experiências únicas na região da Tríplice Fronteira. Nossa paixão pela natureza e pelo turismo sustentável nos motiva a criar roteiros inesquecíveis que conectam você com as maravilhas naturais de Foz do Iguaçu.",
      mission: {
        title: "Nossa Missão",
        text: "Proporcionar experiências turísticas autênticas e sustentáveis, conectando nossos clientes com a natureza exuberante da Tríplice Fronteira, sempre com segurança, qualidade e respeito ao meio ambiente.",
      },
      vision: {
        title: "Nossa Visão",
        text: "Ser reconhecida como a principal empresa de turismo ecológico da região, referência em qualidade de serviço e compromisso com a preservação ambiental.",
      },
      values: {
        title: "Nossos Valores",
        items: [
          "Sustentabilidade e preservação ambiental",
          "Excelência no atendimento ao cliente",
          "Segurança em todas as atividades",
          "Respeito às comunidades locais",
          "Inovação em experiências turísticas",
        ],
      },
      stats: [
        { number: "15+", label: "Anos de Experiência" },
        { number: "50.000+", label: "Clientes Satisfeitos" },
        { number: "20+", label: "Roteiros Exclusivos" },
        { number: "4.8", label: "Avaliação Média" },
      ],
      team: {
        title: "Nossa Equipe",
        description:
          "Contamos com uma equipe de guias especializados, apaixonados pela região e comprometidos em proporcionar a melhor experiência para nossos clientes.",
      },
      certifications: {
        title: "Certificações e Parcerias",
        items: [
          "Cadastur - Ministério do Turismo",
          "Parceria com ICMBio",
          "Certificação em Turismo Sustentável",
          "Membro da ABETA",
        ],
      },
    },
    es: {
      title: "Sobre Naturis Turismo",
      subtitle: "Tu aventura en la Triple Frontera comienza aquí",
      description:
        "Hace más de 15 años, Naturis Turismo es especialista en proporcionar experiencias únicas en la región de la Triple Frontera. Nuestra pasión por la naturaleza y el turismo sostenible nos motiva a crear itinerarios inolvidables que te conectan con las maravillas naturales de Foz do Iguaçu.",
      mission: {
        title: "Nuestra Misión",
        text: "Proporcionar experiencias turísticas auténticas y sostenibles, conectando a nuestros clientes con la naturaleza exuberante de la Triple Frontera, siempre con seguridad, calidad y respeto al medio ambiente.",
      },
      vision: {
        title: "Nuestra Visión",
        text: "Ser reconocida como la principal empresa de turismo ecológico de la región, referencia en calidad de servicio y compromiso con la preservación ambiental.",
      },
      values: {
        title: "Nuestros Valores",
        items: [
          "Sostenibilidad y preservación ambiental",
          "Excelencia en atención al cliente",
          "Seguridad en todas las actividades",
          "Respeto a las comunidades locales",
          "Innovación en experiencias turísticas",
        ],
      },
      stats: [
        { number: "15+", label: "Años de Experiencia" },
        { number: "50.000+", label: "Clientes Satisfechos" },
        { number: "20+", label: "Itinerarios Exclusivos" },
        { number: "4.8", label: "Evaluación Promedio" },
      ],
      team: {
        title: "Nuestro Equipo",
        description:
          "Contamos con un equipo de guías especializados, apasionados por la región y comprometidos en proporcionar la mejor experiencia para nuestros clientes.",
      },
      certifications: {
        title: "Certificaciones y Alianzas",
        items: [
          "Cadastur - Ministerio de Turismo",
          "Alianza con ICMBio",
          "Certificación en Turismo Sostenible",
          "Miembro de ABETA",
        ],
      },
    },
    en: {
      title: "About Naturis Tourism",
      subtitle: "Your adventure in the Triple Border starts here",
      description:
        "For over 15 years, Naturis Tourism has specialized in providing unique experiences in the Triple Border region. Our passion for nature and sustainable tourism motivates us to create unforgettable itineraries that connect you with the natural wonders of Foz do Iguaçu.",
      mission: {
        title: "Our Mission",
        text: "To provide authentic and sustainable tourism experiences, connecting our clients with the exuberant nature of the Triple Border, always with safety, quality and respect for the environment.",
      },
      vision: {
        title: "Our Vision",
        text: "To be recognized as the leading ecological tourism company in the region, a reference in service quality and commitment to environmental preservation.",
      },
      values: {
        title: "Our Values",
        items: [
          "Sustainability and environmental preservation",
          "Excellence in customer service",
          "Safety in all activities",
          "Respect for local communities",
          "Innovation in tourism experiences",
        ],
      },
      stats: [
        { number: "15+", label: "Years of Experience" },
        { number: "50,000+", label: "Satisfied Customers" },
        { number: "20+", label: "Exclusive Tours" },
        { number: "4.8", label: "Average Rating" },
      ],
      team: {
        title: "Our Team",
        description:
          "We have a team of specialized guides, passionate about the region and committed to providing the best experience for our clients.",
      },
      certifications: {
        title: "Certifications and Partnerships",
        items: [
          "Cadastur - Ministry of Tourism",
          "Partnership with ICMBio",
          "Sustainable Tourism Certification",
          "ABETA Member",
        ],
      },
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header showBackButton={true} backUrl="/" />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <Image src="/images/hero-background.jpg" alt="Naturis Turismo" fill className="object-cover" priority />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">{currentContent.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Introduction */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-700 leading-relaxed">{currentContent.description}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {currentContent.stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-3">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{currentContent.mission.title}</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">{currentContent.mission.text}</p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{currentContent.vision.title}</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">{currentContent.vision.text}</p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{currentContent.values.title}</h3>
              </div>
              <ul className="space-y-4">
                {currentContent.values.items.map((value, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-cyan-50 mb-20">
          <CardContent className="p-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Users className="w-10 h-10 text-green-600" />
                <h3 className="text-4xl font-bold text-slate-800">{currentContent.team.title}</h3>
              </div>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">{currentContent.team.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Guias Certificados</h4>
                <p className="text-slate-600">Profissionais experientes e certificados</p>
              </div>
              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Conhecimento Local</h4>
                <p className="text-slate-600">Especialistas na região da Tríplice Fronteira</p>
              </div>
              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Disponibilidade Total</h4>
                <p className="text-slate-600">Atendimento 24/7 para sua segurança</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm mb-12">
          <CardContent className="p-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Award className="w-10 h-10 text-blue-600" />
                <h3 className="text-4xl font-bold text-slate-800">{currentContent.certifications.title}</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentContent.certifications.items.map((cert, index) => (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white mb-4 text-sm">Certificado</Badge>
                  <p className="text-slate-700 font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Pronto para sua aventura?</h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra as maravilhas da Tríplice Fronteira
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/passeios">Ver Passeios</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/hooks/use-language"
import { Header } from "@/components/header"

export default function ContactPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    message: "",
  })

  const content = {
    pt: {
      title: "Entre em Contato",
      subtitle: "Estamos prontos para planejar sua aventura na Tríplice Fronteira",
      form: {
        title: "Solicite seu Orçamento",
        name: "Nome Completo",
        email: "E-mail",
        phone: "Telefone/WhatsApp",
        tour: "Passeio de Interesse",
        message: "Mensagem",
        send: "Enviar Mensagem",
        selectTour: "Selecione um passeio",
      },
      contact: {
        title: "Informações de Contato",
        phone: "(45) 99128-1353",
        email: "contato@naturisturismo.com.br",
        address: "Foz do Iguaçu - PR, Brasil",
        hours: "Segunda a Domingo: 7h às 20h",
      },
      whatsapp: {
        title: "WhatsApp",
        description: "Resposta imediata para suas dúvidas",
        button: "Chamar no WhatsApp",
      },
      social: {
        title: "Redes Sociais",
        description: "Siga-nos e acompanhe nossas aventuras",
      },
      tours: [
        "Cataratas do Iguaçu",
        "Macuco Safari",
        "Parque das Aves",
        "Usina de Itaipu",
        "Marco das Três Fronteiras",
        "City Tour Foz",
        "Cataratas - Lado Argentino",
        "Compras no Paraguai",
        "Outro",
      ],
    },
    es: {
      title: "Contáctanos",
      subtitle: "Estamos listos para planificar tu aventura en la Triple Frontera",
      form: {
        title: "Solicita tu Presupuesto",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Teléfono/WhatsApp",
        tour: "Tour de Interés",
        message: "Mensaje",
        send: "Enviar Mensaje",
        selectTour: "Selecciona un tour",
      },
      contact: {
        title: "Información de Contacto",
        phone: "(45) 99128-1353",
        email: "contato@naturisturismo.com.br",
        address: "Foz do Iguaçu - PR, Brasil",
        hours: "Lunes a Domingo: 7h a 20h",
      },
      whatsapp: {
        title: "WhatsApp",
        description: "Respuesta inmediata para tus dudas",
        button: "Llamar por WhatsApp",
      },
      social: {
        title: "Redes Sociales",
        description: "Síguenos y acompaña nuestras aventuras",
      },
      tours: [
        "Cataratas del Iguazú",
        "Macuco Safari",
        "Parque de las Aves",
        "Central de Itaipú",
        "Hito de las Tres Fronteras",
        "City Tour Foz",
        "Cataratas - Lado Argentino",
        "Compras en Paraguay",
        "Otro",
      ],
    },
    en: {
      title: "Contact Us",
      subtitle: "We're ready to plan your adventure in the Triple Border",
      form: {
        title: "Request Your Quote",
        name: "Full Name",
        email: "Email",
        phone: "Phone/WhatsApp",
        tour: "Tour of Interest",
        message: "Message",
        send: "Send Message",
        selectTour: "Select a tour",
      },
      contact: {
        title: "Contact Information",
        phone: "(45) 99128-1353",
        email: "contato@naturisturismo.com.br",
        address: "Foz do Iguaçu - PR, Brazil",
        hours: "Monday to Sunday: 7am to 8pm",
      },
      whatsapp: {
        title: "WhatsApp",
        description: "Immediate response to your questions",
        button: "Call on WhatsApp",
      },
      social: {
        title: "Social Media",
        description: "Follow us and join our adventures",
      },
      tours: [
        "Iguazu Falls",
        "Macuco Safari",
        "Bird Park",
        "Itaipu Plant",
        "Three Borders Landmark",
        "Foz City Tour",
        "Falls - Argentine Side",
        "Shopping in Paraguay",
        "Other",
      ],
    },
  }

  const currentContent = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = "5545991281353"
    const message = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Passeio: ${formData.tour}
Mensagem: ${formData.message}`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const whatsappDirectUrl = `https://wa.me/5545991281353?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre os passeios da Naturis Turismo.")}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header showBackButton={true} backUrl="/" />
      
      {/* Hero Section */}
      <div className="relative h-[35vh] sm:h-[40vh] overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <Image src="/images/hero-background.jpg" alt="Contato Naturis Turismo" fill className="object-cover" priority />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 sm:px-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">{currentContent.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                {currentContent.form.title}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">{currentContent.form.name}</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-slate-200 focus:border-green-500 rounded-xl transition-colors"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">{currentContent.form.email}</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-slate-200 focus:border-green-500 rounded-xl transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">{currentContent.form.phone}</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-slate-200 focus:border-green-500 rounded-xl transition-colors"
                      placeholder="(45) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">{currentContent.form.tour}</label>
                  <select
                    name="tour"
                    value={formData.tour}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-slate-200 focus:border-green-500 rounded-xl transition-colors bg-white"
                  >
                    <option value="">{currentContent.form.selectTour}</option>
                    {currentContent.tours.map((tour, index) => (
                      <option key={index} value={tour}>
                        {tour}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">{currentContent.form.message}</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-4 border-2 border-slate-200 focus:border-green-500 rounded-xl transition-colors resize-none"
                    placeholder="Conte-nos mais sobre sua viagem ideal, número de pessoas, datas preferidas..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  {currentContent.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-slate-800 mb-8">{currentContent.contact.title}</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-4 bg-gradient-to-r from-green-50 to-cyan-50 rounded-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-lg">Telefone/WhatsApp</div>
                      <div className="text-slate-600 text-lg">{currentContent.contact.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-lg">E-mail</div>
                      <div className="text-slate-600 text-lg">{currentContent.contact.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-lg">Localização</div>
                      <div className="text-slate-600 text-lg">{currentContent.contact.address}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-lg">Horário de Atendimento</div>
                      <div className="text-slate-600 text-lg">{currentContent.contact.hours}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Direct */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold">{currentContent.whatsapp.title}</h3>
                </div>
                <p className="text-green-100 text-lg mb-8">{currentContent.whatsapp.description}</p>
                <Button asChild className="w-full bg-white text-green-600 hover:bg-gray-100 font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <a href={whatsappDirectUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-6 h-6 mr-3" />
                    {currentContent.whatsapp.button}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800">{currentContent.social.title}</h3>
                </div>
                <p className="text-slate-700 text-lg mb-8">{currentContent.social.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 bg-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 mr-2" />
                      Instagram
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 bg-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-5 h-5 mr-2" />
                      Facebook
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm mt-16 hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Nossa Localização</h3>
            <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center">
              <div className="text-center text-slate-600">
                <MapPin className="w-20 h-20 mx-auto mb-6 text-slate-400" />
                <p className="text-2xl font-bold mb-2">Foz do Iguaçu - PR</p>
                <p className="text-lg">Região da Tríplice Fronteira</p>
                <p className="text-sm mt-2">Brasil • Argentina • Paraguai</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

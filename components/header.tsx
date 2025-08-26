"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Facebook, MessageCircle, Phone, Mail, Menu, X, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  showBackButton?: boolean
  backUrl?: string
}

export function Header({ showBackButton = false, backUrl = "/" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const openWhatsApp = () => {
    window.open("https://wa.me/5545991281353", "_blank")
  }

  const isHomePage = pathname === "/"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Back Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {showBackButton && (
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-white hover:text-cyan-300 hover:bg-slate-800/50 p-1 sm:p-2 rounded-full"
              >
                <Link href={backUrl}>
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            )}
            
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <img src="/images/naturis-logo.png" alt="Naturis Turismo" className="h-10 w-10 sm:h-14 sm:w-14" />
              <div className="text-white">
                <div className="font-bold text-lg sm:text-xl">Naturis</div>
                <div className="text-xs sm:text-sm text-cyan-300 tracking-wider">TURISMO</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors font-medium ${
                isHomePage ? "text-cyan-300" : "text-white hover:text-cyan-300"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link 
              href="/passeios" 
              className={`transition-colors font-medium ${
                pathname.startsWith("/passeios") ? "text-cyan-300" : "text-white hover:text-cyan-300"
              }`}
            >
              {t("nav.tours")}
            </Link>
            <Link 
              href="/sobre" 
              className={`transition-colors font-medium ${
                pathname === "/sobre" ? "text-cyan-300" : "text-white hover:text-cyan-300"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link 
              href="/contato" 
              className={`transition-colors font-medium ${
                pathname === "/contato" ? "text-cyan-300" : "text-white hover:text-cyan-300"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-3 bg-slate-800/50 rounded-full px-4 py-2">
              <button
                onClick={() => setLanguage("pt")}
                className={`transition-all duration-300 transform hover:scale-110 ${
                  language === "pt" ? "opacity-100 ring-2 ring-green-400 rounded-sm" : "opacity-70 hover:opacity-90"
                }`}
              >
                <img src="/brazil-flag.png" alt="Brasil" className="h-6 w-8 rounded-sm shadow-md" />
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`transition-all duration-300 transform hover:scale-110 ${
                  language === "es" ? "opacity-100 ring-2 ring-cyan-400 rounded-sm" : "opacity-70 hover:opacity-90"
                }`}
              >
                <img src="/argentina-flag.png" alt="Argentina" className="h-6 w-8 rounded-sm shadow-md" />
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`transition-all duration-300 transform hover:scale-110 ${
                  language === "en" ? "opacity-100 ring-2 ring-red-400 rounded-sm" : "opacity-70 hover:opacity-90"
                }`}
              >
                <img src="/paraguay-flag.png" alt="Paraguai" className="h-6 w-8 rounded-sm shadow-md" />
              </button>
            </div>
            <Button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {t("nav.reserve")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700 rounded-b-lg">
            <nav className="py-4 space-y-2">
              {showBackButton && (
                <Link
                  href={backUrl}
                  className="block px-4 py-3 text-white hover:text-cyan-300 hover:bg-slate-700/50 rounded-lg mx-2 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Voltar
                  </div>
                </Link>
              )}
              <Link
                href="/"
                className={`block px-4 py-3 rounded-lg mx-2 transition-all ${
                  isHomePage 
                    ? "text-cyan-300 bg-slate-700/50" 
                    : "text-white hover:text-cyan-300 hover:bg-slate-700/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/passeios"
                className={`block px-4 py-3 rounded-lg mx-2 transition-all ${
                  pathname.startsWith("/passeios") 
                    ? "text-cyan-300 bg-slate-700/50" 
                    : "text-white hover:text-cyan-300 hover:bg-slate-700/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.tours")}
              </Link>
              <Link
                href="/sobre"
                className={`block px-4 py-3 rounded-lg mx-2 transition-all ${
                  pathname === "/sobre" 
                    ? "text-cyan-300 bg-slate-700/50" 
                    : "text-white hover:text-cyan-300 hover:bg-slate-700/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/contato"
                className={`block px-4 py-3 rounded-lg mx-2 transition-all ${
                  pathname === "/contato" 
                    ? "text-cyan-300 bg-slate-700/50" 
                    : "text-white hover:text-cyan-300 hover:bg-slate-700/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <div className="px-4 py-3 flex justify-center space-x-4 bg-slate-700/30 mx-2 rounded-lg">
                <button
                  onClick={() => setLanguage("pt")}
                  className={`transition-all ${language === "pt" ? "opacity-100 ring-2 ring-green-400 rounded-sm" : "opacity-70"}`}
                >
                  <img src="/brazil-flag.png" alt="Brasil" className="h-6 w-8 rounded-sm" />
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={`transition-all ${language === "es" ? "opacity-100 ring-2 ring-cyan-400 rounded-sm" : "opacity-70"}`}
                >
                  <img src="/argentina-flag.png" alt="Argentina" className="h-6 w-8 rounded-sm" />
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`transition-all ${language === "en" ? "opacity-100 ring-2 ring-red-400 rounded-sm" : "opacity-70"}`}
                >
                  <img src="/paraguay-flag.png" alt="Paraguai" className="h-6 w-8 rounded-sm" />
                </button>
              </div>
              <div className="px-4 py-2">
                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-full"
                >
                  {t("nav.reserve")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

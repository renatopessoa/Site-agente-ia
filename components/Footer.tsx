'use client'

import { 
  Bot, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    produto: [
      { name: 'Funcionalidades', href: '#features' },
      { name: 'Como Funciona', href: '#how-it-works' },
      { name: 'Benefícios', href: '#benefits' },
      { name: 'Preços', href: '#pricing' },
      { name: 'Demonstração', href: '#contact' }
    ],
    empresa: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Carreiras', href: '#careers' },
      { name: 'Imprensa', href: '#press' },
      { name: 'Parceiros', href: '#partners' }
    ],
    suporte: [
      { name: 'Central de Ajuda', href: '#help' },
      { name: 'Documentação', href: '#docs' },
      { name: 'Status do Sistema', href: '#status' },
      { name: 'Contato', href: '#contact' },
      { name: 'Treinamentos', href: '#training' }
    ],
    legal: [
      { name: 'Política de Privacidade', href: '#privacy' },
      { name: 'Termos de Uso', href: '#terms' },
      { name: 'LGPD', href: '#lgpd' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'Compliance', href: '#compliance' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#facebook' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '+55 (11) 9 9999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      text: 'contato@agendaia.com.br',
      href: 'mailto:contato@agendaia.com.br'
    },
    {
      icon: MapPin,
      text: 'São Paulo, SP - Brasil',
      href: '#location'
    }
  ]

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Dark Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      {/* Neural Network Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold font-heading">
                  Agenda<span className="text-cyan-400">IA</span>
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Revolucionando o agendamento hospitalar com inteligência artificial. 
                Conectamos pacientes e hospitais através do WhatsApp para uma experiência 
                mais eficiente e humanizada.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
              {/* Produto */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Produto
                </h3>
                <ul className="space-y-3">
                  {footerLinks.produto.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empresa */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Empresa
                </h3>
                <ul className="space-y-3">
                  {footerLinks.empresa.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suporte */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Suporte
                </h3>
                <ul className="space-y-3">
                  {footerLinks.suporte.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Legal
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Fique por dentro das novidades
              </h3>
              <p className="text-gray-300 text-sm">
                Receba atualizações sobre novas funcionalidades e dicas para otimizar 
                seu agendamento hospitalar.
              </p>
            </div>
            <div>
              <form className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>© 2024 AgendaIA. Todos os direitos reservados.</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>no Brasil</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm mr-2">Siga-nos:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 text-center">
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs font-bold">ISO</span>
              </div>
              <span>ISO 27001 Certificado</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs font-bold">LGPD</span>
              </div>
              <span>Compliance LGPD</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs font-bold">SSL</span>
              </div>
              <span>Criptografia SSL</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs font-bold">99.9%</span>
              </div>
              <span>Uptime Garantido</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
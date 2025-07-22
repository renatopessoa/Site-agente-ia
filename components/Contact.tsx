'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  Calendar,
  Users,
  ArrowRight
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    source: 'landing-page'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    const items = sectionRef.current?.querySelectorAll('[data-index]')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          source: 'landing-page'
        })
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 9 9999-9999',
      description: 'Seg-Sex, 8h às 18h'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@agendaia.com.br',
      description: 'Resposta em até 2 horas'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'São Paulo, SP',
      description: 'Atendimento presencial agendado'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: '24/7 Suporte',
      description: 'Para clientes Enterprise'
    }
  ]

  const benefits = [
    {
      icon: MessageCircle,
      title: 'Demonstração Personalizada',
      description: 'Veja o AgendaIA funcionando com dados do seu hospital'
    },
    {
      icon: Calendar,
      title: 'Implementação Rápida',
      description: 'Comece a usar em até 7 dias com nossa equipe especializada'
    },
    {
      icon: Users,
      title: 'Treinamento Incluído',
      description: 'Capacitação completa da sua equipe sem custo adicional'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Análise Gratuita',
      description: 'Analisamos seu processo atual de agendamento'
    },
    {
      number: '02',
      title: 'Demonstração',
      description: 'Mostramos como o AgendaIA resolve seus desafios'
    },
    {
      number: '03',
      title: 'Proposta Personalizada',
      description: 'Criamos um plano específico para suas necessidades'
    },
    {
      number: '04',
      title: 'Implementação',
      description: 'Configuramos e treinamos sua equipe'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-index="0">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
              Vamos Conversar sobre
              <span className="text-gradient block">Sua Transformação</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Entre em contato conosco e descubra como o AgendaIA pode revolucionar 
              o agendamento do seu hospital.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div data-index="1">
            <div className={`transition-all duration-700 ${
              visibleItems.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="card">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Solicite uma Demonstração
                  </h3>
                  <p className="text-gray-600">
                    Preencha o formulário e nossa equipe entrará em contato em até 2 horas.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 text-success-600 rounded-full mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Mensagem Enviada!
                    </h4>
                    <p className="text-gray-600">
                      Obrigado pelo interesse. Nossa equipe entrará em contato em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Hospital/Clínica
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                          placeholder="Nome da instituição"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                        placeholder="Conte-nos sobre seus desafios de agendamento..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Solicitar Demonstração</span>
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div data-index="2">
            <div className={`transition-all duration-700 ${
              visibleItems.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="space-y-8">
                {/* Contact Details */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Informações de Contato
                  </h3>
                  <div className="grid gap-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon
                      return (
                        <div 
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex-shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                            <p className="text-gray-700 font-medium">{info.content}</p>
                            <p className="text-sm text-gray-600">{info.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    O que você ganha
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon
                      return (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-success-100 text-success-600 rounded-lg flex-shrink-0 mt-1">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                            <p className="text-gray-600 text-sm">{benefit.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12" data-index="3">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Como Funciona Nosso Processo
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Um processo estruturado para garantir o sucesso da sua implementação.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-500 ${
                    visibleItems.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-xl font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary-200 transform -translate-y-1/2" />
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
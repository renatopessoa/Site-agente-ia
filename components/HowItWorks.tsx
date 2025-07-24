'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  MessageCircle, 
  Brain, 
  Calendar, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Database,
  Bell
} from 'lucide-react'

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      icon: MessageCircle,
      title: 'Paciente Inicia Conversa',
      description: 'O paciente envia uma mensagem via WhatsApp solicitando agendamento de exame ou consulta.',
      details: [
        'Interface familiar do WhatsApp',
        'Disponível 24 horas por dia',
        'Sem necessidade de apps adicionais'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Brain,
      title: 'IA Processa a Solicitação',
      description: 'Nossa IA analisa a mensagem, identifica o tipo de serviço e verifica o histórico do paciente.',
      details: [
        'Processamento em tempo real',
        'Compreensão de linguagem natural',
        'Acesso ao histórico médico'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: Calendar,
      title: 'Agenda é Consultada',
      description: 'O sistema verifica disponibilidade em tempo real e sugere os melhores horários disponíveis.',
      details: [
        'Sincronização em tempo real',
        'Otimização de horários',
        'Consideração de preferências'
      ],
      color: 'bg-green-500'
    },
    {
      icon: CheckCircle,
      title: 'Confirmação Automática',
      description: 'O agendamento é confirmado automaticamente e todas as partes são notificadas.',
      details: [
        'Confirmação instantânea',
        'Notificações automáticas',
        'Lembretes programados'
      ],
      color: 'bg-orange-500'
    }
  ]

  const integrations = [
    {
      icon: Smartphone,
      title: 'WhatsApp Business API',
      description: 'Integração oficial com máxima confiabilidade'
    },
    {
      icon: Database,
      title: 'Sistemas Hospitalares',
      description: 'Conecta com HIS, RIS e outros sistemas existentes'
    },
    {
      icon: Bell,
      title: 'Notificações Inteligentes',
      description: 'Lembretes automáticos e confirmações em tempo real'
    }
  ]

  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]" />
        
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse 3s infinite ${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-index="0">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-white mb-6">
              Como Funciona o
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block">AgendaIA</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Um processo simples e intuitivo que transforma completamente a experiência 
              de agendamento para pacientes e hospitais.
            </p>
          </div>
        </div>

        {/* Steps Process */}
        <div className="relative mb-20" data-index="1">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2">
              <div 
                className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-1000 ease-out"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            {/* Steps */}
            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = index <= activeStep
                
                return (
                  <div 
                    key={index}
                    className={`relative transition-all duration-500 ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Step Card */}
                    <div className={`glass-morphism rounded-3xl p-8 text-center relative z-10 border transition-all duration-500 ${
                      isActive ? 'border-cyan-400/30 shadow-cyan-500/25 shadow-2xl' : 'border-slate-600/30'
                    }`}>
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          isActive ? step.color + ' text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mt-4 transition-all duration-300 ${
                        isActive ? step.color + ' text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details */}
                      <ul className="space-y-2 text-sm">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2 text-slate-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="glass-morphism rounded-3xl p-8 lg:p-12 border border-slate-600/30" data-index="2">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Integrações Poderosas
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Nossa solução se integra perfeitamente com os sistemas que você já usa, 
                garantindo uma transição suave e sem interrupções.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {integrations.map((integration, index) => {
                const Icon = integration.icon
                return (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      visibleItems.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-2xl mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {integration.title}
                    </h4>
                    <p className="text-slate-300">
                      {integration.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-index="3">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Veja o AgendaIA em Ação
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Agende uma demonstração personalizada e descubra como nossa IA pode 
              transformar o agendamento do seu hospital.
            </p>
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>Agendar Demonstração</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
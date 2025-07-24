'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  Heart, 
  Shield,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'

const Benefits = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [counters, setCounters] = useState({
    timeReduction: 0,
    costSaving: 0,
    satisfaction: 0,
    efficiency: 0
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => [...prev, index])
            
            // Start counter animation when stats section becomes visible
            if (index === 1) {
              animateCounters()
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    const items = sectionRef.current?.querySelectorAll('[data-index]')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = {
      timeReduction: 80,
      costSaving: 65,
      satisfaction: 95,
      efficiency: 90
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounters({
        timeReduction: Math.floor(targets.timeReduction * progress),
        costSaving: Math.floor(targets.costSaving * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        efficiency: Math.floor(targets.efficiency * progress)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounters(targets)
      }
    }, stepDuration)
  }

  const mainBenefits = [
    {
      icon: Clock,
      title: 'Redução de 80% no Tempo',
      description: 'Agendamentos que levavam 15 minutos agora são feitos em 3 minutos',
      metric: '80%',
      color: 'text-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Economia de até 65%',
      description: 'Redução significativa nos custos operacionais de agendamento',
      metric: '65%',
      color: 'text-green-600'
    },
    {
      icon: Heart,
      title: '95% de Satisfação',
      description: 'Pacientes aprovam a praticidade e rapidez do sistema',
      metric: '95%',
      color: 'text-red-600'
    },
    {
      icon: TrendingUp,
      title: '90% Mais Eficiência',
      description: 'Otimização completa dos recursos e agenda hospitalar',
      metric: '90%',
      color: 'text-purple-600'
    }
  ]

  const detailedBenefits = [
    {
      category: 'Para o Hospital',
      icon: BarChart3,
      benefits: [
        {
          title: 'Redução de Custos Operacionais',
          description: 'Menos funcionários dedicados ao agendamento, redução de ligações e otimização de recursos.',
          impact: 'Economia de até R$ 50.000/mês'
        },
        {
          title: 'Otimização da Agenda',
          description: 'IA inteligente que maximiza a ocupação e reduz horários ociosos.',
          impact: 'Aumento de 30% na ocupação'
        },
        {
          title: 'Relatórios Avançados',
          description: 'Analytics detalhados sobre padrões de agendamento e otimização de recursos.',
          impact: 'Decisões baseadas em dados'
        }
      ]
    },
    {
      category: 'Para os Pacientes',
      icon: Users,
      benefits: [
        {
          title: 'Conveniência Total',
          description: 'Agendamento 24/7 via WhatsApp, sem filas ou esperas telefônicas.',
          impact: 'Disponível sempre'
        },
        {
          title: 'Experiência Personalizada',
          description: 'IA que lembra preferências e histórico médico para sugestões inteligentes.',
          impact: 'Atendimento personalizado'
        },
        {
          title: 'Lembretes Automáticos',
          description: 'Notificações inteligentes que reduzem faltas e reagendamentos.',
          impact: 'Redução de 70% nas faltas'
        }
      ]
    },
    {
      category: 'Para a Equipe Médica',
      icon: Shield,
      benefits: [
        {
          title: 'Agenda Otimizada',
          description: 'Distribuição inteligente de consultas considerando especialidade e complexidade.',
          impact: 'Melhor organização'
        },
        {
          title: 'Redução de Interrupções',
          description: 'Menos ligações e interrupções durante o atendimento médico.',
          impact: 'Foco no paciente'
        },
        {
          title: 'Informações Completas',
          description: 'Acesso rápido ao histórico e motivo da consulta antes do atendimento.',
          impact: 'Atendimento mais eficaz'
        }
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Carlos Silva',
      role: 'Diretor Médico - Hospital São Lucas',
      content: 'O AgendaIA transformou completamente nossa operação. Reduzimos o tempo de agendamento em 80% e a satisfação dos pacientes aumentou drasticamente.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Coordenadora de Agendamento - Clínica Vida',
      content: 'Antes gastávamos horas no telefone. Agora nossa equipe pode focar no que realmente importa: cuidar dos pacientes.',
      rating: 5
    }
  ]

  return (
    <section id="benefits" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
      </div>
      
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{animationDelay: '3s'}} />
      </div>
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-index="0">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-white mb-6">
              Benefícios que
              <span className="text-gradient block">Transformam Resultados</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Descubra como o AgendaIA gera impacto positivo mensurável para hospitais, 
              pacientes e equipes médicas.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" data-index="1">
          {mainBenefits.map((benefit, index) => {
            const Icon = benefit.icon
            const counterKey = Object.keys(counters)[index] as keyof typeof counters
            
            return (
              <div 
                key={index}
                className={`text-center transition-all duration-700 ${
                  visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="glass-morphism rounded-3xl p-6 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border border-slate-600/30">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${benefit.color} bg-opacity-10`}>
                    <Icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  
                  <div className={`text-4xl lg:text-5xl font-bold mb-2 ${benefit.color}`}>
                    {counters[counterKey]}%
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detailed Benefits */}
        <div className="space-y-16 mb-20">
          {detailedBenefits.map((category, categoryIndex) => {
            const Icon = category.icon
            
            return (
              <div 
                key={categoryIndex}
                data-index={categoryIndex + 2}
                className={`transition-all duration-700 ${
                  visibleItems.includes(categoryIndex + 2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {category.category}
                    </h3>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <div 
                      key={benefitIndex}
                      className={`glass-morphism rounded-3xl p-6 group hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 border border-slate-600/30 ${
                        visibleItems.includes(categoryIndex + 2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${benefitIndex * 200 + 300}ms` }}
                    >
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-300 leading-relaxed mb-4">
                          {benefit.description}
                        </p>
                        <div className="inline-flex items-center space-x-2 text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          <Zap className="w-4 h-4" />
                          <span>{benefit.impact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="glass-morphism rounded-3xl p-8 lg:p-12 border border-slate-600/30" data-index="5">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                O que nossos clientes dizem
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Hospitais que já transformaram sua gestão de agendamentos com o AgendaIA.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`glass-morphism rounded-xl p-6 shadow-lg border border-slate-600/30 transition-all duration-500 ${
                    visibleItems.includes(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-index="6">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Pronto para transformar seus resultados?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Junte-se aos hospitais que já estão colhendo os benefícios do AgendaIA. 
              Comece sua transformação digital hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#pricing" 
                className="btn-primary inline-flex items-center space-x-2 group"
              >
                <span>Ver Planos e Preços</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-secondary">
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
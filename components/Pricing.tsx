'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Crown, 
  Rocket,
  ArrowRight,
  MessageCircle,
  Users,
  BarChart3,
  Shield,
  Headphones
} from 'lucide-react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)
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

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfeito para clínicas pequenas',
      monthlyPrice: 297,
      annualPrice: 247,
      savings: 17,
      popular: false,
      features: [
        { name: 'Até 500 agendamentos/mês', included: true },
        { name: 'WhatsApp Business API', included: true },
        { name: 'IA básica de agendamento', included: true },
        { name: 'Relatórios básicos', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Integração com 1 sistema', included: true },
        { name: 'Customização avançada', included: false },
        { name: 'Suporte prioritário', included: false },
        { name: 'Analytics avançados', included: false },
        { name: 'Múltiplas unidades', included: false }
      ],
      cta: 'Começar Gratuitamente',
      highlight: false
    },
    {
      name: 'Professional',
      icon: Crown,
      description: 'Ideal para hospitais médios',
      monthlyPrice: 597,
      annualPrice: 497,
      savings: 17,
      popular: true,
      features: [
        { name: 'Até 2.000 agendamentos/mês', included: true },
        { name: 'WhatsApp Business API', included: true },
        { name: 'IA avançada com ML', included: true },
        { name: 'Relatórios completos', included: true },
        { name: 'Suporte prioritário', included: true },
        { name: 'Integração com 3 sistemas', included: true },
        { name: 'Customização avançada', included: true },
        { name: 'Analytics avançados', included: true },
        { name: 'Até 3 unidades', included: true },
        { name: 'Treinamento da equipe', included: false }
      ],
      cta: 'Teste Grátis por 30 Dias',
      highlight: true
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      description: 'Para grandes redes hospitalares',
      monthlyPrice: 1197,
      annualPrice: 997,
      savings: 17,
      popular: false,
      features: [
        { name: 'Agendamentos ilimitados', included: true },
        { name: 'WhatsApp Business API Premium', included: true },
        { name: 'IA personalizada', included: true },
        { name: 'Relatórios personalizados', included: true },
        { name: 'Suporte 24/7', included: true },
        { name: 'Integrações ilimitadas', included: true },
        { name: 'Customização completa', included: true },
        { name: 'Analytics empresariais', included: true },
        { name: 'Unidades ilimitadas', included: true },
        { name: 'Treinamento e consultoria', included: true }
      ],
      cta: 'Falar com Especialista',
      highlight: false
    }
  ]

  const features = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Business API',
      description: 'Integração oficial com máxima confiabilidade e recursos avançados'
    },
    {
      icon: Users,
      title: 'Gestão Multiusuário',
      description: 'Controle de acesso e permissões para toda sua equipe'
    },
    {
      icon: BarChart3,
      title: 'Analytics Avançados',
      description: 'Relatórios detalhados e insights para otimização contínua'
    },
    {
      icon: Shield,
      title: 'Segurança LGPD',
      description: 'Proteção total de dados com compliance garantido'
    },
    {
      icon: Headphones,
      title: 'Suporte Especializado',
      description: 'Equipe técnica especializada em soluções hospitalares'
    }
  ]

  const faqs = [
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento. Seus dados ficam disponíveis por 30 dias após o cancelamento.'
    },
    {
      question: 'Como funciona o período de teste?',
      answer: 'Oferecemos 30 dias de teste gratuito com acesso completo a todas as funcionalidades do plano escolhido. Não é necessário cartão de crédito para começar.'
    },
    {
      question: 'Vocês oferecem treinamento?',
      answer: 'Sim! Todos os planos incluem materiais de treinamento. Os planos Professional e Enterprise incluem sessões de treinamento ao vivo com nossa equipe.'
    },
    {
      question: 'Como funciona a integração?',
      answer: 'Nossa equipe técnica cuida de toda a integração com seus sistemas existentes. O processo leva de 3 a 7 dias úteis dependendo da complexidade.'
    }
  ]

  return (
    <section id="pricing" className="py-32 relative overflow-hidden" ref={sectionRef}>
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
              Planos que se Adaptam ao
              <span className="text-gradient block">Seu Negócio</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Escolha o plano ideal para o tamanho do seu hospital. 
              Todos incluem teste gratuito e suporte especializado.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center glass-morphism rounded-lg p-1 shadow-lg border border-slate-600/30">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  !isAnnual ? 'bg-primary-600 text-white shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 relative ${
                  isAnnual ? 'bg-primary-600 text-white shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                Anual
                <span className="absolute -top-2 -right-2 bg-success-500 text-white text-xs px-2 py-1 rounded-full">
                  -17%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20" data-index="1">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            
            return (
              <div 
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  plan.highlight ? 'scale-105 lg:scale-110' : 'scale-100'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className={`glass-morphism rounded-3xl p-8 h-full relative border transition-all duration-300 ${
                  plan.highlight 
                    ? 'border-cyan-400/30 shadow-2xl shadow-cyan-500/25' 
                    : 'border-slate-600/30 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/25'
                }`}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      plan.highlight ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-600'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white">
                        R$ {price.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-slate-300">/mês</span>
                    </div>
                    
                    {isAnnual && (
                      <div className="mt-2">
                        <span className="text-sm text-slate-400 line-through">
                          R$ {plan.monthlyPrice.toLocaleString('pt-BR')}/mês
                        </span>
                        <span className="ml-2 text-sm text-green-400 font-medium">
                          Economize {plan.savings}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-slate-300' : 'text-slate-500'
                        }`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <a
                      href="#contact"
                      className={`w-full inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                        plan.highlight
                          ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                          : 'bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 hover:border-primary-700'
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Section */}
        <div className="glass-morphism rounded-3xl p-8 lg:p-12 shadow-lg mb-20 border border-slate-600/30" data-index="2">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Recursos Inclusos em Todos os Planos
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Funcionalidades essenciais que garantem o sucesso da sua implementação.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      visibleItems.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-xl mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto" data-index="3">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Perguntas Frequentes
              </h3>
              <p className="text-slate-300">
                Tire suas dúvidas sobre nossos planos e funcionalidades.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`glass-morphism rounded-xl p-6 shadow-lg border border-slate-600/30 transition-all duration-500 ${
                    visibleItems.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16" data-index="4">
          <div className={`transition-all duration-700 ${
            visibleItems.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Pronto para começar sua transformação?
              </h3>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                Comece com 30 dias grátis e veja como o AgendaIA pode revolucionar 
                o agendamento do seu hospital.
              </p>
              <a 
                href="#contact" 
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center space-x-2"
              >
                <span>Começar Teste Gratuito</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
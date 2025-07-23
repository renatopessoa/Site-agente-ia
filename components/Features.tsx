'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MessageCircle, Calendar, Clock, Bot, Zap, Shield, BarChart3, Users, 
  CheckCircle, ArrowRight, Brain, Cpu, Network, Database, Sparkles,
  Activity, Layers, Globe, Lock, Rocket
} from 'lucide-react'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  const features = [
    {
      icon: Brain,
      title: "Inteligência Artificial Avançada",
      description: "Processamento de linguagem natural com redes neurais profundas para compreensão contextual perfeita",
      color: "from-cyan-400 via-blue-500 to-purple-600",
      gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20",
      border: "border-cyan-400/30",
      glow: "shadow-cyan-500/25",
      benefits: ['Disponível 24/7', 'Múltiplos idiomas', 'Interface familiar']
    },
    {
      icon: Rocket,
      title: "Agendamento ",
      description: "Algoritmos de otimização quântica que processam milhões de combinações em milissegundos",
      color: "from-purple-400 via-pink-500 to-red-500",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-600/20",
      border: "border-purple-400/30",
      glow: "shadow-purple-500/25",
      benefits: ['Otimização automática', 'Redução de conflitos', 'Sugestões personalizadas']
    },
    {
      icon: Network,
      title: "Sincronização Holográfica",
      description: "Rede distribuída com sincronização em tempo real através de múltiplos sistemas hospitalares",
      color: "from-green-400 via-emerald-500 to-teal-600",
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-600/20",
      border: "border-green-400/30",
      glow: "shadow-green-500/25",
      benefits: ['Atualizações instantâneas', 'Notificações automáticas', 'Sincronização completa']
    },
    {
      icon: Database,
      title: "Memória Adaptativa",
      description: "Sistema de aprendizado contínuo que evolui com cada interação, criando perfis únicos",
      color: "from-orange-400 via-amber-500 to-yellow-500",
      gradient: "bg-gradient-to-br from-orange-500/20 to-amber-600/20",
      border: "border-orange-400/30",
      glow: "shadow-orange-500/25",
      benefits: ['Perfis detalhados', 'Histórico médico', 'Lembretes inteligentes']
    },
    {
      icon: Activity,
      title: "Análise Preditiva",
      description: "Machine learning que antecipa necessidades e otimiza recursos antes mesmo da demanda",
      color: "from-indigo-400 via-violet-500 to-purple-600",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-violet-600/20",
      border: "border-indigo-400/30",
      glow: "shadow-indigo-500/25",
      benefits: ['Dashboards interativos', 'Previsões de demanda', 'ROI mensurado']
    },
    {
      icon: Lock,
      title: "Criptografia Quântica",
      description: "Segurança de nível militar com criptografia quântica e proteção contra ameaças futuras",
      color: "from-slate-400 via-gray-500 to-zinc-600",
      gradient: "bg-gradient-to-br from-slate-500/20 to-gray-600/20",
      border: "border-slate-400/30",
      glow: "shadow-slate-500/25",
      benefits: ['Criptografia avançada', 'Auditoria completa', 'Compliance garantido']
    }
  ]

  const mainFeatures = [
    {
      icon: Sparkles,
      title: 'Interface Intuitiva',
      description: 'Experiência familiar do WhatsApp que todos já conhecem'
    },
    {
      icon: Zap,
      title: 'Resposta Instantânea',
      description: 'Processamento em menos de 2 segundos para qualquer solicitação'
    },
    {
      icon: CheckCircle,
      title: 'Precisão de 99.8%',
      description: 'IA treinada especificamente para o contexto hospitalar brasileiro'
    }
  ]

  return (
    <motion.section 
      ref={ref}
      id="features" 
      className="py-32 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]" />
        
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Revolutionary Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 mb-8"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(34, 211, 238, 0.3)',
                '0 0 40px rgba(168, 85, 247, 0.3)',
                '0 0 20px rgba(34, 211, 238, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-mono text-sm">TECNOLOGIA AVANÇADA</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              {/* Funcionalidades */}
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-mono">
              Inteligência Artificial Revolucionária
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Tecnologia de IA revolucionária que transcende os limites convencionais do agendamento médico
          </p>
        </motion.div>

        {/* Revolutionary Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.div
                key={index}
                className={`group relative glass-morphism rounded-3xl p-8 ${feature.border} ${feature.glow} hover:shadow-2xl transition-all duration-500`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
              >
                {/* Holographic Background */}
                <div className={`absolute inset-0 ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Floating Icon */}
                <motion.div 
                  className="relative mb-8"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300 font-mono">
                  {feature.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Neural Benefits */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.li 
                      key={benefitIndex} 
                      className="flex items-center text-sm text-slate-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (benefitIndex * 0.1) }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      </motion.div>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                {/* Data Streams */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                  {Array.from({ length: 3 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-8 bg-gradient-to-t from-transparent via-cyan-400 to-transparent mb-1"
                      animate={{
                        opacity: [0, 1, 0],
                        scaleY: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Revolutionary Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="glass-morphism rounded-3xl p-12 border border-cyan-400/30 neon-glow max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Globe className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Pronto para a
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-mono">
                Revolução Neural?
              </span>
            </h3>
            
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Junte-se à elite dos hospitais que já transcenderam os limites convencionais do atendimento médico
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 flex items-center">
                  Iniciar Transformação Neural
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button 
                className="group px-8 py-4 glass-morphism border border-purple-400/30 rounded-2xl font-bold text-purple-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <Layers className="w-5 h-5 mr-2" />
                  Explorar Casos Quânticos
                </span>
              </motion.button>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 6 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Features
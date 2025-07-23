'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Bot, 
  MessageCircle, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Play,
  Star,
  Users,
  Zap,
  Brain,
  Activity,
  Cpu,
  Database,
  Network,
  Shield,
  Atom,
  Dna,
  Orbit,
  Waves,
  Hexagon,
  Triangle,
  Layers3,
  Scan,
  Radar,
  Wifi
} from 'lucide-react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

const Hero = () => {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number, type: string}>>([])
  const [quantumNodes, setQuantumNodes] = useState<Array<{id: number, x: number, y: number, connections: number[]}>>([])
  const [neuralPulse, setNeuralPulse] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  // Generate quantum particles and neural network
  useEffect(() => {
    const particleTypes = ['quantum', 'neural', 'data', 'energy']
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      type: particleTypes[Math.floor(Math.random() * particleTypes.length)]
    }))
    setParticles(newParticles)

    // Generate quantum nodes network
    const nodes = Array.from({ length: 12 }, (_, i) => {
      const connections = Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => 
        Math.floor(Math.random() * 12)
      ).filter(conn => conn !== i)
      
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        connections
      }
    })
    setQuantumNodes(nodes)
  }, [])

  // Neural pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralPulse(prev => (prev + 1) % 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect()
      if (rect) {
        mouseX.set((e.clientX - rect.left) / rect.width * 100)
        mouseY.set((e.clientY - rect.top) / rect.height * 100)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const messages = [
    {
      type: 'user',
      text: 'Olá! Preciso agendar uma ressonância magnética urgente',
      time: '14:32',
      avatar: '👤'
    },
    {
      type: 'bot',
      text: '🤖 Analisando disponibilidade em tempo real... Encontrei 3 opções para você!',
      time: '14:32',
      avatar: '🧠'
    },
    {
      type: 'user', 
      text: 'Qual a mais próxima?',
      time: '14:33',
      avatar: '👤'
    },
    {
      type: 'bot',
      text: '⚡ Hospital São Lucas - Amanhã 08:30\n💰 R$ 450,00 (convênio aceito)\n📍 15 min de você',
      time: '14:33',
      avatar: '🧠'
    },
    {
      type: 'user',
      text: '✨ Perfeito! Confirma esse horário',
      time: '14:34',
      avatar: '👤'
    },
    {
      type: 'bot',
      text: '🎉 CONFIRMADO!\n📅 Amanhã 08:30\n📱 Lembrete enviado\n🚗 Uber agendado às 08:00',
      time: '14:34',
      avatar: '🧠'
    }
  ]

  // Auto-advance messages
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true)
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length)
        setIsTyping(false)
      }, 1500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const benefits = [
    { icon: Brain, text: 'IA Avançada com Machine Learning', color: 'from-cyan-400 to-blue-500' },
    { icon: Zap, text: 'Agendamento em Tempo Real 24/7', color: 'from-purple-400 to-pink-500' },
    { icon: Shield, text: 'Segurança LGPD e Criptografia', color: 'from-green-400 to-emerald-500' },
    { icon: Network, text: 'Integração Multi-hospitalar', color: 'from-orange-400 to-red-500' }
  ]

  const stats = [
    { number: '150K+', label: 'Agendamentos IA', icon: Activity },
    { number: '500+', label: 'Hospitais Conectados', icon: Database },
    { number: '99.8%', label: 'Precisão da IA', icon: Cpu },
    { number: '<2s', label: 'Tempo Resposta', icon: Zap }
  ]

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)
        `
      }}
    >
      {/* Quantum Particle System */}
      <div className="absolute inset-0">
        {particles.map((particle) => {
          const colors = {
            quantum: 'bg-gradient-to-r from-cyan-400 to-blue-500',
            neural: 'bg-gradient-to-r from-purple-400 to-pink-500',
            data: 'bg-gradient-to-r from-green-400 to-emerald-500',
            energy: 'bg-gradient-to-r from-orange-400 to-red-500'
          }
          
          return (
            <motion.div
              key={particle.id}
              className={`absolute w-2 h-2 rounded-full ${colors[particle.type as keyof typeof colors]} shadow-lg`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                filter: 'blur(0.5px)',
                boxShadow: `0 0 20px ${particle.type === 'quantum' ? '#06b6d4' : particle.type === 'neural' ? '#a855f7' : particle.type === 'data' ? '#10b981' : '#f97316'}`
              }}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.sin(particle.id) * 50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: particle.delay + 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </div>

      {/* Quantum Neural Network */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="quantum-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          
          {/* Neural Connections */}
          {quantumNodes.map((node) => 
            node.connections.map((connId, index) => {
              const targetNode = quantumNodes[connId]
              if (!targetNode) return null
              
              return (
                <motion.line
                  key={`${node.id}-${connId}-${index}`}
                  x1={node.x * 10}
                  y1={node.y * 10}
                  x2={targetNode.x * 10}
                  y2={targetNode.y * 10}
                  stroke="url(#quantum-gradient)"
                  strokeWidth="2"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: node.id * 0.2 + index * 0.1
                  }}
                />
              )
            })
          )}
          
          {/* Quantum Nodes */}
          {quantumNodes.map((node) => (
            <motion.circle
              key={node.id}
              cx={node.x * 10}
              cy={node.y * 10}
              r="8"
              fill="url(#quantum-gradient)"
              filter="url(#glow)"
              animate={{
                r: [6, 12, 6],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.id * 0.1
              }}
            />
          ))}
        </svg>
      </div>

      {/* Interactive Holographic Overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${springX.get()}% ${springY.get()}%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
        }}
      />

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'holographic-grid 20s linear infinite'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen py-20">
          {/* Revolutionary Left Content */}
          <motion.div 
            className="space-y-12 relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Quantum Status Badge */}
            <motion.div 
              className="inline-flex items-center space-x-4 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
              <div className="relative flex items-center space-x-4 bg-black/40 backdrop-blur-xl border border-cyan-400/30 px-8 py-4 rounded-3xl">
                <motion.div
                  className="relative"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <Atom className="w-6 h-6 text-cyan-400" />
                  <motion.div 
                    className="absolute inset-0 bg-cyan-400 rounded-full"
                    animate={{ scale: [0, 2, 0], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-cyan-300 font-bold font-mono text-sm tracking-wider">Agent AI</span>
                  <span className="text-purple-300 font-mono text-xs">STATUS: ONLINE</span>
                </div>
                <motion.div
                  className="flex space-x-1"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Holographic 3D Headline */}
            <div className="space-y-8 relative">
              {/* 3D Floating Elements */}
              <div className="absolute -top-10 -left-10 opacity-60">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Hexagon className="w-8 h-8 text-cyan-400" />
                </motion.div>
              </div>
              
              <div className="absolute -top-5 -right-5 opacity-60">
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -180, -360],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <Triangle className="w-6 h-6 text-purple-400" />
                </motion.div>
              </div>

              <motion.h1 
                className="text-6xl lg:text-8xl font-black leading-none relative"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                style={{ perspective: '1000px' }}
              >
                <motion.div className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-sm">AGENDAMENTO</span>
                  <span className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">AGENDAMENTO</span>
                </motion.div>
                <br />
                <motion.div 
                  className="relative inline-block"
                  animate={{
                    textShadow: [
                      '0 0 20px #06b6d4, 0 0 40px #8b5cf6, 0 0 60px #ec4899',
                      '0 0 40px #8b5cf6, 0 0 60px #ec4899, 0 0 80px #06b6d4',
                      '0 0 20px #06b6d4, 0 0 40px #8b5cf6, 0 0 60px #ec4899'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-black">INTELIGÊNTE</span>
                </motion.div>
                <br />
                <motion.div className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent blur-sm">VIA WHATSAPP</span>
                  <span className="relative bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">VIA WHATSAPP</span>
                </motion.div>
              </motion.h1>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl" />
                <p className="relative text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl font-light bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  Nosso <motion.span 
                    className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >agente IA</motion.span> processa linguagem natural com 
                  <motion.span 
                    className="font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  > precisão neural</motion.span>, analisa disponibilidade em 
                  <motion.span 
                    className="font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  > tempo real</motion.span> e agenda consultas com tecnologia revolucionária.
                </p>
              </motion.div>
            </div>

            {/* Advanced Benefits */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4 glass-morphism p-4 rounded-xl hover:neon-glow transition-all duration-300"
                    whileHover={{ x: 10, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${benefit.color} animate-pulse-slow`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-200 font-medium">{benefit.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Revolutionary 3D CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 pt-12"
              initial={{ opacity: 0, y: 40, rotateX: -45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
              style={{ perspective: '1000px' }}
            >
              {/* Primary Quantum Button */}
              <motion.button 
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl font-bold text-white overflow-hidden transition-all duration-500 hover:scale-110 shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.5), 0 0 0 1px rgba(6, 182, 212, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 20px 40px -12px rgba(6, 182, 212, 0.3)',
                    '0 25px 50px -12px rgba(139, 92, 246, 0.4)',
                    '0 20px 40px -12px rgba(6, 182, 212, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500" />
                </div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </div>
                
                <span className="relative flex items-center gap-3 text-lg">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-6 h-6" />
                  </motion.div>
                  INICIAR REVOLUÇÃO
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              {/* Secondary Holographic Button */}
              <motion.button 
                className="group relative px-10 py-5 border-2 border-transparent rounded-2xl font-bold text-white transition-all duration-500 hover:scale-110 overflow-hidden"
                style={{
                  background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1)) padding-box, linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4) border-box'
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: -5,
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Holographic Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Neural Network Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 100 50">
                    <defs>
                      <pattern id="neural" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3" />
                        <line x1="10" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                        <line x1="10" y1="10" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#neural)" />
                  </svg>
                </div>
                
                <span className="relative flex items-center gap-3 text-lg">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Play className="w-6 h-6" />
                  </motion.div>
                  DEMO INTERATIVO
                </span>
              </motion.button>
            </motion.div>

            {/* Quantum Data Statistics */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"
              initial={{ opacity: 0, y: 40, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              style={{ perspective: '1000px' }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={index}
                    className="relative group cursor-pointer"
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                      z: 50
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Holographic Container */}
                    <div className="relative bg-gradient-to-br from-black/40 via-gray-900/30 to-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
                      {/* Animated Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"
                        animate={{
                          background: [
                            'linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))',
                            'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05))',
                            'linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05), rgba(139, 92, 246, 0.05))'
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      
                      {/* Floating Data Particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`
                            }}
                            animate={{
                              y: [-20, -40, -20],
                              opacity: [0.3, 0.8, 0.3],
                              scale: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Holographic Border Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)',
                            '0 0 30px rgba(139, 92, 246, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.1)',
                            '0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      />
                      
                      <div className="relative text-center">
                        {/* Quantum Icon */}
                        <motion.div 
                          className="flex justify-center mb-4"
                          animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                          }}
                        >
                          <div className="relative">
                            <Icon className="w-8 h-8 text-cyan-400 relative z-10" />
                            <motion.div 
                              className="absolute inset-0 bg-cyan-400 rounded-full blur-md"
                              animate={{ scale: [0, 2, 0], opacity: [0, 0.5, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                            />
                          </div>
                        </motion.div>
                        
                        {/* Quantum Value Display */}
                        <motion.div 
                          className="text-3xl lg:text-4xl font-black mb-3 relative"
                          initial={{ scale: 0, rotateY: -180 }}
                          animate={{ scale: 1, rotateY: 0 }}
                          transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-sm scale-110">
                            {stat.number}
                          </span>
                          <motion.span 
                            className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                            animate={{
                              textShadow: [
                                '0 0 10px rgba(6, 182, 212, 0.5)',
                                '0 0 20px rgba(139, 92, 246, 0.6)',
                                '0 0 10px rgba(6, 182, 212, 0.5)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          >
                            {stat.number}
                          </motion.span>
                        </motion.div>
                        
                        {/* Neural Label */}
                        <motion.div 
                          className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 relative font-mono"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                          <span className="relative">{stat.label}</span>
                        </motion.div>
                        
                        {/* Data Stream Indicator */}
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100"
                          animate={{
                            scaleX: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.4
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* 3D Projection Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Revolutionary 3D Chat Interface */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Holographic Phone Frame */}
            <div className="relative max-w-md mx-auto">
              <motion.div 
                className="relative glass-morphism rounded-[3rem] p-4 neon-glow"
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Screen */}
                <div className="bg-slate-800/90 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-cyan-400/30">
                  {/* Futuristic Header */}
                  <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 px-6 py-4 flex items-center space-x-4">
                    <motion.div 
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Brain className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-lg font-mono">Agent AI</div>
                      <div className="text-cyan-200 text-sm flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span>Processando IA...</span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Activity className="w-5 h-5 text-green-400" />
                    </motion.div>
                  </div>

                  {/* Revolutionary Chat Messages */}
                  <div className="p-6 space-y-4 h-[500px] overflow-y-auto bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
                    {messages.slice(0, currentMessage + 1).map((message, index) => (
                      <motion.div 
                        key={index}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <div className={`flex items-end space-x-2 max-w-xs ${
                          message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                        }`}>
                          {/* Avatar */}
                          <motion.div 
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                              message.type === 'user' 
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                                : 'bg-gradient-to-r from-purple-500 to-pink-500'
                            }`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {message.avatar}
                          </motion.div>
                          
                          {/* Message Bubble */}
                          <motion.div 
                            className={`px-4 py-3 rounded-2xl backdrop-blur-sm border ${
                              message.type === 'user'
                                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30 text-cyan-100'
                                : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-purple-100'
                            }`}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="text-sm font-medium whitespace-pre-line">
                              {message.text}
                            </div>
                            <div className="text-xs opacity-70 mt-1 font-mono">
                              {message.time}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div 
                        className="flex justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm">
                            🧠
                          </div>
                          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 px-4 py-3 rounded-2xl">
                            <div className="flex space-x-1">
                              <motion.div 
                                className="w-2 h-2 bg-purple-400 rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                              />
                              <motion.div 
                                className="w-2 h-2 bg-purple-400 rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                              />
                              <motion.div 
                                className="w-2 h-2 bg-purple-400 rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Floating Holographic Elements */}
              <motion.div 
                className="absolute -top-8 -right-8 glass-morphism p-4 rounded-2xl neon-glow"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <MessageCircle className="w-8 h-8 text-cyan-400" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 -left-8 glass-morphism p-4 rounded-2xl neon-glow"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Calendar className="w-8 h-8 text-purple-400" />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-12 glass-morphism p-4 rounded-2xl neon-glow"
                animate={{ 
                  x: [0, -5, 0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Clock className="w-8 h-8 text-green-400" />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 -right-12 glass-morphism p-4 rounded-2xl neon-glow"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Cpu className="w-8 h-8 text-orange-400" />
              </motion.div>

              {/* Data Streams */}
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-20 bg-gradient-to-t from-transparent via-cyan-400 to-transparent"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${10 + i * 5}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scaleY: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
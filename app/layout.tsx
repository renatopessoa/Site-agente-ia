import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AgendaIA - Agente de IA para Agendamento Hospitalar',
  description: 'Revolucione o agendamento de exames e consultas hospitalares com nosso agente de IA via WhatsApp. Automatize processos, reduza filas e melhore a experiência do paciente.',
  keywords: 'agente IA, agendamento hospitalar, WhatsApp, automação médica, consultas, exames',
  authors: [{ name: 'AgendaIA Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AgendaIA - Agente de IA para Agendamento Hospitalar',
    description: 'Revolucione o agendamento de exames e consultas hospitalares com nosso agente de IA via WhatsApp.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
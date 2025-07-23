# Site AgendaIA

Landing page para o AgendaIA - Sistema de agendamento inteligente com IA.

## 📋 Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/renatopessoa/Site-agente-ia.git
cd Site-agente-ia
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **Prisma** - ORM para banco de dados

## 📁 Estrutura do Projeto

```
├── app/                 # App Router do Next.js 14
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes React
│   ├── Header.tsx      # Cabeçalho
│   ├── Hero.tsx        # Seção hero
│   ├── Features.tsx    # Seção de funcionalidades
│   ├── Benefits.tsx    # Seção de benefícios
│   ├── HowItWorks.tsx  # Como funciona
│   ├── Pricing.tsx     # Planos de preços
│   ├── Contact.tsx     # Contato
│   └── Footer.tsx      # Rodapé
├── prisma/             # Configuração do Prisma
└── public/             # Arquivos estáticos
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🔧 Configuração do Banco de Dados

O projeto usa Prisma como ORM. Para configurar o banco de dados:

1. Configure sua string de conexão no arquivo `.env`:

```env
DATABASE_URL="sua_string_de_conexao"
```

2. Execute as migrações:

```bash
npx prisma migrate dev
```

3. Gere o cliente Prisma:

```bash
npx prisma generate
```

## 🚨 Importantes

⚠️ **NUNCA COMMITE:**

- `node_modules/` - Pasta das dependências
- `.next/` - Pasta de build do Next.js
- `.env*` - Arquivos de ambiente

Estes arquivos e pastas já estão no `.gitignore`.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através da seção de contato do site.

## 📄 Licença

Este projeto está sob a licença MIT.

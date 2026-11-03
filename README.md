# Ôxe Maker 2026 — Site Oficial

Site oficial da **6ª edição do Ôxe Maker (2021–2026)** — Mostra de Robótica Educacional e Cultura Maker/Geek da **GRE Metropolitana Norte** (Rede Pública Estadual de Pernambuco).

- **Data do Evento**: 27 de novembro de 2026 (Sexta-feira) — Das 07h00 às 18h00
- **Local**: ETE José de Alencar — Ginásio e Pátio Central
- **Endereço**: Rua João Francisco Batista, 170, Janga, Paulista – PE, 53439-410
- **Tema 2026**: *"Vidas, Escolas e Comunidades: Educar para a Promoção da Justiça Socioambiental"*
- **Slogan**: *"Metropolitana Norte · Vidas · Escolas · Comunidade"*
- **Mascote**: Calango Maker (Lagarto com óculos maker e detalhes robóticos)
- **Organizador**: GRE Metropolitana Norte · Secretaria de Educação e Esportes de Pernambuco

---

## 🛠️ Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS 4**
- **React Router DOM 7** (Navegação SPA client-side)
- **Lucide Icons**
- **Fontes Google Fonts**: Londrina Solid (títulos), Space Mono (labels/código), Inter (corpo)

---

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18+)
- npm ou yarn

### Como rodar em desenvolvimento
```bash
npm install
npm run dev
```
O servidor de desenvolvimento estará disponível em `http://localhost:3000`.

### Como compilar para produção
```bash
npm run build
npm run preview
```

### Como verificar tipagem e linting
```bash
npm run lint
```

### Deploy (GitHub Pages)

O site é publicado automaticamente em **`https://netosants.github.io/Site-OxeMaker/`**:

- `vite.config.ts` usa `base: '/Site-OxeMaker/'` e o app roda com **HashRouter** (rotas no formato `/#/torneio`), o que dispensa configuração server-side.
- O workflow **`.github/workflows/deploy.yml`** compila o projeto e publica a cada **push na branch `main`**.
- No GitHub, em *Settings → Pages*, o **Source** deve estar em **"GitHub Actions"**.

> 💡 Toda atualização de conteúdo ou código que for para o `main` sobe o site sozinha.

---

## 📁 Arquitetura do Projeto

O código foi organizado em camadas modulares para facilitar manutenções futuras sem tocar na estrutura do JSX:

```text
├── index.html                   # HTML base com tags OpenGraph/SEO
├── public/
│   └── editais/                 # PDFs dos editais para download
└── src/
    ├── core/                    # DADOS CENTRALIZADOS (FONTE ÚNICA DA VERDADE)
    │   ├── types.ts             # Interfaces TypeScript de todo o evento
    │   ├── images.ts            # Resolve as imagens WebP de src/assets/img
    │   └── constants.ts         # TODOS OS TEXTOS, DATAS, LINKS E TABELAS EDITÁVEIS
    ├── assets/
    │   └── img/                 # Imagens otimizadas em WebP (~474 KB no total)
│   ├── components/             # Componentes reutilizáveis
    │   │   ├── Navbar.tsx          # Cabeçalho responsivo com menu mobile animado
    │   │   ├── Footer.tsx          # Rodapé compacto com slogan, tema e parceiros
    │   │   ├── Logo.tsx            # Marca oficial com tipografia e mascote
    │   │   ├── CalangoMascot.tsx   # Mascote Calango vetorial animado (SVG)
    │   │   ├── CountdownTimer.tsx  # Contagem regressiva ao vivo para 27/11/2026 07h00
    │   │   ├── AnimatedCounter.tsx # Contadores com IntersectionObserver
    │   │   ├── EditalModal.tsx     # Modal de leitura e download de editais técnicos
    │   │   ├── ScrollToTop.tsx     # Restaura scroll ao trocar de rota
    │   │   └── MainLayout.tsx       # Shell com fundo de glifos de ciência animados (reagem ao scroll)
    │   ├── features/               # Telas do evento
    │   │   ├── home/               # Hero, Provas Sociais, 6 Destaques, Galeria, Patrocinadores e FAQ
    │   │   ├── programacao/        # Grade do dia com blocos Manhã e Tarde, filtros e busca
    │   │   ├── mapa/               # Endereço, Google Maps embed, transporte e setores
    │   │   ├── torneio/            # 3 categorias de robótica (Buzz Line, Buzz Pro, Sumô) e editais
    │   │   ├── geek/               # Cosplay e K-pop Dance Cover
    │   │   ├── oxethon/            # Hackathon, história e regulamento
    │   │   ├── oficinas/           # 9 propostas de oficinas enviadas pelas escolas
    │   │   ├── inscricoes/         # Central de inscrições por tópico
    │   │   └── sobre/              # História desde 2021, linha do tempo e Homenagem à Fundadora
    │   ├── index.css               # Tema escuro maker, sombras offset e tipografia justificada
    │   ├── App.tsx                 # Rotas React Router (HashRouter) — necessário para o GitHub Pages
    │   └── main.tsx                # Ponto de entrada React 19
```

---

## ✏️ Onde Editar Cada Conteúdo

Todos os textos, datas, nomes e links de inscrição estão concentrados no arquivo:
👉 **`/src/core/constants.ts`**

| O que você quer alterar | Onde editar em `/src/core/constants.ts` |
|---|---|
| **Data, hora e local do evento** | Objeto `EVENT_INFO.dates` e `EVENT_INFO.location` |
| **Links dos formulários Google Forms** | Objeto `EVENT_INFO.links` |
| **Contatos e Redes Sociais** | Objeto `EVENT_INFO.contact` |
| **Números de impacto (provas sociais)** | Array `METRICS_DATA` |
| **Grade de horários do evento** | Array `SCHEDULE_DATA` (blocos Manhã/Tarde) |
| **Categorias dos torneios de robótica** | Array `TOURNAMENTS_DATA` (3 categorias) |
| **Categorias geek (Cosplay e K-pop)** | Array `GEEK_CATEGORIES` |
| **Desafios e trilhas do Oxethon** | Objeto `OXETHON_INFO` |
| **Propostas e detalhes das oficinas** | Array `WORKSHOPS_DATA` |
| **Linha do tempo histórica (2021 a 2026)** | Array `TIMELINE_DATA` |
| **Texto de homenagem à Fundadora** | Objeto `FOUNDER_TRIBUTE` |
| **Patrocinadores e realizadores por tier** | Array `SPONSORS_TIERS` |
| **Perguntas frequentes (FAQ)** | Array `FAQ_DATA` |

---

## 🎨 Paleta de Cores Oficial (Maker / Neon)

- **Fundo Escuro**: `#050D34`
- **Amarelo Destaque**: `#FCC140`
- **Ciano Neon**: `#01B1FD`
- **Azul Institucional**: `#0030B5`
- **Fundo dos Cards**: `#1E292D`
- **Verde Calango**: `#107C41` / `#84CC16`

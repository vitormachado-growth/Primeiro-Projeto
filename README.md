# Landing Page - Edição de Vídeos (VT Edits)

Este projeto é uma Landing Page moderna e de alta conversão para serviços de edição de vídeos de jogos (gameplays, highlights, montages, e conteúdos para o TikTok/Shorts). O design foca num visual gamer ("Dark green/Black theme") para demonstrar qualidade e impacto.

## 🚀 Decisões Técnicas de Arquitetura

### Por que utilizamos a estrutura do Next.js?

A escolha do **Next.js** (App Router) não foi por acaso. Ele impacta de forma gritante na qualidade de entrega técnica do site:
1. **Componentização React**: Nos permite quebrar a interface em partes isoladas (Hero, Serviços, Estatísticas). Se a página crescer, criar componentes separados evita códigos espaguetes e facilita enormemente a manutenção.
2. **Otimizações Nativas e Performance**: O Next.js traz o `Server-Side Rendering` (SSR) e `Static Site Generation` (SSG). Uma página estática pré-renderizada é entregue quase instantaneamente para o usuário que clica no seu link. Quanto mais rápido o site carrega, menor a chance do cliente ir embora e maior a taxa de conversão do seu serviço.
3. **SEO Amigável**: Como o HTML já vem renderizado do servidor, os motores de busca (Google) conseguem ler imediatamente a página, o que é muito mais eficiente do que no React puro, ajudando sua Landing Page a ranquear facilmente em buscas.

### Como o Tailwind CSS impulsionou a Performance e Responsividade?

Diferente do CSS tradicional, o **Tailwind CSS** trouxe benefícios estruturais imediatos:
1. **Responsividade Integrada (Mobile-first)**: Tailwind facilita a criação de design flexível na mesma linha onde criamos o HTML. Usando os prefixos simples (como no código onde definimos `md:text-7xl` e `flex-col sm:flex-row`), a Landing Page pode passar instantaneamente do modelo do celular de botão empilhado para uma grade expansiva no Desktop sem a necessidade de criar grandes e pesadas folhas de estilo de _media queries_.
2. **Performance e CSS "Enxuto"**: O compilador do Tailwind funciona sob demanda. Quando publicamos o site (no nosso build de produção), ele analisa todos os arquivos em busca de classes usadas pelas nossas tags e gera apenas e puramente os estilos necessários que foram exigidos. Não há desperdício nem "peso" extra de CSS para o usuário baixar no primeiro acesso.
3. **Padrão de Cores Consistente**: O sistema de design restrito do Tailwind impediu as quebras de padrão e ajudou com as paletas (como o `green-500` da marca predefinido misturado com os tons de escuridão `zinc-950`). 

### 🌟 Funcionalidades Adicionadas
- **Tabela de Valores (`#pricing`)**: Uma vitrine de três planos destacados para estilos de edição populares (Shorts/TikTok, Highlights e Montages) projetada para fácil leitura e conversão. Atualização do texto comercial da vitrine destacada para "Preferido".
- **Integração Básica Customizada com WhatsApp**: Todos os botões comerciais da página ("Quero Este" da vitrine de preços e "Chamar no WhatsApp" do CTA) foram programados para levar o usuário diretamente para o WhatsApp com mensagens de interesse pré-formatadas baseadas no pacote clicado.
- **Seção de Depoimentos (Social Proof)**: Inclusão de depoimentos dinâmicos com a funcionalidade Next/Image (`<Image />`) para otimizar nativamente o carregamento das avatares fornecidas pelo usuário, sem afetar o Largest Contentful Paint (LCP).
- **Ícones de Social Media Customizados Vetoriais**: Substituição de ícones coloridos pesados de redes externas por SVGs Inlines minimalistas (outline) integrados diretamente no código da página para o TikTok, LinkedIn e Instagram no canto inferior, com efeito de highlight em cores neon e redirecionamento de URL.

### ✨ Efeitos e Animações de Alta Performance
Para elevar a página a um nível visual premium (Gaming / High-End Design), implementamos interações avançadas usando `framer-motion`:
1. **Scroll Animations**: Implementado efeito "smooth scroll reveal" nos elementos da página. Aceleração, timing e staggered children configurados de forma customizada. *Referência: [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)*.
2. **Spotlight Glow**: Os cards não têm apenas um hover simples, eles agem como um refletor (spotlight). O uso de `radial-gradient` associado ao cursor rastreia a posição do mouse e revela bordas iluminadas nas áreas exatas onde ele passa. *Referência: [Spotlight Card por Micha-Szlagor](https://codepen.io/Micha-Szlagor/pen/eYbdVZO)*.
3. **Física de Inclinação 3D (Tilt)**: Usando matemática de vetores combinada com `useMotionValue` e mola mecânica (`useSpring`), criamos um "peso" para os cards. A posição (`X/Y`) do ponteiro aplica as rotações `rotateX/Y`, torcendo os cards e interagindo harmoniosamente com a iluminação do spotlight. *Referência: [Samsung's Privacy Display por CalculateQuick](https://codepen.io/CalculateQuick/pen/dPpGNxr)*.

---

## 🛠️ Como rodar o projeto localmente

Para continuar desenvolvendo ou apenas ver a página funcionando no computador:

1. Certifique-se de que tenha o **Node.js** instalado na máquina.
2. Dentro do diretório do projeto, rode o seguinte comando para instalar as bibliotecas, caso não as tenha baixado ainda:
   ```bash
   npm install
   ```
3. Inicie o servidor em ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Em seguida, acesse no navegador: [http://localhost:3000](http://localhost:3000)
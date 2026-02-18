# Rossini Coperture - Website Aziendale

Sito web professionale per Rossini Coperture, azienda specializzata in coperture edili, impermeabilizzazioni, bonifica amianto e isolamento termico in Emilia-Romagna.

## 🚀 Caratteristiche

- ⚡ **React + TypeScript** con Vite per performance ottimali
- 🎨 **Design moderno** con Tailwind CSS
- 📱 **Responsive** per tutti i dispositivi
- ♿ **Accessibile** secondo standard WCAG
- 🎬 **Animazioni fluide** con Intersection Observer API
- 🖼️ **Gallery interattiva** con lightbox
- ⭐ **Carousel progetti** con effetto split-screen blur
- 💬 **Recensioni auto-scroll** continue
- 🤖 **AI Consultant** integrato

## 📋 Sezioni

1. **Hero** - Landing page con call-to-action
2. **Progetti in Evidenza** - Carousel automatico con 6 progetti recenti
3. **Servizi** - Coperture civili, industriali, bonifica, isolamento
4. **Chi Siamo** - Storia aziendale con statistiche animate
5. **Lavori Realizzati** - Gallery portfolio con filtri categoria
6. **Recensioni** - Carousel continuo testimonianze clienti
7. **Preventivo** - Form contatto e richiesta sopralluogo
8. **Contatti** - Informazioni di contatto e mappa

## 🛠️ Installazione

```bash
# Clone repository
git clone https://github.com/infopatrickautomation-wq/infopatrickautomation-wq-s-Org.git
cd infopatrickautomation-wq-s-Org

# Installa dipendenze
npm install

# Avvia server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

## 🏗️ Build per Produzione

```bash
# Crea build ottimizzata
npm run build

# Preview build produzione
npm run preview
```

## 🎨 Tecnologie Utilizzate

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Styling (via CDN)
- **Intersection Observer API** - Scroll animations
- **CSS Animations** - Transizioni fluide

## 📁 Struttura Progetto

```
infopatrickautomation-wq-s-Org/
├── components/          # Componenti React
│   ├── About.tsx
│   ├── AIConsultant.tsx
│   ├── FeaturedProjects.tsx
│   ├── FloatingActions.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Lightbox.tsx
│   ├── Portfolio.tsx
│   ├── QuoteForm.tsx
│   ├── Reviews.tsx
│   └── Services.tsx
├── hooks/              # Custom React hooks
│   ├── useAnimatedCounter.ts
│   ├── useIntersectionObserver.ts
│   └── useScrollAnimation.ts
├── constants.tsx       # Dati statici (servizi, progetti, recensioni)
├── types.ts           # TypeScript types
├── App.tsx            # Componente principale
├── index.tsx          # Entry point
└── index.html         # HTML template
```

## 🎯 Features Principali

### Carousel Progetti in Evidenza
- Auto-scroll continuo (6 secondi per slide)
- Effetto split-screen blur progressivo
- Titolo arancione brand (#F97316)
- Responsive (vertical split desktop, horizontal mobile)
- Navigazione con frecce e dots

### Gallery Portfolio
- Lightbox fullscreen vanilla JS
- Filtri per categoria (Residenziale, Industriale, Bonifica, Restauro)
- Lazy loading immagini
- Hover zoom 1.05x con overlay
- Keyboard navigation (ESC, ←, →)

### Recensioni Carousel
- Scroll continuo con requestAnimationFrame
- Pause on hover
- Loop infinito seamless
- Controlli manuali con 5s pause timer

### Animazioni Scroll
- Fade-in + slide-up su viewport entry
- Delay progressivo su card servizi
- Contatori animati con easing
- Performance ottimizzata con Intersection Observer

## 🌈 Design System

### Colori
- **Primary**: `#2563EB` (blue-600)
- **Secondary**: `#3B82F6` (blue-500)
- **CTA**: `#F97316` (orange-500)
- **Text**: `#111827` (gray-900)

### Typography
- **Heading**: 'Inter', sans-serif
- **Body**: 'Inter', sans-serif

## 📞 Contatti

**Rossini Coperture**
- 📧 Email: info@rossinicoperture.it
- 📱 Telefono: +39 XXX XXX XXXX
- 📍 Sede: Emilia-Romagna, Italia

## 📝 License

© 2024 Rossini Coperture. All rights reserved.

## 👨‍💻 Sviluppo

Sviluppato con ❤️ utilizzando modern web technologies.

---

**Note**: Questo è un progetto React con Tailwind via CDN per facilità di deployment. Per production, considera di installare Tailwind come dipendenza npm per ottimizzare le dimensioni del bundle.

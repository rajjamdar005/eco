# 🌱 ECO-ESSENTIA - Environmental Solutions & Consulting

[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

A modern, responsive website for environmental solutions and consulting services. Built with cutting-edge web technologies to showcase sustainable engineering solutions, environmental compliance services, and eco-friendly consulting.

## ✨ Features

### 🎯 Core Sections
- **Hero Section**: Engaging landing with animated statistics and prominent CTAs
- **Services**: 7 comprehensive environmental service categories with detailed descriptions
- **Portfolio**: Interactive project showcase with filtering and case studies
- **Testimonials**: Client reviews carousel with company logos and ratings
- **About**: Company information and expertise areas
- **Contact**: Enhanced form with validation and Google Maps integration

### 🚀 Interactive Features
- **WhatsApp Integration**: Floating chat button with predefined message templates
- **Smooth Scrolling**: Seamless navigation between sections
- **GSAP Animations**: Professional scroll-triggered animations
- **Mobile Responsive**: Optimized for all device sizes
- **Form Validation**: Real-time validation with user-friendly error messages
- **3D Graphics**: Three.js integration for enhanced visual appeal

### 🎨 Design System
- **Nature-Inspired Colors**: HSL-based color palette with environmental themes
- **Custom Animations**: Gentle floating, leaf sway, and nature pulse effects
- **Typography**: Poppins & Inter font combination for readability
- **Component Library**: shadcn/ui components with custom styling
- **Dark Mode Ready**: Built-in theme switching capability

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: GSAP (GreenSock Animation Platform)
- **3D Graphics**: Three.js with React Three Fiber
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React icon library

## 📋 Environment Requirements

- **Node.js**: 16.x or higher
- **npm**: 8.x or higher (or bun for faster package management)
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+

## 🚦 Getting Started

### 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ECO-ESSENTIA
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or for faster installation
   bun install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080`

### 🔧 Available Scripts

```bash
# Development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── Hero.tsx         # Landing section with CTA
│   ├── Services.tsx     # Service showcase
│   ├── Portfolio.tsx    # Project portfolio
│   ├── Testimonials.tsx # Client testimonials
│   ├── Contact.tsx      # Contact form & info
│   ├── WhatsAppFloat.tsx # WhatsApp chat widget
│   └── Navigation.tsx   # Responsive navigation
├── hooks/               # Custom React hooks
│   ├── useGSAPAnimations.tsx # Animation controller
│   └── use-toast.ts     # Toast notifications
├── pages/               # Route components
├── lib/                 # Utility functions
└── assets/              # Static assets
```

## 🎨 Customization

### 🎨 Design System

The project uses a nature-inspired design system:

- **Colors**: Defined in CSS custom properties using HSL values
- **Animations**: Custom keyframes for environmental themes
- **Typography**: Poppins for headings, Inter for body text
- **Spacing**: Consistent rhythm using Tailwind's spacing scale

### 📱 Component Guidelines

- All components use TypeScript interfaces for props
- Responsive design with mobile-first approach
- Consistent use of nature-themed CSS classes
- GSAP animations for smooth user interactions

## 🚀 Key Features Implemented

### ✅ Recently Added
- **Enhanced Hero Section**: Improved CTAs with trust indicators
- **Portfolio Section**: Interactive project showcase with filtering
- **Testimonials Carousel**: Auto-playing client reviews with navigation
- **WhatsApp Integration**: Floating chat widget with predefined templates
- **Form Validation**: Real-time validation with user feedback
- **Google Maps**: Embedded map with office location overlay
- **Performance Optimizations**: Lazy loading and bundle optimization

### 🎯 Service Categories
1. Pollution Control Board Services (MPCB Compliance)
2. Environmental Engineering Solutions
3. Water Treatment & Engineering
4. Air Pollution Control & Monitoring
5. Health & Safety (Fire Prevention)
6. Waste Management Solutions
7. Business Registration Services

## 🌐 Deployment

### Production Build
```bash
npm run build
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables if needed

## 📞 Contact Information

**Eco Essentia Environmental Solutions**
- 📍 Shop No.7, Minche Complex, Unchgaon, Kolhapur - 416 005
- 📱 Mr. P. S. Naik: +91 7249 5151 17
- 📱 Mr. S. S. Chougule: +91 9923 05 2606
- 📧 naiksamarjeet64@gmail.com
- 📧 sandipchougule2441@gmail.com

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with 💚 for a sustainable future**

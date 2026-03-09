import React from 'react';
import './CrystallineCobaltGridwork.css';

const CrystallineCobaltGridwork: React.FC = () => {
  return (
    <div className="component-wrapper" dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>V&A PROFESIONALES | Inteligencia Financiera y Contable</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            dark: '#020617',
                            primary: '#2563eb',
                            secondary: '#f97316',
                            accent: '#3b82f6',
                            glass: 'rgba(255, 255, 255, 0.03)',
                            border: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                        heading: ['Outfit', 'sans-serif']
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        }
                    }
                }
            }
        }
    </script>
    
</head>
<body class="font-sans antialiased">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 border-b border-white/5 bg-brand-dark/80 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <div class="flex items-center gap-2">
                    <div class="w-10 h-10 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center font-bold text-white shadow-lg">V&A</div>
                    <span class="text-xl font-bold font-heading tracking-tight">V&A <span class="text-brand-secondary">PROFESIONALES</span></span>
                </div>
                <div class="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
                    <a href="#servicios" class="nav-link transition-colors">Servicios</a>
                    <a href="#tecnologia" class="nav-link transition-colors">Tecnología</a>
                    <a href="#nosotros" class="nav-link transition-colors">Nosotros</a>
                    <a href="#contacto" class="nav-link transition-colors">Contacto</a>
                </div>
                <div class="flex items-center gap-4">
                    <a href="#" class="hidden sm:block text-sm font-semibold text-white/80">Login Portal</a>
                    <a href="#contacto" class="px-6 py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-500/20">Agenda una consulta</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden grid-bg">
        <div class="hero-gradient absolute inset-0 z-0"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="space-y-8">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest">
                        <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                        </span>
                        Contabilidad 4.0 en Perú
                    </div>
                    <h1 class="text-5xl lg:text-7xl font-extrabold font-heading leading-[1.1] text-white">
                        Transformamos tu contabilidad en <span class="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">inteligencia financiera</span>
                    </h1>
                    <p class="text-xl text-slate-400 max-w-xl leading-relaxed">
                        Asesoría contable, tributaria y financiera con automatización, análisis con IA y control total de tus finanzas empresariales para emprendedores y corporaciones.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button class="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
                            Agendar consulta gratis
                            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                        </button>
                        <button class="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all">
                            Conoce nuestros servicios
                        </button>
                    </div>
                    <div class="flex items-center gap-6 pt-4">
                        <div class="flex -space-x-3">
                            <img src="https://i.pravatar.cc/100?u=1" class="w-10 h-10 rounded-full border-2 border-brand-dark" alt="Client">
                            <img src="https://i.pravatar.cc/100?u=2" class="w-10 h-10 rounded-full border-2 border-brand-dark" alt="Client">
                            <img src="https://i.pravatar.cc/100?u=3" class="w-10 h-10 rounded-full border-2 border-brand-dark" alt="Client">
                        </div>
                        <div class="text-sm">
                            <p class="font-bold text-white">+500 empresas</p>
                            <p class="text-slate-500 text-xs">Confían en V&A Profesionales</p>
                        </div>
                    </div>
                </div>

                <!-- Financial Dashboard Component -->
                <div class="relative animate-float">
                    <div class="absolute -inset-4 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 rounded-[2rem] blur-3xl opacity-30"></div>
                    <div class="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <!-- Dashboard Header -->
                        <div class="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                            <div class="flex gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Dashboard V&A - Real Time Data</div>
                            <div class="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
                                <span class="text-[10px]">HV</span>
                            </div>
                        </div>
                        <!-- Dashboard Content -->
                        <div class="p-6 grid grid-cols-2 gap-4">
                            <!-- KPI Cards -->
                            <div class="bg-brand-dark/40 p-4 rounded-xl border border-white/5">
                                <p class="text-[10px] text-slate-500 uppercase font-bold mb-1">Ingresos Mensuales</p>
                                <div class="flex items-end justify-between">
                                    <h3 class="text-xl font-bold text-white">S/ 142,500</h3>
                                    <span class="text-[10px] text-emerald-400">+12%</span>
                                </div>
                            </div>
                            <div class="bg-brand-dark/40 p-4 rounded-xl border border-white/5">
                                <p class="text-[10px] text-slate-500 uppercase font-bold mb-1">Impuestos Est.</p>
                                <div class="flex items-end justify-between">
                                    <h3 class="text-xl font-bold text-orange-400">S/ 18,340</h3>
                                    <span class="text-[10px] text-slate-500">IGV/Renta</span>
                                </div>
                            </div>
                            <!-- Main Chart -->
                            <div class="col-span-2 bg-brand-dark/40 p-4 rounded-xl border border-white/5 h-48">
                                <canvas id="heroChart"></canvas>
                            </div>
                            <!-- Alerts / Activity -->
                            <div class="col-span-1 space-y-3">
                                <h4 class="text-[11px] font-bold text-slate-400 uppercase">Alertas SUNAT</h4>
                                <div class="flex items-center gap-3 p-2 rounded-lg bg-orange-500/5 border border-orange-500/20">
                                    <div class="w-2 h-2 rounded-full bg-orange-500"></div>
                                    <p class="text-[10px] text-orange-200">Presentación PDT 621</p>
                                </div>
                                <div class="flex items-center gap-3 p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                                    <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    <p class="text-[10px] text-emerald-200">Libros PLE validados</p>
                                </div>
                            </div>
                            <!-- Circular Progress -->
                            <div class="col-span-1 bg-brand-dark/40 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                                <div class="relative w-20 h-20">
                                    <svg class="w-full h-full transform -rotate-90">
                                        <circle cx="40" cy="40" r="35" stroke="currentColor" stroke-width="6" fill="transparent" class="text-slate-800" />
                                        <circle cx="40" cy="40" r="35" stroke="currentColor" stroke-width="6" fill="transparent" class="text-brand-primary" stroke-dasharray="219" stroke-dashoffset="60" />
                                    </svg>
                                    <div class="absolute inset-0 flex items-center justify-center text-[10px] font-bold">72%</div>
                                </div>
                                <p class="text-[9px] mt-2 text-slate-500 uppercase text-center leading-tight">Efectividad de Flujo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Bar -->
    <div class="border-y border-white/5 bg-brand-dark/50 py-10 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale transition-all hover:grayscale-0">
                <div class="flex flex-col items-center">
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Asesoría</span>
                    <span class="text-xl font-heading font-bold">Contable</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Cumplimiento</span>
                    <span class="text-xl font-heading font-bold text-orange-400">Tributario</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Gestión</span>
                    <span class="text-xl font-heading font-bold">Laboral</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Estrategia</span>
                    <span class="text-xl font-heading font-bold">Financiera</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Procesos</span>
                    <span class="text-xl font-heading font-bold text-brand-primary">Outsourcing</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Who We Help -->
    <section class="py-24 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-5xl font-extrabold font-heading mb-4 text-white">Soluciones a tu medida</h2>
                <p class="text-slate-400 max-w-2xl mx-auto">Atendemos todos los niveles de madurez empresarial con un enfoque personalizado.</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <!-- Profiles -->
                <div class="glass-card p-6 rounded-2xl text-center group hover:bg-brand-primary/10 transition-all border border-white/5">
                    <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary/20 transition-colors">
                        <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <h3 class="font-bold text-sm">Emprendedores</h3>
                </div>
                <div class="glass-card p-6 rounded-2xl text-center group hover:bg-brand-primary/10 transition-all border border-white/5">
                    <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 class="font-bold text-sm leading-tight">Pers. Naturales con Negocio</h3>
                </div>
                <div class="glass-card p-6 rounded-2xl text-center group hover:bg-brand-primary/10 transition-all border border-white/5">
                    <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <h3 class="font-bold text-sm">Microempresas</h3>
                </div>
                <div class="glass-card p-6 rounded-2xl text-center group hover:bg-brand-primary/10 transition-all border border-white/5">
                    <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </div>
                    <h3 class="font-bold text-sm">Pymes</h3>
                </div>
                <div class="glass-card p-6 rounded-2xl text-center group hover:bg-brand-primary/10 transition-all border border-white/5">
                    <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <h3 class="font-bold text-sm leading-tight">Empresas Medianas</h3>
                </div>
                <div class="glass-card p-6 rounded-2xl text-center group hover:bg-brand-primary/10 transition-all border border-white/5">
                    <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                    </div>
                    <h3 class="font-bold text-sm leading-tight text-brand-secondary">Grandes Empresas</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Services Grid -->
    <section id="servicios" class="py-24 bg-brand-dark relative">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div class="max-w-xl">
                    <h2 class="text-3xl lg:text-5xl font-extrabold font-heading mb-6 text-white">Servicios especializados para el <span class="text-brand-primary">crecimiento</span></h2>
                    <p class="text-slate-400">Desde la teneduría de libros hasta analítica avanzada con IA, cubrimos todo el ciclo financiero de tu organización.</p>
                </div>
                <div class="flex gap-4">
                    <div class="p-3 glass-card rounded-xl text-brand-secondary font-bold text-sm border-brand-secondary/30">Liderazgo Regional</div>
                </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1: Contabilidad -->
                <div class="glass-card p-8 rounded-[2rem] hover:translate-y-[-10px] transition-all duration-300 border-white/5 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                        <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2a2 2 0 00-2 2v1h14V4a2 2 0 00-2-2H7zM5 19a2 2 0 002 2h10a2 2 0 002-2V7H5v12zm2-10h10v2H7V9zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"></path></svg>
                    </div>
                    <div class="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-white">Contabilidad Integral</h3>
                    <ul class="text-slate-400 text-sm space-y-3 mb-8">
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-primary"></div> Libros Contables y PLE</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-primary"></div> Conciliación Bancaria</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-primary"></div> Control de Préstamos</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-primary"></div> Análisis de Cuentas</li>
                    </ul>
                </div>

                <!-- Card 2: Tributario -->
                <div class="glass-card p-8 rounded-[2rem] hover:translate-y-[-10px] transition-all duration-300 border-white/5 relative overflow-hidden group">
                    <div class="w-14 h-14 bg-brand-secondary/20 rounded-2xl flex items-center justify-center mb-6 text-brand-secondary">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-white">Estrategia Tributaria</h3>
                    <ul class="text-slate-400 text-sm space-y-3 mb-8">
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-secondary"></div> Liquidación de Impuestos</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-secondary"></div> Presentación PDT 621 IGV Renta</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-secondary"></div> Deducciones de Gastos</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-secondary"></div> Prevención de Contingencias</li>
                    </ul>
                </div>

                <!-- Card 3: Laboral -->
                <div class="glass-card p-8 rounded-[2rem] hover:translate-y-[-10px] transition-all duration-300 border-white/5 relative overflow-hidden group">
                    <div class="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-white">Gestión Laboral</h3>
                    <ul class="text-slate-400 text-sm space-y-3 mb-8">
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Planilla Electrónica (PLAME)</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Boletas y Gratificaciones</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Beneficios Sociales</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Declaración AFP y ONP</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Financial Analytics / IA Section -->
    <section id="tecnologia" class="py-24 relative overflow-hidden bg-slate-950">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="order-2 lg:order-1">
                    <div class="glass-card p-1 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Financial Tech" class="rounded-[2.5rem] opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700">
                    </div>
                </div>
                <div class="space-y-8 order-1 lg:order-2">
                    <h2 class="text-4xl lg:text-5xl font-extrabold font-heading text-white">Tecnología contable de <span class="text-brand-primary">vanguardia</span></h2>
                    <p class="text-lg text-slate-400">No somos un estudio contable tradicional. Implementamos herramientas SaaS que te permiten ver el futuro de tu caja hoy mismo.</p>
                    
                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-secondary border border-white/10">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">Automatización con SUNAT</h4>
                                <p class="text-slate-500 text-sm">Integración directa de flujos de comprobantes y validaciones en tiempo real.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-primary border border-white/10">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">Análisis Financiero con IA</h4>
                                <p class="text-slate-500 text-sm">Dashboards gerenciales que detectan patrones de gasto y oportunidades de ahorro.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-emerald-400 border border-white/10">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">Reportes en Tiempo Real</h4>
                                <p class="text-slate-500 text-sm">Visualiza tu balance general y flujo de efectivo desde cualquier dispositivo 24/7.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why V&A / Founder -->
    <section id="nosotros" class="py-24 grid-bg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-20 items-center">
                <div class="space-y-8">
                    <h2 class="text-4xl lg:text-5xl font-extrabold font-heading text-white">Liderazgo con visión <span class="text-brand-secondary">estratégica</span></h2>
                    <div class="prose prose-invert prose-slate">
                        <p class="text-lg text-slate-400 italic border-l-4 border-brand-primary pl-6">
                            "En V&A PROFESIONALES, no solo registramos transacciones; construimos el soporte financiero que las empresas necesitan para escalar sin miedo a las contingencias tributarias."
                        </p>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="relative group">
                            <div class="absolute -inset-1 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" alt="Henry Valladares" class="relative w-24 h-24 rounded-full object-cover border-2 border-brand-dark">
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold text-white">Henry Valladares</h4>
                            <p class="text-brand-primary font-bold uppercase tracking-widest text-xs">Fundador & CEO</p>
                            <div class="flex gap-2 mt-2">
                                <div class="px-2 py-0.5 bg-white/5 rounded text-[10px] text-slate-400">Contador Público</div>
                                <div class="px-2 py-0.5 bg-white/5 rounded text-[10px] text-slate-400">Estratega Fiscal</div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-6 pt-6">
                        <div class="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <h5 class="text-3xl font-bold text-white mb-2">99%</h5>
                            <p class="text-xs text-slate-500 uppercase tracking-widest">Cumplimiento Tributario</p>
                        </div>
                        <div class="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <h5 class="text-3xl font-bold text-brand-secondary mb-2">10+</h5>
                            <p class="text-xs text-slate-500 uppercase tracking-widest">Años de experiencia</p>
                        </div>
                    </div>
                </div>
                <div class="grid gap-6">
                    <div class="glass-card p-8 rounded-3xl border-l-4 border-brand-primary">
                        <h4 class="text-xl font-bold text-white mb-3">Visión del Futuro</h4>
                        <p class="text-slate-400">Digitalizamos la contabilidad en Perú para que dejes de ser un espectador y te conviertas en el estratega de tu propia empresa.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl border-l-4 border-brand-secondary">
                        <h4 class="text-xl font-bold text-white mb-3">Rapidez y Confianza</h4>
                        <p class="text-slate-400">Atención personalizada con tiempos de respuesta reducidos gracias a nuestros flujos automatizados de trabajo.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials (SaaS Style Cards) -->
    <section class="py-24 bg-brand-dark">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold font-heading text-center mb-16 text-white">Lo que dicen nuestros clientes</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="glass-card p-8 rounded-2xl border border-white/5 relative">
                    <div class="text-brand-secondary mb-4 flex">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <!-- repeat for 5 stars -->
                    </div>
                    <p class="text-slate-300 italic mb-6">"El control que tengo ahora sobre mis impuestos es increíble. El dashboard que nos proporcionan nos ahorra horas de reuniones."</p>
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 rounded-full bg-slate-800"></div>
                        <div>
                            <p class="font-bold text-sm">Ricardo Méndez</p>
                            <p class="text-[10px] text-slate-500 uppercase tracking-widest">CEO, Fintech Solution</p>
                        </div>
                    </div>
                </div>
                <!-- More testimonials... -->
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section id="contacto" class="py-24 relative overflow-hidden">
        <div class="max-w-5xl mx-auto px-4 relative z-10 text-center">
            <div class="glass-card p-12 lg:p-20 rounded-[3rem] border border-brand-primary/20 relative overflow-hidden">
                <div class="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"></div>
                <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl"></div>
                
                <h2 class="text-4xl lg:text-6xl font-extrabold font-heading mb-8 text-white">¿Listo para dar el siguiente paso <span class="text-brand-primary">financiero</span>?</h2>
                <p class="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">Únete a las empresas que ya están automatizando su éxito. Agenda una consultoría estratégica con Henry Valladares.</p>
                
                <form class="max-w-md mx-auto space-y-4">
                    <input type="text" placeholder="Tu nombre" class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary transition-colors text-white">
                    <input type="email" placeholder="Correo corporativo" class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary transition-colors text-white">
                    <button class="w-full py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20">
                        Solicitar Diagnóstico Gratuito
                    </button>
                    <p class="text-[10px] text-slate-500 mt-4">Al enviar aceptas nuestras políticas de privacidad y tratamiento de datos.</p>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-brand-dark pt-20 pb-10 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-12 mb-16">
                <div class="col-span-2">
                    <div class="flex items-center gap-2 mb-6">
                        <div class="w-8 h-8 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center font-bold text-white text-xs">V&A</div>
                        <span class="text-lg font-bold font-heading">V&A <span class="text-brand-secondary">PROFESIONALES</span></span>
                    </div>
                    <p class="text-slate-500 max-w-sm mb-6">
                        Liderando la transformación digital contable y financiera en el mercado peruano para el mundo.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    </div>
                </div>
                <div>
                    <h5 class="font-bold text-white mb-6">Servicios</h5>
                    <ul class="space-y-4 text-sm text-slate-500">
                        <li><a href="#" class="hover:text-brand-primary">Outsourcing Contable</a></li>
                        <li><a href="#" class="hover:text-brand-primary">Asesoría Tributaria</a></li>
                        <li><a href="#" class="hover:text-brand-primary">Gestión de Planillas</a></li>
                        <li><a href="#" class="hover:text-brand-primary">Auditoría Financiera</a></li>
                        <li><a href="#" class="hover:text-brand-primary">Dashboards IA</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-bold text-white mb-6">Compañía</h5>
                    <ul class="space-y-4 text-sm text-slate-500">
                        <li><a href="#" class="hover:text-brand-primary">Sobre V&A</a></li>
                        <li><a href="#" class="hover:text-brand-primary">Henry Valladares</a></li>
                        <li><a href="#" class="hover:text-brand-primary">Casos de Éxito</a></li>
                        <li><a href="#" class="hover:text-brand-primary">Blog Financiero</a></li>
                        <li><a href="#" class="hover:text-brand-primary">Contacto</a></li>
                    </ul>
                </div>
            </div>
            <div class="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                <p>&copy; 2024 V&A PROFESIONALES. Todos los derechos reservados.</p>
                <div class="flex gap-6">
                    <a href="#">Privacidad</a>
                    <a href="#">Términos</a>
                    <a href="#">SUNAT Compliance</a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Hero Chart Logic
        const ctx = document.getElementById('heroChart').getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.4)');
        gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');

        const secondaryGradient = ctx.createLinearGradient(0, 0, 0, 200);
        secondaryGradient.addColorStop(0, 'rgba(249, 115, 22, 0.4)');
        secondaryGradient.addColorStop(1, 'rgba(249, 115, 22, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Ingresos',
                        data: [65, 78, 72, 95, 102, 120],
                        borderColor: '#2563eb',
                        borderWidth: 3,
                        backgroundColor: gradient,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: 'Egresos',
                        data: [45, 52, 48, 62, 58, 65],
                        borderColor: '#f97316',
                        borderWidth: 2,
                        backgroundColor: secondaryGradient,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { display: false },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#475569', font: { size: 10 } }
                    }
                }
            }
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>` }} />
  );
};

export default CrystallineCobaltGridwork;
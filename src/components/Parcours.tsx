'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Globe,
  Smartphone,
  Rocket,
  ExternalLink,
  ChevronDown,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import ShinyText from '../ui/ShinyText';
import AnimatedContent from '../ui/AnimatedContent';

// ── Types ──
interface Technology {
  name: string;
  category: 'backend' | 'frontend' | 'mobile' | 'architecture' | 'real-time' | 'database';
}

interface Project {
  name: string;
  link?: string;
}

interface JourneyStep {
  year: string;
  phase: string;
  tagline: string;
  description: string;
  details: string;
  technologies: Technology[];
  projects: Project[];
  gradient: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
}

// ── Données du parcours (issues de la lettre de motivation) ──
const journeySteps: JourneyStep[] = [
  {
    year: '2023',
    phase: 'Les Premiers Pas',
    tagline: 'Stage chez Glotelho Cameroun',
    description: 'Découverte du développement backend avec Laravel',
    details: 'Premiers pas dans le développement logiciel lors d\'un stage au sein de l\'équipe IT de Glotelho Cameroun. Conception et implémentation de backends robustes avec Laravel, en appliquant les principes SOLID et des architectures modulaires (Controller, Service, Repository). Développement d\'un backend pour une machine ATM.',
    technologies: [
      { name: 'Laravel', category: 'backend' },
      { name: 'PHP', category: 'backend' },
      { name: 'SOLID', category: 'architecture' },
      { name: 'MySQL', category: 'database' },
    ],
    projects: [],
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
    icon: <Rocket className="w-6 h-6" />,
    side: 'left',
  },
  {
    year: '2024',
    phase: 'Vision Fullstack',
    tagline: 'Du backend vers le frontend moderne',
    description: 'Acquisition de compétences frontend avec React, Vite & Next.js',
    details: 'Extension vers des systèmes plus évolutifs intégrant des API REST et des logiques métiers structurées. Acquisition de compétences solides en frontend avec React, Vite et Next.js, permettant de concevoir des interfaces modernes et connectées à mes propres APIs. Réalisation d\'un portfolio moderne.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Vite', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'REST API', category: 'backend' },
    ],
    projects: [],
    gradient: 'from-purple-600 via-violet-500 to-pink-400',
    icon: <Code2 className="w-6 h-6" />,
    side: 'right',
  },
  {
    year: '2024-2025',
    phase: 'Projets Concrets',
    tagline: 'Freelance & réalisations client',
    description: 'Landing page Roilux & E-commerce Atoum-ra Mbianga',
    details: 'Missions freelance concrètes : landing page pour Roilux dans le secteur immobilier et site e-commerce complet de vente de produits naturels (Atoum-ra Mbianga), conçu avec Laravel et Next.js. Mise en place de fonctionnalités avancées telles que l\'authentification OAuth et les systèmes temps réel avec Socket.io.',
    technologies: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'Laravel', category: 'backend' },
      { name: 'OAuth', category: 'real-time' },
      { name: 'Socket.io', category: 'real-time' },
    ],
    projects: [
      { name: 'Atoum-ra Mbianga', link: 'https://github.com/Mc-soltice/Atoum-Frontend' },
      { name: 'Roilux', link: 'https://github.com/Mc-soltice/Rolux-landing' },
    ],
    gradient: 'from-emerald-600 via-green-500 to-lime-400',
    icon: <Globe className="w-6 h-6" />,
    side: 'left',
  },
  {
    year: '2025',
    phase: 'Développement Mobile',
    tagline: 'Extension vers le mobile',
    description: 'Développement mobile avec Flutter',
    details: 'Les bases du développement mobile avec Flutter, permettant d\'avoir une approche globale du cycle de développement, du web au mobile. Création d\'applications mobiles performantes et réactives.',
    technologies: [
      { name: 'Flutter', category: 'mobile' },
      { name: 'Dart', category: 'mobile' },
    ],
    projects: [],
    gradient: 'from-orange-600 via-amber-500 to-yellow-400',
    icon: <Smartphone className="w-6 h-6" />,
    side: 'right',
  },
  {
    year: '2026',
    phase: 'Architectures Avancées',
    tagline: 'Prisma, Microservices & GraphQL',
    description: 'Vers des systèmes scalables et performants',
    details: 'Ma réflexion ne s\'arrête pas à "faire fonctionner le code" : je construis des architectures pensées pour évoluer. Séparation des responsabilités (Controller → Service → Repository → Resource), respect des principes SOLID, organisation par modules métiers (Auth, User, Product, Order…), gestion consciente des dépendances entre couches, réutilisabilité du code, documentation d\'API avec Swagger, et anticipation de l\'évolutivité (Octane, cache, upload, stockage des médias).\n\nEn parallèle, j\'explore des architectures plus avancées : Prisma comme ORM performant, microservices, GraphQL, et je commence à m\'intéresser au Domain-Driven Design, à l\'architecture événementielle, au CQRS, à la Clean Architecture, aux tests d\'architecture et à l\'observabilité (logs, métriques, tracing).',
    technologies: [
      { name: 'SOLID', category: 'architecture' },
      { name: 'Prisma', category: 'database' },
      { name: 'GraphQL', category: 'architecture' },
      { name: 'DDD', category: 'architecture' },
      { name: 'CQRS', category: 'architecture' },
      { name: 'Clean Architecture', category: 'architecture' },
      { name: 'Swagger', category: 'architecture' },
      { name: 'Octane', category: 'backend' },
      { name: 'UML', category: 'architecture' },
    ],
    projects: [],
    gradient: 'from-rose-600 via-pink-500 to-fuchsia-400',
    icon: <Layers className="w-6 h-6" />,
    side: 'left',
  },
];

// ── Catégories de technologies ──
const categoryConfig: Record<string, { label: string; color: string; icon: string }> = {
  backend: { label: 'Backend', color: 'badge-info', icon: '⚙️' },
  frontend: { label: 'Frontend', color: 'badge-primary', icon: '🎨' },
  mobile: { label: 'Mobile', color: 'badge-warning', icon: '📱' },
  architecture: { label: 'Architecture', color: 'badge-success', icon: '🏗️' },
  'real-time': { label: 'Temps Réel', color: 'badge-error', icon: '⚡' },
  database: { label: 'Base de données', color: 'badge-accent', icon: '🗄️' },
};

// ── Composant de carte de techno ──
const TechBadge = ({ tech }: { tech: Technology }) => {
  const config = categoryConfig[tech.category];
  return (
    <span className={`badge badge-sm gap-1 ${config.color} badge-outline`}>
      <span className="text-xs">{config.icon}</span>
      {tech.name}
    </span>
  );
};

// ── Composant principal ──
const Parcours = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="Parcours" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-5 md:px-[15%]">
        <AnimatedContent distance={50} duration={0.8} delay={0.1}>
          <ShinyText text="Mon Parcours" disabled={false} speed={2.5} />
          <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
            Un parcours progressif et structuré, construit autour de projets concrets
            et d'une volonté constante de monter en compétences.
          </p>
        </AnimatedContent>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent via-primary to-secondary opacity-30 hidden md:block" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-16">
            {journeySteps.map((step, index) => (
              <AnimatedContent
                key={index}
                distance={60}
                direction="vertical"
                duration={0.8}
                delay={index * 0.15}
                scale={0.95}
              >
                <div className="relative">
                  {/* Timeline dot (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg shadow-accent/20`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`md:flex items-start ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`md:w-1/2 ${step.side === 'right' ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'}`}>
                      {/* Year badge (mobile) */}
                      <div className="md:hidden flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                          {step.icon}
                        </div>
                        <span className="text-sm font-mono text-accent font-bold">{step.year}</span>
                      </div>

                      {/* Year badge (desktop) */}
                      <span className="hidden md:inline-block text-sm font-mono text-accent font-bold mb-2">
                        {step.year}
                      </span>

                      {/* Card */}
                      <motion.div
                        className={`bg-base-200/80 backdrop-blur-sm border border-base-300/50 rounded-xl p-5 md:p-6 cursor-pointer hover:border-accent/30 transition-all duration-300 ${
                          expandedIndex === index ? 'shadow-xl shadow-accent/5 border-accent/30' : 'shadow-lg'
                        }`}
                        onClick={() => toggleExpand(index)}
                        whileHover={{ scale: 1.01 }}
                        layout
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-base-content mb-1">
                              {step.phase}
                            </h3>
                            <p className="text-xs md:text-sm text-accent font-medium mb-2">
                              {step.tagline}
                            </p>
                            <p className="text-sm md:text-base text-base-content/80">
                              {step.description}
                            </p>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-3 mt-1"
                          >
                            <ChevronDown className="w-5 h-5 text-base-content/50" />
                          </motion.div>
                        </div>

                        {/* Expanded content */}
                        <AnimatePresence>
                          {expandedIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 mt-4 border-t border-base-300/50 space-y-4">
                                {/* Détails */}
                                <p className="text-sm text-base-content/70 leading-relaxed">
                                  {step.details}
                                </p>

                                {/* Technologies */}
                                <div>
                                  <h4 className="text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-2 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" />
                                    Technologies
                                  </h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {step.technologies.map((tech, i) => (
                                      <TechBadge key={i} tech={tech} />
                                    ))}
                                  </div>
                                </div>

                                {/* Projets liés */}
                                {step.projects.length > 0 && (
                                  <div>
                                    <h4 className="text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-2 flex items-center gap-1">
                                      <ExternalLink className="w-3 h-3" />
                                      Projets associés
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {step.projects.map((project, i) => (
                                        <a
                                          key={i}
                                          href={project.link || '#'}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="btn btn-xs btn-ghost gap-1 text-accent hover:text-accent-focus"
                                        >
                                          {project.name}
                                          <ArrowRight className="w-3 h-3" />
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcours;
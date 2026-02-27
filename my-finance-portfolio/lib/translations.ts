// translations.ts
export type Lang = "en" | "fr";

// ────────────────────────────────────────────────
// On définit la forme de référence à partir de l'anglais
// ────────────────────────────────────────────────

export const en = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Get in touch →",
  },
  hero: {
    badge: "Open to internship · March – July 2026",
    title1: "Wilfried",
    title2: "LAWSON HELLU",
    subtitle: "Finance Analyst — Asset Management & Corporate Finance",
    location: "Université Paris-Saclay · Paris, France",
    bio: "Combining institutional finance (BIDC, SGI-TOGO) with entrepreneurship (€500K revenue) and quantitative research — I build tools that turn complex financial data into actionable insights.",
    cta1: "View Projects",
    cta2: "Download CV",
    chartTitle: "FAANG Portfolio",
    chartLabel: "vs S&P 500",
    scroll: "scroll",
    available: "🟢 Available March 2026",
    stats: [
      { value: "€500K+", label: "Revenue Managed" },
      { value: "2", label: "Finance Internships" },
      { value: "4+", label: "Years Trading" },
      { value: "6", label: "Quant Projects" },
    ],
  },
  about: {
    tag: "// about",
    title: "About Me",
    p1: "With hands-on experience at the BIDC — the ECOWAS regional development bank — and SGI-TOGO in West African debt capital markets, I bring a rare perspective combining institutional finance with frontier market expertise.",
    p2: "As founder of Papyrus Distributions, I managed a business generating over €500K in cumulative revenue — overseeing full P&L, treasury, banking relationships, and navigating judicial liquidation following a major client default.",
    p3: "Currently at Université Paris-Saclay, building quantitative skills through projects in portfolio optimization, risk modeling, DCF, LBO, and ESG analysis.",
    p4: "4+ years of personal macro and technical trading complement my analytical work — giving me a practitioner's instinct on top of academic rigor.",
    tags: ["Asset Management", "Corporate Finance", "DCM", "Portfolio Theory", "UEMOA Markets", "Risk Analysis"],
    stats: [
      { value: "€500K+", label: "Revenue Managed", color: "#22c55e" },
      { value: "2", label: "Finance Internships", color: "#0ea5e9" },
      { value: "4+ yrs", label: "Macro Trading", color: "#a78bfa" },
      { value: "UEMOA", label: "Market Expertise", color: "#f59e0b" },
    ],
  },
  // ... (le reste de l'anglais reste IDENTIQUE à ce que tu avais)
  experience: { /* ton code experience EN */ },
  education: { /* ton code education EN */ },
  projects: { /* ton code projects EN */ },
  skills: { /* ton code skills EN */ },
  contact: { /* ton code contact EN */ },
  footer: {
    copy: "© 2026 Wilfried LAWSON HELLU",
  },
} as const;

// On crée le type de référence
export type Translations = typeof en;

// ────────────────────────────────────────────────
// Français : on force le respect de la forme anglaise
// ────────────────────────────────────────────────

export const fr: Translations = {
  nav: {
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    contact: "Me contacter →",
  },
  hero: {
    badge: "Disponible pour stage · Mars – Juillet 2026",
    title1: "Wilfried",
    title2: "LAWSON HELLU",
    subtitle: "Analyste Finance — Gestion d'Actifs & Finance d'Entreprise",
    location: "Université Paris-Saclay · Paris, France",
    bio: "Alliance entre finance institutionnelle (BIDC, SGI-TOGO), entrepreneuriat (CA 500K€) et recherche quantitative — je construis des outils qui transforment des données financières complexes en insights actionnables.",
    cta1: "Voir les projets",
    cta2: "Télécharger le CV",
    chartTitle: "Portefeuille FAANG",
    chartLabel: "vs S&P 500",
    scroll: "défiler",
    available: "🟢 Disponible mars 2026",
    stats: [
      { value: "500K€+", label: "CA géré" },
      { value: "2", label: "Stages finance" },
      { value: "4+", label: "Ans de trading" },
      { value: "6", label: "Projets quant" },
    ],
  },
  about: {
    tag: "// à propos",
    title: "À propos de moi",
    p1: "Fort d'une expérience à la BIDC — la banque de développement régionale de la CEDEAO — et à SGI-TOGO sur les marchés de capitaux ouest-africains, j'apporte une perspective rare alliant finance institutionnelle et expertise sur les marchés émergents.",
    p2: "En tant que fondateur de Papyrus Distributions, j'ai géré une entreprise générant plus de 500K€ de chiffre d'affaires cumulé — supervisant le P&L complet, la trésorerie, les relations bancaires, et gérant une liquidation judiciaire suite à un défaut client majeur.",
    p3: "Actuellement à l'Université Paris-Saclay, je développe mes compétences quantitatives via des projets en optimisation de portefeuille, modélisation des risques, DCF, LBO et analyse ESG.",
    p4: "4+ années de trading macro et technique personnel complètent mon approche analytique — m'apportant un instinct de praticien en plus de la rigueur académique.",
    tags: ["Gestion d'actifs", "Finance d'entreprise", "DCM", "Théorie du portefeuille", "Marchés UEMOA", "Analyse des risques"],
    stats: [
      { value: "500K€+", label: "CA géré", color: "#22c55e" },
      { value: "2", label: "Stages finance", color: "#0ea5e9" },
      { value: "4+ ans", label: "Trading macro", color: "#a78bfa" },
      { value: "UEMOA", label: "Expertise marché", color: "#f59e0b" },
    ],
  },
  // ... mets ici TOUTES les autres sections en français (experience, education, projects, skills, contact, footer)
  // exactement comme dans ton ancien code, sans rien changer aux valeurs
  experience: { /* ton experience FR */ },
  education: { /* ton education FR */ },
  projects: { /* ton projects FR */ },
  skills: { /* ton skills FR */ },
  contact: { /* ton contact FR */ },
  footer: {
    copy: "© 2026 Wilfried LAWSON HELLU",
  },
};

// ────────────────────────────────────────────────
// Export final groupé
// ────────────────────────────────────────────────

export const translations = {
  en,
  fr,
} as const;

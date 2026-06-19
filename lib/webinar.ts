/**
 * Single source of truth for webinar.aipowered.xyz
 * Edit this file, push to main → Vercel deploys production automatically.
 */

export const webinar = {
  meta: {
    title: 'Build With Me (and Claude) | Free Landing Page Session, 30 June',
    description:
      'Free 90-minute Build With Me session. Launch a landing page live with Claude, Cursor, GitHub & Vercel. Tuesday 30 June, 12:30pm BST. Replay included.',
    ogImage: 'web-preview-assets/claude-team-os-social-preview.png',
  },

  brand: {
    navLabel: 'AI POWERED',
    navSuffix: '/ BUILD WITH ME',
  },

  cta: {
    label: 'Save my free seat',
    href: '#register',
    navLabel: 'Save my free seat',
  },

  event: {
    eyebrow: 'Free AI Powered Masterclass',
    eyebrowSub: 'Build With Me Session',
    startsAt: '2026-06-30T11:30:00.000Z',
    dateLine: 'Tuesday 30 June · 12:30pm BST',
    dateNote: 'UK lunch · Bali dinner · US early brekkie',
    countdownLabel: 'Webinar starts · 12:30 BST · 30 June',
    underButton: 'Free to join. Replay sent to everyone who registers.',
    trustBar: ['120+ trained', '90 minutes live', 'Replay included', '100% free'],
  },

  hero: {
    line1: 'Launch a landing page live in 90 minutes',
    line2: 'Build With Me (and Claude)',
    sub:
      'A free done-with-me session. You\'ll watch a real page go from nothing to live on the internet, with Claude doing the heavy lifting. Build alongside me and keep up, or just watch and run the playbook yourself after.',
  },

  marquee: [
    'Build With Me',
    '·',
    '30 June 12:30pm BST',
    '·',
    'Idea to live page in one session',
    '·',
    'Claude + Cursor + Vercel',
    '·',
  ] as const,

  form: {
    baseUrl: 'https://links.productizeyourself.ai',
    formId: 'ZjEhdNNknUgy1WOuEnPe',
    formName: '[Build With Me] Landing Page, 30 June',
    inlineHeight: 240,
  },

  whyItMatters: {
    title: 'Every idea is a guess until the market responds',
    intro:
      'A landing page with one clear CTA is the fastest, cheapest way to get that response. Here\'s why speed matters, and what we build together.',
    blocks: [
      {
        title: 'The feedback loop',
        body: 'Most owners wait weeks to hear back. Claude removes the bottleneck: idea this morning, live page by lunch, real answers by Friday.',
      },
      {
        title: 'The expensive guess',
        body: 'Three months building what nobody wants is the costliest mistake in business. A landing page costs an afternoon, and tells you whether to build.',
      },
      {
        title: 'Ideas have a shelf life',
        body: 'Your best ideas die in the queue while you wait on a developer. The faster you ship pages, the more shots on goal you take.',
      },
      {
        title: 'Real signal, not opinions',
        body: 'Friends lie for free. A stranger\'s email is the cheapest real data you can buy. One page, one CTA, straight answer from the market.',
      },
    ],
    closer:
      'That full loop (idea, live page, real feedback) is what we Build With Me in this session. Nothing pre-built. If something breaks, you\'ll watch me fix it. That\'s the part tutorials cut out.',
  },

  learn: {
    title: 'The full journey, from offer to live URL',
    items: [
      { title: 'Offer creation', desc: 'What the page sells, because pretty pages for fuzzy offers convert nobody.' },
      { title: 'Style and design', desc: 'A look that matches your brand, not a template.' },
      { title: 'Setting up the page', desc: 'Structure, sections and copy, assembled live.' },
      { title: 'Cursor and Claude', desc: 'How they work together so the code writes itself.' },
      { title: 'GitHub for your code', desc: 'Where it lives and why, explained for humans.' },
      { title: 'Launch with Vercel', desc: 'Live on the internet with a real URL before we finish.' },
    ],
    closer: 'Leave with the full process in your head, and if you build along, a live page of your own.',
  },

  whoFor: {
    title: 'Built for business owners. No engineering background needed.',
    body:
      'Founders, coaches, consultants: anyone with an offer to sell. I\'m a non-technical founder. Everything is plain language. The people who win arrive thinking they "can\'t do code" and leave with a URL.',
  },

  prep: {
    title: 'Want to build along? Set up 3 things first.',
    intro: 'Takes a few minutes each. Setup guide sent when you register.',
    items: [
      'Claude desktop app + paid Claude account',
      'Cursor installed',
      'GitHub account, signed in',
    ],
    watchNote: 'Prefer to watch? Still get the replay. Everything will click.',
  },

  about: {
    eyebrow: 'About me',
    title: 'Meet Ross.',
    photoCaption: 'AI Founder & Educator',
    paragraphs: [
      'Years before any of this started, I worked at Accenture, one of the largest tech consulting companies in the world, training in design thinking and workshop facilitation.',
      'Across the short time I was there I ran well over 100 workshops and presented to more than 1,000 individuals along the way. My "one thing" through all of it was making tech and business simple and accessible to people, which is something I\'ve always loved doing and always wanted to turn into some kind of business of my own.',
      'I moved into startups (yes, I was a full techbro), leading product and engineering teams in blockchain, facilitating design sprints for C-suite executives, and most recently as Head of Product at a NYSE-listed education company.',
      'This programme is the result of everything I\'ve learnt, now translated for learning AI: prompts, skills, plugins, automations and workflows that I use myself to run my business.',
      'Oh, and I built this entire landing page with Claude (you\'ll be able to as well... my promise).',
    ],
    disclaimer: 'AI Powered is not affiliated with Anthropic. Claude is a product of Anthropic.',
  },

  faq: [
    {
      q: 'Will there be a replay?',
      a: 'Yes. Every registrant gets it. Live is where you ask questions and build in sync.',
    },
    {
      q: 'Do I need to be technical?',
      a: 'No. Session assumes you aren\'t. Claude handles what used to need an engineer.',
    },
    {
      q: 'What if I can\'t set up the tools in time?',
      a: 'Come anyway. Watch live, use the replay and setup guide after.',
    },
    {
      q: 'Does the paid Claude account matter?',
      a: 'Only if you\'re building along. Free tier won\'t keep up. Watch-only? You\'re fine.',
    },
    {
      q: 'How long is it?',
      a: '90 minutes. 12:30pm BST sharp. Page live before we finish.',
    },
    {
      q: 'Is this a sales pitch?',
      a: '90 minutes of real build. Couple of minutes on Cohort 3.0 at the end for those who want more. Session stands alone.',
    },
  ],

  footer: {
    tagline: 'AI Powered Build With Me · Ross Power',
    link: 'https://aipowered.xyz',
  },

  disclaimer:
    'This event is produced by AI Powered and is not affiliated with, endorsed by, or officially connected to Anthropic, PBC.',
} as const

export type WebinarConfig = typeof webinar

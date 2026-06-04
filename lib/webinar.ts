/**
 * Single source of truth for webinar.aipowered.xyz
 * Edit this file, push to main → Vercel deploys production automatically.
 */

export const webinar = {
  meta: {
    title: 'Build With Me | Free 90-Min Landing Page Session with Claude',
    description:
      'Free live Build With Me session — 22 June, 12:30pm BST. See a landing page built and launched in real time with Claude, Cursor, GitHub, and Vercel. Not theory. Done with you.',
    ogImage: 'web-preview-assets/claude-team-os-social-preview.png',
  },

  brand: {
    navLabel: 'AI POWERED',
    navSuffix: '/ BUILD WITH ME',
  },

  cta: {
    label: 'Save your free spot',
    href: '#register',
    navLabel: 'Save your spot · 22 June',
  },

  event: {
    eyebrow: 'Free done-with-me session · 90 minutes live',
    dateLine: '22 June · 12:30pm BST',
    dateFun:
      'Over your lunch in the UK — dinner in Bali — or an early brekkie in the US.',
    duration: '90 minutes',
    supporting: "Don't just learn theory. See it done in real time — and keep up.",
  },

  hero: {
    headline: [
      'Build & launch',
      'a landing page',
      'with me — live.',
    ] as const,
    sub:
      'Landing pages are how people discover your offer, trust you, and take action. As a business owner, knowing how to build one and get it live fast is leverage — not a nice-to-have. In 90 minutes we do it together: offer, style, page, code, deploy. On the internet. For real.',
    proof:
      'has trained 300+ people in AI. He builds every AI Powered page with Claude, Cursor, GitHub, and Vercel — the same stack you\'ll use in this session.',
  },

  marquee: [
    '90-minute Build With Me',
    '·',
    'Free session',
    '·',
    '22 June 12:30pm BST',
    '·',
    'Claude + Cursor',
    '·',
    'GitHub + Vercel',
    '·',
    'Live on the internet',
    '·',
  ] as const,

  form: {
    baseUrl: 'https://links.productizeyourself.ai',
    formId: 'ZjEhdNNknUgy1WOuEnPe',
    formName: '[Build With Me] Landing Page — 22 June',
    inlineHeight: 675,
    popupHeight: 881,
    popupScrollPercent: 25,
    footnote: 'Free. 90 minutes. Show up with Claude, Cursor, and GitHub ready.',
  },

  opportunity: {
    eyebrow: 'Why this matters',
    title: 'Landing pages are how\nyour business gets found.',
    paragraphs: [
      'Every offer — webinar, cohort, product, service — needs a clear home on the web. Not a scattered Linktree. Not "coming soon" for three months. A proper page that explains the value and tells people what to do next.',
      'If you\'re a business owner, learning to build and launch a landing page fast means you can test offers, fill events, and look credible without waiting on an agency or learning to code the hard way.',
      'And right now, Claude is the best partner for this job: sharp copy, structure, styling decisions, and iteration — paired with Cursor, GitHub, and Vercel so the page is yours and it\'s live. That\'s what we build together in this session.',
    ],
    stats: [
      { kind: 'text', display: '90', label: 'minutes live', detail: 'One session. Full path from offer to URL on the internet.' },
      { kind: 'text', display: '0', label: 'theory-only modules', detail: 'You watch the build happen. Follow along if you want to keep up.' },
      { kind: 'text', display: '1', label: 'page live', detail: 'The goal is a real deploy — not slides and "homework later."' },
    ] as const,
  },

  learn: {
    eyebrow: "What you'll learn",
    title: 'The full build — live, in order.',
    intro:
      'This is a Build With Me session. Ross does it on screen. You see every step. If you\'ve done the prep below, you can mirror it on your machine as we go.',
    sub: 'From offer to a page that\'s live on the internet.',
    items: [
      {
        title: 'Offer creation',
        desc: 'Clarify what you\'re selling, who it\'s for, and the one action you want visitors to take — the brief everything else hangs on.',
      },
      {
        title: 'Build the style for it',
        desc: 'Look, feel, and tone that fit your brand. Use Claude to shape direction without getting stuck in endless revisions.',
      },
      {
        title: 'Set up the page',
        desc: 'Structure the sections that convert: hero, proof, benefits, CTA. Same patterns behind AI Powered webinar pages.',
      },
      {
        title: 'Using Cursor and Claude',
        desc: 'The real workflow: prompting, editing, and iterating in Cursor with Claude as your co-builder — not copy-paste into a template builder.',
      },
      {
        title: 'Use GitHub for your code',
        desc: 'Repo setup, commits, and why version control matters when you launch offers every few months.',
      },
      {
        title: 'Launch with Vercel',
        desc: 'Connect the repo, deploy, and get a production URL — the same flow behind webinar.aipowered.xyz.',
      },
      {
        title: 'Put it live on the internet',
        desc: 'End with a link you can share. Not a preview. Not "almost done." Live.',
      },
    ],
  },

  prep: {
    eyebrow: 'Before you join',
    title: 'Come prepared — 15 minutes now saves an hour live.',
    intro:
      'You can watch without doing the setup. But if you want to build alongside Ross, get these three done before 22 June:',
    items: [
      {
        title: 'Claude Desktop + paid Claude account',
        desc: 'Install the Claude desktop app and make sure you\'re on a paid plan so you can work without hitting limits mid-session.',
      },
      {
        title: 'Cursor',
        desc: 'Download and install Cursor — that\'s where we\'ll edit the page with Claude built in.',
      },
      {
        title: 'GitHub set up',
        desc: 'Create a GitHub account if you don\'t have one. We\'ll use it to hold your code and connect to Vercel for deploy.',
      },
    ],
  },

  problem: {
    eyebrow: 'The difference',
    title: "Courses teach theory.\nThis is done with you.",
    left: {
      tag: 'The usual way',
      title: 'Learn about landing pages',
      bullets: [
        'Watch pre-recorded modules',
        'Take notes you never use',
        'Still don\'t have a page live',
        'Generic examples, not your offer',
        '"I\'ll do it this weekend" — again',
      ],
    },
    right: {
      tag: 'Build With Me',
      title: 'See it built in real time',
      bullets: [
        '90 minutes live with Ross',
        'Offer → style → page → deploy',
        'Claude + Cursor + GitHub + Vercel',
        'Keep up on your machine if you prep',
        'Leave knowing the full playbook',
      ],
    },
    bottom:
      'You don\'t need to be technical. You need to see the loop once — then rerun it for every launch.',
  },

  comparison: {
    eyebrow: 'Why this session',
    title: 'Build With Me vs. figuring it out alone',
    columns: ['This session', 'DIY tutorials', 'Hire an agency'] as const,
    rows: [
      { feature: 'Live, with a guide', us: '✓ 90 min Build With Me', generic: '✗ Watch alone', diy: '✗ Brief and wait' },
      { feature: 'Claude in the workflow', us: '✓ Copy, structure, build', generic: '✗ Generic AI tips', diy: '✗ You don\'t learn it' },
      { feature: 'Cursor + GitHub + Vercel', us: '✓ Full modern stack', generic: '✗ Drag-and-drop only', diy: '✗ Opaque handoff' },
      { feature: 'Speed to live page', us: '✓ Same session', generic: '✗ Weeks of procrastination', diy: '✗ Weeks + cost' },
      { feature: 'Cost', us: '✓ Free', generic: '✗ Time sink', diy: '✗ £££' },
      { feature: 'Repeat for next offer', us: '✓ Playbook you own', generic: '✗ Start from zero', diy: '✗ Pay again' },
    ],
  },

  about: {
    eyebrow: 'Your host',
    title: 'Meet Ross Power',
    paragraphs: [
      'Ross spent a decade in product — Accenture, startups, Head of Product at a NYSE-listed company — and has trained 300+ people to use AI for real work.',
      'He doesn\'t teach landing pages as theory. He ships them: Claude for thinking and copy, Cursor for building, GitHub for code, Vercel for deploy. Every AI Powered webinar page uses this stack.',
      'On 22 June he runs a free 90-minute Build With Me session: you\'ll see a landing page go from offer to live URL, and you\'ll know exactly how to run the same play for your business.',
    ],
    stats: [
      { n: '90', l: 'Minutes live' },
      { n: '300+', l: 'People trained' },
      { n: 'Live', l: 'Deploy on the day' },
    ],
    disclaimer:
      'Ross and AI Powered are not affiliated with Anthropic. Claude is a product of Anthropic.',
  },

  whoFor: {
    eyebrow: 'Who this is for',
    title: 'Built for business owners who need pages live',
    cards: [
      {
        tag: 'Founders & solopreneurs',
        title: 'You need a page before you can sell',
        desc: 'You\'ve got the offer. You need a credible landing page live this month — not after another course you never finish.',
      },
      {
        tag: 'Consultants & coaches',
        title: 'You launch offers and events regularly',
        desc: 'Each launch deserves its own page. Learning this stack means you\'re not stuck waiting on someone else every time.',
      },
      {
        tag: 'Small business owners',
        title: 'You know landing pages matter — you haven\'t shipped one',
        desc: 'You understand why they\'re important. This session shows you how to build and launch one fast, with Claude doing the heavy lifting.',
      },
      {
        tag: 'Anyone serious about Claude',
        title: 'You should be doing this with Claude now',
        desc: 'If you\'re still only chatting with Claude, you\'re missing the build workflow. Landing pages are the perfect first project to learn it.',
      },
    ],
  },

  takeaways: {
    eyebrow: "What you'll walk away with",
    title: 'After 90 minutes you\'ll understand',
    items: [
      {
        num: '01',
        title: 'Why landing pages matter for your business',
        desc: 'How they drive discovery, trust, and action — and why speed to live beats perfect-later.',
      },
      {
        num: '02',
        title: 'Why Claude is the right tool for this now',
        desc: 'Not just chat — co-building copy, structure, and style before you touch deploy.',
      },
      {
        num: '03',
        title: 'The full build sequence',
        desc: 'Offer → style → page → Cursor + Claude → GitHub → Vercel → live on the internet.',
      },
      {
        num: '04',
        title: 'A workflow you can repeat',
        desc: 'Next webinar, product, or cohort — same steps, new offer. No starting from zero.',
      },
      {
        num: '05',
        title: 'Confidence to keep up live',
        desc: 'Because you saw it done in real time — not explained in a deck you\'ll watch at 2x speed later.',
      },
    ],
  },

  finalOffer: {
    eyebrow: '22 June · 12:30pm BST',
    title: 'Free 90-minute Build With Me — landing page to live URL',
    bullets: [
      {
        h4: 'Done with you, not theory',
        p: 'Watch every step live. Prep Claude, Cursor, and GitHub if you want to build alongside.',
      },
      {
        h4: 'The stack business owners need',
        p: 'Claude, Cursor, GitHub, Vercel — the same tools behind AI Powered pages.',
      },
      {
        h4: 'Over your lunch (wherever you are)',
        p: 'UK lunch · Bali dinner · US early brekkie. One session, one clear outcome: a page on the internet.',
      },
    ],
  },

  faq: [
    {
      q: 'What happens in the 90 minutes?',
      a: 'Ross builds a landing page live: offer creation, style, page setup, using Cursor and Claude, GitHub for code, Vercel for deploy, and putting it live on the internet. You watch and follow if you\'re set up.',
    },
    {
      q: 'Is it really free?',
      a: 'Yes. This is a free done-with-me Build With Me session. You\'ll need your own paid Claude account and free tiers for Cursor, GitHub, and Vercel to follow along.',
    },
    {
      q: 'What do I need before I join?',
      a: 'Claude Desktop with a paid Claude account, Cursor installed, and a GitHub account set up. Do this before 22 June if you want to build alongside — otherwise you can watch and set up later.',
    },
    {
      q: 'Do I need to code?',
      a: 'No traditional coding required. You\'ll use Claude in Cursor to do the building. Basic comfort following along in an editor is enough if you prep.',
    },
    {
      q: 'What if I\'m in a different timezone?',
      a: '22 June, 12:30pm BST — lunch in the UK, dinner in Bali, early morning in the US. Register and we\'ll send the join link; convert to your local time when you add to calendar.',
    },
    {
      q: 'Why Claude specifically for landing pages?',
      a: 'Claude is strong at offer positioning, copy, structure, and iteration in a build environment. Paired with Cursor and deploy tools, it\'s the fastest path from idea to live page for non-developers.',
    },
    {
      q: 'Will there be a replay?',
      a: 'Register to get details. Live attendance is best if you want to ask questions and build in sync.',
    },
    {
      q: 'Will you pitch other programmes?',
      a: 'Ross may mention AI Powered cohorts for people who want ongoing support. This session is complete on its own — you leave with the full build picture.',
    },
  ],

  footer: {
    tagline: 'AI Powered Build With Me by Ross Power',
    link: 'https://aipowered.xyz',
  },

  disclaimer:
    'This event is produced by AI Powered and is not affiliated with, endorsed by, or officially connected to Anthropic, PBC. Claude is a product of Anthropic.',
} as const

export type WebinarConfig = typeof webinar

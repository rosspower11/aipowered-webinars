/**
 * Single source of truth for webinar.aipowered.xyz
 * Edit this file, push to main → Vercel deploys production automatically.
 */

export const webinar = {
  meta: {
    title: 'Build & Launch a Landing Page with Me (and Claude) | AI Powered Masterclass',
    description:
      'Free live masterclass — Monday 22 June, 12:30pm BST. Watch a landing page go from blank screen to live on the internet in 90 minutes, with Claude doing the heavy lifting.',
    ogImage: 'web-preview-assets/claude-team-os-social-preview.png',
  },

  brand: {
    navLabel: 'AI POWERED',
    navSuffix: '/ MASTERCLASS',
  },

  cta: {
    label: 'Save my free seat',
    href: '#register',
    navLabel: 'Save my free seat',
  },

  cohort: {
    label: 'Join the Cohort 3.0 waitlist and get $500 off',
    href: 'https://claude.aipowered.xyz/',
  },

  event: {
    eyebrow: 'AI Powered Masterclass | Free Live Session',
    /** ISO 8601 — countdown shows from countdownFrom until this moment */
    startsAt: '2026-06-22T11:30:00.000Z',
    countdownFrom: '2026-06-19T00:00:00.000Z',
    dateBar:
      'Monday 22 June, 12:30pm BST. That\'s over your lunch in the UK, dinner in Bali, or an early brekkie in the US.',
    underButton: 'Free to join, and the replay goes to everyone who registers.',
  },

  hero: {
    headline: [
      'Watch me build and launch',
      'a landing page in 90 minutes,',
      'live',
    ] as const,
    sub:
      'A free done-with-me session where you\'ll see a real landing page go from blank screen to live on the internet, with Claude doing the heavy lifting. Build along with me and keep up, or just watch and learn how it\'s done.',
  },

  marquee: [
    'Free live masterclass',
    '·',
    '22 June 12:30pm BST',
    '·',
    '90 minutes',
    '·',
    'Claude + Cursor',
    '·',
    'GitHub + Vercel',
    '·',
    'Replay for everyone who registers',
    '·',
  ] as const,

  form: {
    baseUrl: 'https://links.productizeyourself.ai',
    formId: 'ZjEhdNNknUgy1WOuEnPe',
    formName: '[Masterclass] Landing Page — 22 June',
    inlineHeight: 675,
    popupHeight: 881,
    popupScrollPercent: 25,
    footnote: 'Monday 22 June, 12:30pm BST · Free · Replay included',
  },

  whyItMatters: {
    eyebrow: 'Why this matters',
    title: 'Success in business comes down to one thing: how fast you get feedback on an idea',
    intro:
      'Every idea you have is a guess until someone responds to it, and a landing page with one clear CTA is the fastest, cheapest way to get that response. Here\'s why that loop matters so much.',
    blocks: [
      {
        title: 'The feedback loop',
        body: 'The speed at which you hear back from the market decides how fast you learn, and most owners wait weeks because building the page was always the bottleneck. Claude removes the bottleneck, so the loop goes from "idea, then 3 weeks of building, then feedback" to "idea this morning, live page by lunch, real answers by Friday."',
      },
      {
        title: 'The expensive guess',
        body: 'The most expensive thing in business is spending 3 months building something nobody wants, and the cheapest insurance against that is a landing page with a clear CTA. If people click, you build it, and if nobody clicks, you\'ve just saved yourself a quarter. The page costs you an afternoon, which changes the maths on every idea you have.',
      },
      {
        title: 'Ideas have a shelf life',
        body: 'Ideas are at their best the week you have them, when your energy is high and the market context is fresh. Waiting on a developer or fighting a page builder kills more good ideas than bad feedback ever will, so the faster you can build, the more ideas you actually test, and the more shots on goal you take.',
      },
      {
        title: 'Real signal, not opinions',
        body: 'Opinions from friends are free and worthless, and a stranger entering their email is the cheapest real signal you can buy. A landing page with one clear CTA is a signal-collecting machine, and once you can build one in 90 minutes, you can get a straight answer from the market whenever you need one.',
      },
    ],
    closer:
      'That loop, from idea to live page to real feedback, is exactly what we\'ll build in this session, end to end, in real time, with nothing pre-built and nothing hidden. If it goes wrong, you\'ll watch me fix it, because that\'s the part most tutorials cut out.',
  },

  learn: {
    eyebrow: "What you'll learn",
    title: 'The full journey, from offer to live URL',
    closer:
      'You\'ll leave with the full process in your head, and if you build along, a live page of your own.',
    items: [
      {
        title: 'Offer creation',
        desc: 'We start with what the page is actually selling, because a beautiful page for a fuzzy offer converts nobody.',
      },
      {
        title: 'Style and design',
        desc: 'We build the look of the page so it matches your brand and doesn\'t scream "template."',
      },
      {
        title: 'Setting up the page',
        desc: 'Structure, sections and copy, assembled in front of you.',
      },
      {
        title: 'Cursor and Claude',
        desc: 'How the two work together, and what to ask for so the code writes itself.',
      },
      {
        title: 'GitHub for your code',
        desc: 'Where your code lives and why it matters, explained for normal humans.',
      },
      {
        title: 'Launch with Vercel',
        desc: 'We put it live on the internet with a real URL you can share, before the session ends.',
      },
    ],
  },

  whoFor: {
    eyebrow: 'Who this is for',
    title: 'Built for business owners, no engineering background needed',
    body:
      'If you\'re a founder, coach, consultant or anyone with an offer to sell, this session was designed for you. You don\'t need to be technical, and I\'d rather you weren\'t, because I\'m a non-technical founder myself and everything is explained in plain language. The people who get the most out of my sessions are the ones who arrive convinced they "can\'t do the code stuff" and leave with a URL.',
  },

  prep: {
    eyebrow: 'Before you join',
    title: 'Set these 3 things up before the session',
    intro:
      'To build along with me on the day, you\'ll want these ready (each takes a few minutes, and I\'ll send setup instructions when you register):',
    watchNote:
      'If you\'d rather just watch, that\'s completely fine too — you\'ll still get the replay and everything will make sense.',
    items: [
      {
        title: 'Claude desktop app with a paid Claude account',
        desc: '',
      },
      {
        title: 'Cursor installed on your machine',
        desc: '',
      },
      {
        title: 'A GitHub account, set up and signed in',
        desc: '',
      },
    ],
  },

  about: {
    eyebrow: "Who's teaching this",
    title: 'About Ross',
    paragraphs: [
      'I\'m Ross, founder of AI Powered. I teach business owners to build with Claude through live programmes, and my whole approach is doing over learning: you build real things in real time, because that\'s how it actually sticks.',
      'Over 120 people have been through my methodology across two public cohorts and a private community cohort, plus hundreds more through my live sessions, and the thing I hear most often is some version of "I didn\'t think I could build that."',
    ],
    disclaimer:
      'Ross and AI Powered are not affiliated with Anthropic. Claude is a product of Anthropic.',
  },

  cohortPromo: {
    eyebrow: 'The bigger picture',
    title: 'This session is a taste of Cohort 3.0',
    body:
      'This masterclass is one slice of the Claude Accelerator, my 6 week live programme that answers the bigger question: how do I make Claude actually work for my business? It takes you through the 6 levels of ClaudeOS (Chat, Customise, Create, Connect, Code and Command), and Cohort 3.0 starts on 7 July.',
    body2:
      'It\'s the third time the programme has run, with over 120 people already through the methodology across two public cohorts and a private community cohort, so you\'d be joining something tried and tested rather than a first experiment.',
    offer:
      'Join the waitlist now and you\'ll get a $500 off coupon code as a reward, which you can use when early-bird enrolment opens on 15 June. The code brings the price from $1,500 down to $1,000, and it stops working when doors open to everyone on 22 June.',
  },

  finalOffer: {
    title: 'One lunch break, one live landing page',
    body:
      'Monday 22 June, 12:30pm BST, free. Watch a landing page go from nothing to live on the internet, and leave knowing you could do it yourself.',
  },

  faq: [
    {
      q: 'Will there be a replay?',
      a: 'Yes, everyone who registers gets the replay, although the live session is where you can ask questions and build along with me.',
    },
    {
      q: 'Do I need to be technical?',
      a: 'No, and the session assumes you aren\'t. Everything is explained in plain language and Claude handles the parts that used to need an engineer.',
    },
    {
      q: 'What if I can\'t set up the tools in time?',
      a: 'Come anyway and just watch. The replay plus the setup instructions mean you can build it yourself afterwards at your own pace.',
    },
    {
      q: 'Does the paid Claude account matter?',
      a: 'Yes, you\'ll need one to build along, because the free tier won\'t keep up with what we\'re doing. If you\'re only watching, you don\'t need anything.',
    },
    {
      q: 'How long is it?',
      a: '90 minutes, designed to fit inside a long lunch. We start at 12:30pm BST sharp and the page is live before we finish.',
    },
    {
      q: 'Is this a sales pitch in disguise?',
      a: 'You\'ll build a real landing page for 90 minutes, and at the end I\'ll spend a couple of minutes telling you about Cohort 3.0 for those who want to go deeper. The session stands on its own either way.',
    },
  ],

  footer: {
    tagline: 'AI Powered Masterclass by Ross Power',
    link: 'https://aipowered.xyz',
  },

  disclaimer:
    'This event is produced by AI Powered and is not affiliated with, endorsed by, or officially connected to Anthropic, PBC. Claude is a product of Anthropic.',
} as const

export type WebinarConfig = typeof webinar

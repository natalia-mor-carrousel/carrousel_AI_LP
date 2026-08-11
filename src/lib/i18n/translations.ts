export type Lang = 'en' | 'fr';

const en = {
  nav: {
    links: [
      { label: 'The approach', href: '/the-approach' },
      { label: 'Who Am I', href: '/who-am-i' },
    ],
    cta: 'Book an intro',
  },
  hero: {
    tagMobile: 'AI partner for SME',
    tagDesktop: 'AI partner for small and medium businesses',
    heading: {
      before: 'Hands-on ',
      underlined: 'AI training',
      afterSameLine: '',
      breakBeforeUnderline: false,
      beforeUnderlined: '',
      line2Mobile1: 'for leadership',
      line2Mobile2: 'and teams',
      line2Desktop1: 'for leadership and',
      line2Desktop2: 'teams',
    },
    body: "I'm Natalia. I built a company alone in six months using AI. Now I help you get that same speed — through co-building AI-native processes.",
    cta: 'Book an intro',
  },
  hook: {
    prefix: "Only 10% of AI's value comes from the algorithms, 20% from the tech implementation, and",
    highlight: '70% from rethinking the people side',
    suffix: '— that is, training',
  },
  bottlenecks: {
    heading: 'Why AI adoption fails',
    subheading: 'Every team tries something. Most hit the same walls.',
    items: [
      {
        title: 'Seemingly easy,\nbut not easy',
        body: "AI lowered the bar. It didn't remove it — you still have to learn this stuff. No shortcut here.",
      },
      {
        title: 'Graveyard\nof agents',
        body: 'Teams spin up a bunch of agents. Six months later, half are dead — a graveyard nobody visits.',
      },
      {
        title: 'AI creates new\nbottlenecks',
        body: "Spinning up an agent takes five minutes. Keeping it running doesn't — teams lose a full workday a week to tool sprawl and upkeep.",
      },
    ],
  },
  aiNative: {
    heading: 'If you remove AI, will your business still function?',
    yes: 'Yes',
    no: 'No',
    messages: {
      yes: "If yes, you probably aren't using it enough.",
      no: "No? Awesome! You're on the right track to an AI-native company.",
    },
  },
  approach: {
    eyebrow: 'The training experience',
    heading: "AI didn't remove the technical barrier. It lowered it enough for you to climb over.",
    subheading: "Every training is built around what your team actually does — not a generic AI crash course.",
    pillars: [
      {
        tag: 'Hands-on',
        title: 'Learning by doing',
        body: 'We sit down and build it together. You walk away with an upskilled team and an automated process.',
      },
      {
        tag: 'Tailored',
        title: 'Custom training',
        body: "Built around your actual workflows and business processes. Some teams need basics, others want to learn to code. We take it from that level and go deeper.",
      },
      {
        tag: 'Practical',
        title: 'Combo of tech and applied AI skills',
        body: "The tech side: Claude, GitHub, RAG, self-improving agents. The applied side: Should this be an agent, who's responsible if it breaks, is it actually saving time?",
      },
    ],
  },
  whoFor: {
    heading: 'Who this is for',
    subheading: 'Small and medium businesses that want to become AI-native.',
    cards: [
      {
        kicker: 'founders, co-founders, managers',
        title: 'AI for Leadership',
        body: 'AI adoption only spreads if leaders visibly use it themselves. Upgrade your AI and Claude skills and lead by example.',
      },
      {
        kicker: 'marketing, sales, ops, support, HR',
        title: 'AI for Teams',
        body: "The best strategy to AI transition is through distributed ownership: each team owns their own AI setup — with a shared layer where what works in one place gets passed to the others. Having one person try to own AI across the whole company \"collapses.\" It doesn't scale as one job.",
      },
    ],
  },
  offers: {
    heading: 'Choose your format',
    items: [
      {
        id: 'boost',
        kicker: 'One-day workshop',
        name: 'Boost',
        price: '€3,500',
        desc: 'One focused day together, hands-on, on whatever will move the needle most for you or your team.',
        note: 'in person or remote · teams up to 8',
        cta: 'Book an intro call',
      },
      {
        id: 'immersion',
        kicker: 'Two weeks, two hours a day',
        name: 'Immersion',
        price: '€7,000',
        desc: 'Two weeks gives you room to breathe — try things between sessions, sleep on it, come back with thoughtful questions. That space means we cover more ground, and it actually sticks.',
        note: 'remote · teams up to 10',
        cta: 'Book an intro call',
      },
      {
        id: 'fractional',
        kicker: 'One day a week, six months',
        name: 'Fractional AI Partner',
        price: '€9,000/month',
        desc: 'I get to know how your business runs and work alongside your team every week, until using AI becomes how you work. More time, stronger adoption.',
        note: 'remote',
        cta: 'Book an intro call',
      },
    ],
    custom: {
      text: "Need something different — a two-day offsite, a different rhythm? Tell me what you're working with and we'll figure out a shape that fits.",
      cta: 'Contact',
    },
    learnMore: 'Learn more',
  },
  quiz: {
    heading: 'Is your business AI-native, or just AI-assisted?',
    subheading: 'Five questions and you get a clear picture of where your company stands.',
    questionOf: (current: number, total: number) => `Question ${current} of ${total}`,
    back: '← Back',
    almostThere: 'Almost there — where should we send your result?',
    form: {
      name: 'Full name',
      company: 'Company name',
      email: 'Email',
      role: 'Your role',
      size: 'Company size',
      sizePlaceholder: 'Select…',
      sizeOptions: ['0 to 20', '20 to 50', '50 to 100', '100 to 500', 'More than 500'],
      industry: 'Industry',
      submit: 'See my result',
      submitting: 'Submitting…',
      error: 'Something went wrong. Please try again.',
    },
    questions: [
      {
        q: 'Does your team use ChatGPT or Claude?',
        options: [
          { label: 'Not really.', score: 0 },
          { label: 'Yes, a few people use it here and there.', score: 1 },
          { label: "It's part of how most teams work day to day.", score: 2 },
        ],
      },
      {
        q: 'Have you set up any AI agents for tasks such as content creation, cold outreach, knowledge management — or similar?',
        options: [
          { label: "No, we haven't set anything like that up.", score: 0 },
          { label: "We've tried one or two, but they're not really running on their own — someone still babysits them.", score: 1 },
          { label: 'Yes, a few agents handle real tasks with light supervision.', score: 2 },
          { label: 'Yes, several agents run end-to-end and we barely touch them.', score: 3 },
        ],
      },
      {
        q: 'Are your agents plugged into your company knowledge base (documentation and data)?',
        options: [
          { label: "We don't have a consolidated knowledge base.", score: 0 },
          { label: "We have one, but our AI tools aren't connected to it.", score: 1 },
          { label: 'Yes, our agents pull directly from it.', score: 2 },
          { label: "We've set up RAG.", score: 3 },
        ],
      },
      {
        q: 'When AI gets something wrong, what happens?',
        options: [
          { label: 'Someone catches it eventually, ad hoc.', score: 0 },
          { label: "A human checks every single output — that's the review step.", score: 1 },
          { label: 'The system flags what looks off. People only step in for the real judgment calls.', score: 2 },
        ],
      },
      {
        q: 'Who owns AI at your company?',
        options: [
          { label: "No one, really — people just use whatever tools they like.", score: 0 },
          { label: "A few teams have their own setups, but they don't talk to each other.", score: 1 },
          { label: 'Each team owns their piece, with shared guidelines and documentation.', score: 2 },
          { label: 'A dedicated role.', score: 3 },
        ],
      },
    ],
    results: {
      assisted: {
        label: 'Assisted',
        description: 'People use AI tools here and there, one-off, disconnected from the last time. Nothing carries over.',
      },
      integrated: {
        label: 'Integrated',
        description: "AI shows up at several points in a workflow, but someone's still manually running each step and passing the work between them.",
      },
      native: {
        label: 'Native',
        description: "Steps hand off to each other on their own. People design the system and step in where judgment is needed — they're not operating every step by hand.",
      },
    },
    yourResult: 'Your result',
    deeperDig: "Most companies think they're further along than they are. 90% of employees already use AI tools on their own, unofficially — and it still doesn't add up to real value. Even fully-resourced AI projects fail most of the time: 95% of enterprise AI pilots don't deliver a return, not because the AI doesn't work, but because it gets bolted onto an old way of working. Outside help roughly doubles the success rate of internal-only attempts — knowing your own job well isn't the same as knowing how to restructure it.",
    startOver: 'Start over',
  },
  topics: {
    heading: 'Examples of what we can work on',
    subheading: 'Sessions are tailored to where your team is. Pick the level that fits.',
    footer: 'These are examples only — the actual concepts will be shaped together at the intro call.',
    tiers: [
      {
        label: 'Foundation',
        description: 'Getting started with AI tools and agent thinking',
        topics: [
          'Intro to Claude Cowork',
          'Identifying repetitive tasks and setting priorities',
          'Which processes to convert to an AI agent',
          "Autonomous agent, agent with subagent, human in the loop — what's best?",
          'Connecting tools',
          'Agents, subagents, skills, commands, hooks',
          'Token management',
        ],
      },
      {
        label: 'Intermediate',
        description: 'Building shared systems and managing knowledge',
        topics: [
          'Building a knowledge base: shared team workspace and conventions',
          'Knowledge base, memory, RAG',
          'CLAUDE.md file',
          'Context management',
          'Governance and responsibility',
          'Difference between Claude Cowork and Claude Code',
          'Plan and execute modes',
        ],
      },
      {
        label: 'Advanced',
        description: 'Scaling robust agent systems across your organisation',
        topics: [
          'How to build a robust system of agents from scratch',
          'Shared guardrails and policies across organisation',
          'Maintenance',
          'Self-testing and self-improving agents',
          'Metrics — does AI actually help? — visual dashboard',
          'Connecting your workspace to GitHub',
          'Backend of the project',
        ],
      },
    ],
  },
  finalCta: {
    heading: 'Tell me where you are at',
    subheading: 'A brief call to see if we are a fit, discuss your needs, and set up a plan.',
    cta: 'Book an intro',
  },
  theApproach: {
    eyebrow: 'The approach',
    heading: {
      before: 'AI opened the door. You still have to ',
      underlined: 'walk through.',
    },
    howItWorksHeading: 'How it works',
    steps: [
      {
        number: '01',
        title: 'Intro call',
        subtitle: null as string | null,
        bullets: [
          'Goal: customize the training to you',
          'Where you are now and how you currently use AI',
          'Who it is for — team or leadership, what level, their processes and bottlenecks',
          'We define the learning goals together',
          'You get the program outline right after',
        ],
        linkBullet: null as { text: string; linkText: string } | null,
      },
      {
        number: '02',
        title: 'Training',
        subtitle: null as string | null,
        bullets: [
          'I get to know your team and how they work, where they lose time, where the bottlenecks are',
          'We fill the gaps with the concepts they are missing',
        ],
        linkBullet: {
          text: 'We build what fits your goals: a knowledge base, an agent, governance guardrails, etc.',
          linkText: 'See examples below',
        } as { text: string; linkText: string } | null,
      },
      {
        number: '03',
        title: 'What you walk away with',
        subtitle: 'Depending on the training goals' as string | null,
        bullets: [
          'A Claude Cowork workspace and knowledge base',
          'A set of skills and scheduled tasks',
          'A governance map — who is responsible for what',
          'Shared guardrails and policies',
          'A metrics dashboard',
          'An action plan with next steps (key processes to automate, key decisions to make)',
        ],
        linkBullet: null as { text: string; linkText: string } | null,
      },
    ],
    fractional: {
      eyebrow: 'One day a week, six months',
      heading: 'Fractional AI Partner',
      body: 'Weekly calls with your team, going deep into how they actually work. We restructure workflows end to end, install and connect tools. Building and learning happen at the same time — key concepts get covered as we go, so the knowledge stays with the team. You end up as an AI-native company.',
      cta: 'Book an intro call',
    },
  },
  whoAmI: {
    hero: {
      eyebrow: 'My story',
      heading: {
        before: 'Six months, one person, and a pile of ',
        underlined: 'AI agents.',
      },
      body: "That's how Noorish happened. I'm Natalia — I built it solo, fast, and had a blast doing it.",
    },
    noorish: {
      heading: 'What is Noorish?',
      body1: "A gut-health app that helps people with IBS figure out what works for them. Using AI, of course.",
      body2: "It's not just an app. It's a whole business — with a client base, customer support, marketing channels, content, collabs with practitioners, competitor research, staying current in the nutrition field.",
      visitButton: 'Visit getnoorish.com ↗',
      aiNativeEyebrow: 'AI-native from the ground up',
      card1Heading: 'The product itself runs on AI',
      card1Body: "I'm not a nutritionist — AI does the research, checks the findings, and makes sure it's all backed by science.",
      card2Heading: 'The whole business runs on the Noorish OS',
      card2Body: 'A combo of knowledge base, skills, agents, subagents, databases, webhooks, and scheduled tasks.',
    },
    quote: {
      prefix: 'If I could build a whole company in 6 months, solo,',
      highlight: 'imagine what you could do with a team',
      subtext: "You just need a trained team. A team of pro users, not just amateurs.",
      cta: 'Book an intro',
    },
    background: {
      eyebrow: 'A bit of background',
      body: "In the past I was a learning designer, building fun and engaging trainings on tech stuff. Now it's AI's turn. Not a developer, but I've always been a tech enthusiast. With AI, tech got easier — but somehow it's also not easy at all.",
    },
    stats: {
      eyebrow: 'Thanks to my agents...',
      heading: 'In the last month',
      withoutAgentsLabel: 'Without agents:',
      lessLabel: 'less',
      items: [
        { metric: 'Gut health action plans generated', withAgents: 22, withoutAgents: 2 as number | string, multiplier: '11×' as string | null },
        { metric: 'Instagram posts published', withAgents: 63, withoutAgents: 30 as number | string, multiplier: '2×' as string | null },
        { metric: 'Blog articles published', withAgents: 17, withoutAgents: '0 (yeah)' as number | string, multiplier: null as string | null },
        { metric: 'Nutritionists contacted', withAgents: 145, withoutAgents: 50 as number | string, multiplier: '3×' as string | null },
        { metric: 'Collab calls booked', withAgents: 18, withoutAgents: 6 as number | string, multiplier: '3×' as string | null },
        { metric: 'App features shipped', withAgents: 12, withoutAgents: 2 as number | string, multiplier: '6×' as string | null },
      ],
    },
    agents: {
      eyebrow: 'Under the hood',
      heading: 'Some of what Noorish agents do',
      items: [
        {
          title: 'Cold outreach',
          body: "It searches for qualified practitioner leads, drafts personalized messages, sends follow-ups, and handles my CRM. I only step in when someone replies — you know, to chat a bit, 'cause I want some human connection too.",
        },
        {
          title: 'Video content publishing',
          body: "Recording is the fun part. Editing, writing captions, organizing files, publishing, grabbing links, tracking it all in Notion... too much. My agent handles all that boring work for me.",
        },
        {
          title: 'Blog posts',
          body: "I hate blogs. But Noorish users love them, and SEO loves them even more. My agent searches for keyword gaps, builds outlines, writes drafts, fact-checks, humanizes the text, generates images, and publishes. Yeah, agent labor exploitation.",
        },
        {
          title: 'Daily progress',
          body: "Useful for OS memory so it stays up to date — but also for you, on those days you wonder if you actually did anything useful last month. Just ask your agent.",
        },
        {
          title: 'Clean my folders',
          body: "My agent robovac goes through folders and files, finds the obsolete ones, and hands me a list to confirm before deleting. I hate cleaning. Even digital cleaning.",
        },
        {
          title: 'Manage emails',
          body: "It sorts emails by the rules I've set. Some get replied to right away. Some need a draft and my review. The ones not worth my time get archived.",
        },
      ],
    },
  },
  bottlenecksFull: {
    eyebrow: 'Where teams get stuck',
    heading: 'Most common bottlenecks',
    items: [
      {
        title: 'Graveyard of agents',
        body: "Most teams jump in, spin up a bunch of agents — and six months later, half of them are dead. A graveyard nobody visits. Why: bad output, something broke and nobody fixed it, or the process never should've been automated in the first place.",
      },
      {
        title: 'Seemingly easy, but not easy',
        body: "AI lowered the bar, it didn't remove it. There's still no shortcut up there — you actually have to learn this stuff.",
      },
      {
        title: 'Most use cases are generic',
        body: "The use cases on YouTube are generic on purpose — built to fit everyone, which means they fit no one exactly. Your business and your process have their own quirks, and generic templates don't stretch that far.",
      },
      {
        title: 'AI creates new bottlenecks',
        body: 'Spinning up an agent takes five minutes. But most AI agents create new bottlenecks — tool sprawl, review overhead, fragmented processes, maintenance. Teams lose a full workday a week to this. The trick is making AI run smooth — like a carrousel ;)',
      },
      {
        title: 'Data is messy',
        body: "Data is king, knowledge base is close behind. If it's messy, duplicated, outdated, or contradicting itself (happens more than you'd think), your agent has nowhere solid to pull from. Garbage in, garbage out.",
      },
      {
        title: 'Overusing or underusing autonomous agents',
        body: "Most of the time we don't even want to hand over the decision — in those cases, autonomous agents are a terrible idea. Build a smooth human-in-the-loop process instead. But the flip side happens too: teams double-check everything the agent does. A little trust issue. And with zero trust, you save zero time.",
      },
      {
        title: 'Unclear responsibility',
        body: "Who owns this? Who approves a new agent? Who's on the hook when it messes up? Who updates it, who kills it once it's not needed? And if leadership never turns this into a real strategy with real resources behind it... oups.",
      },
      {
        title: 'Token burn',
        body: "AI isn't free, and tokens disappear faster than you'd think. There are ways to burn less — you just have to know them and actually use them.",
      },
    ],
  },
};

const fr: typeof en = {
  nav: {
    links: [
      { label: "L'approche", href: '/the-approach' },
      { label: 'Qui suis-je', href: '/who-am-i' },
    ],
    cta: 'Prendre un call',
  },
  hero: {
    tagMobile: 'Partenaire IA pour PME',
    tagDesktop: 'Partenaire IA pour petites et moyennes entreprises',
    heading: {
      before: "L'IA, on l'apprend",
      underlined: 'faisant',
      afterSameLine: '',
      breakBeforeUnderline: true,
      beforeUnderlined: 'en la ',
      line2Mobile1: '',
      line2Mobile2: '',
      line2Desktop1: '',
      line2Desktop2: '',
    },
    body: "Je m'appelle Natalia. J'ai créé une entreprise seule en six mois grâce à l'IA. Maintenant, je vous aide à aller à la même vitesse — via une formation construite avec vous, sur vos process.",
    cta: 'Prendre un call',
  },
  hook: {
    prefix: "Seulement 10 % de la valeur de l'IA vient des algorithmes, 20 % de l'implémentation tech, et",
    highlight: '70 % du facteur humain',
    suffix: "— c'est ça, la formation",
  },
  bottlenecks: {
    heading: "Pourquoi l'adoption de l'IA échoue",
    subheading: 'Chaque équipe tente quelque chose. La plupart se retrouvent face aux mêmes murs.',
    items: [
      {
        title: 'En apparence simple,\nmais pas si simple',
        body: "L'IA a abaissé la barre. Elle ne l'a pas supprimée — il faut quand même apprendre. Pas de raccourci.",
      },
      {
        title: 'Le cimetière\ndes agents',
        body: "Les équipes lancent plein d'agents. Six mois plus tard, la moitié sont morts — un cimetière que personne ne visite.",
      },
      {
        title: "L'IA crée de nouveaux\ngoulots d'étranglement",
        body: "Lancer un agent prend cinq minutes. Le maintenir en vie, c'est une autre histoire — les équipes perdent une journée entière par semaine à gérer les relectures et la maintenance.",
      },
    ],
  },
  aiNative: {
    heading: "Si vous retirez l'IA, votre entreprise peut-elle encore fonctionner ?",
    yes: 'Oui',
    no: 'Non',
    messages: {
      yes: "Si oui, vous ne l'utilisez probablement pas assez.",
      no: "Non ? Parfait ! Vous êtes sur la bonne voie pour devenir une entreprise AI-native.",
    },
  },
  approach: {
    eyebrow: "L'expérience de formation",
    heading: "L'IA n'a pas supprimé la barrière technique. Elle l'a juste assez abaissée pour que vous puissiez la franchir.",
    subheading: "Chaque formation est construite autour de ce que votre équipe fait réellement — pas un cours IA générique.",
    pillars: [
      {
        tag: 'Pratique',
        title: 'Apprendre en faisant',
        body: "On s'installe ensemble et on construit. Vous repartez avec une équipe montée en compétences et un process automatisé.",
      },
      {
        tag: 'Sur mesure',
        title: 'Formation personnalisée',
        body: "Construite autour de vos workflows et process réels. Certaines équipes ont besoin des bases, d'autres veulent apprendre à coder. On part de là et on approfondit.",
      },
      {
        tag: 'Concret',
        title: 'Technique et IA appliquée',
        body: "Le côté technique : Claude, GitHub, RAG, agents auto-améliorants. Le côté appliqué : est-ce que ça devrait être un agent, qui est responsable si ça casse, est-ce que ça fait vraiment gagner du temps ?",
      },
    ],
  },
  whoFor: {
    heading: "À qui s'adresse cette formation",
    subheading: 'Aux PME qui veulent devenir AI-native.',
    cards: [
      {
        kicker: 'fondateurs, co-fondateurs, managers',
        title: 'IA pour les dirigeants',
        body: "L'adoption de l'IA ne se propage que si les dirigeants l'utilisent eux-mêmes, visiblement. Montez en compétences sur l'IA et Claude, et donnez l'exemple.",
      },
      {
        kicker: 'marketing, ventes, ops, support, RH',
        title: 'IA pour les équipes',
        body: "La meilleure stratégie de transition IA, c'est l'ownership distribué : chaque équipe gère son propre setup IA — avec une couche partagée où ce qui marche quelque part est transmis aux autres. Confier l'IA à une seule personne pour toute l'entreprise, ça s'effondre.",
      },
    ],
  },
  offers: {
    heading: 'Choisissez votre format',
    items: [
      {
        id: 'boost',
        kicker: "Atelier d'une journée",
        name: 'Boost',
        price: '3 500 €',
        desc: "Une journée intense ensemble, en pratique, sur ce qui fera le plus bouger les lignes pour vous ou votre équipe.",
        note: "en présentiel ou à distance · équipes jusqu'à 8 personnes",
        cta: 'Prendre un call',
      },
      {
        id: 'immersion',
        kicker: 'Deux semaines, deux heures par jour',
        name: 'Immersion',
        price: '7 000 €',
        desc: "Deux semaines, ça laisse de l'espace — essayer entre les sessions, y réfléchir, revenir avec des questions pertinentes. Cet espace permet d'aller plus loin, et ça s'ancre vraiment.",
        note: "à distance · équipes jusqu'à 10 personnes",
        cta: 'Prendre un call',
      },
      {
        id: 'fractional',
        kicker: 'Un jour par semaine, six mois',
        name: 'Fractional AI Partner',
        price: '9 000 €/mois',
        desc: "J'apprends comment votre entreprise fonctionne et je travaille aux côtés de votre équipe chaque semaine, jusqu'à ce que l'IA devienne votre façon de travailler. Plus de temps, une adoption plus solide.",
        note: 'à distance',
        cta: 'Prendre un call',
      },
    ],
    custom: {
      text: "Besoin d'autre chose — un offsite de deux jours, un rythme différent ? Dites-moi ce que vous avez en tête et on trouvera un format qui colle.",
      cta: 'Contact',
    },
    learnMore: 'En savoir plus',
  },
  quiz: {
    heading: "Votre entreprise est-elle AI-native, ou juste assistée par l'IA ?",
    subheading: "Cinq questions pour voir exactement où en est votre entreprise.",
    questionOf: (current: number, total: number) => `Question ${current} sur ${total}`,
    back: '← Retour',
    almostThere: "Presque fini — on vous envoie le résultat où ?",
    form: {
      name: 'Nom complet',
      company: "Nom de l'entreprise",
      email: 'E-mail',
      role: 'Votre poste',
      size: "Taille de l'entreprise",
      sizePlaceholder: 'Sélectionner…',
      sizeOptions: ['0 à 20', '20 à 50', '50 à 100', '100 à 500', 'Plus de 500'],
      industry: "Secteur d'activité",
      submit: 'Voir mes résultats',
      submitting: 'En cours…',
      error: "Oups, quelque chose a planté. Réessayez ?",
    },
    questions: [
      {
        q: "Dans votre équipe, est-ce qu'on utilise ChatGPT ou Claude ?",
        options: [
          { label: 'Pas vraiment.', score: 0 },
          { label: "Oui, quelques personnes l'utilisent de temps en temps.", score: 1 },
          { label: "C'est dans la façon de bosser de la plupart des équipes, au quotidien.", score: 2 },
        ],
      },
      {
        q: "Avez-vous mis en place des agents IA pour des tâches comme la création de contenu, la prospection, la gestion des connaissances — ou similaires ?",
        options: [
          { label: "Non, rien de ce genre.", score: 0 },
          { label: "On en a essayé un ou deux, mais ils ne tournent pas vraiment seuls — quelqu'un les surveille encore.", score: 1 },
          { label: 'Oui, quelques agents gèrent de vraies tâches avec peu de supervision.', score: 2 },
          { label: "Oui, plusieurs agents tournent de bout en bout et on y touche à peine.", score: 3 },
        ],
      },
      {
        q: "Vos agents sont-ils branchés à votre base de connaissances (documentation et données) ?",
        options: [
          { label: "On n'a pas de base de connaissances centralisée.", score: 0 },
          { label: "On en a une, mais nos outils IA n'y sont pas connectés.", score: 1 },
          { label: "Oui, nos agents y puisent directement.", score: 2 },
          { label: "On a mis en place le RAG.", score: 3 },
        ],
      },
      {
        q: "Quand l'IA se plante, que se passe-t-il ?",
        options: [
          { label: "Quelqu'un finit par le remarquer, de façon ponctuelle.", score: 0 },
          { label: "Un humain vérifie chaque résultat — c'est l'étape de relecture.", score: 1 },
          { label: "Le système signale ce qui semble incorrect. Les humains n'interviennent que pour les vraies décisions.", score: 2 },
        ],
      },
      {
        q: "Qui est responsable de l'IA dans votre entreprise ?",
        options: [
          { label: "Personne vraiment — chacun utilise les outils qu'il préfère.", score: 0 },
          { label: "Quelques équipes ont leurs propres setups, mais elles ne se parlent pas.", score: 1 },
          { label: 'Chaque équipe gère sa partie, avec des règles et une documentation partagées.', score: 2 },
          { label: 'Un rôle dédié.', score: 3 },
        ],
      },
    ],
    results: {
      assisted: {
        label: 'Assistée',
        description: "On utilise des outils IA ici et là, ponctuellement, sans lien avec la fois précédente. Rien ne s'accumule.",
      },
      integrated: {
        label: 'Intégrée',
        description: "L'IA intervient à plusieurs points d'un workflow, mais quelqu'un pilote manuellement chaque étape et passe le boulot à la suivante.",
      },
      native: {
        label: 'Native',
        description: "Les étapes s'enchaînent toutes seules. Les gens conçoivent le système et interviennent là où un jugement est nécessaire — ils ne pilotent pas chaque étape à la main.",
      },
    },
    yourResult: 'Votre résultat',
    deeperDig: "La plupart des entreprises pensent être plus avancées qu'elles ne le sont. 90 % des employés utilisent déjà des outils IA de leur côté, de façon non officielle — et ça ne se traduit toujours pas en valeur réelle. Même les projets IA avec des ressources conséquentes échouent la plupart du temps : 95 % des pilotes IA en entreprise ne génèrent pas de retour sur investissement, non pas parce que l'IA ne fonctionne pas, mais parce qu'elle est greffée sur une ancienne façon de travailler. L'accompagnement externe double à peu près le taux de succès par rapport aux tentatives internes — bien connaître son métier, ce n'est pas la même chose que savoir comment le restructurer.",
    startOver: 'Recommencer',
  },
  topics: {
    heading: "Exemples de ce qu'on peut construire ensemble",
    subheading: "Les sessions sont adaptées à votre équipe. Choisissez le niveau qui vous correspond.",
    footer: "Ce sont des exemples — les vrais sujets se définissent ensemble lors de notre premier call.",
    tiers: [
      {
        label: 'Fondations',
        description: "Démarrer avec les outils IA et la logique agentique",
        topics: [
          'Introduction à Claude Cowork',
          'Identifier les tâches répétitives et définir les priorités',
          'Quels process convertir en agent IA',
          "Agent autonome, agent avec sous-agent, humain dans la boucle — qu'est-ce qui est le mieux ?",
          'Connecter les outils',
          'Agents, sous-agents, skills, commandes, hooks',
          'Gestion des tokens',
        ],
      },
      {
        label: 'Intermédiaire',
        description: 'Construire des systèmes partagés et gérer les connaissances',
        topics: [
          'Construire une base de connaissances : espace de travail partagé et conventions',
          'Base de connaissances, mémoire, RAG',
          'Fichier CLAUDE.md',
          'Gestion du contexte',
          'Gouvernance et responsabilité',
          'Différence entre Claude Cowork et Claude Code',
          "Modes Plan et Exécution",
        ],
      },
      {
        label: 'Avancé',
        description: "Déployer des systèmes d'agents robustes à l'échelle de l'organisation",
        topics: [
          "Construire un système d'agents robuste de zéro",
          "Règles et politiques partagées dans toute l'organisation",
          'Maintenance',
          'Agents auto-testeurs et auto-améliorants',
          "Métriques — l'IA aide-t-elle vraiment ? — tableau de bord visuel",
          'Connecter votre espace de travail à GitHub',
          'Backend du projet',
        ],
      },
    ],
  },
  finalCta: {
    heading: 'Dites-moi où vous en êtes',
    subheading: "Un call rapide pour voir si le courant passe, discuter de vos besoins et poser un plan.",
    cta: 'Prendre un call',
  },
  theApproach: {
    eyebrow: "L'approche",
    heading: {
      before: "L'IA a ouvert la porte. Il vous reste à ",
      underlined: 'la franchir.',
    },
    howItWorksHeading: 'Comment ça fonctionne',
    steps: [
      {
        number: '01',
        title: "Premier call",
        subtitle: null as string | null,
        bullets: [
          "Objectif : adapter la formation à vous",
          "Où vous en êtes et comment vous utilisez l'IA aujourd'hui",
          "Pour qui — équipe ou dirigeants, à quel niveau, leurs process et leurs blocages",
          "On définit ensemble les objectifs",
          "Vous recevez le programme juste après",
        ],
        linkBullet: null as { text: string; linkText: string } | null,
      },
      {
        number: '02',
        title: 'Formation',
        subtitle: null as string | null,
        bullets: [
          "J'apprends à connaître votre équipe, comment elle travaille, où elle perd du temps, où ça coince",
          "On comble les manques avec les concepts qui font défaut",
        ],
        linkBullet: {
          text: "On construit ce qui correspond à vos objectifs : une base de connaissances, un agent, des règles de gouvernance, etc.",
          linkText: 'Voir les exemples ci-dessous',
        } as { text: string; linkText: string } | null,
      },
      {
        number: '03',
        title: 'Ce que vous repartez avec',
        subtitle: 'En fonction des objectifs de formation' as string | null,
        bullets: [
          'Un espace de travail Claude Cowork et une base de connaissances',
          'Un ensemble de compétences et de tâches planifiées',
          'Une cartographie de gouvernance — qui est responsable de quoi',
          'Des règles et politiques partagées',
          'Un tableau de bord de métriques',
          "Un plan d'action avec les prochaines étapes (process clés à automatiser, décisions clés à prendre)",
        ],
        linkBullet: null as { text: string; linkText: string } | null,
      },
    ],
    fractional: {
      eyebrow: 'Un jour par semaine, six mois',
      heading: 'Fractional AI Partner',
      body: "Des appels hebdomadaires avec votre équipe, en allant au fond de comment elle travaille réellement. On restructure les workflows de bout en bout, on installe et connecte les outils. Construire et apprendre se font en même temps — les concepts clés sont couverts au fil du travail, pour que les connaissances restent dans l'équipe. Vous devenez une entreprise AI-native.",
      cta: 'Prendre un call',
    },
  },
  whoAmI: {
    hero: {
      eyebrow: 'Mon histoire',
      heading: {
        before: "Six mois, une personne, et un tas d'",
        underlined: 'agents IA.',
      },
      body: "C'est comme ça que Noorish est né. Je m'appelle Natalia — je l'ai créée seule, à toute vitesse, et je me suis éclatée.",
    },
    noorish: {
      heading: "Au fait, Noorish c'est quoi ?",
      body1: "Une app de santé digestive qui aide les gens avec le SII (Syndrome de l'Intestin Irritable) à comprendre ce qui marche pour eux. Avec l'IA, bien sûr.",
      body2: "C'est pas juste une app. C'est toute une entreprise — avec une base clients, un support, des canaux marketing, du contenu, des collabs avec des praticiens, de la veille concurrentielle, du suivi des dernières recherches en nutrition.",
      visitButton: 'Visiter getnoorish.com ↗',
      aiNativeEyebrow: 'AI-native dès le départ',
      card1Heading: "Le produit lui-même tourne grâce à l'IA",
      card1Body: "Je ne suis pas nutritionniste — l'IA fait les recherches, vérifie les résultats et s'assure que tout est étayé par la science.",
      card2Heading: "Toute l'entreprise tourne sur le Noorish OS",
      card2Body: "Un ensemble de base de connaissances, skills, agents, sous-agents, bases de données, webhooks et tâches planifiées.",
    },
    quote: {
      prefix: "Si j'ai pu créer toute une entreprise en 6 mois, seule,",
      highlight: 'imaginez ce que vous pourriez faire avec une équipe',
      subtext: "Il vous faut juste une équipe formée. Une équipe d'utilisateurs experts, pas des débutants.",
      cta: 'Prendre un call',
    },
    background: {
      eyebrow: 'Un peu de contexte',
      body: "Avant, c'était le e-learning — je créais des formations fun et engageantes sur des sujets tech. Maintenant, c'est au tour de l'IA. J'ai toujours été passionnée de technologie. Avec l'IA, la tech est devenue plus accessible — mais d'une certaine façon, c'est toujours aussi complexe.",
    },
    stats: {
      eyebrow: 'Grâce à mes agents...',
      heading: 'Le mois dernier',
      withoutAgentsLabel: 'Sans agents :',
      lessLabel: 'de moins',
      items: [
        { metric: "Plans d'action SII générés", withAgents: 22, withoutAgents: 2 as number | string, multiplier: '11×' as string | null },
        { metric: 'Posts Instagram publiés', withAgents: 63, withoutAgents: 30 as number | string, multiplier: '2×' as string | null },
        { metric: 'Articles de blog publiés', withAgents: 17, withoutAgents: '0 (ouais)' as number | string, multiplier: null as string | null },
        { metric: 'Nutritionnistes contactés', withAgents: 145, withoutAgents: 50 as number | string, multiplier: '3×' as string | null },
        { metric: 'Calls de collab réservés', withAgents: 18, withoutAgents: 6 as number | string, multiplier: '3×' as string | null },
        { metric: "Fonctionnalités d'app livrées", withAgents: 12, withoutAgents: 2 as number | string, multiplier: '6×' as string | null },
      ],
    },
    agents: {
      eyebrow: 'Dans les coulisses',
      heading: 'Ce que font les agents Noorish',
      items: [
        {
          title: 'Prospection froide',
          body: "Il recherche des leads qualifiés parmi les praticiens, rédige des messages personnalisés, envoie des relances et gère mon CRM. J'interviens seulement quand quelqu'un répond — pour avoir un peu de contact humain hein...",
        },
        {
          title: 'Publication de contenu vidéo',
          body: "Filmer, c'est la partie sympa. Monter, écrire les légendes, organiser les fichiers, publier, récupérer les liens, tout suivre dans Notion... trop lourd. Mon agent s'occupe de tout ce boulot ennuyeux.",
        },
        {
          title: 'Articles de blog',
          body: "Je déteste les blogs. Mais les utilisateurs de Noorish les adorent, et le SEO encore plus. Mon agent cherche les lacunes de mots-clés, construit les plans, rédige les brouillons, vérifie les faits, humanise le texte, génère les images et publie. Ouais, exploitation de travail agentique.",
        },
        {
          title: 'Bilan quotidien',
          body: "Utile pour que l'OS reste à jour en mémoire — mais aussi pour vous, ces jours où vous vous demandez si vous avez vraiment fait quelque chose d'utile ce mois-ci. Il suffit de demander à votre agent.",
        },
        {
          title: 'Nettoyer mes dossiers',
          body: "Mon agent passe en revue les dossiers et fichiers, identifie les obsolètes, et me soumet une liste à valider avant suppression. Je déteste ranger. Même le rangement numérique.",
        },
        {
          title: 'Gérer les e-mails',
          body: "Il trie les e-mails selon mes règles. Certains ont une réponse directe. D'autres, un brouillon que je relis. Ceux qui ne méritent pas mon attention sont archivés.",
        },
      ],
    },
  },
  bottlenecksFull: {
    eyebrow: 'Où les équipes bloquent',
    heading: 'Les blocages les plus courants',
    items: [
      {
        title: 'Le cimetière des agents',
        body: "La plupart des équipes se lancent, déploient plein d'agents — et six mois plus tard, la moitié sont morts. Un cimetière que personne ne visite. Pourquoi : mauvais résultats, quelque chose a cassé et personne n'a réparé, ou le processus n'aurait jamais dû être automatisé au départ.",
      },
      {
        title: 'En apparence simple, mais pas si simple',
        body: "L'IA a abaissé la barre, elle ne l'a pas supprimée. Il n'y a toujours pas de raccourci — il faut vraiment apprendre tout ça.",
      },
      {
        title: "La plupart des cas d'usage sont génériques",
        body: "Les cas d'usage sur YouTube sont génériques exprès — conçus pour convenir à tout le monde, ce qui veut dire qu'ils ne conviennent à personne exactement. Votre entreprise et vos process ont leurs propres spécificités, et les templates génériques ne vont pas jusque-là.",
      },
      {
        title: "L'IA crée de nouveaux goulots d'étranglement",
        body: "Lancer un agent prend cinq minutes. Mais la plupart des agents IA créent de nouveaux goulots — prolifération d'outils, surcharge de relecture, processus fragmentés, maintenance. Les équipes perdent une journée entière par semaine à ça. L'enjeu, c'est de faire en sorte que l'IA tourne rond — comme un carrousel ;)",
      },
      {
        title: 'Les données sont en désordre',
        body: "Les données sont reines, la base de connaissances n'est pas loin derrière. Si elle est en désordre, dupliquée, obsolète ou contradictoire (ça arrive plus qu'on ne le pense), votre agent n'a nulle part de solide où puiser. Données pourries, résultats pourris.",
      },
      {
        title: 'Sur- ou sous-utilisation des agents autonomes',
        body: "La plupart du temps, on ne veut pas déléguer la décision — dans ces cas-là, les agents autonomes sont une mauvaise idée. Construisez plutôt un process fluide avec un humain dans la boucle. Mais l'inverse arrive aussi : les équipes vérifient tout ce que fait l'agent. Un petit problème de confiance. Et sans confiance, on ne gagne aucun temps.",
      },
      {
        title: 'Responsabilité floue',
        body: "Qui gère ça ? Qui valide un nouvel agent ? Qui est responsable quand ça plante ? Qui le met à jour, qui le supprime quand il n'est plus utile ? Et si la direction n'en fait jamais une vraie stratégie avec de vraies ressources... oups.",
      },
      {
        title: 'Consommation de tokens',
        body: "L'IA n'est pas gratuite, et les tokens disparaissent plus vite qu'on ne le pense. Il existe des façons d'en brûler moins — il faut juste les connaître et les appliquer.",
      },
    ],
  },
};

export const translations = { en, fr };
export type Translations = typeof en;

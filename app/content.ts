/**
 * All marketing copy lives here.
 * Goal of every string: get the visitor to WhatsApp to start their website —
 * written the way a small studio in Kisii would actually talk.
 */

/* Pre-qualified WhatsApp opener — mentions a website immediately so replies start qualified. */
export const WA_TEXT =
  "Hi Nexora, I need a website for my business. What's the process and how much does it cost?";

export const NAV = [
  { label: "Why Nexora", href: "#why" },
  { label: "What we build", href: "#build" },
  { label: "How it works", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const INDUSTRIES = [
  "SALONS",
  "BARBERSHOPS",
  "SPAS",
  "WELLNESS",
  "BEAUTY",
  "CLINICS",
  "SMEs",
];

export const SERVICES_STRIP = [
  "WEB DESIGN",
  "SEO FOUNDATIONS",
  "BOOKING WEBSITES",
  "WHATSAPP INTEGRATION",
  "GOOGLE BUSINESS",
  "ONGOING SUPPORT",
];

export const STATS = {
  dark: {
    value: "KES 15k–250k",
    label: "What a website usually costs",
    body: "You get the full price in writing before we start. It depends on the pages and features you actually need — nothing you don't.",
  },
  light: [
    {
      value: "Same day",
      label: "How fast we reply on WhatsApp",
      body: "During working hours you'll usually hear back in minutes. A person who works here, not a bot.",
    },
    {
      value: "50%",
      label: "Deposit to start, balance before launch",
      body: "That's how both sides stay committed. Every term is written in your quote, no small print.",
    },
  ],
};

export const FEATURES = [
  {
    icon: "fab fa-whatsapp",
    tone: "t-indigo",
    title: "WhatsApp from every page",
    body: "No forms to fill in. A visitor taps once and they're chatting with you on the app they already have open all day.",
  },
  {
    icon: "fas fa-magnifying-glass",
    tone: "t-cyan",
    title: "Local SEO, done properly",
    body: "Clean structure, fast pages and the words people in Kenya actually search for — so you turn up when someone is looking.",
  },
  {
    icon: "fas fa-mobile-screen",
    tone: "t-violet",
    title: "Designed for phones first",
    body: "Most of your customers will meet you on a phone, so that's what we design for first. Everything else is a bonus.",
  },
  {
    icon: "fas fa-bolt",
    tone: "t-cyan",
    title: "Pages that load fast",
    body: "We keep the code light so your site opens quickly on normal Kenyan mobile data. Slow sites lose people.",
  },
  {
    icon: "fas fa-location-dot",
    tone: "t-indigo",
    title: "Google Business profile",
    body: "We set up your listing, photos and map pin so people nearby find you — and can see that you're a real business.",
  },
  {
    icon: "fas fa-headset",
    tone: "t-violet",
    title: "We don't disappear after launch",
    body: "New page, price change, something broken? Send a message and it's handled.",
  },
];

export const BUILD = [
  {
    title: "Booking websites",
    body: "Customers pick a service, choose a time and confirm on WhatsApp — the diary fills without you chasing messages.",
    tone: "b-dark",
    ribbon: "",
    screen: "booking",
  },
  {
    title: "Business websites",
    body: "A proper home for your business: what you do, why it's worth paying for, and one obvious way to get in touch.",
    tone: "b-light",
    ribbon: "",
    screen: "business",
  },
  {
    title: "Salon & spa sites",
    body: "Galleries, price lists and a booking button that does the talking while your hands are full with a client.",
    tone: "b-light",
    ribbon: "POPULAR",
    screen: "salon",
  },
];

export const AUDIENCES = [
  {
    tone: "a-blue",
    title: "Salons & beauty",
    body: "Stylists, treatments, galleries — the site should be filling your appointment book while you're with a client.",
    href: "https://nexoraio.vercel.app/salon-website-design-kenya",
    cta: "See salon websites",
  },
  {
    tone: "a-cream",
    title: "SMEs & local business",
    body: "You're as professional as anyone in Nairobi. Your website should say that before you do.",
    href: "https://nexoraio.vercel.app/web-design-kenya",
    cta: "See web design services",
  },
  {
    tone: "a-violet",
    title: "Spas & wellness",
    body: "The calm you create in the room should come through on the screen too — and booking should feel just as easy.",
    href: "https://nexoraio.vercel.app/spa-website-design-kenya",
    cta: "See spa websites",
  },
];

export const STEPS = [
  {
    n: "1",
    title: "Message us on WhatsApp",
    body: "Tell us what you do and what the site needs to do for you. A voice note is fine.",
    tag: "Takes two minutes",
  },
  {
    n: "2",
    title: "Get a price in writing",
    body: "We send back what we'd do, how long it takes and exactly what it costs. No small print.",
    tag: "No obligation",
  },
  {
    n: "3",
    title: "We build, you check, we go live",
    body: "You see the design before any code is written, then again before launch. Nothing goes live without your OK.",
    tag: "Support included",
  },
];

/* FAQ doubles as conversion copy and the FAQPage schema on the page. */
export const FAQ = [
  {
    q: "How much does a website cost?",
    a: "Between KES 15,000 and KES 250,000 for most projects. What yours costs depends on how many pages you need, whether you want bookings or galleries, and how much of the content you already have. Message us and you get an exact number, not a range.",
  },
  {
    q: "How long does it take?",
    a: "A few weeks for a standard site is normal. If you have a date to hit — a launch, a promotion — tell us first and we'll say honestly whether we can make it.",
  },
  {
    q: "Can customers book through WhatsApp?",
    a: "Yes, and it's what we build best. The buttons open a chat already filled with what the customer was looking at, so you know exactly what they want before you reply.",
  },
  {
    q: "Do you work outside Kisii?",
    a: "Most of our clients are in Nairobi, Kisumu, Mombasa and everywhere in between. We're based in Kisii, but everything runs on WhatsApp and calls, so where you are doesn't hold anything up.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your logo if you have one, a few photos of your work, and ten minutes on WhatsApp to explain the business. If you have none of that ready, we'll tell you what's worth getting and what isn't.",
  },
  {
    q: "What happens after the site is live?",
    a: "Updates, new pages, fixes, changes — send a message. Clients don't get handed off to a ticket system; you talk to the same people who built it.",
  },
  {
    q: "How do I pay?",
    a: "50% to start, 50% before it goes live. That's it. No subscriptions and nothing charged after the fact.",
  },
];

export const FOOTER_COLS = [
  {
    head: "Company",
    links: [
      { label: "Home", href: "https://nexoraio.vercel.app/" },
      { label: "About", href: "https://nexoraio.vercel.app/about" },
      { label: "Work", href: "https://nexoraio.vercel.app/work" },
      { label: "Contact", href: "https://nexoraio.vercel.app/contact" },
    ],
  },
  {
    head: "Services",
    links: [
      { label: "Web design Kenya", href: "https://nexoraio.vercel.app/web-design-kenya" },
      { label: "Salon websites", href: "https://nexoraio.vercel.app/salon-website-design-kenya" },
      { label: "Booking websites", href: "https://nexoraio.vercel.app/booking-websites" },
      { label: "SEO services", href: "https://nexoraio.vercel.app/seo-services-kenya" },
    ],
  },
  {
    head: "Explore",
    links: [
      { label: "Why Nexora", href: "#why" },
      { label: "What we build", href: "#build" },
      { label: "How it works", href: "#process" },
      { label: "FAQ", href: "#faq" },
      { label: "Main site", href: "https://nexoraio.vercel.app/" },
    ],
  },
];

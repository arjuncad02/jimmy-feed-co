export const siteConfig = {
  name: "Jimmy's Feed Co.",
  tagline: "Waterloo's Favourite Sandwich Shop",
  description:
    "Fresh sandwiches, wraps, catering and more in Waterloo. Fresh ingredients, generous portions, affordable prices — a family-owned Waterloo favourite since day one.",
  url: "https://jimmysfeedco.com",
  address: {
    street: "401 Weber St N",
    city: "Waterloo",
    region: "ON",
    full: "401 Weber St N, Waterloo, ON",
  },
  phone: "(519) 746-4537",
  phoneHref: "+15197464537",
  email: "hello@jimmysfeedco.com",
  hours: [
    { day: "Monday", time: "9:00 AM – 5:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
    { day: "Thursday", time: "9:00 AM – 5:00 PM" },
    { day: "Friday", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    instagram: "https://instagram.com/jimmysfeedco",
    facebook: "https://facebook.com/jimmysfeedco",
  },
  stats: [
    { label: "Google Rating", value: 4.8, suffix: "", prefix: "", icon: "star" },
    { label: "Happy Reviews", value: 423, suffix: "+", prefix: "", icon: "review" },
    { label: "Locally Loved", value: 100, suffix: "%", prefix: "", icon: "heart" },
    { label: "Family Owned", value: 1, suffix: "", prefix: "", icon: "home", display: "Family Owned" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Catering", href: "/catering" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const whyJimmys = [
  {
    title: "Fresh Ingredients",
    description: "Every sandwich is built to order with produce and meats sourced fresh, never frozen.",
    icon: "leaf",
  },
  {
    title: "Fast Service",
    description: "In and out in minutes without ever feeling rushed — perfect for a quick lunch break.",
    icon: "bolt",
  },
  {
    title: "Affordable Pricing",
    description: "Generous, filling meals that respect your wallet as much as your appetite.",
    icon: "tag",
  },
  {
    title: "Huge Portions",
    description: "Our sandwiches are stacked, not skimped — you'll leave full and happy every time.",
    icon: "layers",
  },
  {
    title: "Local Favourite",
    description: "A proud part of the Waterloo community, loved by neighbours and regulars alike.",
    icon: "map-pin",
  },
  {
    title: "Friendly Staff",
    description: "Warm, genuine service that makes every visit feel like coming home.",
    icon: "smile",
  },
];

export const faqs = [
  {
    question: "Do you offer online ordering?",
    answer: "Yes! You can order online for pickup through our website or call us directly at (519) 746-4537 and we'll have it ready fresh.",
  },
  {
    question: "Do you cater corporate events and office lunches?",
    answer: "Absolutely — our Sandwich and Dessert Platters are a favourite for office lunches, meetings, and gatherings of all sizes. Request a quote on our Catering page.",
  },
  {
    question: "Can I customize my sandwich?",
    answer: "Of course. Every sandwich on our menu can be customized, and we're always happy to build you something completely custom too.",
  },
  {
    question: "Do you have vegetarian or keto options?",
    answer: "Yes, we offer several vegetarian sandwiches and wraps, plus keto-friendly bowls made without bread.",
  },
  {
    question: "How far in advance should I book catering?",
    answer: "We recommend at least 24-48 hours notice for catering orders to guarantee freshness and availability, though we'll always do our best to accommodate last-minute requests.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, free parking is available right outside our Weber St N location.",
  },
];

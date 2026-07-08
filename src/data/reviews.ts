export type Review = {
  id: number;
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  tags: string[];
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    initials: "SM",
    rating: 5,
    date: "2 weeks ago",
    text: "Quality ingredients and huge portions! The Burnin' Love sandwich is worth every penny. Jimmy's has become our go-to office lunch spot.",
    tags: ["Quality ingredients", "Great prices"],
  },
  {
    id: 2,
    name: "David L.",
    initials: "DL",
    rating: 5,
    date: "1 month ago",
    text: "Friendly service every single time and the sandwiches are always fresh. Boondocks is my personal favourite — so much flavour.",
    tags: ["Friendly service", "Delicious sandwiches"],
  },
  {
    id: 3,
    name: "Priya K.",
    initials: "PK",
    rating: 5,
    date: "3 weeks ago",
    text: "Best sandwich shop in Waterloo, hands down. Great prices for the portion sizes you get. Never disappoints.",
    tags: ["Great prices", "Generous portions"],
  },
  {
    id: 4,
    name: "Mike T.",
    initials: "MT",
    rating: 5,
    date: "1 week ago",
    text: "Ordered catering for our office of 20 and it was a huge hit. Fresh, delicious, and delivered on time. Highly recommend Jimmy's for corporate lunches.",
    tags: ["Catering", "Delicious sandwiches"],
  },
  {
    id: 5,
    name: "Amanda R.",
    initials: "AR",
    rating: 5,
    date: "2 months ago",
    text: "Fast service and quality ingredients every visit. The staff genuinely care and always get my order just right.",
    tags: ["Fast service", "Quality ingredients"],
  },
  {
    id: 6,
    name: "Jordan P.",
    initials: "JP",
    rating: 4,
    date: "3 months ago",
    text: "Generous portions and a great local vibe. My favourite is Stayin' Alive — three meats and it's absolutely stacked.",
    tags: ["Generous portions", "Locally loved"],
  },
];

export const ratingBreakdown = [
  { stars: 5, percent: 88 },
  { stars: 4, percent: 9 },
  { stars: 3, percent: 2 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 0 },
];

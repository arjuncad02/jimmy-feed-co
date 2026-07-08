export type Sandwich = {
  number: number;
  name: string;
  emoji?: string;
  category: "Signature" | "Vegetarian" | "Wraps" | "Keto";
  ingredients: string[];
  description: string;
  price: string;
  popular?: boolean;
};

export const sandwiches: Sandwich[] = [
  {
    number: 1,
    name: "Burnin' Love",
    emoji: "🔥",
    category: "Signature",
    ingredients: ["Smoked Turkey", "Havarti Cheese", "Crispy Bacon", "Romaine Lettuce", "Tomato", "Jimmy's Special Sauce"],
    description: "A smoky turkey classic with crispy bacon and creamy Havarti, finished with Jimmy's famous special sauce.",
    price: "13.99",
    popular: true,
  },
  {
    number: 2,
    name: "Boondocks",
    category: "Signature",
    ingredients: ["Mortadella", "Capicolla", "Hot Salami", "Provolone", "Hot Pickled Eggplant", "Jimmy's Special Sauce"],
    description: "An Italian-inspired favourite loaded with bold cured meats and spicy eggplant.",
    price: "14.49",
  },
  {
    number: 3,
    name: "Baby Hold On",
    category: "Signature",
    ingredients: ["Smoked Turkey", "Chicken Breast", "Swiss Cheese", "Romaine", "Tomato", "Onion", "Jimmy's Special Sauce"],
    description: "Double protein, fresh vegetables and Swiss cheese make this a customer favourite.",
    price: "14.99",
    popular: true,
  },
  {
    number: 4,
    name: "Runnin' on Empty",
    category: "Signature",
    ingredients: ["Chicken Breast", "Bacon", "Provolone", "Romaine", "Tomato", "Onion", "Jimmy's Special Sauce"],
    description: "Tender chicken paired with crispy bacon and melted provolone.",
    price: "13.99",
  },
  {
    number: 5,
    name: "Stayin' Alive",
    category: "Signature",
    ingredients: ["Smoked Turkey", "Capicolla", "Hot Salami", "Havarti", "Romaine", "Tomato", "Onion", "Mayo"],
    description: "Three premium meats combined with creamy Havarti for serious flavour.",
    price: "14.49",
  },
  {
    number: 6,
    name: "Baby Come Back",
    category: "Signature",
    ingredients: ["Roast Beef", "Smoked Meat", "Swiss Cheese", "Romaine", "Tomato", "Dill Pickles", "Mustard", "Mayo"],
    description: "A hearty deli-style sandwich featuring roast beef and smoked meat.",
    price: "14.99",
    popular: true,
  },
  {
    number: 7,
    name: "Wonderwall",
    category: "Signature",
    ingredients: ["Smoked Turkey", "Hot Salami", "Havarti", "Romaine", "Tomato", "Dill Pickles", "Mayo"],
    description: "Fresh, simple and packed with smoky flavour.",
    price: "13.49",
  },
  {
    number: 8,
    name: "Hey Jude",
    category: "Signature",
    ingredients: ["Smoked Meat", "Smoked Turkey", "Hot Salami", "Swiss Cheese", "Hot Pickled Eggplant", "Mustard", "Mayo"],
    description: "Loaded with premium meats and bold Italian-inspired toppings.",
    price: "14.99",
  },
  {
    number: 9,
    name: "I'm Too Sexy",
    category: "Signature",
    ingredients: ["Roast Beef", "Smoked Turkey", "Havarti", "Hot Peppers", "Romaine", "Tomato", "Mustard", "Jimmy's Special Sauce"],
    description: "Spicy, smoky and packed with flavour in every bite.",
    price: "14.99",
  },
  {
    number: 10,
    name: "Le Freak",
    category: "Vegetarian",
    ingredients: ["Provolone", "Havarti", "Roasted Red Pepper", "Hot Pickled Eggplant", "Romaine", "Tomato", "Onion", "Jimmy's Special Sauce"],
    description: "A delicious vegetarian favourite with roasted peppers and creamy cheese.",
    price: "12.99",
    popular: true,
  },
  {
    number: 11,
    name: "Fully Completely",
    category: "Signature",
    ingredients: ["Cheddar", "Ham", "Summer Sausage", "Boiled Egg", "Onion", "Pickles", "Tomato", "Romaine", "Mustard", "Mayo"],
    description: "A fully loaded deli sandwich with layers of classic ingredients.",
    price: "14.99",
  },
];

export const menuExtras = {
  breakfast: [
    { name: "Classic Breakfast Sandwich", description: "Egg, cheddar, bacon on a fresh bun.", price: "7.99" },
    { name: "Veggie Breakfast Wrap", description: "Egg, spinach, tomato, cheese wrapped fresh.", price: "7.49" },
    { name: "Western Breakfast Sandwich", description: "Egg, ham, peppers, onion, cheddar.", price: "8.49" },
  ],
  wraps: [
    { name: "Chicken Caesar Wrap", description: "Grilled chicken, romaine, parmesan, caesar dressing.", price: "11.99" },
    { name: "Turkey Bacon Ranch Wrap", description: "Smoked turkey, bacon, ranch, lettuce, tomato.", price: "11.99" },
    { name: "Veggie Hummus Wrap", description: "Hummus, roasted peppers, cucumber, spinach, feta.", price: "10.99" },
  ],
  keto: [
    { name: "Keto Turkey Bowl", description: "Smoked turkey, havarti, bacon, greens, no bread.", price: "12.99" },
    { name: "Keto Italian Bowl", description: "Capicolla, salami, provolone, greens, olive oil.", price: "12.99" },
  ],
  sides: [
    { name: "Kettle Chips", description: "Classic, salt & vinegar or BBQ.", price: "2.49" },
    { name: "Pickle Spear", description: "Crisp house dill pickle.", price: "1.49" },
    { name: "Fresh Fruit Cup", description: "Seasonal fresh fruit.", price: "3.99" },
  ],
  drinks: [
    { name: "Fountain Pop", description: "Assorted flavours.", price: "2.29" },
    { name: "Bottled Water", description: "500ml.", price: "1.99" },
    { name: "Craft Root Beer", description: "Locally sourced.", price: "3.29" },
  ],
};

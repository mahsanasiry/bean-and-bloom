export const FORM_KEY_PLACEHOLDER = "YOUR_ACCESS_KEY_HERE";

export const site = {
  name: "Bean & Bloom",
  tagline: "Coffee roasted in small batches, every Tuesday and Friday",
  description:
    "Bean & Bloom is a neighborhood coffee roaster and café in Portland, Oregon. Fresh single-origin coffee, house-baked pastries and weekend brewing classes.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  email: "mahsanasiry2009@gmail.com",
  phone: "+1 503 555 0142",

  address: {
    street: "418 Alder Street",
    city: "Portland",
    region: "OR",
    postalCode: "97204",
    country: "US",
  },

  hours: [
    {
      label: "Monday to Friday",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
      display: "7:00 am to 6:00 pm",
    },
    {
      label: "Saturday and Sunday",
      days: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "16:00",
      display: "8:00 am to 4:00 pm",
    },
  ],
  
  web3formsKey: FORM_KEY_PLACEHOLDER,
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const featuredRoast = {
  name: "Ethiopia Guji",
  process: "Washed, light-medium roast",
  notes: "Blueberry, jasmine, honey",
  altitude: "2,100 m",
  roasted: "Every Tuesday and Friday",
  roastLevel: 2, 
};

export const aboutParagraphs = [
  "We started in 2012 with a second-hand 5 kg roaster in a garage on the east side. Today we roast in the back of our café on Alder Street, so the coffee you drink has usually been a roasted bean for less than a week.",
  "We buy directly from farms we know by name, pay above fair-trade prices, and roast lighter than most so you can taste where the coffee grew. If you are new to specialty coffee, ask us anything. We would rather explain than impress.",
];

export const aboutFacts = [
  { term: "Roasting since", detail: "2012" },
  { term: "Sourcing", detail: "11 farms in 6 countries" },
  { term: "Roasted", detail: "In the café, twice a week" },
  { term: "Packaging", detail: "Compostable bags, refills welcome" },
];

export const menuItems = [
  {
    name: "Espresso",
    price: "$3.50",
    description: "Our house blend, pulled to order. Chocolate, toasted almond and a bright finish.",
  },
  {
    name: "Flat white",
    price: "$4.50",
    description: "A double shot with silky steamed milk. Oat and almond milk at no extra charge.",
  },
  {
    name: "Single-origin pour over",
    price: "$5.00",
    description: "Brewed by the cup. The coffee on the bar changes every Tuesday.",
  },
  {
    name: "Cold brew",
    price: "$4.50",
    description: "Steeped for 18 hours and served over ice. Smooth, low acidity.",
  },
  {
    name: "Cardamom bun",
    price: "$4.00",
    description: "Baked every morning in our own oven. They sell out by noon on weekends.",
  },
  {
    name: "Whole beans, 250 g",
    price: "$16.00",
    description: "Roasted this week and bagged the same day. We grind it for you if you ask.",
  },
  {
    name: "Saturday brewing class",
    price: "$45.00",
    description: "Ninety minutes, up to eight people. Learn pour over, French press and espresso basics.",
  },
  {
    name: "Office subscription",
    price: "from $38",
    description: "A fresh bag every two weeks, delivered free within Portland.",
  },
];

export const reviews = [
  {
    quote:
      "The best flat white in the city. I came in for one coffee and left with a bag of beans and a new weekend habit.",
    name: "Maya R.",
    role: "Regular since 2019",
  },
  {
    quote:
      "I took the Saturday class expecting to learn a recipe. I learned why my coffee always tasted bitter, and fixed it that afternoon.",
    name: "Daniel K.",
    role: "Brewing class student",
  },
  {
    quote:
      "We switched our whole office to their subscription. The beans arrive fresh, on time, and nobody has asked for instant coffee since.",
    name: "Priya S.",
    role: "Office manager",
  },
];

export const faqs = [
  {
    question: "Do you have a place to work or study?",
    answer:
      "Yes. We have free Wi-Fi and plenty of outlets. On weekdays the back room is quiet until noon, so it is the best time to bring a laptop.",
  },
  {
    question: "Can I order beans online?",
    answer:
      "Not yet. For now, message us through the form below or stop by the café, and we will set aside a bag for you. Online ordering is planned for later this year.",
  },
  {
    question: "Do you have dairy-free and vegan options?",
    answer:
      "Oat and almond milk are always available at no extra charge. Our cardamom bun is made with butter, but we bake a vegan seasonal pastry every day.",
  },
  {
    question: "Are dogs allowed?",
    answer: "Well-behaved dogs are welcome on the patio. Water bowls are by the front door.",
  },
  {
    question: "How do I book a brewing class?",
    answer:
      "Send us a message with your name and the date you would like. Classes run on Saturday mornings, and we confirm your place by email within a day.",
  },
];

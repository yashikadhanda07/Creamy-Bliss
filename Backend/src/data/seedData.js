export const DEFAULT_BRAND_INFO = {
  name: "Creamy Bliss",
  tagline: "Handcrafted Joy in Every Scoop",
  promoCode: "BLISSJOY",
  discountPercent: 20,
  freeDeliveryThreshold: 25.00,
  standardDeliveryFee: 3.99,
  contactPhone: "+1 (415) 555-BLISS",
  contactEmail: "scoop@creamybliss.com"
};

export const DEFAULT_CATEGORIES = [
  { id: "all", label: "All Flavors", icon: "stars", isEmoji: false },
  { id: "berries", label: "Berry & Fruity", icon: "🍓", isEmoji: true },
  { id: "chocolate", label: "Rich Chocolate", icon: "🍫", isEmoji: true },
  { id: "classics", label: "Classics", icon: "🍦", isEmoji: true },
  { id: "bakery", label: "Bakery & Crunch", icon: "🍪", isEmoji: true },
  { id: "vegan", label: "Vegan & Sorbets", icon: "🌱", isEmoji: true }
];

export const DEFAULT_PRODUCTS = [
  {
    id: "strawberry-delight",
    name: "Strawberry Delight",
    price: 5.50,
    unit: "scoop",
    rating: 4.9,
    reviewsCount: 1420,
    tag: "#1 Most Loved",
    tagIcon: "🔥",
    tagBg: "bg-primary-container text-on-primary",
    badge: "Bestseller",
    badgeBg: "bg-primary-fixed text-on-primary-fixed",
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    inventory: 48,
    category: "berries",
    description: "Made with sweet local strawberries folded into silky double cream.",
    longDescription: "Our signature artisanal scoop! Sun-ripened organic coastal strawberries churned slowly with fresh local heavy cream and a touch of wild clover honey. Served in our handmade cinnamon-crisp waffle bowl.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeX8qtgWtnXbBEeEZf6OYWYt8CdNMGC5eQea0GxjIWEz10shuQfxSNGT8HmxPy0kyPEIO0CbNvFSS5Rw4gfjmuvdesKI4PUW8RKwzYPDqZLWokoHmdCIlGV4zKjpomwj-G2Eofclwh_J97hJSUt_-k6N5xrTw2yWGwII7pg-wtGhDenn6jHqqiTP2RycZkE5Wayr9Cnc4glebweG2HxRK9I6GMNAcBp9kQ87HFWH_B",
    alt: "A delicious crisp waffle bowl holding fresh strawberry ice cream scoops topped with sliced organic strawberries, fresh mint leaf, and crushed pistachios",
    calories: 220,
    dietary: ["Vegetarian", "Gluten-Free Option"]
  },
  {
    id: "belgian-chocolate",
    name: "Belgian Chocolate",
    price: 5.95,
    unit: "scoop",
    rating: 5.0,
    reviewsCount: 980,
    tag: "Chef's Pick",
    tagIcon: "🍫",
    tagBg: "bg-inverse-surface text-inverse-on-surface",
    badge: "Artisanal",
    badgeBg: "bg-secondary-container text-on-secondary-container",
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    inventory: 35,
    category: "chocolate",
    description: "Rich 70% dark Belgian cocoa with fudge swirls and crisp cacao nibs.",
    longDescription: "Pure indulgence for dark chocolate lovers. Churned with premier single-origin 70% dark Belgian cocoa, ribboned with warm sea-salted bittersweet fudge and sprinkled with roasted crunchy cocoa nibs.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVRGeGRb75LE2tci3ClI6QWMspM63uKPK6hCFzeca7CE8RjexIaaoQvnhiuAsXbCc8Y0YmhuIxZbWcdjzaVs4S21yjVJ8uxXpme0DQCF2vs5QxTciLHjwGkNTpB0UmSc-9P4OvFckVwlFyShUoI7aYW1dqcVxMu2f3e9nibzfdTThoXd1n-nb0LKztFMJBcaOX5a_4kqRRJwU8xAl1qQiiawx_hjo27PizRXGcHlQk",
    alt: "Generous scoops of rich dark Belgian chocolate gelato garnished with dark chocolate shavings, cacao nibs, and artisanal chocolate curl ribbons in a ceramic cup",
    calories: 260,
    dietary: ["Vegetarian"]
  },
  {
    id: "vanilla-dream",
    name: "Vanilla Dream",
    price: 4.95,
    unit: "scoop",
    rating: 4.8,
    reviewsCount: 1100,
    tag: "Pure Classic",
    tagIcon: "✨",
    tagBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    badge: "Classic",
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    inventory: 60,
    category: "classics",
    description: "Aromatic Madagascar Bourbon vanilla beans steeped in farm-fresh cream.",
    longDescription: "Cold-steeped whole Madagascar Bourbon vanilla pods infused in certified pasture-raised Jersey milk. Fragrant, velvety, speckled with genuine vanilla caviar.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsxkMu-1h8bZ-QL7vPWRpksXxhkV1KvK1m4XQAJ0zopD-jzS_gJYFeASvJ69dYV89GyPddI0sGdy0eHHyoHme4n89v_UywivD6BEU3CfKDTSYZOisEPE5rnWUi7klvI4J1B3y9G229KM8W-5HBf01WxeEankqrDWHw9E0FfqNK8-REe8297l8DjWGqY7adAfRpElV6djoJb_5Qz12GKcfJ3knr7l38DBVEyKYXVD3u",
    alt: "A round quenelle scoop of creamy Madagascar bourbon vanilla ice cream with visible aromatic vanilla bean specks in a delicate scalloped porcelain dish",
    calories: 210,
    dietary: ["Vegetarian", "Gluten-Free"]
  },
  {
    id: "mango-magic",
    name: "Mango Magic",
    price: 5.25,
    unit: "scoop",
    rating: 4.9,
    reviewsCount: 640,
    tag: "Tropical",
    tagIcon: "🥭",
    tagBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    badge: "Vegan",
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    inventory: 40,
    category: "berries",
    description: "Alphonso mango purée blended with sweet cream.",
    longDescription: "Hand-picked King Alphonso mangoes reduced to a bright golden coulis and churned with silky coconut cream for an ultra-smooth, refreshing tropical treat.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPbfHWNnMyXj-kmXICEhhAQCrB0O359soGZ_HlXj--qY2zjcOjjBC9vG4r7dUJDiGIGlsYBHyW1bpIJLavodyGp2qYNTzqRb_F18Lt9z68CuGK5FC1a3eVKcmT5gTq4heZzgNr9BVpltbsXb1BtkIfk9Dh3V_GJlO5fEHG8hyS02NpcdqDQ9SVk-UJwSi4-ruVwlt5FQMxEH8Rl6ysthsA0S36WNu9ez6q47kb3Ri-",
    calories: 195,
    dietary: ["Vegan", "Dairy-Free", "Gluten-Free"]
  },
  {
    id: "cookies-cream",
    name: "Cookies & Cream",
    price: 5.50,
    unit: "scoop",
    rating: 4.9,
    reviewsCount: 920,
    tag: "Fan Favorite",
    tagIcon: "🍪",
    tagBg: "bg-primary-fixed text-on-primary-fixed",
    badge: "Bestseller",
    badgeBg: "bg-primary-fixed text-on-primary-fixed",
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    inventory: 50,
    category: "bakery",
    description: "Crumbled handmade dark cocoa biscuits in sweet cream.",
    longDescription: "Whole baked dark chocolate sandwich wafers crumbled by hand into sweet bourbon vanilla cream for that nostalgic crunch in every bite.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG0ocqeC7p_4vPFeAmjIqSiYloIANOZJ2AzLOJJIF9NjTVcOQiYXEa57txcRBAKytK6MvI8aMMp0fW1132isFMYdFslECjG2KZVaiv_jZr75KzEmWA-F0_KcYM6F19NvagKIqYdxO93GYaJuqb6yKsb0PgILNzmsC8coaye9_tziRCXkZh3pwcjEFz0JegHmE8zj6NXjhvQcmx6nHnmn93WMfwZWM_7U6sDqd9nbON",
    calories: 245,
    dietary: ["Vegetarian"]
  },
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake",
    price: 5.95,
    unit: "scoop",
    rating: 4.8,
    reviewsCount: 510,
    tag: "Creamy",
    tagIcon: "🫐",
    tagBg: "bg-secondary-container text-on-secondary-container",
    badge: "Special",
    badgeBg: "bg-secondary-container text-on-secondary-container",
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    inventory: 30,
    category: "bakery",
    description: "Cream cheese swirl with organic wild blueberry compote.",
    longDescription: "Cultured New York cream cheese base with buttery graham crust clusters and slow-simmered wild Maine blueberries.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX5jQiAQ-SWUBWAwqFUYvfAc6U469t2v4TlcZym6G5K50BP_AKNw3vV5-a5ZxDKyHsyWNcAg9oH2T3p3ym-s1i7agFsDm9DMOGVe_CkE4oVoqfxliU_PzT0CSwqz_0p6Zc8UHjtZM82U2uP_ILsKhzerlPjZgPVHT9fCZ_Bf0NfflkLrxtsMZOgmByamOPNLOU57zmeII-WwMn_jqs_pX_2V-ha4fdqbh6rhowNPyT",
    calories: 255,
    dietary: ["Vegetarian"]
  },
  {
    id: "pistachio-premium",
    name: "Pistachio Premium",
    price: 6.25,
    unit: "scoop",
    rating: 5.0,
    reviewsCount: 1050,
    tag: "Bronte Pistachio",
    tagIcon: "🇮🇹",
    tagBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    badge: "Italian",
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    inventory: 28,
    category: "classics",
    description: "Roasted Sicilian Bronte pistachios with almond praline.",
    longDescription: "Direct trade green emerald pistachios from Bronte, Sicily, slow roasted and ground into pure silky paste with caramelized almond praline chunks.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCheLC1xCxAcPDDvJXDoyHyI9oE_MYqGjFWS86pxNB9nDtyxaVDnEBj7jupFEg_CN-ium7d4WM9DcK5w4kl2WWSNV0_h3DNlVU24UWbLzZd7R7Hz0BR51L1W0A1tZgrlX9uPv5ae_VaWA08Y3Ut39rrVkiSWjCkF0-4fZvoukXS4pNo8GNrX0GBwUL8Grjorjh6gj0_PklM_o1LgiZx_7Ebd4gaXagIbpQ_nfNZG_wL",
    calories: 270,
    dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "caramel-crunch",
    name: "Caramel Crunch",
    price: 5.50,
    unit: "scoop",
    rating: 4.9,
    reviewsCount: 780,
    tag: "Sea Salt",
    tagIcon: "🍯",
    tagBg: "bg-secondary-container text-on-secondary-container",
    badge: "Gluten-Free",
    badgeBg: "bg-secondary-container text-on-secondary-container",
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    inventory: 35,
    category: "bakery",
    description: "Golden sea salt caramel with honeycomb wafer bits.",
    longDescription: "Amber fleur de sel butterscotch caramel churned with crunchy air-puffed golden honeycomb honeycomb toffee pieces.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHE0M-ElMlAoc4DeINV-1ZNRxxHUPeHHiPppy_EKKvQIZsxcGF4kQMxkZpXSTp9QGQ3LqL1cykFef1W5CrmjNqxTJBIysw5LKb4UeSj36Vf13J5j3VIX5pG3bn9tWinN5YD2HixzjPzM38wqYrORZfGFGg8tOYiZHc_KWrMERs6e0ZifR67kkCmvsG9ZuFPytRmA-nJ-n2NPPlHfphTmtmwwGe-PAfQzLww_PLt7jx",
    calories: 240,
    dietary: ["Vegetarian", "Gluten-Free"]
  },
  {
    id: "wild-berry-sorbet",
    name: "Wild Berry Sorbet",
    price: 5.25,
    unit: "scoop",
    rating: 4.8,
    reviewsCount: 430,
    tag: "Dairy-Free",
    tagIcon: "🌱",
    tagBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    badge: "Vegan",
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    inventory: 42,
    category: "vegan",
    description: "Forest blackberries, raspberries, and lemon zest.",
    longDescription: "A burst of pure summer: wild alpine blackberries, tart raspberries, organic lemon verbena, spun with raw agave nectar.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuru5u9Tz3pstu6m8-xpNsDfXW8GvlwDGsxn8xi-hELwLk5k3V2TmMSNH0GqX1YWD5KuMnT8DcTxWYzIJAVMQNV65VivQc7lQG4SS0Y9wKZU6MJKNk3EDKlbEZ7R_3dPkA6HxiggKS3ehCRPy_9cIfQTaf5J4sxH8tZ2qB-SeV0jH_EZuDnE5dDmUkOI8WgWJVWT6pAjeCQMBDluh6A-FJLYAg_JpEC0X6ocIYEvAP",
    calories: 160,
    dietary: ["Vegan", "Dairy-Free", "Gluten-Free", "Low-Fat"]
  }
];

export const DEFAULT_COUPONS = [
  {
    code: "BLISSJOY",
    discountPercent: 20,
    description: "20% off your entire order!",
    minSpend: 0,
    isActive: true
  },
  {
    code: "SWEET10",
    discountPercent: 10,
    description: "10% off any order",
    minSpend: 15,
    isActive: true
  },
  {
    code: "SUMMER15",
    discountPercent: 15,
    description: "15% off summer newsletter sign-up",
    minSpend: 10,
    isActive: true
  }
];

export const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    name: "Sofia Martinez",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0qlHXtOrwgbbGtw3kg_sp0adxr1WamoGQAcOAh_0uKYy9tbPWmwV4a5yaYr8FK1cVbWyIzZY3SJ-ta1ORpL9CHO36NDiF__ufgsrm8UNHMT91uhrI71XDTc8LdiwZtuf20QuKoRWARFlEp0vFPz3qi--8YvWkPiN4zopO99wRydpPWyd-7hP_b7SVDpbczqjQSgy1VXsTKX6FuKiV_J8d_CvuxR1u4Ze2FifDl8IB",
    verified: true,
    rating: 5,
    flavor: "Strawberry Delight",
    review: "“The Strawberry Delight is literal perfection in a cone! Crisp handmade waffle and that silky, melt-in-mouth strawberry texture. I crave this every weekend!”",
    date: "2026-10-18T14:20:00Z"
  },
  {
    id: "rev-2",
    name: "David Reynolds",
    initials: "DR",
    verified: true,
    rating: 5,
    flavor: "Belgian Chocolate",
    review: "“Hands down the richest Belgian chocolate gelato in the city. The fudge ribbons with subtle crunch from nibs make it an absolute masterclass dessert.”",
    date: "2026-10-22T19:45:00Z"
  },
  {
    id: "rev-3",
    name: "Chloe Tanaka",
    initials: "CT",
    verified: true,
    rating: 5,
    flavor: "Vanilla Dream",
    review: "“The waffle bowl sundae made our anniversary evening so special. Ordering online was seamless and arrived ice-cold in eco packaging!”",
    date: "2026-10-27T11:15:00Z"
  }
];

export const DEFAULT_LOYALTY = {
  memberId: "MEM-88219",
  name: "Sweet Member",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0qlHXtOrwgbbGtw3kg_sp0adxr1WamoGQAcOAh_0uKYy9tbPWmwV4a5yaYr8FK1cVbWyIzZY3SJ-ta1ORpL9CHO36NDiF__ufgsrm8UNHMT91uhrI71XDTc8LdiwZtuf20QuKoRWARFlEp0vFPz3qi--8YvWkPiN4zopO99wRydpPWyd-7hP_b7SVDpbczqjQSgy1VXsTKX6FuKiV_J8d_CvuxR1u4Ze2FifDl8IB",
  tier: "Gold Tier Member",
  memberSince: "March 2024",
  points: 240,
  pointsHistory: [
    { id: "pts-1", date: "2026-10-15", description: "Online Delivery #CB-81203", points: "+50" },
    { id: "pts-2", date: "2026-10-22", description: "Flagship Parlor Visit", points: "+40" },
    { id: "pts-3", date: "2026-10-29", description: "Flavor Review Bonus", points: "+20" }
  ],
  rewardsCatalog: [
    { id: 1, cost: 50, title: "Free Artisan Topping", desc: "Handcrafted fudge drizzle, organic sprinkles, or cacao nibs.", code: "TOPPINGFREE" },
    { id: 2, cost: 100, title: "Fresh Waffle Bowl Upgrade", desc: "Upgrade any single or double scoop to a warm waffle bowl.", code: "WAFFLEUP" },
    { id: 3, cost: 200, title: "$5 Off Any Online Order", desc: "Instant $5 coupon applied directly at checkout.", code: "SCOOPFIVE" },
    { id: 4, cost: 300, title: "Complimentary Artisanal Pint", desc: "One full pint of your favorite seasonal flavor.", code: "FREEPINT" }
  ],
  redeemedRewards: []
};

export const DEFAULT_LOCATIONS = [
  {
    id: "sf-flagship",
    name: "Downtown Flagship Parlor",
    address: "452 Artisan Blossom Way, Suite 100",
    city: "San Francisco, CA 94103",
    hours: "Mon - Sun: 11:00 AM - 10:30 PM",
    phone: "(415) 555-0182",
    coordinates: { lat: 37.7833, lng: -122.4167 },
    features: ["Indoor Seating", "Waffle Bar", "Curbside Pickup"]
  },
  {
    id: "sf-marina",
    name: "Marina Waterfront Boutique",
    address: "1892 Harbor Breeze Blvd",
    city: "San Francisco, CA 94123",
    hours: "Mon - Sun: 12:00 PM - 11:00 PM",
    phone: "(415) 555-0199",
    coordinates: { lat: 37.8037, lng: -122.4368 },
    features: ["Outdoor Patio", "Flight Tastings", "Delivery Hub"]
  },
  {
    id: "sunnyvale-gelateria",
    name: "Sunnyvale Square Gelateria",
    address: "310 Cherry Orchard Lane",
    city: "Sunnyvale, CA 94086",
    hours: "Tue - Sun: 12:00 PM - 10:00 PM",
    phone: "(408) 555-0145",
    coordinates: { lat: 37.3688, lng: -122.0363 },
    features: ["Family Friendly", "Vegan Options", "Event Catering"]
  }
];

export const DEFAULT_ORDERS = [
  {
    id: "CB-84920",
    customer: {
      firstName: "Sofia",
      lastName: "Martinez",
      email: "sofia.martinez@example.com",
      phone: "(415) 555-0144",
      street: "742 Evergreen Terrace",
      city: "San Francisco",
      postalCode: "94102",
      deliveryInstructions: "Please ring door buzzer #4B."
    },
    items: [
      {
        id: "strawberry-delight",
        name: "Strawberry Delight",
        size: "1 x scoop",
        price: 5.50,
        quantity: 2
      },
      {
        id: "belgian-chocolate",
        name: "Belgian Chocolate",
        size: "1 x scoop",
        price: 5.95,
        quantity: 1
      }
    ],
    subtotal: 16.95,
    discountCode: "BLISSJOY",
    discountAmount: 3.39,
    deliveryFee: 3.99,
    total: 17.55,
    earnedPoints: 50,
    status: "In Transit",
    deliveryType: "Eco Chilled Courier",
    createdAt: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    estimatedDeliveryMinutes: 45
  }
];


export const BRAND_INFO = {
  name: "Creamy Bliss",
  tagline: "Handcrafted Joy in Every Scoop",
  logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw-DT8JeKTUufsgdVQkT5qSA15xm_Qws3FvZ6vYVOQPNXmtgvs-356NIElnJD3zTSoRvIBLASKtBl-K0tXlOk1oav_F_vgqo8XjGlVpCS4-bS9IOJ_nzCurYoni6Z3iz2cX-TCoLkRwWyDU5RuVR8as2huG2X3tQRZGKIhP-8RnEPq0VbtUNqJYguZTlTOmCdTjAddxcjgIZwZ6nrnrWID1_Q7ORVhmagYLUrBuksd",
  userAvatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0qlHXtOrwgbbGtw3kg_sp0adxr1WamoGQAcOAh_0uKYy9tbPWmwV4a5yaYr8FK1cVbWyIzZY3SJ-ta1ORpL9CHO36NDiF__ufgsrm8UNHMT91uhrI71XDTc8LdiwZtuf20QuKoRWARFlEp0vFPz3qi--8YvWkPiN4zopO99wRydpPWyd-7hP_b7SVDpbczqjQSgy1VXsTKX6FuKiV_J8d_CvuxR1u4Ze2FifDl8IB",
  heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-fUxjfm9Wehumlu0VotwRXqr1YtiE2s70R_x1W_yQy41iZMnjubn_VffktgAKoTbHvuljTYy7dp5AYCRrmJJfPA17YT-tchokVAQT7RJD8NORSIee4OxdebhcsSKI8H7TEOGfbX05oAryZiPgXult8eJTICypne447YMBw58mMxxeA4XCaMOhPMXHQXdrW7lAs7t7QozPOyXdxyBJsNOoggEp6Bs_0xfdQw7m0YEp",
  promoCode: "BLISSJOY"
};

export const CATEGORIES = [
  { id: "all", label: "All Flavors", icon: "stars", isEmoji: false },
  { id: "berries", label: "Berry & Fruity", icon: "🍓", isEmoji: true },
  { id: "chocolate", label: "Rich Chocolate", icon: "🍫", isEmoji: true },
  { id: "classics", label: "Classics", icon: "🍦", isEmoji: true },
  { id: "bakery", label: "Bakery & Crunch", icon: "🍪", isEmoji: true },
  { id: "vegan", label: "Vegan & Sorbets", icon: "🌱", isEmoji: true }
];

export const BEST_SELLERS = [
  {
    id: "strawberry-delight",
    name: "Strawberry Delight",
    price: 5.50,
    unit: "scoop",
    rating: 4.9,
    reviews: "1,420",
    tag: "#1 Most Loved",
    tagIcon: "🔥",
    tagBg: "bg-primary-container text-on-primary",
    description: "Made with sweet local strawberries folded into silky double cream.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeX8qtgWtnXbBEeEZf6OYWYt8CdNMGC5eQea0GxjIWEz10shuQfxSNGT8HmxPy0kyPEIO0CbNvFSS5Rw4gfjmuvdesKI4PUW8RKwzYPDqZLWokoHmdCIlGV4zKjpomwj-G2Eofclwh_J97hJSUt_-k6N5xrTw2yWGwII7pg-wtGhDenn6jHqqiTP2RycZkE5Wayr9Cnc4glebweG2HxRK9I6GMNAcBp9kQ87HFWH_B",
    alt: "A delicious crisp waffle bowl holding fresh strawberry ice cream scoops topped with sliced organic strawberries, fresh mint leaf, and crushed pistachios",
    category: "berries"
  },
  {
    id: "belgian-chocolate",
    name: "Belgian Chocolate",
    price: 5.95,
    unit: "scoop",
    rating: 5.0,
    reviews: "980",
    tag: "Chef's Pick",
    tagIcon: "🍫",
    tagBg: "bg-inverse-surface text-inverse-on-surface",
    description: "Rich 70% dark Belgian cocoa with fudge swirls and crisp cacao nibs.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVRGeGRb75LE2tci3ClI6QWMspM63uKPK6hCFzeca7CE8RjexIaaoQvnhiuAsXbCc8Y0YmhuIxZbWcdjzaVs4S21yjVJ8uxXpme0DQCF2vs5QxTciLHjwGkNTpB0UmSc-9P4OvFckVwlFyShUoI7aYW1dqcVxMu2f3e9nibzfdTThoXd1n-nb0LKztFMJBcaOX5a_4kqRRJwU8xAl1qQiiawx_hjo27PizRXGcHlQk",
    alt: "Generous scoops of rich dark Belgian chocolate gelato garnished with dark chocolate shavings, cacao nibs, and artisanal chocolate curl ribbons in a ceramic cup",
    category: "chocolate"
  },
  {
    id: "vanilla-dream",
    name: "Vanilla Dream",
    price: 4.95,
    unit: "scoop",
    rating: 4.8,
    reviews: "1,100",
    tag: "Pure Classic",
    tagIcon: "✨",
    tagBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    description: "Aromatic Madagascar Bourbon vanilla beans steeped in farm-fresh cream.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsxkMu-1h8bZ-QL7vPWRpksXxhkV1KvK1m4XQAJ0zopD-jzS_gJYFeASvJ69dYV89GyPddI0sGdy0eHHyoHme4n89v_UywivD6BEU3CfKDTSYZOisEPE5rnWUi7klvI4J1B3y9G229KM8W-5HBf01WxeEankqrDWHw9E0FfqNK8-REe8297l8DjWGqY7adAfRpElV6djoJb_5Qz12GKcfJ3knr7l38DBVEyKYXVD3u",
    alt: "A round quenelle scoop of creamy Madagascar bourbon vanilla ice cream with visible aromatic vanilla bean specks in a delicate scalloped porcelain dish",
    category: "classics"
  }
];

export const ALL_FLAVORS = [
  {
    id: "mango-magic",
    name: "Mango Magic",
    price: 5.25,
    unit: "scoop",
    rating: 4.9,
    reviews: "640",
    badge: "Vegan",
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    description: "Alphonso mango purée blended with sweet cream.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPbfHWNnMyXj-kmXICEhhAQCrB0O359soGZ_HlXj--qY2zjcOjjBC9vG4r7dUJDiGIGlsYBHyW1bpIJLavodyGp2qYNTzqRb_F18Lt9z68CuGK5FC1a3eVKcmT5gTq4heZzgNr9BVpltbsXb1BtkIfk9Dh3V_GJlO5fEHG8hyS02NpcdqDQ9SVk-UJwSi4-ruVwlt5FQMxEH8Rl6ysthsA0S36WNu9ez6q47kb3Ri-",
    category: "berries"
  },
  {
    id: "cookies-cream",
    name: "Cookies & Cream",
    price: 5.50,
    unit: "scoop",
    rating: 4.9,
    reviews: "920",
    badge: "Bestseller",
    badgeBg: "bg-primary-fixed text-on-primary-fixed",
    description: "Crumbled handmade dark cocoa biscuits in sweet cream.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG0ocqeC7p_4vPFeAmjIqSiYloIANOZJ2AzLOJJIF9NjTVcOQiYXEa57txcRBAKytK6MvI8aMMp0fW1132isFMYdFslECjG2KZVaiv_jZr75KzEmWA-F0_KcYM6F19NvagKIqYdxO93GYaJuqb6yKsb0PgILNzmsC8coaye9_tziRCXkZh3pwcjEFz0JegHmE8zj6NXjhvQcmx6nHnmn93WMfwZWM_7U6sDqd9nbON",
    category: "bakery"
  },
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake",
    price: 5.95,
    unit: "scoop",
    rating: 4.8,
    reviews: "510",
    badge: "Special",
    badgeBg: "bg-secondary-container text-on-secondary-container",
    description: "Cream cheese swirl with organic wild blueberry compote.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX5jQiAQ-SWUBWAwqFUYvfAc6U469t2v4TlcZym6G5K50BP_AKNw3vV5-a5ZxDKyHsyWNcAg9oH2T3p3ym-s1i7agFsDm9DMOGVe_CkE4oVoqfxliU_PzT0CSwqz_0p6Zc8UHjtZM82U2uP_ILsKhzerlPjZgPVHT9fCZ_Bf0NfflkLrxtsMZOgmByamOPNLOU57zmeII-WwMn_jqs_pX_2V-ha4fdqbh6rhowNPyT",
    category: "bakery"
  },
  {
    id: "pistachio-premium",
    name: "Pistachio Premium",
    price: 6.25,
    unit: "scoop",
    rating: 5.0,
    reviews: "1,050",
    badge: "Italian",
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    description: "Roasted Sicilian Bronte pistachios with almond praline.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCheLC1xCxAcPDDvJXDoyHyI9oE_MYqGjFWS86pxNB9nDtyxaVDnEBj7jupFEg_CN-ium7d4WM9DcK5w4kl2WWSNV0_h3DNlVU24UWbLzZd7R7Hz0BR51L1W0A1tZgrlX9uPv5ae_VaWA08Y3Ut39rrVkiSWjCkF0-4fZvoukXS4pNo8GNrX0GBwUL8Grjorjh6gj0_PklM_o1LgiZx_7Ebd4gaXagIbpQ_nfNZG_wL",
    category: "classics"
  },
  {
    id: "caramel-crunch",
    name: "Caramel Crunch",
    price: 5.50,
    unit: "scoop",
    rating: 4.9,
    reviews: "780",
    badge: "Gluten-Free",
    badgeBg: "bg-secondary-container text-on-secondary-container",
    description: "Golden sea salt caramel with honeycomb wafer bits.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHE0M-ElMlAoc4DeINV-1ZNRxxHUPeHHiPppy_EKKvQIZsxcGF4kQMxkZpXSTp9QGQ3LqL1cykFef1W5CrmjNqxTJBIysw5LKb4UeSj36Vf13J5j3VIX5pG3bn9tWinN5YD2HixzjPzM38wqYrORZfGFGg8tOYiZHc_KWrMERs6e0ZifR67kkCmvsG9ZuFPytRmA-nJ-n2NPPlHfphTmtmwwGe-PAfQzLww_PLt7jx",
    category: "bakery"
  },
  {
    id: "wild-berry-sorbet",
    name: "Wild Berry Sorbet",
    price: 5.25,
    unit: "scoop",
    rating: 4.8,
    reviews: "430",
    badge: "Vegan",
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    description: "Forest blackberries, raspberries, and lemon zest.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuru5u9Tz3pstu6m8-xpNsDfXW8GvlwDGsxn8xi-hELwLk5k3V2TmMSNH0GqX1YWD5KuMnT8DcTxWYzIJAVMQNV65VivQc7lQG4SS0Y9wKZU6MJKNk3EDKlbEZ7R_3dPkA6HxiggKS3ehCRPy_9cIfQTaf5J4sxH8tZ2qB-SeV0jH_EZuDnE5dDmUkOI8WgWJVWT6pAjeCQMBDluh6A-FJLYAg_JpEC0X6ocIYEvAP",
    category: "vegan"
  }
];

export const INITIAL_CART = [
  {
    id: "wild-strawberry-swirl",
    name: "Wild Strawberry Swirl",
    size: "1 x Pint",
    price: 6.25,
    quantity: 1,
    icon: "icecream",
    iconBg: "bg-primary-fixed-dim/40 text-primary"
  },
  {
    id: "salted-butterscotch-waffle",
    name: "Salted Butterscotch Waffle",
    size: "1 x Pint",
    price: 6.25,
    quantity: 1,
    icon: "cookie",
    iconBg: "bg-tertiary-fixed/60 text-tertiary"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sofia Martinez",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0qlHXtOrwgbbGtw3kg_sp0adxr1WamoGQAcOAh_0uKYy9tbPWmwV4a5yaYr8FK1cVbWyIzZY3SJ-ta1ORpL9CHO36NDiF__ufgsrm8UNHMT91uhrI71XDTc8LdiwZtuf20QuKoRWARFlEp0vFPz3qi--8YvWkPiN4zopO99wRydpPWyd-7hP_b7SVDpbczqjQSgy1VXsTKX6FuKiV_J8d_CvuxR1u4Ze2FifDl8IB",
    verified: true,
    rating: 5,
    review: "“The Strawberry Delight is literal perfection in a cone! Crisp handmade waffle and that silky, melt-in-mouth strawberry texture. I crave this every weekend!”"
  },
  {
    id: 2,
    name: "David Reynolds",
    initials: "DR",
    verified: true,
    rating: 5,
    review: "“Hands down the richest Belgian chocolate gelato in the city. The fudge ribbons with subtle crunch from nibs make it an absolute masterclass dessert.”"
  },
  {
    id: 3,
    name: "Chloe Tanaka",
    initials: "CT",
    verified: true,
    rating: 5,
    review: "“The waffle bowl sundae made our anniversary evening so special. Ordering online was seamless and arrived ice-cold in eco packaging!”"
  }
];

export const PROMO_MESSAGES = [
  { icon: "icecream", color: "text-secondary", text: "Free delivery on orders over $25" },
  { icon: "eco", color: "text-primary", text: "Seasonal Strawberry Truffle back in stock" },
  { icon: "stars", color: "text-tertiary", text: "100% Organic Farm Milk" },
  { icon: "icecream", color: "text-secondary", text: "Free delivery on orders over $25" },
  { icon: "eco", color: "text-primary", text: "Seasonal Strawberry Truffle back in stock" }
];


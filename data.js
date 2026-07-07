// PriceRadar shared mock data + helpers (client-side prototype).
// In production this logic would live behind real DB tables / API routes —
// see README.md for the schema this mirrors.

// ---------- seeded RNG so mock numbers are stable across reloads ----------
function seedRand(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function () {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export const CURRENCY = { IN: '₹', AE: 'AED ' };

export const COUNTRIES = [
  { code: 'IN', name: 'India', currency: 'INR', symbol: '₹' },
  { code: 'AE', name: 'UAE', currency: 'AED', symbol: 'AED ' },
];

export const ALL_STORES_LISTED = {
  IN: ['Amazon India', 'Flipkart', 'Myntra', 'Ajio', 'Tata CLiQ', 'Croma', 'Reliance Digital', 'Vijay Sales', 'Nykaa', 'Meesho', 'JioMart', 'BigBasket', 'Blinkit', 'Zepto', 'Swiggy Instamart', 'FirstCry', 'Pepperfry', 'Decathlon India'],
  AE: ['Amazon UAE', 'Noon', 'Carrefour UAE', 'Sharaf DG', 'Jumbo', 'Lulu Hypermarket', 'Namshi', '6thStreet', 'Centrepoint', 'Sephora UAE', 'Mumzworld', 'Dragon Mart', 'Ace UAE', 'Virgin Megastore UAE'],
};

// stores actually used for demo price records (from brief's "demo stores")
const DEMO_STORES = {
  IN: ['Amazon India', 'Flipkart', 'Myntra', 'Ajio', 'Croma', 'Reliance Digital', 'Nykaa', 'Meesho', 'JioMart', 'BigBasket'],
  AE: ['Amazon UAE', 'Noon', 'Carrefour UAE', 'Sharaf DG', 'Lulu Hypermarket', 'Namshi', 'Centrepoint', 'Sephora UAE', 'Jumbo'],
};

const STORE_COLORS = ['#4338CA', '#0EA5A4', '#DB2777', '#EA580C', '#16A34A', '#2563EB', '#9333EA', '#CA8A04', '#0D9488', '#DC2626'];

export const STORES = [];
Object.entries(DEMO_STORES).forEach(([country, names]) => {
  names.forEach((name, i) => {
    STORES.push({
      id: `${country}-${name.replace(/\s+/g, '').toLowerCase()}`,
      name, country,
      color: STORE_COLORS[i % STORE_COLORS.length],
      initial: name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase(),
      rating: +(3.8 + (i % 5) * 0.24).toFixed(1),
    });
  });
});

export const CATEGORIES = [
  { id: 'mobiles', name: 'Mobiles', icon: 'phone', hue: 231 },
  { id: 'laptops', name: 'Laptops', icon: 'laptop', hue: 262 },
  { id: 'ac', name: 'Air Conditioners', icon: 'snow', hue: 199 },
  { id: 'beauty', name: 'Beauty', icon: 'sparkle', hue: 330 },
  { id: 'shoes', name: 'Shoes', icon: 'shoe', hue: 24 },
  { id: 'watches', name: 'Watches', icon: 'watch', hue: 43 },
  { id: 'grocery', name: 'Grocery', icon: 'basket', hue: 142 },
  { id: 'headphones', name: 'Headphones', icon: 'headphone', hue: 271 },
  { id: 'appliances', name: 'Washing Machines', icon: 'washer', hue: 205 },
  { id: 'fitness', name: 'Protein & Fitness', icon: 'dumbbell', hue: 15 },
  { id: 'fashion', name: 'Fashion', icon: 'shirt', hue: 300 },
  { id: 'furniture', name: 'Furniture', icon: 'sofa', hue: 28 },
  { id: 'automotive', name: 'Automotive', icon: 'car', hue: 210 },
  { id: 'baby', name: 'Baby & Kids', icon: 'baby', hue: 190 },
];

const CATALOG = {
  mobiles: [
    ['Apple', 'iPhone 16 Pro Max 256GB'],
    ['Samsung', 'Galaxy S25 Ultra 256GB'],
    ['OnePlus', '13 5G 256GB'],
  ],
  laptops: [
    ['Apple', 'MacBook Air M3 13"'],
    ['Dell', 'XPS 14 i7 16GB'],
    ['ASUS', 'ROG Zephyrus G14'],
  ],
  ac: [
    ['LG', '1.5 Ton 5 Star Inverter Split AC'],
    ['Voltas', '1 Ton 3 Star Split AC'],
    ['Daikin', '1.5 Ton 5 Star Inverter AC'],
  ],
  beauty: [
    ['Lakme', '9 to 5 Matte Lipstick'],
    ['Mamaearth', 'Vitamin C Face Wash'],
    ['Nykaa', 'SkinRX Sunscreen SPF50'],
  ],
  shoes: [
    ['Nike', 'Air Zoom Pegasus 41'],
    ['Adidas', 'Ultraboost 22'],
    ['Puma', 'Velocity Nitro 3'],
  ],
  watches: [
    ['Titan', 'Neo Analog Watch'],
    ['Fossil', 'Gen 6 Smartwatch'],
    ['Noise', 'ColorFit Pro 5'],
  ],
  grocery: [
    ['Tata Sampann', 'Toor Dal 1kg'],
    ['Aashirvaad', 'Atta 5kg'],
    ['Nescafe', 'Classic Coffee 200g'],
  ],
  headphones: [
    ['Sony', 'WH-1000XM5'],
    ['boAt', 'Rockerz 550'],
    ['JBL', 'Tune 760NC'],
  ],
  appliances: [
    ['LG', '7kg Front Load Washing Machine'],
    ['Samsung', '8kg Top Load Washing Machine'],
    ['IFB', '6.5kg Front Load Washing Machine'],
  ],
  fitness: [
    ['MuscleBlaze', 'Whey Protein 1kg'],
    ['Optimum Nutrition', 'Gold Standard Whey 2lb'],
    ['MyProtein', 'Impact Whey 1kg'],
  ],
};

const COUPONS = ['SAVE10', 'NEW200', 'FEST500', 'WELCOME15', null, null];
const BANK_OFFERS = ['10% instant discount with HDFC Bank Cards', '5% cashback with Axis Bank Cards', 'No cost EMI on ICICI Bank Cards', 'AED 50 off with Emirates NBD Cards', 'Flat 5% off with Mashreq Cards', null];
const DELIVERY_TIMES = ['Same day', 'Next day', '2-3 days', '3-5 days', '5-7 days'];
const RETURN_POLICIES = ['7 day return', '10 day return', '15 day return', 'No returns', '30 day return'];
const WARRANTIES = ['1 year brand warranty', '2 year brand warranty', '6 months seller warranty', 'No warranty'];

function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

export const PRODUCTS = [];
export const PRICES = [];

let pid = 1;
COUNTRIES.forEach(({ code: country }) => {
  Object.entries(CATALOG).forEach(([catId, items]) => {
    items.forEach(([brand, model], idx) => {
      const rnd = seedRand(pid * 97 + (country === 'IN' ? 1 : 2));
      const title = `${brand} ${model}`;
      const id = `p${pid}`;
      const cat = CATEGORIES.find(c => c.id === catId);
      const basePrice = country === 'IN'
        ? Math.round((800 + rnd() * 120000) / 10) * 10
        : Math.round((40 + rnd() * 5000) / 5) * 5;
      const rating = +(3.5 + rnd() * 1.4).toFixed(1);
      const reviews = Math.floor(200 + rnd() * 15000);
      PRODUCTS.push({
        id, slug: `${slugify(title)}-${country.toLowerCase()}`,
        title, brand, category: catId, categoryName: cat.name, hue: cat.hue,
        country, rating: Math.min(5, rating), reviews,
        specs: { 'Model': model, 'Brand': brand, 'Category': cat.name, 'Country': country === 'IN' ? 'India' : 'UAE' },
      });

      // 3-4 store price records per product
      const storeList = DEMO_STORES[country];
      const numStores = 3 + Math.floor(rnd() * 2);
      const usedIdx = new Set();
      for (let i = 0; i < numStores; i++) {
        let si;
        do { si = Math.floor(rnd() * storeList.length); } while (usedIdx.has(si) && usedIdx.size < storeList.length);
        usedIdx.add(si);
        const storeName = storeList[si];
        const store = STORES.find(s => s.country === country && s.name === storeName);
        const variance = 0.85 + rnd() * 0.3;
        const currentPrice = Math.round(basePrice * variance / 10) * 10;
        const discountPct = Math.floor(5 + rnd() * 45);
        const originalPrice = Math.round(currentPrice / (1 - discountPct / 100) / 10) * 10;
        const daysAgo = Math.floor(rnd() * 6);
        PRICES.push({
          id: `${id}-${store.id}`,
          productId: id, storeId: store.id, storeName: store.name, country,
          currentPrice, originalPrice, discountPct,
          currency: country === 'IN' ? 'INR' : 'AED',
          coupon: COUPONS[Math.floor(rnd() * COUPONS.length)],
          bankOffer: BANK_OFFERS[Math.floor(rnd() * BANK_OFFERS.length)],
          deliveryFee: rnd() > 0.6 ? 0 : Math.round((country === 'IN' ? 40 + rnd() * 120 : 10 + rnd() * 25)),
          deliveryTime: DELIVERY_TIMES[Math.floor(rnd() * DELIVERY_TIMES.length)],
          returnPolicy: RETURN_POLICIES[Math.floor(rnd() * RETURN_POLICIES.length)],
          warranty: WARRANTIES[Math.floor(rnd() * WARRANTIES.length)],
          inStock: rnd() > 0.12,
          sellerRating: +(3.6 + rnd() * 1.3).toFixed(1),
          lastUpdated: daysAgo === 0 ? 'Just now' : `${daysAgo}d ago`,
        });
      }
      pid++;
    });
  });
});

export function formatPrice(amount, country) {
  const sym = country === 'IN' ? '₹' : 'AED ';
  return sym + Math.round(amount).toLocaleString('en-IN');
}

export function getProducts(filters = {}) {
  let list = PRODUCTS.slice();
  const { country, category, query, minRating, sortBy } = filters;
  if (country && country !== 'GLOBAL') list = list.filter(p => p.country === country);
  if (category) list = list.filter(p => p.category === category);
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(p => p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.categoryName.toLowerCase().includes(q));
  }
  if (minRating) list = list.filter(p => p.rating >= minRating);
  const enriched = list.map(p => enrichProduct(p));
  let result = enriched;
  if (filters.minPrice != null) result = result.filter(p => p.bestPrice.currentPrice >= filters.minPrice);
  if (filters.maxPrice != null) result = result.filter(p => p.bestPrice.currentPrice <= filters.maxPrice);
  if (filters.store) result = result.filter(p => p.prices.some(pr => pr.storeName === filters.store));
  if (filters.minDiscount) result = result.filter(p => p.bestDiscount >= filters.minDiscount);
  if (filters.freeDelivery) result = result.filter(p => p.prices.some(pr => pr.deliveryFee === 0));
  if (filters.inStock) result = result.filter(p => p.prices.some(pr => pr.inStock));
  if (filters.coupon) result = result.filter(p => p.prices.some(pr => pr.coupon));
  if (filters.bankOffer) result = result.filter(p => p.prices.some(pr => pr.bankOffer));

  switch (sortBy) {
    case 'price_low': result.sort((a, b) => a.bestPrice.currentPrice - b.bestPrice.currentPrice); break;
    case 'price_high': result.sort((a, b) => b.bestPrice.currentPrice - a.bestPrice.currentPrice); break;
    case 'discount': result.sort((a, b) => b.bestDiscount - a.bestDiscount); break;
    case 'rating': result.sort((a, b) => b.rating - a.rating); break;
    case 'reviews': result.sort((a, b) => b.reviews - a.reviews); break;
    default: break;
  }
  return result;
}

export function enrichProduct(p) {
  const prices = PRICES.filter(pr => pr.productId === p.id).sort((a, b) => a.currentPrice - b.currentPrice);
  const bestPrice = prices[0];
  const bestDiscount = Math.max(...prices.map(pr => pr.discountPct));
  return { ...p, prices, bestPrice, bestDiscount };
}

export function getProductBySlug(slug) {
  const p = PRODUCTS.find(p => p.slug === slug);
  return p ? enrichProduct(p) : null;
}

export function getPriceHistory(productId, days = 30) {
  const rnd = seedRand(parseInt(productId.replace(/\D/g, '')) * 13 + days);
  const product = enrichProduct(PRODUCTS.find(p => p.id === productId));
  const current = product.bestPrice.currentPrice;
  let price = current * (1.05 + rnd() * 0.25);
  const series = [];
  for (let i = days; i >= 0; i--) {
    price += (rnd() - 0.52) * current * 0.02;
    price = Math.max(current * 0.75, Math.min(current * 1.35, price));
    series.push({ day: i, price: Math.round(price) });
  }
  series[series.length - 1].price = current;
  const values = series.map(s => s.price);
  const lowest = Math.min(...values);
  const highest = Math.max(...values);
  const average = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  return {
    series, lowest, highest, average, current,
    dropPct: Math.round((1 - current / highest) * 100),
    goodTimeToBuy: current <= average,
  };
}

export function getDeals(country) {
  return getProducts({ country }).filter(p => p.bestDiscount >= 25).sort((a, b) => b.bestDiscount - a.bestDiscount);
}

export const BLOG_POSTS = [
  { id: 'b1', slug: 'best-5-star-ac-india', title: 'Best 5 Star AC in India (2026 Guide)', category: 'Electronics', readTime: 7, excerpt: 'Inverter tech, sizing by room, and the real running-cost math behind every 5-star label.' },
  { id: 'b2', slug: 'amazon-vs-flipkart', title: 'Amazon vs Flipkart: Who Actually Has the Lower Price?', category: 'Comparison', readTime: 6, excerpt: 'We tracked 500 products for 90 days — here is who wins by category.' },
  { id: 'b3', slug: 'beauty-under-500', title: 'Best Beauty Products Under ₹500', category: 'Beauty', readTime: 5, excerpt: 'Skincare and makeup picks that punch well above their price.' },
  { id: 'b4', slug: 'phones-under-30000', title: 'Best Phones Under ₹30,000 Right Now', category: 'Mobiles', readTime: 8, excerpt: 'Camera, battery, and resale value compared across this year\u2019s crop.' },
  { id: 'b5', slug: 'laptops-for-students', title: 'Best Laptops for Students in 2026', category: 'Laptops', readTime: 6, excerpt: 'Battery life and build quality matter more than raw specs — here\u2019s why.' },
  { id: 'b6', slug: 'best-uae-shopping-sites', title: 'Best UAE Shopping Websites Compared', category: 'Guides', readTime: 7, excerpt: 'Delivery speed, return policy, and price honesty across the UAE\u2019s top stores.' },
  { id: 'b7', slug: 'noon-vs-amazon-uae', title: 'Noon vs Amazon UAE: Full Price Comparison', category: 'Comparison', readTime: 6, excerpt: 'Two retail giants, one winner depending on the category.' },
  { id: 'b8', slug: 'fake-discounts', title: 'How to Spot Fake Discounts Online', category: 'Guides', readTime: 5, excerpt: 'The MRP inflation trick, and how price history exposes it instantly.' },
  { id: 'b9', slug: 'best-time-to-buy-electronics', title: 'Best Time to Buy Electronics in India', category: 'Guides', readTime: 6, excerpt: 'Festival sales, end-of-quarter clearances, and the calendar that saves you the most.' },
  { id: 'b10', slug: 'credit-card-offers', title: 'Best Credit Card Offers for Online Shopping', category: 'Finance', readTime: 5, excerpt: 'Instant discounts vs cashback vs no-cost EMI — what actually saves more.' },
];

// ---------- lightweight client-side "account" state (localStorage) ----------
const LS_KEY = 'priceradar_state_v1';
function readState() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
}
function writeState(s) { localStorage.setItem(LS_KEY, JSON.stringify(s)); }

export function getAppState() {
  const s = readState();
  return {
    country: s.country || 'IN',
    user: s.user || null,
    wishlist: s.wishlist || [],
    alerts: s.alerts || [],
  };
}
export function setCountry(country) { const s = readState(); s.country = country; writeState(s); }
export function login(name, email) { const s = readState(); s.user = { name, email }; writeState(s); }
export function logout() { const s = readState(); s.user = null; writeState(s); }
export function toggleWishlist(productId) {
  const s = readState(); s.wishlist = s.wishlist || [];
  const i = s.wishlist.indexOf(productId);
  if (i >= 0) s.wishlist.splice(i, 1); else s.wishlist.push(productId);
  writeState(s); return s.wishlist;
}
export function addAlert(productId, targetPrice, channel) {
  const s = readState(); s.alerts = s.alerts || [];
  s.alerts.push({ id: 'a' + Date.now(), productId, targetPrice, channel, createdAt: Date.now() });
  writeState(s); return s.alerts;
}
export function removeAlert(alertId) {
  const s = readState(); s.alerts = (s.alerts || []).filter(a => a.id !== alertId);
  writeState(s); return s.alerts;
}

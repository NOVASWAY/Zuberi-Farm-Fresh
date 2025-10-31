// Product categories and data structure
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  nutritionalInfo?: string;
  growingSeason?: string;
  price?: string;
  availability?: string;
  detailedDescription?: string;
  uses?: string[];
  benefits?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "international-vegetables",
    name: "Fresh Vegetables",
    description: "Premium quality vegetables grown with care",
    icon: "🥬",
    products: [
      {
        id: "green-capsicum",
        name: "Green Capsicum",
        description: "Fresh, crisp green bell peppers",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green%20Capsicum.jpeg-Z8FJex7z6xFkh0YDUjml6BH6bQUh6P.jpeg",
        category: "international-vegetables",
        nutritionalInfo: "Rich in Vitamin C, antioxidants, and fiber",
        growingSeason: "Year-round",
        detailedDescription: "Our green capsicum peppers are grown with care to ensure maximum freshness and flavor. Perfect for salads, cooking, and snacking.",
        uses: ["Salads", "Cooking", "Grilling", "Raw snacking"],
        benefits: ["High Vitamin C", "Antioxidants", "Low calories", "Fiber rich"]
      },
      {
        id: "broccoli",
        name: "Broccoli",
        description: "Nutritious and tender broccoli florets",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Broccoli-ywQgeB5uy1jGTfmArJJnEOd9xOpcr2.jpeg",
        category: "international-vegetables",
        nutritionalInfo: "High in Vitamin K, C, and folate",
        growingSeason: "Cool season",
        detailedDescription: "Fresh broccoli florets packed with nutrients. Our broccoli is harvested at peak freshness for maximum nutritional value.",
        uses: ["Steaming", "Roasting", "Stir-frying", "Raw in salads"],
        benefits: ["Cancer prevention", "Bone health", "Immune support", "Heart health"]
      },
      {
        id: "cauliflower",
        name: "Cauliflower",
        description: "Snow-white, compact cauliflower heads",
        image: "/images/cauliflower.png",
        category: "international-vegetables",
        nutritionalInfo: "Rich in Vitamin C, K, and folate",
        growingSeason: "Cool season",
        detailedDescription: "Premium cauliflower heads with tight, compact florets. Perfect for roasting, mashing, or using as a low-carb alternative.",
        uses: ["Roasting", "Mashing", "Rice substitute", "Curries"],
        benefits: ["Low carb", "High fiber", "Antioxidants", "Digestive health"]
      },
      {
        id: "cucumber",
        name: "Cucumber",
        description: "Cool, refreshing cucumbers",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cucumber-q4mPpG1990os8L2nkdKZelKlbH3B1m.jpeg",
        category: "international-vegetables",
        nutritionalInfo: "High water content, Vitamin K, and potassium",
        growingSeason: "Warm season",
        detailedDescription: "Crisp, refreshing cucumbers perfect for salads, pickling, or hydrating snacks. Grown in optimal conditions for maximum freshness.",
        uses: ["Salads", "Pickling", "Snacking", "Juicing"],
        benefits: ["Hydration", "Low calories", "Skin health", "Digestive aid"]
      },
      {
        id: "lettuce",
        name: "Lettuce",
        description: "Crisp, leafy lettuce varieties",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lettuce.jpeg-iF7blKydrUSTr2gCE86QkR9iLkrXKe.jpeg",
        category: "international-vegetables",
        nutritionalInfo: "Rich in Vitamin A, K, and folate",
        growingSeason: "Cool season",
        detailedDescription: "Fresh, crisp lettuce varieties perfect for salads and sandwiches. Grown with care to ensure maximum freshness and crunch.",
        uses: ["Salads", "Sandwiches", "Wraps", "Garnish"],
        benefits: ["Eye health", "Bone strength", "Hydration", "Low calories"]
      },
      {
        id: "celery",
        name: "Celery",
        description: "Crunchy, flavorful celery stalks",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Celery-5vTrovgJkyJ8Od9KYe3D47PRyvf7to.jpeg",
        category: "international-vegetables",
        nutritionalInfo: "High in Vitamin K, potassium, and antioxidants",
        growingSeason: "Cool season",
        detailedDescription: "Crisp, flavorful celery stalks perfect for snacking, cooking, or juicing. Known for its distinctive crunch and flavor.",
        uses: ["Snacking", "Cooking", "Juicing", "Salads"],
        benefits: ["Heart health", "Anti-inflammatory", "Digestive health", "Hydration"]
      },
      {
        id: "coriander",
        name: "Coriander",
        description: "Aromatic, fresh coriander leaves",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coriander-ZUGsoikYG1mgRZ5YmrPLrfDOrHksXv.jpeg",
        category: "international-vegetables",
        nutritionalInfo: "Rich in Vitamin C, K, and antioxidants",
        growingSeason: "Year-round",
        detailedDescription: "Fresh, aromatic coriander leaves perfect for garnishing and flavoring dishes. Grown for maximum aroma and flavor.",
        uses: ["Garnishing", "Cooking", "Curries", "Salads"],
        benefits: ["Antioxidants", "Digestive aid", "Immune support", "Anti-inflammatory"]
      },
      {
        id: "beetroot",
        name: "Beetroot",
        description: "Deep purple, earthy beetroots",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beetroot.jpeg-EkXdGUruaoYoFh2YaYWP3D6ApVrMjh.jpeg",
        category: "international-vegetables",
        nutritionalInfo: "High in folate, manganese, and nitrates",
        growingSeason: "Cool season",
        detailedDescription: "Nutrient-dense beetroots with deep purple color and earthy flavor. Perfect for roasting, juicing, or salads.",
        uses: ["Roasting", "Juicing", "Salads", "Pickling"],
        benefits: ["Heart health", "Exercise performance", "Blood pressure", "Anti-inflammatory"]
      },
      {
        id: "tomatoes",
        name: "Tomatoes",
        description: "Juicy, ripe tomatoes",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tomatoes-e03AvEX6zEuXjnup9DSWsgU1xTwDGR.jpeg",
        category: "international-vegetables",
        nutritionalInfo: "Rich in lycopene, Vitamin C, and potassium",
        growingSeason: "Warm season",
        detailedDescription: "Juicy, ripe tomatoes bursting with flavor. Perfect for salads, cooking, sauces, and fresh eating.",
        uses: ["Salads", "Cooking", "Sauces", "Fresh eating"],
        benefits: ["Heart health", "Cancer prevention", "Skin health", "Eye health"]
      },
      {
        id: "colored-capsicum",
        name: "Colored Capsicum",
        description: "Vibrant red, yellow, and orange bell peppers",
        image: "/images/colored-capsicum.png",
        category: "international-vegetables",
        nutritionalInfo: "Rich in Vitamin C, A, and antioxidants",
        growingSeason: "Warm season",
        detailedDescription: "Vibrant colored bell peppers in red, yellow, and orange. Each color offers unique nutritional benefits and flavors.",
        uses: ["Salads", "Cooking", "Grilling", "Raw snacking"],
        benefits: ["High Vitamin C", "Eye health", "Immune support", "Antioxidants"]
      },
      {
        id: "mushrooms",
        name: "Mushrooms",
        description: "Organic, farm-fresh mushrooms with rich flavor and texture",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mushrooms-drqHJ1UOY7ijO4z7VfQGOn9uvWvuwo.jpeg",
        category: "international-vegetables",
        nutritionalInfo: "High in protein, B vitamins, and selenium",
        growingSeason: "Year-round",
        detailedDescription: "Organic mushrooms grown in controlled environments for maximum flavor and nutritional value. Perfect for cooking and grilling.",
        uses: ["Cooking", "Grilling", "Stir-frying", "Soups"],
        benefits: ["Immune support", "Protein source", "B vitamins", "Antioxidants"]
      }
    ]
  },
  {
    id: "african-leafy-vegetables",
    name: "African Leafy Vegetables",
    description: "Traditional African leafy greens rich in nutrients",
    icon: "🌿",
    products: [
      {
        id: "spider-plant",
        name: "Spider Plant",
        description: "Traditional African leafy vegetable, also known as African cabbage",
        image: "/images/spider-plant.png",
        category: "african-leafy-vegetables",
        nutritionalInfo: "Rich in Vitamin A, C, calcium, and iron",
        growingSeason: "Year-round",
        detailedDescription: "Spider plant (Cleome gynandra) is a traditional African leafy vegetable that grows wild and is cultivated for its nutritious leaves. It's known for its unique flavor and high nutritional content.",
        uses: ["Stewed", "With ugali", "Traditional dishes", "Salads"],
        benefits: ["High nutrition", "Traditional medicine", "Easy to grow", "Cultural significance"]
      }
    ]
  },
  {
    id: "nursery-products",
    name: "Nursery Products",
    description: "Quality seedlings and young plants",
    icon: "🌱",
    products: [
      {
        id: "nursery-seedlings",
        name: "Nursery Seedlings",
        description: "Quality seedlings of cabbage, spinach, kale, and more",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nursery%20seedlings-tZFkHUf6MOZQTWqFLX3yFtXxF98oGb.jpeg",
        category: "nursery-products",
        nutritionalInfo: "Ready-to-plant seedlings for home gardens",
        growingSeason: "Year-round",
        detailedDescription: "High-quality seedlings ready for transplanting. Perfect for home gardeners and small-scale farmers.",
        uses: ["Home gardening", "Small-scale farming", "Urban farming", "Educational projects"],
        benefits: ["Easy to grow", "High success rate", "Time saving", "Cost effective"]
      }
    ]
  },
  {
    id: "fruits",
    name: "Fresh Fruits",
    description: "Sweet, juicy fruits picked at peak ripeness",
    icon: "🍓",
    products: [
      {
        id: "strawberry",
        name: "Strawberry",
        description: "Sweet, fragrant strawberries",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Strawberry.jpeg-seDMzRtquoA6DbQjpPVQFYW9Lp7sb4.jpeg",
        category: "fruits",
        nutritionalInfo: "High in Vitamin C, manganese, and antioxidants",
        growingSeason: "Spring/Summer",
        detailedDescription: "Sweet, fragrant strawberries perfect for desserts, smoothies, or fresh eating. Grown for maximum sweetness and aroma.",
        uses: ["Desserts", "Smoothies", "Fresh eating", "Jams"],
        benefits: ["Immune support", "Heart health", "Anti-aging", "Brain health"]
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  for (const category of productCategories) {
    const product = category.products.find(p => p.id === id);
    if (product) return product;
  }
  return undefined;
}

export function getProductsByCategory(categoryId: string): Product[] {
  const category = productCategories.find(c => c.id === categoryId);
  return category ? category.products : [];
}

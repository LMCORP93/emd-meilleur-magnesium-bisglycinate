// ── Types ──────────────────────────────────────────────────────────────

export interface Product {
  rank: number; name: string; brand: string; slug: string; image: string; brandLogo: string;
  rating: number; reviewCount: number; promoCode: string; promoPercent: number;
  originalPrice: string; discountPrice: string; affiliateLink: string; origin: string;
  availability: string; productType: string; pros: string[]; cons: string[]; description: string;
}
export interface SiteConfig {
  domain: string; isIndexable?: boolean; siteName: string; brand: string; product: string;
  productCategory: string; productFormat: string; tagline: string; affiliateLink: string;
  promoCode: string; originalPrice: string; discountPrice: string; rating: number;
  author: { name: string; avatar: string; bio: string; };
  seo: { title: string; description: string; ogImage: string; };
  analyticsMeasurementId?: string; breadcrumbs: { label: string; href: string }[];
  quickSummary: { assets: string[]; considerations: string[]; };
  pros: string[]; cons: string[]; faq: { question: string; answer: string }[];
  products: Product[]; tocItems: { id: string; label: string }[];
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string }[];
}

const products: Product[] = [
  {
    rank: 1,
    name: 'Reset by Day',
    brand: 'Pauser',
    slug: 'pauser-reset-by-day',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69b2073ab892c6afb4ef863c_RESET_1.webp',
    brandLogo: '/images/logos/pauser.svg',
    rating: 8.6,
    reviewCount: 100,
    promoCode: 'LMC10',
    promoPercent: 10,
    originalPrice: '35.00€',
    discountPrice: '31.50€',
    affiliateLink: 'https://pauser.fr/collections/produits/products/reset-by-day-anti-stress?ref=LMC',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Complexe anti-stress avec magnésium bisglycinate, citrate-malate, safran et vitamine B6',
    pros: ['Très bon choix pour l’usage stress', 'Très bon angle stress, tension nerveuse et routine de journée', 'Formule documentée avec actifs brevetés Holixer® et Safr’Inside®', 'Fabriqué en France dans un laboratoire certifié ISO 22000'],
    cons: ['Ce n’est pas un magnésium bisglycinate pur', 'Apport en magnésium élémentaire plus bas que les produits spécialisés', 'Moins adapté si l’objectif est uniquement crampes ou récupération sportive'],
    description: 'Pauser prend la première place parce que le produit colle très bien à l’intention réelle derrière le magnésium bisglycinate : stress, calme, fatigue nerveuse et équilibre du quotidien. Il contient du magnésium bisglycinate, mais son positionnement est plus complet qu’un simple minéral isolé.'
  },
  {
    rank: 2,
    name: 'Oh!Mg',
    brand: 'NMN Bio',
    slug: 'oh-mg-nmn-bio',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698d0fbcbcf890ea682dab84_311_Evening_Magnesium_Campaign_product_page_2.webp',
    brandLogo: '/images/logos/nmn-bio.svg',
    rating: 8.1,
    reviewCount: 100,
    promoCode: 'LMC',
    promoPercent: 15,
    originalPrice: '45.00€',
    discountPrice: '38.25€',
    affiliateLink: 'https://tidd.ly/4aJE6M2',
    origin: '🇬🇧 Royaume-Uni',
    availability: 'En stock',
    productType: 'Complexe magnésium bisglycinate, taurate et lactate pour le soir',
    pros: ['Vrai produit magnésium avec bisglycinate', 'Formule premium orientée relaxation et sommeil', 'Ajout de L-théanine, mélisse, zinc et vitamines B', 'Bon angle science et récupération nocturne'],
    cons: ['Prix plus élevé que les alternatives françaises', 'Marque moins connue du public FR', 'Formule multi-ingrédients moins simple qu’un bisglycinate pur'],
    description: 'Oh!Mg est le choix premium du classement. Il combine plusieurs formes de magnésium, dont le bisglycinate, avec une logique claire : détente du soir, récupération et système nerveux.'
  },
  {
    rank: 3,
    name: 'Magnésium Bisglycinate',
    brand: 'Argalys',
    slug: 'magnesium-bisglycinate-argalys',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698ba3efad7a944cdaee9e25_magnesiumbisglycinate.webp',
    brandLogo: '/images/logos/argalys.svg',
    rating: 8.5,
    reviewCount: 900,
    promoCode: 'LMC',
    promoPercent: 10,
    originalPrice: '15.50€',
    discountPrice: '13.95€',
    affiliateLink: 'https://www.argalys.com/products/magnesium?ae=160',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Magnésium bisglycinate en gélules avec zinc et vitamine B6',
    pros: ['Produit exact sur la requête magnésium bisglycinate', 'Prix très accessible', 'Marque française et formulation simple', 'Bon support SEO pour l’exact-match'],
    cons: ['Moins premium que Pauser ou NMN Bio', 'Packaging plus classique', 'Moins orienté storytelling conversion'],
    description: 'Argalys est le pilier exact-match du Top 3. Le produit est clair, accessible et directement aligné avec la recherche meilleur magnésium bisglycinate.'
  },
  {
    rank: 4,
    name: 'Magnésium',
    brand: 'Nutripreneur',
    slug: 'magnesium-nutripreneur',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/6993188d4845d93bb8087c75_magnesiumsite_35d321e3-0c05-4656-b1e8-9566e86788f8.webp',
    brandLogo: '/images/logos/nutripreneur.svg',
    rating: 7.5,
    reviewCount: 200,
    promoCode: 'LMC15',
    promoPercent: 10,
    originalPrice: '25.00€',
    discountPrice: '22.50€',
    affiliateLink: 'https://nutripreneur.com/products/magnesium?ref=LMC10',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Magnésium bisglycinate avec taurine et vitamine B6',
    pros: ['Produit exact magnésium bisglycinate', 'Bon angle entrepreneurs, stress et performance mentale', 'Formule cohérente avec taurine et vitamine B6', 'Prix intermédiaire'],
    cons: ['Marque moins établie que certains concurrents', 'Moins de preuves sociales que les gros acteurs', 'Positionnement plus niche'],
    description: 'Nutripreneur est une bonne option pour les profils actifs qui cherchent un magnésium bisglycinate simple, orienté stress, sommeil et récupération nerveuse.'
  },
  {
    rank: 5,
    name: 'Magnésium bisglycinate',
    brand: 'Punch Power',
    slug: 'magnesium-bisglycinate-punch-power',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698c83a276aa2a2267335f55_1_-_pp_-_magn_sium.webp',
    brandLogo: '/images/logos/punch-power.svg',
    rating: 7.5,
    reviewCount: 700,
    promoCode: 'LMC20',
    promoPercent: 20,
    originalPrice: '16.99€',
    discountPrice: '12.74€',
    affiliateLink: 'https://fnty.co/c/r-jtUbbfjB',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Magnésium bisglycinate orienté sport et récupération',
    pros: ['Produit exact', 'Prix très compétitif avec code promo', 'Bon angle sport, crampes et récupération', 'Marque française connue en nutrition sportive'],
    cons: ['Image plus sportive que bien-être premium', 'Moins adapté à une cible stress/sommeil pure', 'Perception moins haut de gamme'],
    description: 'Punch Power complète le classement comme option sportive et budget. C’est un vrai magnésium bisglycinate, utile pour les lecteurs qui priorisent le prix et la récupération.'
  },
  {
    rank: 6,
    name: 'Magnesium Mix',
    brand: 'Clearly',
    slug: 'magnesium-mix-clearly',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/697211fa6e50ede3879ea0cc_Mag-Front-1-min.webp',
    brandLogo: '/images/logos/clearly.svg',
    rating: 8.8,
    reviewCount: 700,
    promoCode: 'LMC',
    promoPercent: 15,
    originalPrice: '21.25€',
    discountPrice: '19.12€',
    affiliateLink: 'https://clearly.eu/products/magnesium-mix?sca_ref=7596565.tJHE2KRYrL',
    origin: '🇳🇱 Pays-Bas',
    availability: 'En stock',
    productType: 'Mix de magnésium citrate, malate et glycinate',
    pros: ['Très bon rating partenaire', 'Formule multi-formes intéressante', 'Prix correct', 'Marque clean et transparente'],
    cons: ['Ce n’est pas un bisglycinate pur', 'Marque non française', 'Moins aligné exact-match que Argalys, Nutripreneur ou Punch Power'],
    description: 'Clearly ferme le Top 6 comme alternative propre et polyvalente. Le produit contient du glycinate dans un mix de formes, mais il est moins exact que les vrais bisglycinates du classement.'
  }
];

const config: SiteConfig = {
  domain: 'https://emd-meilleur-magnesium-bisglycinate.pages.dev',
  isIndexable: false,
  siteName: 'Meilleur Magnésium Bisglycinate',
  brand: 'Pauser',
  product: 'Reset by Day',
  productCategory: 'Magnésium bisglycinate et compléments anti-stress',
  productFormat: 'Gélules',
  tagline: 'Le comparatif clair pour choisir un magnésium bisglycinate utile, bien toléré et adapté à votre besoin.',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: { name: 'Tim', avatar: '/author-avatar.png', bio: 'Auteur des Avis de Tim, spécialisé dans les comparatifs de compléments alimentaires.' },
  seo: {
    title: 'Meilleur magnésium bisglycinate 2026 : comparatif Top 6',
    description: 'Comparatif 2026 des meilleurs magnésiums bisglycinate : Pauser, NMN Bio, Argalys, Nutripreneur, Punch Power et Clearly. Avis, prix, codes promo et conseils.',
    ogImage: '/og-image.jpg',
  },
  breadcrumbs: [{ label: 'Accueil', href: '/' }],
  quickSummary: {
    assets: ['Pauser est notre choix principal pour stress et équilibre quotidien.', 'Argalys, Nutripreneur et Punch Power portent l’exact-match bisglycinate.', 'NMN Bio est l’option premium orientée sommeil et récupération.'],
    considerations: ['Ne pas confondre bisglycinate pur et complexe de magnésium.', 'Vérifier dose de magnésium élémentaire, tolérance digestive et moment de prise.', 'Demander un avis médical en cas de traitement, grossesse ou pathologie rénale.'],
  },
  pros: ['Top 6 basé sur des produits disponibles et vérifiables', 'Classement orienté conversion mais sans mentir sur les formes', 'Comparatif utile pour stress, sommeil, crampes et récupération'],
  cons: ['Pauser est un complexe avec magnésium, pas un bisglycinate pur', 'La réponse dépend du besoin : stress, sommeil, sport ou prix'],
  faq: [
    { question: 'Quel est le meilleur magnésium bisglycinate ?', answer: 'Pour une intention stress et équilibre quotidien, notre choix numéro 1 est Pauser. Pour un produit plus strictement exact-match magnésium bisglycinate, Argalys, Nutripreneur et Punch Power sont les options les plus directes.' },
    { question: 'Pourquoi Pauser est premier alors que ce n’est pas un bisglycinate pur ?', answer: 'Parce que l’intention réelle derrière la recherche est souvent le stress, la fatigue nerveuse et le calme. Pauser contient du magnésium bisglycinate dans une formule anti-stress plus complète, ce qui en fait le meilleur choix conversion sans masquer la nuance.' },
    { question: 'Magnésium bisglycinate ou citrate : lequel choisir ?', answer: 'Le bisglycinate est souvent préféré pour la tolérance digestive et l’usage stress/sommeil. Le citrate peut être intéressant mais peut être moins confortable chez certaines personnes sensibles.' },
    { question: 'Quand prendre le magnésium bisglycinate ?', answer: 'Le soir est fréquent pour relaxation et sommeil. En journée, une formule comme Pauser peut être pertinente si l’objectif est la gestion du stress. Suivez toujours les conseils du fabricant.' },
  ],
  products,
  tocItems: [
    { id: 'introduction', label: 'En bref' },
    { id: 'ranking', label: 'Top 6' },
    { id: 'methodologie', label: 'Méthode' },
    { id: 'choisir', label: 'Comment choisir' },
    { id: 'usages', label: 'Stress, sommeil, sport' },
    { id: 'prix', label: 'Prix et codes promo' },
    { id: 'verdict', label: 'Verdict' },
    { id: 'faq', label: 'FAQ' },
  ],
  pages: [
    { type: 'comparatif', label: 'Comparatif', slug: '/' },
    { type: 'blog', label: 'Avis', slug: '/avis-magnesium-bisglycinate/' },
    { type: 'blog', label: 'Pharmacie', slug: '/magnesium-bisglycinate-pharmacie/' },
    { type: 'blog', label: 'Effets secondaires', slug: '/magnesium-bisglycinate-effets-secondaires/' },
  ],
};

export default config;

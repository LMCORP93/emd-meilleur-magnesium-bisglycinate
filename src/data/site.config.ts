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
    name: 'Magnésium Bisglycinate',
    brand: 'Cuure',
    slug: 'magnesium-bisglycinate-cuure',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/6a74a27c0f7e181d3f840e0f_Magn%25C3%25A9sium%2520Bisglycinate-converti-depuis-png.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/6a62ab5cc1a44acc71405208_d4c5ec7e987d242e.png',
    rating: 9.4,
    reviewCount: 3677,
    promoCode: 'LMC20',
    promoPercent: 20,
    originalPrice: '19.90€',
    discountPrice: '15.92€',
    affiliateLink: 'https://cuure.com/produits/magnesium-bisglycinate?utm_medium=partnership&utm_source=LMC&ae=222',
    origin: 'France',
    availability: 'Livraison en France sous 48h via la boutique officielle',
    productType: 'Magnésium bisglycinate pur, haute biodisponibilité, 300 mg par dose',
    pros: ['Magnésium bisglycinate pur, exactement ce que la recherche cible', '3677 avis Trustpilot, note 9.4/10', 'Prix accessible : 19.90€ avant code, 15.92€ avec LMC20', 'Marque française, formule clean sans excipients inutiles'],
    cons: ['Formule mono-ingredient, pas de synergie anti-stress ajoutee', 'Moins adapte si vous cherchez un complexe multi-vitamines', 'Stock parfois limite sur les periodes de forte demande'],
    description: 'Cuure prend la premiere place avec son magnesium bisglycinate pur : c\'est le produit le plus aligne avec la recherche. Haute biodisponibilite, tolerance digestive excellente, prix competitif avec le code LMC20 et des milliers d\'avis positifs.'
  },
  {
    rank: 2,
    name: 'Reset by Day',
    brand: 'Pauser',
    slug: 'pauser-reset-by-day',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69b2073ab892c6afb4ef863c_RESET_1.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69b20a9d0c7d27678f5e8c4a_logo_blanc%201.svg',
    rating: 9.1,
    reviewCount: 100,
    promoCode: 'ELIASBAHIA',
    promoPercent: 10,
    originalPrice: '35.00€',
    discountPrice: '31.50€',
    affiliateLink: 'https://pauser.fr/collections/produits/products/reset-by-day-anti-stress?ref=LMC',
    origin: 'France',
    availability: 'Livraison en France possible via la boutique officielle ou un revendeur',
    productType: 'Complexe anti-stress avec magnesium bisglycinate, citrate-malate, safran et vitamine B6',
    pros: ['Tres bon choix pour l\'usage stress', 'Formule documentee avec actifs brevetes Holixer et Safr\'Inside', 'Fabrique en France dans un laboratoire certifie ISO 22000', 'Bon angle stress, tension nerveuse et routine de journee'],
    cons: ['Ce n\'est pas un magnesium bisglycinate pur', 'Apport en magnesium elementaire plus bas que les produits specialises', 'Moins adapte si l\'objectif est uniquement crampes ou recuperation sportive'],
    description: 'Pauser est le choix premium pour une approche anti-stress globale. Il contient du magnesium bisglycinate dans une formule plus complete avec safran et vitamine B6.'
  },
  {
    rank: 3,
    name: 'Oh!Mg',
    brand: 'NMN Bio',
    slug: 'oh-mg-nmn-bio',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698d0fbcbcf890ea682dab84_311_Evening_Magnesium_Campaign_product_page_2.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698cb036f845de28598cfb91_NMN_Metallic_Blue_Logo_180x.avif',
    rating: 8.7,
    reviewCount: 100,
    promoCode: 'LMC',
    promoPercent: 15,
    originalPrice: '45.00€',
    discountPrice: '38.25€',
    affiliateLink: 'https://tidd.ly/4aJE6M2',
    origin: 'Royaume-Uni',
    availability: 'Livraison en France possible via la boutique officielle ou un revendeur',
    productType: 'Complexe magnésium bisglycinate, taurate et lactate pour le soir',
    pros: ['Vrai produit magnésium avec bisglycinate', 'Formule premium orientée relaxation et sommeil', 'Ajout de L-théanine, mélisse, zinc et vitamines B', 'Bon angle science et récupération nocturne'],
    cons: ['Prix plus élevé que les alternatives françaises', 'Marque moins connue du public FR', 'Formule multi-ingrédients moins simple qu\'un bisglycinate pur'],
    description: 'Oh!Mg est le choix premium du classement. Il combine plusieurs formes de magnésium, dont le bisglycinate, avec une logique claire : détente du soir, récupération et système nerveux.'
  },
  {
    rank: 4,
    name: 'Magnésium Bisglycinate',
    brand: 'Argalys',
    slug: 'magnesium-bisglycinate-argalys',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698ba3efad7a944cdaee9e25_magnesiumbisglycinate.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698b6a5fea61caccd1bb2d33_logo_240x.svg',
    rating: 8.5,
    reviewCount: 900,
    promoCode: 'LMC10',
    promoPercent: 10,
    originalPrice: '15.50€',
    discountPrice: '13.95€',
    affiliateLink: 'https://www.argalys.com/products/magnesium?ae=160',
    origin: 'France',
    availability: 'Livraison en France possible via la boutique officielle ou un revendeur',
    productType: 'Magnésium bisglycinate en gélules avec zinc et vitamine B6',
    pros: ['Produit clair pour chercher du magnésium bisglycinate', 'Prix très accessible', 'Marque française et formulation simple', 'Bon produit pour un choix bisglycinate simple'],
    cons: ['Moins premium que Pauser ou NMN Bio', 'Packaging plus classique', 'Moins orienté storytelling conversion'],
    description: 'Argalys est le pilier bisglycinate simple du Top 3. Le produit est clair, accessible et directement aligné avec la recherche meilleur magnésium bisglycinate.'
  },
  {
    rank: 5,
    name: 'Magnésium',
    brand: 'Nutripreneur',
    slug: 'magnesium-nutripreneur',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/6993188d4845d93bb8087c75_magnesiumsite_35d321e3-0c05-4656-b1e8-9566e86788f8.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69923dffbf7e07286d096b9b_LogoNutripreneur-gris.svg',
    rating: 8.2,
    reviewCount: 200,
    promoCode: 'LMC15',
    promoPercent: 10,
    originalPrice: '25.00€',
    discountPrice: '22.50€',
    affiliateLink: 'https://nutripreneur.com/products/magnesium?ref=LMC10',
    origin: 'France',
    availability: 'Livraison en France possible via la boutique officielle ou un revendeur',
    productType: 'Magnésium bisglycinate avec taurine et vitamine B6',
    pros: ['Produit exact magnésium bisglycinate', 'Bon angle entrepreneurs, stress et performance mentale', 'Formule cohérente avec taurine et vitamine B6', 'Prix intermédiaire'],
    cons: ['Marque moins établie que certains concurrents', 'Moins de preuves sociales que les gros acteurs', 'Positionnement plus niche'],
    description: 'Nutripreneur est une bonne option pour les profils actifs qui cherchent un magnésium bisglycinate simple, orienté stress, sommeil et récupération nerveuse.'
  },
  {
    rank: 6,
    name: 'Magnésium bisglycinate',
    brand: 'Punch Power',
    slug: 'magnesium-bisglycinate-punch-power',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698c83a276aa2a2267335f55_1_-_pp_-_magn_sium.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698c4fc5d9578425bda69d73_punchpower-logo-e1693550769341.png',
    rating: 8.0,
    reviewCount: 700,
    promoCode: 'LMC20',
    promoPercent: 20,
    originalPrice: '16.99€',
    discountPrice: '12.74€',
    affiliateLink: 'https://fnty.co/c/r-jtUbbfjB',
    origin: 'France',
    availability: 'Livraison en France possible via la boutique officielle ou un revendeur',
    productType: 'Magnésium bisglycinate orienté sport et récupération',
    pros: ['Produit exact', 'Prix très compétitif avec code promo', 'Bon angle sport, crampes et récupération', 'Marque française connue en nutrition sportive'],
    cons: ['Image plus sportive que bien-être premium', 'Moins adapté à une cible stress/sommeil pure', 'Perception moins haut de gamme'],
    description: 'Punch Power complete le classement comme option sportive et budget. C\'est un vrai magnesium bisglycinate, utile pour les lecteurs qui priorisent le prix et la recuperation.'
  },
  {
    rank: 7,
    name: 'Magnesium Mix',
    brand: 'Clearly',
    slug: 'magnesium-mix-clearly',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/697211fa6e50ede3879ea0cc_Mag-Front-1-min.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dfaffbcd9575da42dea912_67604f816f6f25a217f35605_Clearly_-_Dark_Blue_150x.avif',
    rating: 7.8,
    reviewCount: 700,
    promoCode: 'LMC',
    promoPercent: 15,
    originalPrice: '21.25€',
    discountPrice: '19.12€',
    affiliateLink: 'https://clearly.eu/products/magnesium-mix?sca_ref=7596565.tJHE2KRYrL',
    origin: 'Pays-Bas',
    availability: 'Livraison en France possible via la boutique officielle ou un revendeur',
    productType: 'Mix de magnésium citrate, malate et glycinate',
    pros: ['Très bon rating partenaire', 'Formule multi-formes intéressante', 'Prix correct', 'Marque clean et transparente'],
    cons: ['Ce n\'est pas un bisglycinate pur', 'Marque non francaise', 'Moins centre sur le bisglycinate pur qu\'Argalys, Nutripreneur ou Punch Power'],
    description: 'Clearly ferme le Top 6 comme alternative propre et polyvalente. Le produit contient du glycinate dans un mix de formes, mais il est moins exact que les vrais bisglycinates du classement.'
  }
];

const config: SiteConfig = {
  domain: 'https://meilleur-magnesium-bisglycinate.fr',
  isIndexable: true,
  siteName: 'Meilleur Magnésium Bisglycinate',
  brand: 'Cuure',
  product: 'Magnésium Bisglycinate',
  productCategory: 'Magnésium bisglycinate et compléments alimentaires',
  productFormat: 'Gélules',
  tagline: 'Le comparatif clair pour choisir un magnésium bisglycinate utile, bien toléré et adapté à votre besoin.',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: { name: 'Tim', avatar: '/author-avatar.png', bio: 'Auteur des Avis de Tim, spécialisé dans les comparatifs de compléments alimentaires.' },
  seo: {
    title: 'Meilleur magnésium bisglycinate 2026 : comparatif Top 7',
    description: 'Comparatif 2026 des meilleurs magnésiums bisglycinate : Cuure, Pauser, NMN Bio, Argalys, Nutripreneur, Punch Power et Clearly. Avis, prix, codes promo et conseils.',
    ogImage: '/og-image.jpg',
  },
  analyticsMeasurementId: 'G-ML32J40DPR',
  breadcrumbs: [{ label: 'Accueil', href: '/' }],
  quickSummary: {
    assets: ['Cuure est notre choix #1 : magnesium bisglycinate pur, 3677 avis, 9.4/10.', 'Pauser est l\'alternative anti-stress avec une formule plus complete.', 'Argalys, Nutripreneur et Punch Power couvrent le besoin de bisglycinate simple.'],
    considerations: ['Ne pas confondre bisglycinate pur et complexe de magnesium.', 'Verifier dose de magnesium elementaire, tolerance digestive et moment de prise.', 'Demander un avis medical en cas de traitement, grossesse ou pathologie renale.'],
  },
  pros: ['Top 7 base sur des produits disponibles et verifiables', 'Classement oriente conversion mais sans mentir sur les formes', 'Comparatif utile pour stress, sommeil, crampes et recuperation'],
  cons: ['La reponse depend du besoin : stress, sommeil, sport ou prix', 'Certains produits sont des complexes, pas du bisglycinate pur'],
  faq: [
    { question: 'Quel est le meilleur magnesium bisglycinate ?', answer: 'Notre choix numero 1 est le Magnesium Bisglycinate de Cuure : forme pure, haute biodisponibilite, 3677 avis Trustpilot et un excellent rapport qualite-prix avec le code LMC20.' },
    { question: 'Pourquoi Cuure est premier ?', answer: 'Parce que c\'est un magnesium bisglycinate pur, exactement aligne avec la recherche. Haute biodisponibilite, tolerance digestive excellente, prix competitif et des milliers d\'avis positifs.' },
    { question: 'Magnesium bisglycinate ou citrate : lequel choisir ?', answer: 'Le bisglycinate est souvent prefere pour la tolerance digestive et l\'usage stress/sommeil. Le citrate peut etre interessant mais peut etre moins confortable chez certaines personnes sensibles.' },
    { question: 'Quand prendre le magnesium bisglycinate ?', answer: 'Le soir est frequent pour relaxation et sommeil. En journee, une formule comme Pauser peut etre pertinente si l\'objectif est la gestion du stress. Suivez toujours les conseils du fabricant.' },
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
    { type: 'comparatif', label: 'Comparatif', slug: '/', image: '/images/content/magnesium-bisglycinate-hero.webp' },
    { type: 'blog', label: 'Avis magnésium bisglycinate', slug: '/avis-magnesium-bisglycinate/', image: '/images/content/magnesium-bisglycinate-hero.webp' },
    { type: 'blog', label: 'Bisglycinate en pharmacie', slug: '/magnesium-bisglycinate-pharmacie/', image: '/images/content/magnesium-pharmacie.webp' },
    { type: 'blog', label: 'Effets secondaires', slug: '/magnesium-bisglycinate-effets-secondaires/', image: '/images/content/magnesium-effets-secondaires.webp' },
    { type: 'blog', label: 'Posologie bisglycinate', slug: '/magnesium-bisglycinate-posologie/', image: '/images/content/magnesium-routine.webp' },
    { type: 'blog', label: 'Calculateur magnésium', slug: '/calculateur-magnesium/', image: '/images/content/magnesium-routine.webp' },
  ],
};

export default config;

import boheme1 from "@/assets/boheme-1.jpg";
import boheme2 from "@/assets/boheme-2.jpg";
import arden1 from "@/assets/arden-1.jpg";
import croissant1 from "@/assets/croissant-1.jpg";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  images: string[];
  price: number;
  collection: string;
}

export const products: Product[] = [
  {
    slug: "boheme",
    name: "BOHÈME",
    tagline: "La vie bohémienne",
    shortDescription: "Élégance libre et chaleureuse. Lignes modernes, confort profond, tons naturels.",
    description:
      "Un salon qui incarne l'élégance libre et chaleureuse. Le modèle BOHÈME combine des lignes modernes avec un confort profond, créant une atmosphère douce et sophistiquée. Son tissu texturé aux tons naturels apporte chaleur et caractère, tandis que sa forme généreuse invite à la détente et au partage. Un design pensé pour ceux qui aiment vivre avec style, liberté et authenticité.",
    highlights: ["Tissu texturé naturel", "Confort profond", "Lignes modernes", "Le luxe d'une vie libre"],
    images: [boheme1, boheme2],
    price: 185000,
    collection: "Collection Signature",
  },
  {
    slug: "arden",
    name: "ARDEN",
    tagline: "Quand le design devient une signature",
    shortDescription: "Volumes généreux, confort profond, élégance contemporaine qui impose sa présence.",
    description:
      "Des volumes généreux, un confort profond et une élégance contemporaine qui impose sa présence. Un salon pensé pour ceux qui savent reconnaître l'exception.",
    highlights: ["Confort premium", "Design sculptural", "Caractère affirmé"],
    images: [arden1],
    price: 220000,
    collection: "Collection Exception",
  },
  {
    slug: "croissant",
    name: "CROISSANT",
    tagline: "L'art de la courbe",
    shortDescription: "Structure en bois rouge, éponge D36 garantie 10 ans, tissu anti-tâche au choix.",
    description:
      "Salon Croissant à structure en bois rouge. Éponge D36 garantie 10 ans, disponible en D30, D42 et HR orthopédique. Tissu anti-tâche, couleur au choix. Dimensions à partir de 1m80.",
    highlights: [
      "Structure en bois rouge",
      "Éponge D36 — garantie 10 ans",
      "Disponible D30 / D42 / HR orthopédique",
      "Tissu anti-tâche, couleur au choix",
      "Dimensions à partir de 1m80",
    ],
    images: [croissant1],
    price: 165000,
    collection: "Collection Atelier",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const wilayas: { name: string; delivery: number }[] = [
  { name: "Adrar", delivery: 1800 },
  { name: "Chlef", delivery: 900 },
  { name: "Laghouat", delivery: 1400 },
  { name: "Oum El Bouaghi", delivery: 1100 },
  { name: "Batna", delivery: 1100 },
  { name: "Béjaïa", delivery: 1000 },
  { name: "Biskra", delivery: 1300 },
  { name: "Béchar", delivery: 1900 },
  { name: "Blida", delivery: 700 },
  { name: "Bouira", delivery: 800 },
  { name: "Tamanrasset", delivery: 2500 },
  { name: "Tébessa", delivery: 1300 },
  { name: "Tlemcen", delivery: 1200 },
  { name: "Tiaret", delivery: 1000 },
  { name: "Tizi Ouzou", delivery: 900 },
  { name: "Alger", delivery: 600 },
  { name: "Djelfa", delivery: 1200 },
  { name: "Jijel", delivery: 1100 },
  { name: "Sétif", delivery: 1000 },
  { name: "Saïda", delivery: 1200 },
  { name: "Skikda", delivery: 1100 },
  { name: "Sidi Bel Abbès", delivery: 1200 },
  { name: "Annaba", delivery: 1200 },
  { name: "Guelma", delivery: 1200 },
  { name: "Constantine", delivery: 1100 },
  { name: "Médéa", delivery: 800 },
  { name: "Mostaganem", delivery: 1000 },
  { name: "M'Sila", delivery: 1100 },
  { name: "Mascara", delivery: 1100 },
  { name: "Ouargla", delivery: 1700 },
  { name: "Oran", delivery: 1100 },
  { name: "El Bayadh", delivery: 1500 },
  { name: "Illizi", delivery: 2400 },
  { name: "Bordj Bou Arréridj", delivery: 1000 },
  { name: "Boumerdès", delivery: 700 },
  { name: "El Tarf", delivery: 1300 },
  { name: "Tindouf", delivery: 2400 },
  { name: "Tissemsilt", delivery: 1100 },
  { name: "El Oued", delivery: 1500 },
  { name: "Khenchela", delivery: 1200 },
  { name: "Souk Ahras", delivery: 1300 },
  { name: "Tipaza", delivery: 700 },
  { name: "Mila", delivery: 1100 },
  { name: "Aïn Defla", delivery: 900 },
  { name: "Naâma", delivery: 1500 },
  { name: "Aïn Témouchent", delivery: 1200 },
  { name: "Ghardaïa", delivery: 1500 },
  { name: "Relizane", delivery: 1000 },
  { name: "Timimoun", delivery: 2000 },
  { name: "Bordj Badji Mokhtar", delivery: 2600 },
  { name: "Ouled Djellal", delivery: 1400 },
  { name: "Béni Abbès", delivery: 2000 },
  { name: "In Salah", delivery: 2300 },
  { name: "In Guezzam", delivery: 2700 },
  { name: "Touggourt", delivery: 1600 },
  { name: "Djanet", delivery: 2500 },
  { name: "El M'Ghair", delivery: 1500 },
  { name: "El Meniaa", delivery: 1700 },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("fr-DZ").format(n) + " DA";

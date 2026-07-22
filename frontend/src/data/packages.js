import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";

const packages = [
  {
    id: "soft-copies",
    name: "Digital Keepsake",
    subtitle: "Soft Copies Only",
    price: "₱4,500",
    theme: "Sunlit Yellow",
    accent: "#f59e0b",
    image: image1,
    description:
      "Best for clients who want a simple, budget-friendly digital package.",
    deliverables: ["Whole Event Soft Copies", "8GB Flash Drive"],
  },
  {
    id: "photo-coverage",
    name: "Captured Moments",
    subtitle: "Photo Coverage Only",
    price: "₱9,000",
    theme: "Teal Celebration",
    accent: "#0e7490",
    image: image2,
    description:
      "Ideal for events that need a polished photography-only experience.",
    deliverables: [
      "Coffee Table Album (100pcs 5R Pictures)",
      "Photoshoot / Pre-Nuptial Shoot",
      "2pcs 8R Size Picture w/ Elegant Frame",
      "2x5 Tarpaulin",
      "8GB Flash Drive",
    ],
  },
  {
    id: "storyteller",
    name: "Storyteller",
    subtitle: "Photo & Video Coverage",
    price: "₱16,000",
    theme: "Classic Gold",
    accent: "#b45309",
    image: image3,
    description:
      "A balanced photo and video package for unforgettable celebrations.",
    deliverables: [
      "Coffee Table Album",
      "Photoshoot / Pre-Nuptial Shoot",
      "1pc 11x14 Picture & 1pc 8R Picture w/ Elegant Frame",
      "2x3 & 2x5 Tarpaulin",
      "32GB Flash Drive",
      "Full Edited Video Coverage",
    ],
    badge: "Most Popular",
  },
  {
    id: "signature",
    name: "Signature Experience",
    subtitle: "Photo & Video Coverage",
    price: "₱30,000",
    theme: "Mocha Luxe",
    accent: "#5b4639",
    image: image4,
    description:
      "The premium choice with the most complete wedding-style deliverables.",
    deliverables: [
      "40-Page Magazine Album (8x10)",
      "Pre-Nuptial Shoot",
      "10 Page Pre-Nuptial Guestbook",
      "11x14 Signature Frame",
      "2 Framed 11x14 Prints",
      "2x3 & 2x5 Tarpaulin",
      "Save The Date Video",
      "Wedding Highlights Video",
      "Full Coverage Video",
      "32GB Flash Drive",
    ],
  },
];

export default packages;
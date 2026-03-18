import type { Gallery4Item } from "@/components/ui/gallery4";

const phoneHref = () => `tel:${process.env.PHONE_NUMBER ?? "6146782211"}`;

export const services: Gallery4Item[] = [
  {
    id: "home-improvements",
    title: "Home Improvements",
    description:
      "General repairs, upgrades, and improvements to keep your home in top condition. No job is too small.",
    href: phoneHref(),
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1080&q=80",
  },
  {
    id: "remodeling",
    title: "Remodeling",
    description:
      "Full-scale kitchen, bathroom, and living space remodels crafted with quality materials and expert workmanship.",
    href: phoneHref(),
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080&q=80",
  },
  {
    id: "appliance-install",
    title: "Appliance Install",
    description:
      "Safe and proper installation of washers, dryers, dishwashers, refrigerators, and other home appliances.",
    href: phoneHref(),
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1080&q=80",
  },
  {
    id: "furniture-assembly",
    title: "Furniture Assembly",
    description:
      "Quick and efficient assembly of flat-pack and ready-to-assemble furniture from any brand or retailer.",
    href: phoneHref(),
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1080&q=80",
  },
  {
    id: "cabinetry",
    title: "Cabinetry",
    description:
      "Custom cabinet installation, repair, and refinishing for kitchens, bathrooms, and storage spaces.",
    href: phoneHref(),
    image:
      "https://images.unsplash.com/photo-1556909195-b7e4a8a7e9ec?w=1080&q=80",
  },
  {
    id: "dry-wall",
    title: "Dry Wall",
    description:
      "Drywall installation, patching, texturing, and finishing — from minor repairs to full room builds.",
    href: phoneHref(),
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb0d7c5c1?w=1080&q=80",
  },
  {
    id: "flooring",
    title: "Flooring",
    description:
      "Hardwood, laminate, tile, and vinyl flooring installation and repair for every room in your home.",
    href: phoneHref(),
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1080&q=80",
  },
  {
    id: "deck-patio",
    title: "Deck & Patio",
    description:
      "Deck building, patio installation, and outdoor structure repairs to extend your living space outside.",
    href: phoneHref(),
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1080&q=80",
  },
  {
    id: "landscaping",
    title: "Landscaping",
    description:
      "Lawn care, planting, mulching, cleanup, and landscaping services to keep your yard looking its best.",
    href: phoneHref(),
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1080&q=80",
  },
  {
    id: "fence-gate",
    title: "Fence & Gate",
    description:
      "Fence installation, repair, and gate hanging for privacy, security, and curb appeal.",
    href: phoneHref(),
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1080&q=80",
  },
];

export function getServices(): Gallery4Item[] {
  return services;
}

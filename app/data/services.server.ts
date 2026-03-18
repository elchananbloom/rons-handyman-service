import type { Gallery4Item } from "@/components/ui/gallery4";

const phoneHref = () => `tel:${process.env.PHONE_NUMBER ?? "6146782211"}`;

export const services: Gallery4Item[] = [
  {
    id: "home-improvements",
    title: "Home Improvements",
    description:
      "General repairs, upgrades, and improvements to keep your home in top condition. No job is too small.",
    href: phoneHref(),
    image: "/imgs/home_improvment.png",
  },
  {
    id: "remodeling",
    title: "Remodeling",
    description:
      "Full-scale kitchen, bathroom, and living space remodels crafted with quality materials and expert workmanship.",
    href: phoneHref(),
    image: "/imgs/remodeling.png",
  },
  {
    id: "appliance-install",
    title: "Appliance Install",
    description:
      "Safe and proper installation of washers, dryers, dishwashers, refrigerators, and other home appliances.",
    href: phoneHref(),
    image: "/imgs/appliance_install.png",
  },
  {
    id: "furniture-assembly",
    title: "Furniture Assembly",
    description:
      "Quick and efficient assembly of flat-pack and ready-to-assemble furniture from any brand or retailer.",
    href: phoneHref(),
    image: "/imgs/furniture_assembly.png",
  },
  {
    id: "cabinetry",
    title: "Cabinetry",
    description:
      "Custom cabinet installation, repair, and refinishing for kitchens, bathrooms, and storage spaces.",
    href: phoneHref(),
    image: "/imgs/cabinetry.png",
  },
  {
    id: "dry-wall",
    title: "Dry Wall",
    description:
      "Drywall installation, patching, texturing, and finishing — from minor repairs to full room builds.",
    href: phoneHref(),
    image: "/imgs/dry_wall.png",
  },
  {
    id: "flooring",
    title: "Flooring",
    description:
      "Hardwood, laminate, tile, and vinyl flooring installation and repair for every room in your home.",
    href: phoneHref(),
    image: "/imgs/flooring.png",
  },
  {
    id: "deck-patio",
    title: "Deck & Patio",
    description:
      "Deck building, patio installation, and outdoor structure repairs to extend your living space outside.",
    href: phoneHref(),
    image: "/imgs/deck_patio.png",
  },
  {
    id: "landscaping",
    title: "Landscaping",
    description:
      "Lawn care, planting, mulching, cleanup, and landscaping services to keep your yard looking its best.",
    href: phoneHref(),
    image: "/imgs/landscaping.png",
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

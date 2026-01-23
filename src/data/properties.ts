export type Property = {
  id: string;
  name: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  neighborhood: string;
  status: "Available" | "Leased" | "Coming Soon";
  availability: string;
  featured?: boolean;
  image: string;
  description: string;
};

export const properties: Property[] = [
  {
    id: "lp-aurora-101",
    name: "Aurora Lofts",
    address: "101 Harbor Lane, San Francisco, CA",
    price: 2950,
    beds: 2,
    baths: 2,
    sqft: 1280,
    neighborhood: "Harbor District",
    status: "Available",
    availability: "Move-in ready",
    featured: true,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=900&fit=crop",
    description:
      "Light-filled corner unit with floor-to-ceiling windows, chef's kitchen, and a private balcony overlooking the marina."
  },
  {
    id: "lp-crescent-214",
    name: "Crescent Row",
    address: "214 Wren Street, San Francisco, CA",
    price: 2350,
    beds: 1,
    baths: 1,
    sqft: 860,
    neighborhood: "Old Town",
    status: "Available",
    availability: "Available Feb 10, 2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=900&fit=crop",
    description:
      "Boutique brownstone residence with curated finishes, built-in storage, and quiet courtyard access."
  },
  {
    id: "lp-haven-402",
    name: "Haven Court",
    address: "402 Alder Avenue, San Francisco, CA",
    price: 4200,
    beds: 3,
    baths: 2.5,
    sqft: 1820,
    neighborhood: "North Grove",
    status: "Coming Soon",
    availability: "Available Mar 1, 2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=900&fit=crop",
    description:
      "Spacious townhome with attached garage, smart home upgrades, and a sunroom ideal for a home office."
  },
  {
    id: "lp-mariner-315",
    name: "Mariner Flats",
    address: "315 Dockside Way, San Francisco, CA",
    price: 3100,
    beds: 2,
    baths: 2,
    sqft: 1325,
    neighborhood: "East Wharf",
    status: "Leased",
    availability: "Leased through Nov 2026",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop",
    description:
      "Modern flat with skyline views, recessed lighting, and an oversized laundry room."
  },
  {
    id: "lp-summit-558",
    name: "Summit House",
    address: "558 Summit Drive, San Francisco, CA",
    price: 4850,
    beds: 4,
    baths: 3,
    sqft: 2480,
    neighborhood: "Summit Ridge",
    status: "Available",
    availability: "Available now",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop",
    description:
      "Executive residence with dual living spaces, landscaped yard, and direct trail access."
  },
  {
    id: "lp-verde-119",
    name: "Verde Commons",
    address: "119 Magnolia Court, San Francisco, CA",
    price: 2650,
    beds: 2,
    baths: 1,
    sqft: 1080,
    neighborhood: "Magnolia Park",
    status: "Available",
    availability: "Available Feb 5, 2026",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&fit=crop",
    description:
      "Garden-facing residence with updated appliances, oversized closets, and community fitness studio."
  },
  {
    id: "lp-westbridge-788",
    name: "Westbridge Terrace",
    address: "788 Westbridge Boulevard, San Francisco, CA",
    price: 3750,
    beds: 3,
    baths: 2,
    sqft: 1760,
    neighborhood: "Cedar Heights",
    status: "Available",
    availability: "Available now",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=900&fit=crop",
    description:
      "Refined condo with high ceilings, private elevator access, and evening concierge service."
  },
  {
    id: "lp-riverline-920",
    name: "Riverline Studio",
    address: "920 Riverline Avenue, San Francisco, CA",
    price: 1950,
    beds: 1,
    baths: 1,
    sqft: 640,
    neighborhood: "River Market",
    status: "Coming Soon",
    availability: "Available Mar 12, 2026",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=900&fit=crop",
    description:
      "Efficient studio with skyline vistas, quartz counters, and transit access."
  },
  {
    id: "lp-cedar-233",
    name: "Cedar Row",
    address: "233 Cedar Point Road, San Francisco, CA",
    price: 3450,
    beds: 2,
    baths: 2,
    sqft: 1400,
    neighborhood: "Cedar Heights",
    status: "Available",
    availability: "Move-in ready",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=900&fit=crop",
    description:
      "Corner residence with wraparound windows, curated lighting package, and rooftop lounge access."
  }
];

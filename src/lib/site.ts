export const SITE_CONFIG = {
  name: "Pratap Sons Air Condition Services",
  shortName: "Pratap Sons",
  region: "Noida, Uttar Pradesh, India",
  phone: "+91 8077556596",
  phoneUri: "tel:+918077556596",
  whatsapp: "+91 8077556596",
  whatsappUri: "https://wa.me/918077556596?text=Hi%20Pratap%20Sons%2C%20I%20need%20a%20service%20in%20Noida.",
  address: "Gijhore, Sector 53, Noida, Uttar Pradesh, India",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gijhore%2C%20Sector%2053%2C%20Noida%2C%20Uttar%20Pradesh%2C%20India",
  mapEmbedUrl: "https://www.google.com/maps?q=Gijhore%2C%20Sector%2053%2C%20Noida%2C%20Uttar%20Pradesh%2C%20India&output=embed",
  siteUrl: "https://pratap-ac-services.preview.emergentagent.com",
} as const;

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "AC Services", path: "/ac-services" },
  { label: "Water Tanker", path: "/water-tanker-noida" },
  { label: "Geyser & Heater", path: "/geyser-heater-repair" },
  { label: "Contact", path: "/contact" },
] as const;

export const SERVICE_AREAS = [
  "Noida sectors",
  "Greater Noida Expressway",
  "Residential societies",
  "Commercial properties",
];

export const IMAGE_URLS = {
  acTechnician:
    "https://images.unsplash.com/photo-1601659404194-97d2daca8383?auto=format&fit=crop&w=1200&q=80",
  acInstallation:
    "https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?auto=format&fit=crop&w=1000&q=80",
  acRepair:
    "https://images.unsplash.com/photo-1660330589827-da8ab7dd3c02?auto=format&fit=crop&w=1000&q=80",
  waterTanker:
    "https://images.unsplash.com/photo-1587511397071-657b24efb375?auto=format&fit=crop&w=1200&q=80",
  waterDelivery:
    "https://images.unsplash.com/photo-1656988826404-bbb5ccb779bc?auto=format&fit=crop&w=1000&q=80",
  geyserRepair:
    "https://images.unsplash.com/photo-1620653713380-7a34b773fef8?auto=format&fit=crop&w=1000&q=80",
  heaterRepair:
    "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?auto=format&fit=crop&w=1000&q=80",
} as const;

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "LocalBusiness" | "Service";
};
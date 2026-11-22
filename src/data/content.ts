export const site = {
  name: "Raya Dieseluno",
  title: "Raya Dieseluno",
  lang: "id",
  whatsappUrl: "https://wa.me/6281296836515",
  email: "raya.dieseluno@gmail.com",
  phoneDisplay: "+62 812 9683 6515",
  address: "Sawah Besar, Jakarta Pusat, Indonesia",
  footer: "© 2026 Raya Dieseluno.",
} as const;

export const navLinks = [
  { href: "/produk", label: "Produk", match: "path" as const },
  { href: "/#equipment", label: "Equipment & Dukungan", match: "hash" as const },
  { href: "/#tentang", label: "Tentang Kami", match: "hash" as const },
  { href: "/#kontak", label: "Kontak", match: "hash" as const },
] as const;

export const hero = {
  id: "beranda",
  subtitle: "Peralatan pengujian dan kalibrasi injeksi diesel",
  title: "Spare Parts FIP Konvensional & Common Rail",
  description:
    "Kami melayani kebutuhan produk sesuai ketersediaan stok serta pengadaan berdasarkan permintaan.",
  tagline: "INTEGRATED DIESEL FUEL INJECTION PARTS & EQUIPMENT SUPPLY",
  whatsappCta: "Hubungi via WhatsApp",
  emailCta: "Kirim Email",
  hint: "Seret untuk memutar model 3D",
  partType: "inj" as const,
  partScale: 1,
};

export type PartType =
  | "inj"
  | "plunger"
  | "rotor"
  | "nozzle"
  | "kit"
  | "pump"
  | "rail";

export type Product = {
  no: string;
  title: string;
  items: string[];
  partType: PartType;
  scale?: number;
  image: string;
};

export const productsSection = {
  id: "produk",
  title: "Produk untuk Kebutuhan Injeksi Diesel",
  description:
    "Komponen pompa dan injektor diesel, sistem common rail, serta suku cadang dan repair kit.",
  seeAll: "Lihat Semua Produk →",
  seeAllHref: "/produk",
};

export const products: Product[] = [
  {
    no: "01",
    title: "In-Line Pump Components",
    partType: "plunger",
    image: "/assets/inline_plunger.png",
    items: [
      "Plunger & barrel / pump element",
      "Delivery valve & holder",
      "Feed pump",
      "Camshaft & control rack",
      "Tappet components",
      "Governor components",
    ],
  },
  {
    no: "02",
    title: "Rotary Pump Components",
    partType: "rotor",
    image: "/assets/rotary_head_rotor.png",
    items: [
      "Head rotor / hydraulic head",
      "Cam plate",
      "Rollers & roller ring",
      "Control sleeve",
      "Timing advance components",
      "Drive shaft & shaft seals",
    ],
  },
  {
    no: "03",
    title: "Conventional Injector & Components",
    partType: "nozzle",
    image: "/assets/conventional_injector.png",
    items: [
      "Nozzle-and-holder assembly",
      "Injection nozzle & nozzle holder",
      "Nozzle washers & leak washers",
    ],
  },
  {
    no: "04",
    title: "Service Parts & Repair Kits",
    partType: "kit",
    image: "/assets/service_repair_kit.png",
    items: [
      "Pump & injector repair kits",
      "Bearings, lever bushings & O-rings",
      "Seals, gaskets, springs & washers",
      "Shim plates, timer covers & flyweights",
    ],
  },
  {
    no: "05",
    title: "Common Rail Injector & Components",
    partType: "inj",
    image: "/assets/common_rail_injector.png",
    items: [
      "Injector assembly, nozzle, control valve & solenoid",
      "Control rod & inner parts",
      "Shims, springs, seals & O-rings",
      "Injector repair kits",
    ],
  },
  {
    no: "06",
    title: "High Pressure Pump (Supply Pump) & Components",
    partType: "pump",
    image: "/assets/supply_pump.png",
    items: [
      "Supply pump assembly",
      "Internal pump components",
      "Pump seals",
      "Pump repair kits",
    ],
  },
  {
    no: "07",
    title: "Rail, Sensor & Pressure Control",
    partType: "rail",
    scale: 1.15,
    image: "/assets/rail_pressure_sensor.png",
    items: [
      "Rail assembly",
      "Rail pressure sensor",
      "SCV / IMV sesuai sistem",
      "Pressure control valve",
      "Pressure limiting valve",
    ],
  },
];

export function whatsappAskUrl(label: string) {
  const text = `Halo Raya Dieseluno, saya ingin menanyakan: ${label}`;
  return `${site.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export type BrandItem = {
  name: string;
  image: string;
};

export const brandsSection = {
  id: "merek",
  systemTitle: "Merek sistem dan komponen",
  systemBrands: [
    { name: "Denso", image: "/assets/brands/display/denso.png" },
    { name: "Bosch", image: "/assets/brands/display/bosch.png" },
    { name: "Zexel", image: "/assets/brands/display/zexel.png" },
    { name: "Delphi", image: "/assets/brands/display/delphi.png" },
    { name: "Stanadyne", image: "/assets/brands/display/stanadyne.png" },
  ] as BrandItem[],
  machineTitle: "Referensi merek mesin dan peralatan",
  machineBrands: [
    { name: "CAT", image: "/assets/brands/display/cat.png" },
    { name: "Hyundai", image: "/assets/brands/display/hyundai.png" },
    { name: "Yanmar", image: "/assets/brands/display/yanmar.png" },
    { name: "Komatsu", image: "/assets/brands/display/komatsu.png" },
    { name: "Cummins", image: "/assets/brands/display/cummins.png" },
    { name: "Isuzu", image: "/assets/brands/display/isuzu.png" },
    { name: "Hino", image: "/assets/brands/display/hino.png" },
    { name: "Mitsubishi Fuso", image: "/assets/brands/display/fuso.png" },
    { name: "Kobelco", image: "/assets/brands/display/kobelco.png" },
    { name: "John Deere", image: "/assets/brands/display/johndeere.png" },
    { name: "Deutz", image: "/assets/brands/display/deutz.png" },
    { name: "Volvo", image: "/assets/brands/display/volvo.png" },
    { name: "Nissan", image: "/assets/brands/display/nissan.png" },
  ] as BrandItem[],
};

export type EquipmentItem = {
  code: string;
  title: string;
  description: string;
  image: string;
};

export const equipmentSection = {
  id: "equipment",
  title: "Testing & Calibration Equipment",
  description:
    "Pengadaan test bench, adaptor, dan tooling untuk pengujian pompa serta injektor diesel.",
  items: [
    {
      code: "12PSDW",
      title: "Conventional Injection Pump Test Bench",
      description: "Untuk pompa injeksi tipe in-line dan rotary.",
      image: "/assets/testbench_conventional.png",
    },
    {
      code: "NTS318/CR318",
      title: "Common Rail Injector Test Bench",
      description: "Untuk pengujian injektor common rail.",
      image: "/assets/testbench_cr_injector.png",
    },
    {
      code: "CR718",
      title: "Common Rail Pump & Injector Test Bench",
      description: "Untuk pengujian pompa dan injektor common rail.",
      image: "/assets/testbench_cr_pump_injector.png",
    },
    {
      code: "NTS815A",
      title: "Multifunction Diesel Injection Test Bench",
      description: "Beberapa sistem pengujian dalam satu unit.",
      image: "/assets/testbench_multifunction.png",
    },
  ] as EquipmentItem[],
  supportTitle: "Dukungan Pembelian Equipment",
  supportItems: [
    "Aksesori pengujian, adaptor, dan tooling.",
    "Pelatihan pengoperasian dan bantuan teknis secara online atau onsite untuk equipment yang dibeli.",
    "Diagnosis, perbaikan bila diperlukan, dan pengadaan sparepart equipment.",
  ],
  supportCta: "Diskusikan Kebutuhan Equipment",
};

export const aboutSection = {
  id: "tentang",
  title: "Tentang Raya Dieseluno",
  description:
    "Raya Dieseluno melayani pengadaan komponen dan peralatan injeksi diesel untuk bengkel, kontraktor, serta tim pengadaan dan perawatan di berbagai sektor industri. Kami berlokasi di Sawah Besar, Jakarta Pusat, dan melayani pengiriman ke seluruh Indonesia.",
  quote:
    "Your Supply Partner for Conventional & Common Rail Diesel Injection Systems.",
  points: [
    "Pengadaan produk sesuai ketersediaan stok dan permintaan.",
    "Bantuan identifikasi dan pencocokan part number.",
    "Layanan permintaan penawaran untuk perusahaan.",
  ],
};

export const contactSection = {
  id: "kontak",
  title: "Sampaikan Kebutuhan Anda",
  description:
    "Hubungi kami melalui WhatsApp atau email. Sertakan nama barang, part number jika tersedia, foto produk, dan jumlah yang dibutuhkan.",
  whatsappCta: "Hubungi via WhatsApp",
  emailCta: "Kirim Email",
};

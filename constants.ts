import { Product, Reference, StatItem } from './types';

export const COMPANY_NAME = "Kocalar & Kobims Beton";
export const PHONE_NUMBER = "+90 555 123 45 67";
export const WHATSAPP_LINK = "https://wa.me/905551234567";

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Bims Blok (19luk)',
    category: 'bims',
    description: 'Yüksek ısı ve ses yalıtımı sağlayan, hafif yapı elemanı. İç ve dış duvar örümlerinde ideal.',
    // Bims Blok Görseli
    imageUrl: "https://images.unsplash.com/photo-1590059593444-6338b0934c9c?auto=format&fit=crop&q=80&w=800",
    features: ['Isı Yalıtımlı', 'Hafif', 'Depreme Dayanıklı']
  },
  {
    id: 'p2',
    title: 'Asmolen Bims',
    category: 'bims',
    description: 'Döşemelerde dolgu malzemesi olarak kullanılan, yapının yükünü hafifleten özel bloklar.',
    // İnşaat/Tuğla/Asmolen dokusu
    imageUrl: "https://images.unsplash.com/photo-1628198656606-d08b35044432?auto=format&fit=crop&q=80&w=800",
    features: ['Yüksek Mukavemet', 'Ekonomik', 'Yanmaz']
  },
  {
    id: 'p3',
    title: 'Kilitli Parke Taşı',
    category: 'parke',
    description: 'Estetik çevre düzenlemeleri, parklar ve bahçeler için dekoratif zemin kaplama çözümü.',
    // Kilitli Parke Zemin
    imageUrl: "https://images.unsplash.com/photo-1625816990390-5b5c3243166d?auto=format&fit=crop&q=80&w=800",
    features: ['Estetik Görünüm', 'Uzun Ömürlü', 'Kolay Uygulama']
  },
  {
    id: 'p4',
    title: 'Begonit Taşı',
    category: 'parke',
    description: 'Antik görünümü ile villa bahçeleri ve yürüyüş yolları için prestijli bir tercih.',
    // Dekoratif Arnavut Kaldırımı/Begonit tarzı
    imageUrl: "https://images.unsplash.com/photo-1518659698305-b0b3d870425a?auto=format&fit=crop&q=80&w=800",
    features: ['Dekoratif', 'Kaymaz Yüzey', 'Farklı Renk Seçenekleri']
  },
  {
    id: 'p5',
    title: 'Beton Bordür',
    category: 'bordur',
    description: 'Yol ve kaldırım ayrımlarında kullanılan, sağlam ve estetik sınır elemanları.',
    // Kaldırım/Bordür kenarı
    imageUrl: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=800",
    features: ['Yüksek Dayanım', 'Şehir Estetiği', 'Standartlara Uygun']
  },
  {
    id: 'p6',
    title: 'Su Oluğu',
    category: 'diger',
    description: 'Yağmur sularının tahliyesi için tasarlanmış beton altyapı elemanları.',
    // Beton Doku / Altyapı
    imageUrl: "https://images.unsplash.com/photo-1621262846976-f81d89856c9e?auto=format&fit=crop&q=80&w=800",
    features: ['Fonksiyonel', 'Sızdırmaz', 'Donmaya Dayanıklı']
  }
];

export const REFERENCES: Reference[] = [
  {
    id: 'r1',
    title: 'Şehir Parkı Yenileme',
    location: 'Merkez İlçe',
    category: 'municipal',
    description: 'Belediye işbirliği ile 5000m² parke döşeme ve çevre düzenlemesi.',
    imageUrl: "https://images.unsplash.com/photo-1596627883907-2e19c0a6b72a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'r2',
    title: 'Vadi Villaları',
    location: 'Gölbaşı',
    category: 'residential',
    description: 'Site içi yollar ve bahçe duvarları için estetik çözümler.',
    imageUrl: "https://images.unsplash.com/photo-1600596542815-2a4290aa36e9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'r3',
    title: 'Organize Sanayi Fabrika İnşaatı',
    location: 'OSB Bölgesi',
    category: 'industrial',
    description: 'Yüksek metrajlı bims blok tedariği ve hızlı sevkiyat operasyonu.',
    imageUrl: "https://images.unsplash.com/photo-1581094794329-cd119277ac5b?auto=format&fit=crop&q=80&w=1200"
  }
];

export const CAPACITY_STATS: StatItem[] = [
  { name: 'Bims (Adet/Yıl)', value: 1200000 },
  { name: 'Parke (m²/Yıl)', value: 450000 },
  { name: 'Bordür (m/Yıl)', value: 150000 },
];
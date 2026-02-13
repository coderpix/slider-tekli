import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Hexagon, ShieldCheck, Zap, Layers, Plus, 
  ChevronLeft, ChevronRight, Thermometer, Feather, Flame, 
  Coins, Palette, Maximize, Move, ArrowUpRight,
  Grid2X2, BrickWall, Sprout, Component, HardHat
} from 'lucide-react';
import { PRODUCTS } from '../constants';

interface HomeProps {
  onNavigate: (path: string) => void;
}

// Slider Verisi
const TECH_SLIDES = [
  {
    id: 1,
    title: "KİLİT PARKE SİSTEMİ",
    subtitle: "Zemin Mühendisliği",
    bgText: "KİLİT",
    imageText: "Kilit Taşı",
    // GÜNCELLENDİ: Profesyonel Kilit Taşı Görseli
    image: "https://panel.akafen.com/wp-content/uploads/2026/02/kilit.png", 
    features: [
      { id: 'f1', icon: <Hexagon />, title: "KİLİT SİSTEMİ", desc: "Özel geometrisi sayesinde yanal yüklere karşı maksimum direnç sağlar." },
      { id: 'f2', icon: <Layers />, title: "ÇİFT KATMAN", desc: "Mukavemet ve estetik sağlayan çift katmanlı özel karışım teknolojisi." },
      { id: 'f3', icon: <ShieldCheck />, title: "H35 BETON", desc: "Yüksek dozajlı beton kullanımı ile donma-çözülme ve tuz etkilerine tam koruma." },
      { id: 'f4', icon: <Zap />, title: "HIZLI UYGULAMA", desc: "İşçilik maliyetlerini düşüren seri döşeme imkanı." }
    ]
  },
  {
    id: 2,
    title: "BİMS BLOK TEKNOLOJİSİ",
    subtitle: "Yalıtımın Doğal Hali",
    bgText: "BİMS",
    imageText: "Bims Blok",
    // GÜNCELLENDİ: Profesyonel Bims/Beton Blok Görseli
    image: "https://panel.akafen.com/wp-content/uploads/2026/02/bims.png",
    features: [
      { id: 'f1', icon: <Thermometer />, title: "ISI YALITIMI", desc: "Volkanik hammadde sayesinde doğal ve yüksek ısı izolasyonu sağlar." },
      { id: 'f2', icon: <Feather />, title: "HAFİF YAPI", desc: "Binanın ölü yükünü azaltır, deprem güvenliğine katkıda bulunur." },
      { id: 'f3', icon: <Flame />, title: "A1 SINIFI YANMAZ", desc: "1200°C'ye kadar dayanıklı, yangına karşı tam güvenlik." },
      { id: 'f4', icon: <Coins />, title: "EKONOMİK", desc: "Kaba ve ince sıva maliyetlerini düşüren düzgün yüzey yapısı." }
    ]
  },
  {
    id: 3,
    title: "BEGONİT & ANTİK TAŞ",
    subtitle: "Estetik Mimari",
    bgText: "BEGONİT",
    imageText: "Begonit",
    // GÜNCELLENDİ: Profesyonel Peyzaj/Begonit Görseli
    image: "https://panel.akafen.com/wp-content/uploads/2026/02/begonit.png",
    features: [
      { id: 'f1', icon: <Palette />, title: "RENK SEÇENEĞİ", desc: "Projenize uygun zengin renk kartelası ve doku alternatifleri." },
      { id: 'f2', icon: <Maximize />, title: "MODÜLER TASARIM", desc: "Farklı ebatların kombinasyonu ile sınırsız desen oluşturma imkanı." },
      { id: 'f3', icon: <Move />, title: "KAYMAZ YÜZEY", desc: "Yağışlı havalarda dahi güvenli yürüyüş sağlayan yüzey dokusu." },
      { id: 'f4', icon: <ShieldCheck />, title: "AŞINMA DİRENCİ", desc: "Yoğun yaya trafiğine uygun, yıllara meydan okuyan dayanıklılık." }
    ]
  }
];

// Yeni İnteraktif Vitrin Verisi (Showcase)
const SHOWCASE_CATEGORIES = [
  {
    id: 0,
    label: "ZEMİN ÇÖZÜMLERİ",
    icon: <Grid2X2 className="w-12 h-12" />,
    title: "OUTDOOR FLOORING",
    subtitle: "Estetik Zemin Kaplamaları",
    desc: "Her adımda hissedilen kalite. Parke taşlarımız, estetik desenleri ve yüksek yük taşıma kapasitesiyle hem yaya hem araç trafiği için mükemmel çözümler sunar.",
    image: "https://images.unsplash.com/photo-1596627883907-2e19c0a6b72a?auto=format&fit=crop&q=80&w=1200",
    details: ["Modüler Kilit Sistemi", "Kaymaz Yüzey", "Donma Direnci"]
  },
  {
    id: 1,
    label: "DUVAR SİSTEMLERİ",
    icon: <BrickWall className="w-12 h-12" />,
    title: "WALL SURFACES",
    subtitle: "Yalıtımlı Duvar Blokları",
    desc: "Kobims teknolojisiyle üretilen bloklar, yapınıza hafiflik ve üstün yalıtım katar. Sıva tutuculuğu yüksek, işçiliği kolay ve ekonomiktir.",
    image: "https://images.unsplash.com/photo-1590059593444-6338b0934c9c?auto=format&fit=crop&q=80&w=1200",
    details: ["A1 Sınıfı Yanmaz", "Ses Yalıtımı", "Doğal Hammadde"]
  },
  {
    id: 2,
    label: "PEYZAJ & BAHÇE",
    icon: <Sprout className="w-12 h-12" />,
    title: "LANDSCAPING",
    subtitle: "Doğal Çevre Düzenleme",
    desc: "Doğayla bütünleşen tasarımlar. Begonit taşları, çim taşları ve dekoratif bordürlerle yaşam alanlarınıza modern bir dokunuş yapın.",
    image: "https://images.unsplash.com/photo-1600596542815-2a4290aa36e9?auto=format&fit=crop&q=80&w=1200",
    details: ["Dekoratif Dokular", "Zengin Renkler", "Ekolojik Uyum"]
  },
  {
    id: 3,
    label: "KENTSEL ALTYAPI",
    icon: <HardHat className="w-12 h-12" />,
    title: "INFRASTRUCTURE",
    subtitle: "Kamusal Alan Çözümleri",
    desc: "Şehirlerin görünmeyen kahramanları. Su olukları, bordürler ve altyapı elemanlarımızla uzun ömürlü ve dayanıklı şehirler inşa ediyoruz.",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=1200",
    details: ["Yüksek Mukavemet", "Standartlara Uyum", "Uzun Ömür"]
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeShowcase, setActiveShowcase] = useState(0); // Yeni Vitrin State'i
  const collectionScrollRef = useRef<HTMLDivElement>(null);

  // Otomatik Slider Geçişi (Süre uzatıldı: 8sn)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); 
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TECH_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? TECH_SLIDES.length - 1 : prev - 1));
  };

  const slide = TECH_SLIDES[currentSlide];

  const scrollCollection = (direction: 'left' | 'right') => {
    if (collectionScrollRef.current) {
      const scrollAmount = 400;
      collectionScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      
      {/* 1. HERO SECTION */}
      <section className="sticky top-0 min-h-screen flex items-center pt-20 overflow-hidden z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        
        {/* VIDEO BACKGROUND (Taşınan Vimeo Videosu) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <iframe 
            src="https://player.vimeo.com/video/1158370818?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-[56.25vw] h-full -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Hero Video"
          ></iframe>
          
          {/* White Gradient Overlay - Soft and Modern */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent"></div>
        </div>

                
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-brand-dark animate-slide-up delay-100">
              BETONUN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-marginal">EN ESTETİK</span> <br />
              HALİ
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg border-l-4 border-brand-marginal pl-6 animate-slide-up delay-200 bg-white/30 backdrop-blur-sm p-2 rounded-r-lg">
              Kocalar & Kobims güvencesiyle, projelerinize karakter katan, yıllara meydan okuyan sağlam yapı elemanları.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up delay-300">
              <button 
                onClick={() => onNavigate('/products')}
                className="group relative px-8 py-4 bg-brand-dark text-white font-bold text-sm tracking-wider overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <span className="relative z-10 group-hover:text-white transition-colors">ÜRÜNLERİ KEŞFET</span>
                <div className="absolute inset-0 h-full w-full bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out"></div>
              </button>
              
              <button 
                onClick={() => onNavigate('/contact')}
                className="px-8 py-4 border-2 border-brand-dark/10 text-brand-dark font-bold text-sm tracking-wider hover:bg-white hover:border-brand-dark transition-colors backdrop-blur-sm bg-white/30"
              >
                BİZE ULAŞIN
              </button>
            </div>
          </div>

          <div className="hidden md:block relative h-[600px] animate-pop-in">
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
                <div className="relative z-20 group">
                   <div className="w-full h-80 bg-white rounded-lg shadow-2xl border-t border-l border-white relative overflow-hidden transform rotate-3 transition-transform duration-500 group-hover:rotate-0">
                      {/* GÜNCELLENDİ: Hero Bölümü (Ana Blog) için Google Drive Görseli */}
                      <img 
                        src="https://panel.akafen.com/wp-content/uploads/2026/02/anablok.jpeg" 
                        alt="Kobims Premium Texture" 
                        className="w-full h-full object-cover"
                      />
                   </div>
                </div>
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-brand-marginal/30 z-10 rounded-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-brand-blue/30 z-10 rounded-lg"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT ANATOMY SLIDER - PATTERN BACKGROUND (Video buradaydı, şimdi desen var) */}
      <section className="sticky top-0 min-h-screen flex items-center py-20 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] overflow-hidden relative bg-[#F8FAFC]">
        
        {/* PATTERN BACKGROUND */}
        <div 
            className="absolute inset-0 z-0 opacity-40"
            style={{ 
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
                backgroundAttachment: 'fixed'
            }}
        ></div>
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/80 via-transparent to-white/80"></div>

        <div key={`bg-${slide.id}`} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none overflow-hidden select-none z-0">
            <h1 className="text-[10rem] md:text-[20rem] font-black text-brand-dark opacity-[0.05] whitespace-nowrap">
                {slide.bgText}
            </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
            <div key={slide.id} className="relative">
              
              <div className="text-center mb-6 md:mb-10">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4 animate-slide-up">
                    {slide.title}
                  </h2>
                  <div className="w-24 h-1 bg-brand-yellow mx-auto animate-draw"></div>
                  <p className="mt-4 text-gray-600 animate-slide-up delay-100">{slide.subtitle}</p>
              </div>

              <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[500px]">
                  
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/80 border border-gray-200 text-brand-dark hover:bg-brand-blue hover:text-white transition-all shadow-lg hover:scale-110 hidden md:flex"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/80 border border-gray-200 text-brand-dark hover:bg-brand-blue hover:text-white transition-all shadow-lg hover:scale-110 hidden md:flex"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>

                  {/* LEFT FEATURES */}
                  <div className="md:absolute left-0 top-0 bottom-0 flex flex-col justify-center gap-16 md:gap-24 w-full md:w-1/3 z-20 pointer-events-none md:pointer-events-auto">
                      <div className="md:text-right flex md:block flex-col items-center animate-slide-up delay-200 group">
                          <h3 className="text-2xl font-bold text-brand-blue mb-2 flex items-center md:justify-end gap-2 group-hover:text-brand-dark transition-colors">
                               <span className="p-2 rounded-lg bg-blue-50 text-brand-marginal group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">{slide.features[0].icon}</span> 
                               {slide.features[0].title}
                          </h3>
                          <p className="text-gray-600 text-sm md:pl-8 leading-relaxed">{slide.features[0].desc}</p>
                          <div className="hidden md:block w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent mt-4 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>

                      <div className="md:text-right flex md:block flex-col items-center animate-slide-up delay-300 group">
                          <h3 className="text-2xl font-bold text-brand-blue mb-2 flex items-center md:justify-end gap-2 group-hover:text-brand-dark transition-colors">
                               <span className="p-2 rounded-lg bg-blue-50 text-brand-marginal group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">{slide.features[1].icon}</span> 
                               {slide.features[1].title}
                          </h3>
                          <p className="text-gray-600 text-sm md:pl-8 leading-relaxed">{slide.features[1].desc}</p>
                          <div className="hidden md:block w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent mt-4 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                  </div>

                  {/* CENTER IMAGE & PULSE EFFECT */}
                  <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex-shrink-0 z-10 my-10 md:my-0 group perspective-1000 animate-pop-in">
                      <div className="relative w-full h-full flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border border-brand-blue/10 animate-ripple"></div>
                          <div className="absolute inset-0 rounded-full border border-brand-yellow/20 animate-ripple delay-500"></div>
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-dark/20 animate-[spin_30s_linear_infinite]"></div>
                          
                          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-30">
                              <line x1="10%" y1="20%" x2="50%" y2="50%" stroke="#305280" strokeWidth="1" className="animate-draw" />
                              <line x1="10%" y1="80%" x2="50%" y2="50%" stroke="#305280" strokeWidth="1" className="animate-draw" />
                              <line x1="90%" y1="20%" x2="50%" y2="50%" stroke="#305280" strokeWidth="1" className="animate-draw" />
                              <line x1="90%" y1="80%" x2="50%" y2="50%" stroke="#305280" strokeWidth="1" className="animate-draw" />
                          </svg>

                          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-20 bg-gray-100 transform transition-transform duration-500 group-hover:scale-105">
                              <img 
                                  src={slide.image}
                                  alt={slide.imageText} 
                                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:rotate-6"
                              />
                              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent pointer-events-none"></div>
                          </div>
                          
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 bg-white px-8 py-3 rounded-full shadow-xl border border-gray-100 z-30 animate-slide-up delay-500">
                            <span className="text-brand-blue font-bold text-sm tracking-[0.2em]">TEKNİK DETAY</span>
                          </div>
                      </div>
                  </div>

                  {/* RIGHT FEATURES */}
                  <div className="md:absolute right-0 top-0 bottom-0 flex flex-col justify-center gap-16 md:gap-24 w-full md:w-1/3 z-20 pointer-events-none md:pointer-events-auto">
                      <div className="md:text-left flex md:block flex-col items-center animate-slide-up delay-200 group">
                          <h3 className="text-2xl font-bold text-brand-blue mb-2 flex items-center gap-2 group-hover:text-brand-dark transition-colors">
                               <span className="p-2 rounded-lg bg-blue-50 text-brand-marginal group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">{slide.features[2].icon}</span> 
                               {slide.features[2].title}
                          </h3>
                          <p className="text-gray-600 text-sm md:pr-8 leading-relaxed">{slide.features[2].desc}</p>
                          <div className="hidden md:block w-full h-px bg-gradient-to-l from-transparent via-brand-blue/30 to-transparent mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>

                      <div className="md:text-left flex md:block flex-col items-center animate-slide-up delay-300 group">
                          <h3 className="text-2xl font-bold text-brand-blue mb-2 flex items-center gap-2 group-hover:text-brand-dark transition-colors">
                               <span className="p-2 rounded-lg bg-blue-50 text-brand-marginal group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">{slide.features[3].icon}</span> 
                               {slide.features[3].title}
                          </h3>
                          <p className="text-gray-600 text-sm md:pr-8 leading-relaxed">{slide.features[3].desc}</p>
                          <div className="hidden md:block w-full h-px bg-gradient-to-l from-transparent via-brand-blue/30 to-transparent mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                  </div>
              </div>
              
              <div className="flex justify-center gap-3 mt-12 relative z-30">
                {TECH_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                      currentSlide === idx ? 'bg-brand-blue w-12' : 'bg-gray-300 w-2 hover:bg-brand-marginal'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
        </div>
      </section>

      {/* 3. SHOWCASE STRIP (Mevcut Koleksiyon Bölümü) */}
      <section className="sticky top-0 min-h-screen flex items-center py-20 bg-slate-50 z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 relative z-10 w-full h-full flex flex-col justify-center">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-dark leading-tight">
                        Ürün Koleksiyonu
                    </h2>
                    <p className="text-gray-500 mt-2 text-lg">Projeleriniz için yenilikçi beton teknolojileri.</p>
                </div>
                
                <div className="flex items-center gap-4">
                     <button 
                        onClick={() => scrollCollection('left')}
                        className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-brand-dark hover:border-brand-dark hover:text-white transition-all duration-300 group"
                     >
                        <ChevronLeft className="h-6 w-6" />
                     </button>
                     <button 
                        onClick={() => scrollCollection('right')}
                        className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-brand-dark hover:border-brand-dark hover:text-white transition-all duration-300 group"
                     >
                        <ChevronRight className="h-6 w-6" />
                     </button>
                     <button 
                        onClick={() => onNavigate('/products')}
                        className="hidden md:flex items-center gap-2 text-brand-blue font-bold text-sm tracking-wider ml-4 hover:underline"
                     >
                        TÜMÜNÜ GÖR
                     </button>
                </div>
            </div>
            
            <div 
                ref={collectionScrollRef}
                className="flex gap-8 overflow-x-auto pb-12 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {PRODUCTS.map((product) => (
                    <div 
                        key={product.id}
                        className="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group snap-center border border-gray-100 flex flex-col"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src={product.imageUrl} 
                                alt={product.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 cursor-pointer" onClick={() => onNavigate('/products')}>
                                <ArrowUpRight className="h-5 w-5 text-brand-dark" />
                            </div>

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-brand-blue/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                                    {product.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow border-t border-gray-50">
                            <h3 className="text-2xl font-display font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                                {product.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                {product.description}
                            </p>
                            
                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-brand-marginal transition-colors">
                                    Detaylı İncele
                                </span>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-300">
                                     <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 4. STATS BANNER */}
      <section className="sticky top-0 min-h-screen flex items-center justify-center bg-brand-dark z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white">RAKAMLARLA GÜCÜMÜZ</h2>
                  <p className="text-gray-400 mt-4">Sürekli üretim, kesintisiz hizmet.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="text-4xl md:text-6xl font-display font-bold text-white mb-2">1.2M</div>
                      <div className="text-brand-yellow text-xs font-bold tracking-widest uppercase">Yıllık Bims (Adet)</div>
                  </div>
                  <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="text-4xl md:text-6xl font-display font-bold text-white mb-2">450K</div>
                      <div className="text-brand-yellow text-xs font-bold tracking-widest uppercase">Yıllık Parke (m²)</div>
                  </div>
                   <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="text-4xl md:text-6xl font-display font-bold text-white mb-2">25+</div>
                      <div className="text-brand-yellow text-xs font-bold tracking-widest uppercase">Yıllık Tecrübe</div>
                  </div>
                   <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="text-4xl md:text-6xl font-display font-bold text-white mb-2">%100</div>
                      <div className="text-brand-yellow text-xs font-bold tracking-widest uppercase">Müşteri Memnuniyeti</div>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. YENİ İNTERAKTİF KATEGORİ VİTRİNİ (OLDCASTLE STYLE) - STATS SONRASI */}
      {/* Sticky (yapışkan) özellikler kaldırıldı, relative kullanılarak normal akışa döndü */}
      <section className="relative min-h-screen flex flex-col bg-white z-50 shadow-none">
         
         {/* Top Icons Navigation */}
         {/* Sticky yerine relative */}
         <div className="w-full bg-white border-b border-gray-200 relative z-40 shadow-sm">
             <div className="max-w-7xl mx-auto">
                 <div className="grid grid-cols-2 md:grid-cols-4">
                     {SHOWCASE_CATEGORIES.map((cat, idx) => (
                         <button
                            key={cat.id}
                            onClick={() => setActiveShowcase(idx)}
                            className={`relative h-24 md:h-36 flex flex-col items-center justify-center gap-2 md:gap-3 transition-all duration-300 group overflow-hidden ${
                                activeShowcase === idx 
                                ? 'bg-brand-blue text-white' 
                                : 'bg-white text-gray-500 hover:bg-gray-50'
                            }`}
                         >
                            {/* Icon Wrapper - Mobil için küçültüldü */}
                            <div className={`p-2 md:p-3 rounded-xl border-2 transition-all duration-300 ${
                                activeShowcase === idx 
                                ? 'border-brand-yellow bg-white/10' 
                                : 'border-gray-200 group-hover:border-brand-blue'
                            }`}>
                                {React.cloneElement(cat.icon as React.ReactElement<any>, {
                                    className: `w-6 h-6 md:w-8 md:h-8 transition-colors ${
                                        activeShowcase === idx ? 'text-brand-yellow' : 'text-gray-400 group-hover:text-brand-blue'
                                    }`
                                })}
                            </div>
                            
                            <span className="font-display font-bold text-[10px] md:text-sm tracking-wider uppercase text-center px-1">
                                {cat.label}
                            </span>

                            {/* Active Arrow Indicator */}
                            {activeShowcase === idx && (
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-slate-100"></div>
                            )}
                         </button>
                     ))}
                 </div>
             </div>
         </div>

         {/* Content Area - Padding artırıldı */}
         <div className="flex-grow bg-slate-100 flex items-center py-20 md:py-24">
             <div className="max-w-7xl mx-auto px-4 w-full">
                 <div key={activeShowcase} className="grid md:grid-cols-2 gap-12 items-center">
                     
                     {/* Image Side */}
                     <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-[400px] md:h-[600px] animate-slide-up bg-gray-200">
                         <img 
                            src={SHOWCASE_CATEGORIES[activeShowcase].image}
                            alt={SHOWCASE_CATEGORIES[activeShowcase].label}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
                         
                         {/* Corner Logo/Brand Mark */}
                         <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                             <Hexagon className="w-8 h-8 text-white opacity-80" />
                         </div>
                     </div>

                     {/* Content Side */}
                     <div className="flex flex-col justify-center space-y-8 animate-slide-up delay-100">
                         <div className="flex items-center gap-3">
                             <div className="h-px w-12 bg-brand-yellow"></div>
                             <span className="text-brand-blue font-bold tracking-[0.2em] text-sm uppercase">
                                 {SHOWCASE_CATEGORIES[activeShowcase].subtitle}
                             </span>
                         </div>
                         
                         <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-dark leading-none">
                             {SHOWCASE_CATEGORIES[activeShowcase].title}
                             <span className="block text-brand-marginal opacity-50 text-2xl md:text-3xl mt-2 font-light">KATEGORİSİ</span>
                         </h2>
                         
                         <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-gray-300 pl-6">
                             {SHOWCASE_CATEGORIES[activeShowcase].desc}
                         </p>

                         {/* Details Grid */}
                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                             {SHOWCASE_CATEGORIES[activeShowcase].details.map((detail, i) => (
                                 <div key={i} className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100">
                                     <ArrowRight className="w-4 h-4 text-brand-yellow" />
                                     <span className="text-xs font-bold text-gray-700 uppercase">{detail}</span>
                                 </div>
                             ))}
                         </div>

                         <button 
                            onClick={() => onNavigate('/products')}
                            className="self-start mt-4 px-8 py-4 bg-brand-dark text-white font-bold tracking-wider hover:bg-brand-blue transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 group"
                         >
                            ÜRÜNLERİ İNCELE
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </button>
                     </div>
                 </div>
             </div>
         </div>
      </section>

    </div>
  );
};
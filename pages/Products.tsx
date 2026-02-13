import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Filter, ArrowUpRight, MessageCircle, CheckCircle2 } from 'lucide-react';

export const Products: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'bims' | 'parke' | 'bordur' | 'diger'>('all');

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'TÜMÜ' },
    { id: 'bims', label: 'BİMS BLOKLAR' },
    { id: 'parke', label: 'PARKE & ZEMİN' },
    { id: 'bordur', label: 'BORDÜRLER' },
    { id: 'diger', label: 'ALTYAPI & DİĞER' },
  ];

  return (
    <div 
      className="min-h-screen pt-24 pb-20 bg-[#F1F5F9]" 
      style={{ 
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")', 
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Glassmorphism (Consistent with other pages) */}
        <div className="mb-12 border border-white/40 pb-8 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg relative overflow-hidden">
          {/* Decorative element inside header - Turuncu yerine Marjinal */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-marginal/10 rounded-full filter blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-4 relative z-10">ÜRÜN KATALOĞU</h1>
          <p className="text-gray-600 max-w-2xl text-lg relative z-10">
            Estetik, dayanıklılık ve mühendislik bir arada. Projenize değer katacak çözümleri keşfedin.
          </p>
        </div>

        {/* Filter Tabs - Centered & Modern */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 transform border-2 ${
                filter === cat.id 
                  ? 'bg-brand-dark text-white border-brand-dark shadow-xl scale-105 ring-4 ring-gray-200' 
                  : 'bg-white text-gray-500 border-transparent hover:border-gray-200 hover:shadow-md hover:-translate-y-1'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Modern Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-[2rem] overflow-hidden border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              
              {/* Image Area with Zoom Effect */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10"></div>
                
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                />
                
                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-brand-dark text-xs font-bold uppercase tracking-widest rounded-full shadow-sm border-l-4 border-brand-yellow">
                    {product.category}
                  </span>
                </div>

                {/* Corner Action Icon - Turuncu yerine Lacivert */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="h-5 w-5" />
                    </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>
                
                {/* Features as Pills */}
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="inline-flex items-center px-3 py-1 rounded-lg bg-gray-50 text-gray-600 text-xs font-bold border border-gray-100">
                      {/* Check iconu Minimal Sarı */}
                      <CheckCircle2 className="w-3 h-3 mr-1.5 text-brand-yellow" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a 
                    href={`https://wa.me/905551234567?text=Merhaba, ${product.title} modeli için fiyat teklifi almak istiyorum.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 rounded-xl bg-brand-blue/5 text-brand-blue font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-blue/30"
                >
                    <MessageCircle className="w-5 h-5" />
                    HIZLI TEKLİF AL
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 bg-white/50 rounded-[3rem] border-2 border-dashed border-gray-300 text-center animate-fadeIn">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Filter className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Sonuç Bulunamadı</h3>
            <p className="text-gray-500">Seçtiğiniz kategoride henüz ürün eklenmemiş.</p>
            <button 
                onClick={() => setFilter('all')}
                className="mt-6 px-6 py-2 text-brand-blue font-bold hover:underline"
            >
                Tüm ürünleri göster
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
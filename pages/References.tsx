import React from 'react';
import { REFERENCES } from '../constants';
import { MapPin } from 'lucide-react';

export const References: React.FC = () => {
  return (
    <div 
      className="min-h-screen pt-24 pb-20 bg-[#F1F5F9]"
      style={{ 
        /* Diğer sayfalarla uyumlu beton parke/küp deseni */
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")', 
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Glassmorphism (Standart Tema) */}
        <div className="mb-12 border border-white/40 pb-8 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg relative overflow-hidden">
          {/* Decorative element inside header - Turuncu yerine Marjinal */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-marginal/10 rounded-full filter blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-4 relative z-10">REFERANS PROJELER</h1>
          <p className="text-gray-600 max-w-2xl text-lg relative z-10">
            "Sadece beton değil, yaşayan alanlar üretiyoruz." İşte imzamızı attığımız projelerden bazıları.
          </p>
        </div>

        <div className="space-y-20">
          {REFERENCES.map((ref, index) => (
            <div key={ref.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                  <img 
                    src={ref.imageUrl} 
                    alt={ref.title} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    {/* Badge Rengi - Turuncu yerine Lacivert */}
                    <span className="text-white font-medium flex items-center bg-brand-blue px-4 py-2 rounded-full shadow-lg">
                      <MapPin className="h-4 w-4 mr-2" /> {ref.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 space-y-6 bg-white/80 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-white/50">
                <div className="inline-block px-3 py-1 bg-blue-100 text-brand-blue rounded-full text-xs font-bold tracking-wide uppercase">
                  {ref.category === 'municipal' ? 'Kamu Projesi' : ref.category === 'industrial' ? 'Endüstriyel' : 'Konut & Peyzaj'}
                </div>
                <h2 className="text-3xl font-bold text-brand-dark">{ref.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {ref.description}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex gap-4">
                    <div className="text-center">
                      {/* Minimal Sarı Vurgu: Yüzde */}
                      <span className="block text-2xl font-bold text-brand-yellow">100%</span>
                      <span className="text-xs text-gray-500 uppercase">Müşteri Memnuniyeti</span>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-brand-dark">Zamanında</span>
                      <span className="text-xs text-gray-500 uppercase">Teslimat</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
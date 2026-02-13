import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CAPACITY_STATS } from '../constants';
import { Target, Shield, Users } from 'lucide-react';

export const About: React.FC = () => {
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
        
        {/* Header - Glassmorphism (Ürünler sayfası ile aynı tema) */}
        <div className="mb-12 border border-white/40 pb-8 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg relative overflow-hidden">
          {/* Decorative element inside header - Turuncu yerine Marjinal */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-marginal/10 rounded-full filter blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-4 relative z-10">KURUMSAL</h1>
          <p className="text-gray-600 max-w-3xl text-lg relative z-10">
            Kocalar Beton ve Kobims güçlerini birleştirdi. Sektörde güvenin, kalitenin ve istikrarın adı olmaya devam ediyoruz.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 border border-white/50 relative z-20">
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Biz Kimiz?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Hafif yapı elemanları (Bims bloklar), asmolen, dolu blok ve diğer beton yapı elemanlarının üretiminde bölgenin lider kuruluşuyuz. İnşaatların duvar örümlerinde kullanılan, ısı ve ses yalıtımı sağlayan volkanik kökenli bims blokları üretiyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Amacımız; iki markayı tek bir "Beton Üssü" algısıyla birleştirmektir. Hem müteahhide "Güçlü Tedarikçi", hem ev sahibine "Estetik Çözüm Ortağı" olarak hizmet veriyoruz.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/60 p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-gray-200">
                 <Shield className="h-10 w-10 text-brand-blue mx-auto mb-3" />
                 <h4 className="font-bold text-brand-dark">Güven</h4>
                 <p className="text-sm text-gray-500">Nesiller boyu süren itibar</p>
               </div>
               <div className="bg-white/60 p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-gray-200">
                 {/* Kalite İkonu: Minimalist Sarı Vurgu (Altın Standart) */}
                 <Target className="h-10 w-10 text-brand-yellow mx-auto mb-3" />
                 <h4 className="font-bold text-brand-dark">Kalite</h4>
                 <p className="text-sm text-gray-500">Standart üstü üretim</p>
               </div>
               <div className="bg-white/60 p-6 rounded-lg text-center col-span-2 hover:shadow-md transition-shadow border border-gray-200">
                 <Users className="h-10 w-10 text-gray-700 mx-auto mb-3" />
                 <h4 className="font-bold text-brand-dark">Aile</h4>
                 <p className="text-sm text-gray-500">Aile firması sıcaklığı, kurumsal güç</p>
               </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="mb-16 bg-white/60 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Yıllık Üretim Kapasitemiz</h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={CAPACITY_STATS}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{fill: '#475569', fontSize: 14}} tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(value) => new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(value)} tick={{fill: '#475569'}} axisLine={false} />
                  <Tooltip 
                    cursor={{fill: 'rgba(0,0,0,0.05)'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="value" name="Adet/m²" radius={[4, 4, 0, 0]} barSize={60}>
                    {/* Barlar: Lacivert ve Marjinal Gri */}
                    {CAPACITY_STATS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#305280' : '#64748B'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">* Veriler yıllık ortalama üretim kapasitesini temsil etmektedir.</p>
          </div>

          {/* Timeline / Strategy */}
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Yol Haritamız</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* 1. Adım: Aktif olduğu için Sarı (İnşaat/Şantiye Uyarısı) */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-yellow text-brand-dark shadow-lg font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/70 p-6 rounded-lg border-l-4 border-brand-yellow shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-brand-dark">Kısa Dönem (0-12 Ay)</div>
                  </div>
                  <div className="text-gray-600">
                    "Net Adres" algısının oturması. Beton ürünleri denince akla gelen ilk marka olmak. Güven veren üretici imajının pekiştirilmesi.
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 text-gray-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/70 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-brand-dark">Orta Vade (1-3 Yıl)</div>
                  </div>
                  <div className="text-gray-600">
                    Üretici markadan referans markaya geçiş. Sadece ürün satan değil, projeye özel çözüm sunan bir yapıya dönüşüm.
                  </div>
                </div>
              </div>

               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 text-gray-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/70 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-brand-dark">Uzun Vade (3-5 Yıl)</div>
                  </div>
                  <div className="text-gray-600">
                    Halk Kobims'i bilir, sektör Kocalar'ı tanır. Bölgesel zincir ve farklı şehirlerde depo/satış noktaları.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const Contact: React.FC = () => {
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
          
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-4 relative z-10">İLETİŞİM</h1>
          <p className="text-gray-600 max-w-2xl text-lg relative z-10">
            Sorularınız, projeleriniz veya fiyat teklifi için bize ulaşın. "Beton Üssü" bir telefon uzağınızda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Info Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/50 relative overflow-hidden">
            {/* Gradient Turuncudan Maviye -> Mavi'den Griye */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-marginal"></div>
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Bize Ulaşın</h2>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 group-hover:bg-brand-blue transition-colors duration-300 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brand-dark">Adres</h3>
                  <p className="text-gray-600">Organize Sanayi Bölgesi, 5. Cadde No:12<br />Merkez / Türkiye</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 group-hover:bg-brand-marginal transition-colors duration-300 rounded-full flex items-center justify-center">
                  {/* Turuncu ikon yerine Marjinal Gri */}
                  <Phone className="h-6 w-6 text-brand-marginal group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brand-dark">Telefon & WhatsApp</h3>
                  <p className="text-gray-600 font-bold">{PHONE_NUMBER}</p>
                  <p className="text-sm text-gray-400 mt-1">Hafta içi 08:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 group-hover:bg-gray-800 transition-colors duration-300 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brand-dark">E-Posta</h3>
                  <p className="text-gray-600">info@kocalarkobims.com</p>
                </div>
              </div>

               <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 group-hover:bg-brand-yellow transition-colors duration-300 rounded-full flex items-center justify-center">
                  {/* Çalışma Saatleri: Sarı Vurgu */}
                  <Clock className="h-6 w-6 text-brand-yellow group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brand-dark">Çalışma Saatleri</h3>
                  <p className="text-gray-600">Pazartesi - Cumartesi: 08:00 - 18:00</p>
                  <p className="text-gray-600">Pazar: Kapalı</p>
                </div>
              </div>
            </div>

            {/* Social Proof / Trust */}
            <div className="mt-8 pt-8 border-t border-gray-100">
               <p className="italic text-gray-500 text-center">
                 "Aile firması ama büyük ölçekli. Yarın da buradayız."
               </p>
            </div>
          </div>

          {/* Form / Map Placeholder */}
          <div className="flex flex-col gap-8">
            {/* Simple Contact Form */}
             <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/50 relative overflow-hidden">
               {/* Minimal Sarı Çizgi (Şantiye/Güvenlik Şeridi Etkisi) */}
               <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow"></div>
               <h2 className="text-2xl font-bold text-brand-dark mb-6">Hızlı Mesaj Gönder</h2>
               <form className="space-y-4">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Adınız Soyadınız</label>
                   <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none bg-gray-50/50" placeholder="Adınız" />
                 </div>
                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon Numaranız</label>
                   <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none bg-gray-50/50" placeholder="0555..." />
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                   <textarea id="message" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none bg-gray-50/50" placeholder="Hangi ürünle ilgileniyorsunuz?"></textarea>
                 </div>
                 <button type="button" className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform active:scale-95 group">
                   Gönder <Send className="h-4 w-4 group-hover:text-brand-yellow transition-colors" />
                 </button>
               </form>
             </div>

             {/* Map Placeholder */}
             <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-64 flex items-center justify-center relative group border-4 border-white">
               <img src="https://placehold.co/1000x400/0B1120/FFF?text=Harita+Konumu" alt="Map Location" className="w-full h-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-white px-6 py-2 rounded-full shadow-lg font-bold text-brand-blue flex items-center gap-2 hover:scale-105 transition-transform hover:bg-brand-marginal hover:text-white">
                   <MapPin className="h-5 w-5 text-brand-yellow" /> Haritada Aç
                 </button>
               </div>
             </div>
          </div>

        </div>
       </div>
    </div>
  );
};
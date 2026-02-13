import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';
import { LogoDark } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
                <LogoDark className="h-10 w-auto" />
                <h3 className="text-2xl font-bold text-white tracking-wide font-display">KOCALAR & KOBİMS</h3>
            </div>
            
            <p className="text-gray-400 mb-4">
              Temelden bahçeye, endüstriyel güçten yaşam alanlarına uzanan kalite ve güven.
              "Beton Üssü" algısıyla sağlam yarınlar inşa ediyoruz.
            </p>
            <div className="flex space-x-4">
              {/* Hover color turuncudan marjinal griye */}
              <a href="#" className="text-gray-400 hover:text-brand-marginal transition-colors"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-brand-marginal transition-colors"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-brand-marginal transition-colors"><Linkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li><a href="#/products" className="text-gray-400 hover:text-white transition-colors">Ürün Kataloğu</a></li>
              <li><a href="#/references" className="text-gray-400 hover:text-white transition-colors">Referans Projeler</a></li>
              <li><a href="#/about" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#/contact" className="text-gray-400 hover:text-white transition-colors">Teklif Al</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                {/* İkon rengi marjinal gri */}
                <MapPin className="h-5 w-5 text-brand-marginal mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Organize Sanayi Bölgesi, 5. Cadde No:12<br />Merkez / Türkiye</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-marginal mr-2 flex-shrink-0" />
                <span className="text-gray-400">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-marginal mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@kocalarkobims.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};
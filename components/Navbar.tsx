import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { PHONE_NUMBER } from '../constants';
import { Logo } from './Logo';

interface NavbarProps {
  activeTab: string;
  onNavigate: (path: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'ANASAYFA', path: '/' },
  { label: 'ÜRÜNLER', path: '/products' },
  { label: 'PROJELER', path: '/references' },
  { label: 'HAKKIMIZDA', path: '/about' },
  { label: 'İLETİŞİM', path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/20 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-white/80 backdrop-blur-sm py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer gap-3 group"
            onClick={() => handleNav('/')}
          >
            {/* Logo Component (SVG) */}
            <Logo className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            
            <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tighter leading-none text-brand-dark group-hover:text-brand-blue transition-colors">KOCALAR</span>
                {/* Turuncu yerine Marjinal Gri */}
                <span className="text-sm font-bold text-brand-marginal tracking-[0.35em] leading-none mt-0.5">KOBİMS</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`text-sm font-bold tracking-wide transition-all duration-300 relative group ${
                    activeTab === item.path
                      ? 'text-brand-blue'
                      : 'text-gray-600 hover:text-brand-blue'
                  }`}
                >
                  {item.label}
                  {/* Underline Turuncu yerine Lacivert */}
                  <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full ${activeTab === item.path ? 'w-full' : ''}`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <button 
                onClick={() => handleNav('/contact')}
                className="relative bg-brand-blue hover:bg-brand-dark text-white px-6 py-2 rounded-none transform skew-x-[-10deg] transition-all duration-300 hover:scale-105 font-bold text-sm shadow-lg hover:shadow-brand-blue/30 overflow-hidden group"
            >
                {/* Sarı Alt Çizgi Efekti */}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                
                <span className="block transform skew-x-[10deg]">TEKLİF AL</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-dark hover:text-brand-blue hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl absolute w-full h-screen top-0 left-0 pt-24 px-6 z-40 animate-fadeIn">
           <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-gray-800 hover:text-red-500 transition-colors">
             <X className="h-8 w-8" />
           </button>
           <div className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`text-3xl font-display font-bold text-left transition-transform active:scale-95 ${
                  activeTab === item.path
                    ? 'text-brand-blue'
                    : 'text-brand-dark'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-8 border-t border-gray-200 mt-4">
                <p className="text-gray-500 mb-2 font-medium">Müşteri Hizmetleri</p>
                <a href={`tel:${PHONE_NUMBER}`} className="text-2xl text-brand-blue font-bold">{PHONE_NUMBER}</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
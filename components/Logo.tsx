import React from 'react';

interface LogoProps {
  className?: string;
}

// Renkli Logo (Navbar için) - Orijinal Renk: #32557f
export const Logo: React.FC<LogoProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1055.39 1077.27" 
    className={className}
    aria-label="Kocalar Kobims Logo"
  >
    <polygon fill="#32557f" points="96.95 127.11 298.33 319.31 96.95 512.16 96.95 127.11"/>
    <polygon fill="#32557f" points="96.95 649.26 99.58 948.38 957.58 127.11 645.34 127.11 96.95 649.26"/>
    <path fill="#32557f" d="M603.14,608.16c-52.04,49.42-104.08,98.83-156.12,148.25,66.47,63.41,132.94,126.82,199.41,190.23h311.15c-118.15-112.83-236.29-225.65-354.44-338.48Z"/>
  </svg>
);

// Beyaz Logo (Footer ve Koyu Alanlar için) - Dolgu: #ffffff
export const LogoDark: React.FC<LogoProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1055.39 1077.27" 
    className={className}
    aria-label="Kocalar Kobims Logo Beyaz"
  >
    <polygon fill="#ffffff" points="96.95 127.11 298.33 319.31 96.95 512.16 96.95 127.11"/>
    <polygon fill="#ffffff" points="96.95 649.26 99.58 948.38 957.58 127.11 645.34 127.11 96.95 649.26"/>
    <path fill="#ffffff" d="M603.14,608.16c-52.04,49.42-104.08,98.83-156.12,148.25,66.47,63.41,132.94,126.82,199.41,190.23h311.15c-118.15-112.83-236.29-225.65-354.44-338.48Z"/>
  </svg>
);
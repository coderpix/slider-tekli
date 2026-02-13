export interface Product {
  id: string;
  title: string;
  category: 'bims' | 'parke' | 'bordur' | 'diger';
  description: string;
  imageUrl: string;
  features: string[];
}

export interface Reference {
  id: string;
  title: string;
  location: string;
  category: 'residential' | 'industrial' | 'municipal';
  imageUrl: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  name: string;
  value: number;
}
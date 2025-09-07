export  interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface DecorationService {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  available: boolean;
}

export interface SuitRental {
  id: string;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  images: string[];
  available: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  type: 'decoration' | 'suit';
  serviceId: string;
  date: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  createdAt: Date;
}
 
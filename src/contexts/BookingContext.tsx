import  { createContext, useContext, useState, ReactNode } from 'react';

interface Booking {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  eventDate: string;
  service: string;
  status: 'pending' | 'confirmed' | 'completed';
  price: number;
  notes: string;
  createdAt: string;
}

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => void;
  updateBookingStatus: (id: string, status: Booking['status']) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: '1',
      customerName: 'esperance dushime imana',
      email: 'dushimimanaesperance@gmail.com',
      phone: '+250788250746',
      eventDate: '2024-06-15',
      service: 'Premium Decoration Package',
      status: 'pending',
      price: 2500,
      notes: 'Rose gold theme preferred',
      createdAt: '2024-01-10'
    }
  ]);

  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
    const newBooking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setBookings(prev => [...prev, newBooking]);
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    setBookings(prev => prev.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, updateBookingStatus }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within BookingProvider');
  return context;
};
 
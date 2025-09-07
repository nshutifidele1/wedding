import  { useState } from 'react';
import { useBooking } from '../contexts/BookingContext';
import { Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Booking() {
  const { addBooking } = useBooking();
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    eventDate: '',
    service: '',
    price: 0,
    notes: ''
  });

  const serviceOptions = [
    { name: 'Essential Decoration', price: 1500 },
    { name: 'Premium Decoration', price: 2500 },
    { name: 'Luxury Decoration', price: 4000 },
    { name: 'Classic Suit Rental', price: 200 },
    { name: 'Designer Suit Rental', price: 350 },
    { name: 'Bespoke Suit Rental', price: 600 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBooking(formData);
    alert('Booking submitted successfully! We will contact you soon.');
    setFormData({
      customerName: '',
      email: '',
      phone: '',
      eventDate: '',
      service: '',
      price: 0,
      notes: ''
    });
  };

  const handleServiceChange = (serviceName: string) => {
    const service = serviceOptions.find(s => s.name === serviceName);
    setFormData(prev => ({
      ...prev,
      service: serviceName,
      price: service?.price || 0
    }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Book Your Perfect Day</h1>
          <p className="text-xl text-gray-600">
            Tell us about your vision and we'll make it a reality
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <User className="w-5 h-5 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={e => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Phone className="w-5 h-5 mr-2" />
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  Event Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={e => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-semibold mb-2 block">Service Package</label>
              <select
                required
                value={formData.service}
                onChange={e => handleServiceChange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map(service => (
                  <option key={service.name} value={service.name}>
                    {service.name} - ${service.price}
                  </option>
                ))}
              </select>
            </div>

            {formData.price > 0 && (
              <div className="bg-gold/10 p-4 rounded-lg">
                <p className="text-gold font-bold text-xl">
                  Total Price: ${formData.price}
                </p>
              </div>
            )}

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <MessageSquare className="w-5 h-5 mr-2" />
                Special Requirements
              </label>
              <textarea
                rows={4}
                value={formData.notes}
                onChange={e => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Tell us about your vision, color preferences, themes, or any special requirements..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-white py-4 rounded-lg text-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
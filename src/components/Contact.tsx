import  { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}

interface ContactProps {
  onMessageSent: (message: Message) => void;
}

export default function Contact({ onMessageSent }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'decorations',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newMessage: Message = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toLocaleString()
    };

    onMessageSent(newMessage);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'decorations',
      message: ''
    });

    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300">Get in touch for your perfect wedding</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                  required
                >
                  <option value="decorations">Wedding Decorations</option>
                  <option value="suits">Suit Rentals</option>
                  <option value="dresses">Wedding Dresses</option>
                  <option value="planning">Event Planning</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about your wedding vision..."
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                required
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-6 h-6 mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-6 h-6 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@wedding.com</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-6 h-6 mr-4" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>123 Wedding Street<br />City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
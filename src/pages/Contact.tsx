import  { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'decoration'
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://hooks.jdoodle.net/proxy?url=https://script.google.com/macros/s/AKfycbxYourScriptIdHere/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'addMessage',
          ...formData,
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', service: 'decoration' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Ready to plan your dream wedding? Get in touch with our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-white" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-300">+250 788 123 456</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-white" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">dushimimanaspeciosa@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-white" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-300">Gisenyi developed by fide dev</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service</label>
                <select
                  className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="decoration">Wedding Decoration</option>
                  <option value="dress">Wedding Dress</option>
                  <option value="suits">Suits Rental</option>
                  <option value="consultation">3D Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              </button>
              
              {status === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
import  { useState, useEffect } from 'react';
import { Mail, Calendar, User, Eye } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'nshutifidele1@gmail.com' && password === '12345qwert()') {
      setIsLoggedIn(true);
      fetchMessages();
    } else {
      setError('Invalid credentials');
    }
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      // Simulated messages since Google Sheets integration needs proper setup
      const mockMessages: Message[] = [
        {
          id: '1',
          name: 'John Smith',
          email: 'john@example.com',
          phone: '+1234567890',
          service: 'decoration',
          message: 'I need wedding decoration for 200 guests',
          timestamp: new Date().toISOString()
        },
        {
          id: '2',
          name: 'Sarah Johnson',
          email: 'sarah@example.com',
          phone: '+1987654321',
          service: 'dress',
          message: 'Looking for elegant wedding dress options',
          timestamp: new Date(Date.now() - 86400000).toISOString()
        }
      ];
      
      setMessages(mockMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
    setLoading(false);
  };

  if (!isLoggedIn) {
    return (
         <div className="pt-24 pb-16 bg-black min-h-screen">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-white">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
 
    );
  }

  return (
    <div className="pt-24 pb-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-white" />
              <div>
                <p className="text-2xl font-bold text-white">{messages.length}</p>
                <p className="text-gray-300">Total Messages</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <Calendar className="h-8 w-8 text-white" />
              <div>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-gray-300">Bookings This Month</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <User className="h-8 w-8 text-white" />
              <div>
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-gray-300">New Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-lg">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Recent Messages</h2>
          </div>
          
          {loading ? (
            <div className="p-6 text-center text-gray-300">Loading messages...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {messages.map((message) => (
                    <tr key={message.id}>
                      <td className="px-6 py-4 text-sm font-medium text-white">{message.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{message.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-300 capitalize">{message.service}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {new Date(message.timestamp).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-white hover:text-gray-300">
                          <Eye className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
 
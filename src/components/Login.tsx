import  { useState } from 'react';
import { ArrowLeft, Lock, AlertCircle, Mail } from 'lucide-react';

interface LoginProps {
  onLogin: (email: string, password: string) => boolean;
  onBack: () => void;
}

export default function Login({ onLogin, onBack }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(email, password);
    if (!success) {
      setError('Invalid email or password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-gray-900 p-8 rounded-lg">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-gray-300 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Website
          </button>

          <div className="text-center mb-8">
            <Lock className="w-12 h-12 mx-auto mb-4 text-white" />
            <h1 className="text-2xl font-bold text-white">Admin Login</h1>
            <p className="text-gray-400">Enter credentials to access admin panel</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@wedding.com"
                  className="w-full pl-10 pr-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="mb-4 flex items-center text-red-400">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            
          </div>
        </div>
      </div>
    </div>
  );
}
 
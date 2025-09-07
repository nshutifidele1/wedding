import  { useState } from 'react';
import { ArrowLeft, Trash, MessageSquare, Users, Settings as SettingsIcon } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AdminProps {
  messages: Message[];
  adminUsers: AdminUser[];
  onDeleteMessage: (id: number) => void;
  onDeleteUser: (id: number) => void;
  onBackToHome: () => void;
}

export default function Admin({ messages, adminUsers, onDeleteMessage, onDeleteUser, onBackToHome }: AdminProps) {
  const [activeTab, setActiveTab] = useState('messages');

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center text-white hover:text-gray-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Website
          </button>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <div></div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex space-x-6 mb-8">
            <button
              onClick={() => setActiveTab('messages')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'messages' ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
              }`}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Messages ({messages.length})
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'users' ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
              }`}
            >
              <Users className="w-5 h-5 mr-2" />
              Admin Users ({adminUsers.length})
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'settings' ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
              }`}
            >
              <SettingsIcon className="w-5 h-5 mr-2" />
              Settings
            </button>
          </div>

          {activeTab === 'messages' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Messages</h2>
              {messages.length === 0 ? (
                <p className="text-gray-400">No messages yet.</p>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="bg-black p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-white font-semibold">{message.name}</h3>
                          <p className="text-gray-400 text-sm">{message.email} • {message.phone}</p>
                          <p className="text-gray-400 text-sm">Service: {message.service} • {message.timestamp}</p>
                        </div>
                        <button
                          onClick={() => onDeleteMessage(message.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-white">{message.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Admin Users</h2>
              <div className="space-y-4">
                {adminUsers.map((user) => (
                  <div key={user.id} className="bg-black p-6 rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-semibold">{user.name}</h3>
                      <p className="text-gray-400">{user.email}</p>
                      <p className="text-gray-400 text-sm capitalize">{user.role}</p>
                    </div>
                    {adminUsers.length > 1 && (
                      <button
                        onClick={() => onDeleteUser(user.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
              <div className="space-y-6">
                <div className="bg-black p-6 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Website Settings</h3>
                  <p className="text-gray-400">Configure website appearance and behavior.</p>
                </div>
                <div className="bg-black p-6 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Notification Settings</h3>
                  <p className="text-gray-400">Manage email notifications for new messages.</p>
                </div>
                <div className="bg-black p-6 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Security Settings</h3>
                  <p className="text-gray-400">Update admin password and security preferences.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
 
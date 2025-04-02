import React from 'react';
import { Home, Search, Library, PlusCircle, Headphones, Heart, Compass, Star, Clock, CreditCard, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const playlists = [
  'Favorite Tracks',
  'Morning Vibes',
  'Weekly Discoveries',
  'New Releases',
  'Summer Collection',
  'Chill Zone',
];

export default function Sidebar() {
  const location = useLocation();
  const { theme } = useTheme();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={`w-64 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-indigo-900 to-black' 
        : 'bg-gradient-to-b from-blue-100 to-white'
    } h-full flex flex-col`}>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8 cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
            <Headphones className="w-5 h-5 text-white" />
          </div>
          <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-xl font-bold`}>Melodify</span>
        </div>
        
        <nav className="space-y-4">
          <Link
            to="/app"
            className={`flex items-center gap-4 transition-colors ${
              isActive('/app') 
                ? theme === 'dark' 
                  ? 'text-white bg-white/10 rounded-lg p-2' 
                  : 'text-gray-900 bg-black/5 rounded-lg p-2'
                : theme === 'dark'
                  ? 'text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-lg'
                  : 'text-gray-600 hover:text-gray-900 p-2 hover:bg-black/5 rounded-lg'
            }`}
          >
            <Home className="w-6 h-6" />
            <span>Home</span>
          </Link>
          
          <Link
            to="/app/search"
            className={`flex items-center gap-4 transition-colors ${
              isActive('/app/search') 
                ? theme === 'dark' 
                  ? 'text-white bg-white/10 rounded-lg p-2' 
                  : 'text-gray-900 bg-black/5 rounded-lg p-2'
                : theme === 'dark'
                  ? 'text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-lg'
                  : 'text-gray-600 hover:text-gray-900 p-2 hover:bg-black/5 rounded-lg'
            }`}
          >
            <Search className="w-6 h-6" />
            <span>Search</span>
          </Link>
          
          <Link
            to="/app/library"
            className={`flex items-center gap-4 transition-colors ${
              isActive('/app/library') 
                ? theme === 'dark' 
                  ? 'text-white bg-white/10 rounded-lg p-2' 
                  : 'text-gray-900 bg-black/5 rounded-lg p-2'
                : theme === 'dark'
                  ? 'text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-lg'
                  : 'text-gray-600 hover:text-gray-900 p-2 hover:bg-black/5 rounded-lg'
            }`}
          >
            <Library className="w-6 h-6" />
            <span>Your Library</span>
          </Link>
          
          <Link
            to="/app/premium"
            className={`flex items-center gap-4 transition-colors ${
              isActive('/app/premium') 
                ? theme === 'dark' 
                  ? 'text-white bg-white/10 rounded-lg p-2' 
                  : 'text-gray-900 bg-black/5 rounded-lg p-2'
                : theme === 'dark'
                  ? 'text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-lg'
                  : 'text-gray-600 hover:text-gray-900 p-2 hover:bg-black/5 rounded-lg'
            }`}
          >
            <CreditCard className="w-6 h-6" />
            <span>Premium</span>
          </Link>
          
          <Link
            to="/app/settings"
            className={`flex items-center gap-4 transition-colors ${
              isActive('/app/settings') 
                ? theme === 'dark' 
                  ? 'text-white bg-white/10 rounded-lg p-2' 
                  : 'text-gray-900 bg-black/5 rounded-lg p-2'
                : theme === 'dark'
                  ? 'text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-lg'
                  : 'text-gray-600 hover:text-gray-900 p-2 hover:bg-black/5 rounded-lg'
            }`}
          >
            <Settings className="w-6 h-6" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
      
      <div className="mt-8 px-6">
        <Link 
          to="/app/create-playlist"
          className={`flex items-center gap-4 transition-colors group w-full p-2 rounded-lg ${
            theme === 'dark'
              ? 'text-gray-400 hover:text-white hover:bg-white/5'
              : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
          }`}
        >
          <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-sm flex items-center justify-center">
            <PlusCircle className="w-4 h-4 text-white" />
          </div>
          <span>Create Playlist</span>
        </Link>
        
        <Link 
          to="/app/liked"
          className={`flex items-center gap-4 transition-colors group w-full mt-4 p-2 rounded-lg ${
            theme === 'dark'
              ? 'text-gray-400 hover:text-white hover:bg-white/5'
              : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
          }`}
        >
          <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-sm flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <span>Liked Songs</span>
        </Link>
      </div>
      
      <div className="mt-6 px-6 flex-1 overflow-y-auto">
        <div className={`border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'} pt-6`}>
          {playlists.map((playlist, index) => (
            <button
              key={index}
              className={`transition-colors block py-2 w-full text-left px-2 my-1 rounded-lg ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-white/5'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
              }`}
            >
              {playlist}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
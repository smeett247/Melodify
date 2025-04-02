import React from 'react';
import { Home, Search, Library, PlusCircle, Headphones, Heart, Compass, Star, Clock, CreditCard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-gradient-to-b from-indigo-900 to-black h-full flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8 cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
            <Headphones className="w-5 h-5 text-white" />
          </div>
          <span className="text-white text-xl font-bold">Melodify</span>
        </div>
        
        <nav className="space-y-4">
          <Link
            to="/app"
            className={`flex items-center gap-4 transition-colors ${
              isActive('/app') 
                ? 'text-white bg-white/10 rounded-lg p-2' 
                : 'text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-lg'
            }`}
          >
            <Home className="w-6 h-6" />
            <span>Home</span>
          </Link>
          <Link
            to="/app/search"
            className={`flex items-center gap-4 transition-colors ${
              isActive('/app/search') 
                ? 'text-white bg-white/10 rounded-lg p-2' 
                : 'text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-lg'
            }`}
          >
            <Search className="w-6 h-6" />
            <span>Search</span>
          </Link>
          <Link
            to="/app/library"
            className={`flex items-center gap-4 transition-colors ${
              isActive('/app/library') 
                ? 'text-white bg-white/10 rounded-lg p-2' 
                : 'text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-lg'
            }`}
          >
            <Library className="w-6 h-6" />
            <span>Your Library</span>
          </Link>
          <Link
            to="/app/premium"
            className={`flex items-center gap-4 transition-colors ${
              isActive('/app/premium') 
                ? 'text-white bg-white/10 rounded-lg p-2' 
                : 'text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-lg'
            }`}
          >
            <CreditCard className="w-6 h-6" />
            <span>Premium</span>
          </Link>
        </nav>
      </div>
      
      <div className="mt-8 px-6">
        <Link 
          to="/app/create-playlist"
          className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group w-full p-2 hover:bg-white/5 rounded-lg"
        >
          <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-sm flex items-center justify-center">
            <PlusCircle className="w-4 h-4 text-white" />
          </div>
          <span>Create Playlist</span>
        </Link>
        <Link 
          to="/app/liked"
          className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group w-full mt-4 p-2 hover:bg-white/5 rounded-lg"
        >
          <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-sm flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <span>Liked Songs</span>
        </Link>
      </div>
      
      <div className="mt-6 px-6 flex-1 overflow-y-auto">
        <div className="border-t border-white/10 pt-6">
          {playlists.map((playlist, index) => (
            <button
              key={index}
              className="text-gray-400 hover:text-white transition-colors block py-2 w-full text-left hover:bg-white/5 rounded-lg px-2 my-1"
            >
              {playlist}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
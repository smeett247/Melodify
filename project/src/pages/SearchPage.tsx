import React, { useState } from 'react';
import { Search, TrendingUp, Play, Heart } from 'lucide-react';

// Sample data for trending songs
const trendingSongs = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80' },
  { id: '2', title: 'As It Was', artist: 'Harry Styles', coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80' },
  { id: '3', title: 'Stay', artist: 'Kid LAROI & Justin Bieber', coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80' },
  { id: '4', title: 'Heat Waves', artist: 'Glass Animals', coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80' },
];

// Sample data for categories
const categories = [
  { id: 'bollywood', name: 'Bollywood', coverUrl: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=300&q=80' },
  { id: 'hollywood', name: 'Hollywood', coverUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&q=80' },
  { id: 'gujarati', name: 'Gujarati', coverUrl: 'https://images.unsplash.com/photo-1527605555-b01c458b8029?w=300&q=80' },
  { id: 'punjabi', name: 'Punjabi', coverUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&q=80' },
  { id: 'tamil', name: 'Tamil', coverUrl: 'https://images.unsplash.com/photo-1499415479124-43c32433a620?w=300&q=80' },
  { id: 'telugu', name: 'Telugu', coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80' },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());

  const toggleLike = (songId: string) => {
    setLikedSongs(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(songId)) {
        newLiked.delete(songId);
      } else {
        newLiked.add(songId);
      }
      return newLiked;
    });
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900/40 to-black overflow-auto p-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="w-full bg-white/10 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-pink-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-pink-500 mr-2" />
            <h2 className="text-2xl font-bold text-white">Trending Hits</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingSongs.map((song) => (
              <div key={song.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all cursor-pointer group">
                <div className="relative mb-4">
                  <img src={song.coverUrl} alt={song.title} className="w-full aspect-square object-cover rounded-md" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <button 
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(song.id);
                    }}
                  >
                    <Heart className={`w-5 h-5 ${likedSongs.has(song.id) ? 'fill-pink-500 text-pink-500' : 'text-white'}`} />
                  </button>
                </div>
                <h3 className="text-white font-medium truncate">{song.title}</h3>
                <p className="text-gray-400 text-sm truncate">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Language</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="relative rounded-lg overflow-hidden cursor-pointer group h-40">
                <img 
                  src={category.coverUrl} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
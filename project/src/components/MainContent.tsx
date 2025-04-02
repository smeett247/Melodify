import React, { useState } from 'react';
import { Play, Heart, MoreHorizontal, Clock, Star, Sparkles } from 'lucide-react';

const featuredPlaylists = [
  {
    id: '1',
    title: 'Weekly Discoveries',
    description: 'Your weekly mixtape of fresh music',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80'
  },
  {
    id: '2',
    title: 'Chill Zone',
    description: 'Relaxing beats for your day',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80'
  },
  {
    id: '3',
    title: 'Top Charts',
    description: 'Most played tracks right now',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80'
  },
];

const recentlyPlayed = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80' },
  { id: '2', title: 'As It Was', artist: 'Harry Styles', duration: '2:47', coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80' },
  { id: '3', title: 'Stay', artist: 'Kid LAROI & Justin Bieber', duration: '2:21', coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80' },
];

export default function MainContent() {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());

  const toggleLike = (trackId: string) => {
    setLikedTracks(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(trackId)) {
        newLiked.delete(trackId);
      } else {
        newLiked.add(trackId);
      }
      return newLiked;
    });
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900/40 to-black overflow-auto p-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Good evening</h1>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Clock className="w-6 h-6" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <MoreHorizontal className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="group relative bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-all cursor-pointer transform hover:scale-[1.02] backdrop-blur-sm border border-white/5"
            >
              <div className="absolute top-3 right-3 bg-black/40 rounded-full p-1">
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
              <img
                src={playlist.coverUrl}
                alt={playlist.title}
                className="w-full aspect-square object-cover rounded-lg mb-4 shadow-lg"
              />
              <h3 className="text-white font-semibold mb-1">{playlist.title}</h3>
              <p className="text-gray-400 text-sm">{playlist.description}</p>
              <button 
                className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-105 transform"
              >
                <Play className="w-6 h-6 text-white" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Recently Played</h2>
          <Sparkles className="w-5 h-5 text-pink-400 ml-2" />
        </div>
        
        <div className="space-y-2">
          {recentlyPlayed.map((track) => (
            <div
              key={track.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 group cursor-pointer backdrop-blur-sm border border-transparent hover:border-white/5"
              onMouseEnter={() => setHoveredTrack(track.id)}
              onMouseLeave={() => setHoveredTrack(null)}
            >
              <div className="relative">
                <img
                  src={track.coverUrl}
                  alt={track.title}
                  className="w-12 h-12 rounded-md shadow-md"
                />
                {hoveredTrack === track.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-md">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-white group-hover:text-pink-400 transition-colors">{track.title}</h4>
                <p className="text-gray-400 text-sm">{track.artist}</p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(track.id);
                }}
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Heart 
                  className={`w-5 h-5 ${likedTracks.has(track.id) ? 'fill-pink-400 text-pink-400' : ''}`} 
                />
              </button>
              <span className="text-gray-400 group-hover:text-white transition-colors">{track.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
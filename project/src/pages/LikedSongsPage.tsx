import React, { useState } from 'react';
import { Heart, Play, MoreHorizontal, Clock } from 'lucide-react';

// Sample data for liked songs
const likedSongsData = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80', dateAdded: '2023-05-15' },
  { id: '2', title: 'As It Was', artist: 'Harry Styles', album: 'Harry\'s House', duration: '2:47', coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80', dateAdded: '2023-06-22' },
  { id: '3', title: 'Stay', artist: 'Kid LAROI & Justin Bieber', album: 'F*CK LOVE 3: OVER YOU', duration: '2:21', coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80', dateAdded: '2023-07-10' },
  { id: '4', title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', duration: '3:59', coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80', dateAdded: '2023-08-05' },
  { id: '5', title: 'Unstoppable', artist: 'Sia', album: 'This Is Acting', duration: '3:37', coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80', dateAdded: '2023-09-18' },
];

export default function LikedSongsPage() {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set(likedSongsData.map(song => song.id)));

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
    <div className="flex-1 bg-gradient-to-b from-pink-900/40 to-black overflow-auto p-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-48 h-48 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center rounded-lg shadow-lg">
            <Heart className="w-24 h-24 text-white" />
          </div>
          <div>
            <h4 className="text-gray-300 uppercase font-medium">Playlist</h4>
            <h1 className="text-5xl font-bold text-white mt-2 mb-4">Liked Songs</h1>
            <p className="text-gray-300">
              <span className="text-white font-medium">Your Collection</span> • {likedTracks.size} songs
            </p>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
              <Play className="w-6 h-6 text-white" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <MoreHorizontal className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="mb-4 border-b border-white/10 pb-2">
          <div className="grid grid-cols-12 gap-4 px-4 text-gray-400 text-sm">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Title</div>
            <div className="col-span-3">Album</div>
            <div className="col-span-2">Date Added</div>
            <div className="col-span-1 flex justify-end">
              <Clock className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {likedSongsData.map((track, index) => (
            <div
              key={track.id}
              className="grid grid-cols-12 gap-4 p-2 rounded-md hover:bg-white/5 group cursor-pointer items-center"
              onMouseEnter={() => setHoveredTrack(track.id)}
              onMouseLeave={() => setHoveredTrack(null)}
            >
              <div className="col-span-1 text-gray-400 group-hover:text-white">
                {hoveredTrack === track.id ? (
                  <Play className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="col-span-5 flex items-center gap-3">
                <img
                  src={track.coverUrl}
                  alt={track.title}
                  className="w-10 h-10 rounded"
                />
                <div>
                  <h4 className="text-white group-hover:text-pink-400 transition-colors">{track.title}</h4>
                  <p className="text-gray-400 text-sm">{track.artist}</p>
                </div>
              </div>
              <div className="col-span-3 text-gray-400">{track.album}</div>
              <div className="col-span-2 text-gray-400">{track.dateAdded}</div>
              <div className="col-span-1 flex justify-end items-center gap-3">
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
                <span className="text-gray-400">{track.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { PlusCircle, Image, Search, Music, Check } from 'lucide-react';

// Sample data for songs
const allSongs = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80' },
  { id: '2', title: 'As It Was', artist: 'Harry Styles', duration: '2:47', coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80' },
  { id: '3', title: 'Stay', artist: 'Kid LAROI & Justin Bieber', duration: '2:21', coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80' },
  { id: '4', title: 'Heat Waves', artist: 'Glass Animals', duration: '3:59', coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80' },
  { id: '5', title: 'Unstoppable', artist: 'Sia', duration: '3:37', coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80' },
  { id: '6', title: 'Levitating', artist: 'Dua Lipa', duration: '3:23', coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80' },
  { id: '7', title: 'Bad Habits', artist: 'Ed Sheeran', duration: '3:51', coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80' },
  { id: '8', title: 'Save Your Tears', artist: 'The Weeknd', duration: '3:35', coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80' },
];

export default function CreatePlaylistPage() {
  const [playlistName, setPlaylistName] = useState('My Playlist #1');
  const [playlistDescription, setPlaylistDescription] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSongs, setSelectedSongs] = useState<Set<string>>(new Set());

  const toggleSongSelection = (songId: string) => {
    setSelectedSongs(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(songId)) {
        newSelection.delete(songId);
      } else {
        newSelection.add(songId);
      }
      return newSelection;
    });
  };

  const filteredSongs = searchQuery 
    ? allSongs.filter(song => 
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        song.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allSongs;

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900/40 to-black overflow-auto p-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Create New Playlist</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="col-span-1">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="mb-6 aspect-square bg-gray-800 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors relative group">
                <input 
                  type="file" 
                  className="absolute inset-0 opacity-0 cursor-pointer" 
                  accept="image/*"
                />
                <div className="flex flex-col items-center text-gray-400 group-hover:text-white transition-colors">
                  <Image className="w-12 h-12 mb-2" />
                  <span>Choose cover image</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="playlist-name" className="block text-gray-400 mb-1 text-sm">Name</label>
                  <input
                    id="playlist-name"
                    type="text"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:border-pink-500"
                    placeholder="My Playlist"
                  />
                </div>
                
                <div>
                  <label htmlFor="playlist-description" className="block text-gray-400 mb-1 text-sm">Description</label>
                  <textarea
                    id="playlist-description"
                    value={playlistDescription}
                    onChange={(e) => setPlaylistDescription(e.target.value)}
                    className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:border-pink-500 h-24 resize-none"
                    placeholder="Give your playlist a description"
                  />
                </div>
                
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-md py-2 font-medium hover:opacity-90 transition-opacity mt-4">
                  Create Playlist
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 h-full">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for songs"
                    className="w-full bg-white/10 border border-white/10 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:border-pink-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-white font-medium">
                  {selectedSongs.size} songs selected
                </h3>
                {selectedSongs.size > 0 && (
                  <button 
                    className="text-gray-400 hover:text-white text-sm"
                    onClick={() => setSelectedSongs(new Set())}
                  >
                    Clear all
                  </button>
                )}
              </div>
              
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                {filteredSongs.length > 0 ? (
                  filteredSongs.map((song) => (
                    <div
                      key={song.id}
                      className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
                        selectedSongs.has(song.id) ? 'bg-white/10' : 'hover:bg-white/5'
                      }`}
                      onClick={() => toggleSongSelection(song.id)}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        {selectedSongs.has(song.id) ? (
                          <div className="w-5 h-5 bg-pink-500 rounded-sm flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <PlusCircle className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <img
                        src={song.coverUrl}
                        alt={song.title}
                        className="w-10 h-10 rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-white">{song.title}</h4>
                        <p className="text-gray-400 text-sm">{song.artist}</p>
                      </div>
                      <span className="text-gray-400">{song.duration}</span>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                    <Music className="w-16 h-16 mb-4 opacity-50" />
                    <p>No songs found matching your search</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
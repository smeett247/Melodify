import React, { useState } from 'react';
import { User, Music, Clock, Calendar, BarChart2, Users, Settings } from 'lucide-react';

// Sample user data
const userData = {
  name: 'John Doe',
  username: '@johndoe',
  profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
  joinDate: 'January 2023',
  followers: 245,
  following: 168,
  topGenres: ['Pop', 'Rock', 'Hip Hop', 'Electronic'],
  recentlyPlayed: [
    { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', playedAt: '2 hours ago' },
    { id: '2', title: 'As It Was', artist: 'Harry Styles', playedAt: '3 hours ago' },
    { id: '3', title: 'Stay', artist: 'Kid LAROI & Justin Bieber', playedAt: '5 hours ago' },
  ],
  stats: {
    totalListeningTime: '438 hours',
    favoriteSong: 'Blinding Lights - The Weeknd',
    favoriteArtist: 'The Weeknd',
    totalSongs: 1243,
  }
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900/40 to-black overflow-auto p-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-center gap-8 mb-12">
          <div className="relative group">
            <img 
              src={userData.profilePicture} 
              alt={userData.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-pink-500"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Change Photo
            </button>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{userData.name}</h1>
            <p className="text-gray-400 mb-4">{userData.username}</p>
            <div className="flex items-center gap-6 text-gray-400">
              <span>{userData.followers} Followers</span>
              <span>{userData.following} Following</span>
              <span>Member since {userData.joinDate}</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              activeTab === 'overview' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Overview
            {activeTab === 'overview' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('playlists')}
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              activeTab === 'playlists' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Playlists
            {activeTab === 'playlists' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('following')}
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              activeTab === 'following' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Following
            {activeTab === 'following' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500" />
            )}
          </button>
        </div>

        {/* Overview Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stats Cards */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-4">Your Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <Clock className="w-6 h-6 text-pink-500 mb-2" />
                    <p className="text-gray-400 text-sm">Total Listening Time</p>
                    <p className="text-white font-medium">{userData.stats.totalListeningTime}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <Music className="w-6 h-6 text-purple-500 mb-2" />
                    <p className="text-gray-400 text-sm">Total Songs</p>
                    <p className="text-white font-medium">{userData.stats.totalSongs}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <BarChart2 className="w-6 h-6 text-blue-500 mb-2" />
                    <p className="text-gray-400 text-sm">Favorite Song</p>
                    <p className="text-white font-medium">{userData.stats.favoriteSong}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <User className="w-6 h-6 text-green-500 mb-2" />
                    <p className="text-gray-400 text-sm">Favorite Artist</p>
                    <p className="text-white font-medium">{userData.stats.favoriteArtist}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-4">Top Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {userData.topGenres.map((genre, index) => (
                    <span 
                      key={genre}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recently Played */}
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-4">Recently Played</h3>
              <div className="space-y-4">
                {userData.recentlyPlayed.map((song) => (
                  <div 
                    key={song.id}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">
                      <Music className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{song.title}</h4>
                      <p className="text-gray-400 text-sm">{song.artist}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{song.playedAt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Playlists Content */}
        {activeTab === 'playlists' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Add your playlists content here */}
          </div>
        )}

        {/* Following Content */}
        {activeTab === 'following' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Add your following content here */}
          </div>
        )}
      </div>
    </div>
  );
}
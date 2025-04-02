import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Player from '../components/Player';
import SearchPage from './SearchPage';
import LikedSongsPage from './LikedSongsPage';
import CreatePlaylistPage from './CreatePlaylistPage';
import PremiumPage from './PremiumPage';

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/liked" element={<LikedSongsPage />} />
          <Route path="/create-playlist" element={<CreatePlaylistPage />} />
          <Route path="/premium" element={<PremiumPage />} />
          {/* Add more routes for other dashboard pages */}
        </Routes>
      </div>
      <Player />
    </div>
  );
}
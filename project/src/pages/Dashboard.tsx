import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Player from '../components/Player';

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* Add more routes for other dashboard pages */}
        </Routes>
      </div>
      <Player />
    </div>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Music, Play, Headphones, Users } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Music className="w-8 h-8 text-white" />
          <span className="text-white text-xl font-bold">Melodify</span>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/auth')}
            className="px-4 py-2 text-white hover:text-gray-300 transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/auth?mode=signup')}
            className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold text-white mb-6"
          >
            Your Music, Your Way
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl"
          >
            Stream millions of songs, create playlists, and discover new music with Melodify.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => navigate('/auth?mode=signup')}
            className="px-8 py-4 bg-green-500 text-white rounded-full text-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
          >
            <Play className="w-6 h-6" />
            Start Listening Free
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-lg">
            <Headphones className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">High Quality Audio</h3>
            <p className="text-gray-400">Experience music in crystal clear quality</p>
          </div>
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-lg">
            <Play className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Unlimited Streaming</h3>
            <p className="text-gray-400">Listen to your favorite tracks anytime</p>
          </div>
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-lg">
            <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Social Features</h3>
            <p className="text-gray-400">Share and discover music with friends</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Shuffle, Heart } from 'lucide-react';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volume, setVolume] = useState(66);
  const [progress, setProgress] = useState(33);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-900/90 to-black/90 p-4 border-t border-white/10 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80"
            alt="Current track"
            className="w-14 h-14 rounded-md shadow-lg"
          />
          <div className="flex items-center gap-4">
            <div>
              <h4 className="text-white font-medium hover:underline cursor-pointer">Current Song</h4>
              <p className="text-gray-400 text-sm hover:underline cursor-pointer">Artist Name</p>
            </div>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`text-gray-400 hover:text-white transition-colors ${isLiked ? 'text-pink-500' : ''}`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-pink-500' : ''}`} />
            </button>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Shuffle className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Repeat className="w-5 h-5" />
            </button>
          </div>
          
          <div className="w-full flex items-center gap-2">
            <span className="text-xs text-gray-400">1:15</span>
            <div 
              className="flex-1 h-1 bg-gray-600 rounded-full cursor-pointer group"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                setProgress(Math.min(100, Math.max(0, percentage)));
              }}
            >
              <div 
                className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:from-pink-400 group-hover:to-purple-400 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100" />
              </div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <div 
            className="w-24 h-1 bg-gray-600 rounded-full cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percentage = (x / rect.width) * 100;
              setVolume(Math.min(100, Math.max(0, percentage)));
            }}
          >
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:from-pink-400 group-hover:to-purple-400 relative"
              style={{ width: `${volume}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
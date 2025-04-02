import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Music, Mail, Lock, User, Headphones } from 'lucide-react';

interface AuthPageProps {
  setIsAuthenticated: (value: boolean) => void;
}

export default function AuthPage({ setIsAuthenticated }: AuthPageProps) {
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(searchParams.get('mode') !== 'signup');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set authenticated to true
    setIsAuthenticated(true);
    // Navigate to dashboard
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black/30 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md border border-white/10"
      >
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full">
            <Headphones className="w-8 h-8 text-white" />
          </div>
          <span className="text-white text-xl font-bold">Melodify</span>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          {isLogin ? 'Welcome back!' : 'Create your account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-400 hover:text-pink-300 ml-2"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
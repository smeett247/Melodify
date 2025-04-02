import React from 'react';
import { Moon, Sun, User, Bell, Shield, HelpCircle, Languages } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900/40 to-black dark:bg-gradient-to-b dark:from-indigo-900/40 dark:to-black light:bg-gradient-to-b light:from-blue-100 light:to-white overflow-auto p-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-8">Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="bg-white/5 dark:bg-white/5 light:bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b border-white/10 dark:border-white/10 light:border-gray-200">
                <h2 className="text-xl font-semibold text-white dark:text-white light:text-gray-900">Categories</h2>
              </div>
              <div className="p-2">
                <button className="w-full flex items-center gap-3 p-3 rounded-md bg-white/10 dark:bg-white/10 light:bg-blue-50 text-white dark:text-white light:text-gray-900 font-medium">
                  <User className="w-5 h-5 text-pink-500" />
                  <span>Account</span>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-md text-gray-400 dark:text-gray-400 light:text-gray-700 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 mt-1">
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-md text-gray-400 dark:text-gray-400 light:text-gray-700 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 mt-1">
                  <Shield className="w-5 h-5" />
                  <span>Privacy & Security</span>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-md text-gray-400 dark:text-gray-400 light:text-gray-700 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 mt-1">
                  <Languages className="w-5 h-5" />
                  <span>Language</span>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-md text-gray-400 dark:text-gray-400 light:text-gray-700 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 mt-1">
                  <HelpCircle className="w-5 h-5" />
                  <span>Help & Support</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white/5 dark:bg-white/5 light:bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b border-white/10 dark:border-white/10 light:border-gray-200">
                <h2 className="text-xl font-semibold text-white dark:text-white light:text-gray-900">Account Settings</h2>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-white dark:text-white light:text-gray-900">Theme</h3>
                    <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm mt-1">
                      Choose between dark and light mode
                    </p>
                  </div>
                  
                  <button 
                    onClick={toggleTheme}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      theme === 'dark' 
                        ? 'bg-pink-500' 
                        : 'bg-gray-400 dark:bg-gray-600 light:bg-gray-300'
                    }`}
                  >
                    <span className="sr-only">Toggle theme</span>
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                    {theme === 'dark' ? (
                      <Moon className="absolute right-1 w-3 h-3 text-white" />
                    ) : (
                      <Sun className="absolute left-1 w-3 h-3 text-white" />
                    )}
                  </button>
                </div>
                
                <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-gray-200">
                  <h3 className="text-lg font-medium text-white dark:text-white light:text-gray-900 mb-4">Theme Preview</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white border border-white/10' : 'bg-white text-gray-900 border border-gray-200'}`}>
                      <h4 className="font-medium mb-2">Dark Mode</h4>
                      <p className="text-sm opacity-70">Dark theme with vibrant accents, perfect for night listening.</p>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${theme === 'light' ? 'bg-white text-gray-900 border border-gray-200' : 'bg-gray-800 text-white border border-white/10'}`}>
                      <h4 className="font-medium mb-2">Light Mode</h4>
                      <p className="text-sm opacity-70">Clean, bright interface for daytime use.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-gray-200">
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                    More settings will be available in future updates. Stay tuned!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
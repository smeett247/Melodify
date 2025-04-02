import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserStats {
  totalListeningTime: string;
  favoriteSong: string;
  favoriteArtist: string;
  totalSongs: number;
}

interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
  profilePicture: string;
  joinDate: string;
  followers: number;
  following: number;
  topGenres: string[];
  stats: UserStats;
  isPremium: boolean;
}

interface UserContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
  updateProfile: (data: Partial<UserData>) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const updateProfile = (data: Partial<UserData>) => {
    setUser(prev => prev ? { ...prev, ...data } : null);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
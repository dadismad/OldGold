'use client';

import { users, User } from './mockData';

export const authenticateUser = (email: string, password: string): User | null => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return user;
  }
  return null;
};

export const registerUser = (name: string, email: string, password: string): User | null => {
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return null; // User already exists
  }
  
  const newUser: User = {
    id: users.length + 1,
    name,
    email,
    password,
  };
  
  users.push(newUser);
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('currentUser', JSON.stringify(newUser));
  }
  
  return newUser;
};

export const getCurrentUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      return JSON.parse(userStr);
    }
  }
  return null;
};

export const logoutUser = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('currentUser');
  }
};

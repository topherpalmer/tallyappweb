import { useState, useEffect } from 'react';
import { getCurrentUser } from '@aws-amplify/auth'; // v6.x API
import { useLocation } from 'wouter';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [location, setLocation] = useLocation(); // Destructure setLocation for navigation

  useEffect(() => {
    console.log('useAuth effect running'); // Debug effect execution
    const checkAuth = async () => {
      try {
        console.log('Checking authentication...');
        const user = await getCurrentUser();
        console.log('User found:', user); // Debug user object
        setIsAuthenticated(true);
        console.log('Authenticated, navigating to /');
        setLocation('/');
      } catch (error) {
        console.log('Authentication error:', error); // Debug error
        setIsAuthenticated(false);
        console.log('Not authenticated, navigating to /login');
        setLocation('/login'); // Navigate to login if not authenticated
      }
    };
    checkAuth();
    setTimeout(() => {
      console.log('Current location after set:', location);
    }, 100); // Log location after a delay
  }, [setLocation]);

  return { isAuthenticated };
}
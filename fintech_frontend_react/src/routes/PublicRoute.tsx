import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return !isAuthenticated ? (
    <>{children}</> 
  ) : (
    <Navigate to="/" />  
  );
};

export default PublicRoute;

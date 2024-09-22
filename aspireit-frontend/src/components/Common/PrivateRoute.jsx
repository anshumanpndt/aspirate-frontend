// src/components/Common/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (auth.loading) return <div>Loading...</div>;

  return auth.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

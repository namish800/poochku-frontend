// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';


const PrivateRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" state={{ prevPath: location.pathname }}/>;
};

export default PrivateRoute;

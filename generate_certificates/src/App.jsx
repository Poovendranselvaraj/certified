import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './app/store';
import { checkAuth } from './features/auth/authSlice';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { Toaster } from "@/components/ui/toaster";
import NotFound from './pages/NotFound';
// import { RootState } from './app/store';

function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

function AppContent() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route 
          path="*" 
         element= {<NotFound/>} 
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the message from location state
  const message = location.state?.message;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4 relative">
      {message && (
        <div className="absolute top-4 left-4 bg-green-200 text-green-800 p-2 rounded">
          {message}
        </div>
      )}
      <h1 
        className="text-xl font-bold text-blue-500 cursor-pointer hover:underline"
        onClick={() => navigate('/register-invoice')}
      >
        Register New Invoice
      </h1>
      <h1 
        className="text-xl font-bold text-blue-500 cursor-pointer hover:underline"
        onClick={() => navigate('/extract-invoice-data')}
      >
        Extract Data from Invoice
      </h1>
    </div>
  );
};

export default HomePage;

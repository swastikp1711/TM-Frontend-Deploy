import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import OcrServicePage from './OcrServicePage';
import InvoiceRegistrationPage from './InvoiceRegistrationPage';
import OrderTrackLite from './OrderTrackLite'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/extract-invoice-data" element={<OcrServicePage/>} />
        <Route path="/register-invoice" element={<InvoiceRegistrationPage/>}/>
        <Route path="/order-track-lite" element={<OrderTrackLite/>}/>
      </Routes>
    </Router>
  );
}

export default App;

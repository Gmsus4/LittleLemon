import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BookingPage } from './BookingPage';
import { HomePage } from './HomePage';
import { ConfirmedBooking } from './components/ConfirmedBooking';
import { AboutPage } from './AboutPage';
import { MenuPage } from './MenuPage';
import { OrderPage } from './OrderPage';
import { LoginPage } from './LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/menu" element={<MenuPage />} /> 

        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} /> 
        
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </>
  );
}

export default App;

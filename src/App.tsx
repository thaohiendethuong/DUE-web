import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DesignPage from './pages/DesignPage';
import LoginPage from './pages/LoginPage1';
import LoginHomePage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import VerifyEmail from './pages/Verify';
import ProductPage from './pages/ProductPage';
import ProductItem from './pages/ProductItem';
import CartPage from './pages/Cart';
import PaymentPage from './pages/PaymentPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <Router basename="/DUE-web/"> {/* Add the basename here */}
      <div className="App">
        <Routes>
          {/* Render the Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Render the DesignPage */}
          <Route path="/design" element={<DesignPage />} />
          
          <Route path="/homelogin" element={<LoginHomePage />} />

          <Route path="/verify-email/:token" element={<VerifyEmail />} /> {/* Verification route */}

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignupPage />} />

          <Route path="/product" element={<ProductPage />} />

          <Route path="/product-item" element={<ProductItem />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/payment" element={<PaymentPage />} />

        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;

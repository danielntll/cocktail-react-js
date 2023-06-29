import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './css/App.css'
import HomePage from './pages/HomePage';
import { AnimatePresence } from "framer-motion";
import ProductPage from './pages/ProductPage';
import ProductsListPage from './pages/ProductsListPage/ProductsListPage';

function App() {

  // ANIMATIONS -------------
  const LocationProvider = ({ children }) => {
    return (
      <AnimatePresence>
        {children}
      </AnimatePresence>);
  }
  const RoutesWithAnimation = () => {
    const location = useLocation();
    return (
      <Routes location={location} key={location.key}>
        <Route path="/">
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/product/:productId" element={<ProductPage />} />
          <Route exact path="/products/:listName" element={<ProductsListPage />} />
        </Route>
      </Routes>
    )
  }

  return (
    <BrowserRouter>
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </BrowserRouter>
  )
}

export default App

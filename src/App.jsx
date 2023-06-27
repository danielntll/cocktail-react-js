import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './css/App.css'
import HomePage from './pages/HomePage';
import { AnimatePresence } from "framer-motion";
import ProductPage from './pages/ProductPage';

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
        <Route path="/"
        // element={<HomePage />} //--header o footer
        >
          <Route index element={<HomePage />} />
          <Route exact path="/product/:productId" element={<ProductPage />} />
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

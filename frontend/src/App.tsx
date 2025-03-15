import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ComingSoonPage from "./components/coming-soon";
import { Navbar } from "./components/navbar";
import { CartProvider } from "./context/cartProvider";

import Loadingscreen from "./components/loadingScreen";
const App = () => {
  // Layout Routes
  const result: boolean = false;
  const Homepage = lazy(() => import("./layout/home"));
  const CartPage = lazy(() => import("./components/cartPage.tsx"));
  const Upload = lazy(() => import("./verify/upload.tsx"));
  const Currency = lazy(() => import("./components/currency.tsx"));

  const ProductPage = lazy(() => import("./layout/productPage"));
  const ContactUs = lazy(() => import("./layout/Contact"));
  const ProductDetail = lazy(() => import("./layout/productDetails"));
  const PaymentPage = lazy(() => import("./payment/paymentPage"));
  const ServicePage = lazy(() => import("./layout/Service"));
  const ErrorPage = lazy(() => import("./components/error-page"));
  // Layout Routes

  
  return (
    <div>
      <CartProvider>
        {result ? (
          <ComingSoonPage />
        ) : (
          <div>
            <Router >
              <div className="fixed top-0 z-[50]">
                <Suspense fallback={<Loadingscreen />}>
                  <Navbar />
                </Suspense>
              </div>
              <Suspense fallback={<Loadingscreen />}>
                
                  <div className="relative top-28 ">
                    <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="/productPage" element={<ProductPage />} />
                      <Route path="/Contact" element={<ContactUs />} />
                      <Route path="/payment-Page" element={<PaymentPage />} />
                      <Route path="/cart-Items" element={<CartPage />} />
                      <Route path="/Services" element={<ServicePage />} />
                      <Route path="/verify-payment" element={<Upload />} />
                      <Route path="/currency" element={<Currency />} />
                      <Route
                        path="/product/productDetail/"
                        element={<ProductDetail />}
                      />
                      <Route path="*" element={<ErrorPage />} />

                    </Routes>
                  </div>
             
              </Suspense>
            </Router>
          </div>
        )}
      </CartProvider>
    </div>
  );
};

export default App;

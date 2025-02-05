import { lazy, Suspense, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ComingSoonPage from "./components/coming-soon";
import { Navbar } from "./components/navbar";
import { CartProvider } from "./context/cartProvider";
import SmoothScrolling from "./utils/smoothScroll.tsx";
import Loadingscreen from "./components/loadingScreen";
const App = () => {
  // Layout Routes
  const result: boolean = false;
  const Homepage = lazy(() => import("./layout/home"));

  const ProductPage = lazy(() => import("./layout/productPage"));
  const ContactUs = lazy(() => import("./layout/Contact"));
  const ProductDetail = lazy(() => import("./layout/productDetails"));
  const ErrorPage = lazy(() => import("./components/error-page"));
  // Layout Routes
  const serviceRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <div>
      <CartProvider>
        {result ? (
          <ComingSoonPage />
        ) : (
          <div>
            <Router
              basename={
                import.meta.env.MODE === "production"
                  ? "/bochbeautyandskincare"
                  : "/"
              }
            >
              <div className="fixed top-0 z-[50]">
                <Suspense fallback={<Loadingscreen />}>
                  <Navbar serviceRef={serviceRef} faqRef={faqRef} />
                </Suspense>
              </div>
              <Suspense fallback={<Loadingscreen />}>
                <SmoothScrolling>
                  <div className="relative top-28">
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <Homepage serviceRef={serviceRef} faqRef={faqRef} />
                        }
                      />
                      <Route path="/productPage" element={<ProductPage />} />
                      <Route path="/Contact" element={<ContactUs />} />
                      <Route
                        path="/product/productDetail/"
                        element={<ProductDetail />}
                      />
                      <Route path="*" element={<ErrorPage />} />
                    </Routes>
                  </div>
                </SmoothScrolling>
              </Suspense>
            </Router>
          </div>
        )}
      </CartProvider>
    </div>
  );
};

export default App;

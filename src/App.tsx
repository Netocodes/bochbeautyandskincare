import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoonPage from "./components/coming-soon";
import { Navbar } from "./components/navbar";
import { CartProvider } from "./context/cartContext.tsx";

function App() {
  const result: boolean = false;
  const Homepage = React.lazy(() => import("./layout/home"));
  const ProductPage = React.lazy(() => import("./layout/productPage"));
  const ContactUs = React.lazy(() => import("./layout/Contact"));
  const ProductDetail = React.lazy(() => import("./layout/productDetails"));
  const ErrorPage = React.lazy(() => import("./components/error-page"));

  return (
    <div>
      <CartProvider>
        {result ? (
          <ComingSoonPage />
        ) : (
          <div>
            <Router basename={import.meta.env.BASE_URL}>
              <div className="fixed top-0 z-[50]">
                <Navbar />
              </div>
              <Suspense
                fallback={
                  <div className="text-4xl text-center">Loading...</div>
                }
              >
                <div className="pt-[7rem]">
                  <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/productPage" element={<ProductPage />} />
                    <Route path="/Contact" element={<ContactUs />} />
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
}

export default App;

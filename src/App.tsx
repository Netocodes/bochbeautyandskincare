import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoonPage from "./components/coming-soon";
import { Navbar } from "./components/navbar";

function App() {
  const result: boolean = false;
  const Homepage = React.lazy(() => import("./layout/home"));
  const ProductPage = React.lazy(() => import("./layout/productPage"));
  const ContactUs = React.lazy(() => import("./layout/Contact"));

  return (
    <div>
      {result ? (
        <ComingSoonPage />
      ) : (
        <div>
          <Router>
            <div className="fixed top-0 z-[50]">
              <Navbar />
            </div>
            <Suspense
              fallback={<div className="text-4xl text-center">Loading...</div>}
            >
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/productPage" element={<ProductPage />} />
                <Route path="/Contact" element={<ContactUs />} />
              </Routes>
            </Suspense>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import MainLayout from "./partials/main-layout.page.jsx";

import HomePage from "./pages/home/home.page.jsx";
import CataloguePage from "./pages/catalogue/catalogue.page.jsx";
import ChariotsPage from "./pages/chariots/chariots.page.jsx";
import CaissePage from "./pages/caisse/caisse.page.jsx";
import ContactPage from "./pages/contact/contact.page.jsx";
import AproposPage from "./pages/apropos/apropos.page.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="catalogue" element={<CataloguePage />} />
            <Route path="chariots" element={<ChariotsPage />} />
            <Route path="caisse" element={<CaissePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="apropos" element={<AproposPage />} />

            {/* ✅ ROUTE CORRIGÉE (SANS /) */}
           <Route path="paiement-confirme" element={<PaymentSuccess />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;

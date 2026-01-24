import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  // Redirection automatique après 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  // Contenu de la page
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg w-full">

        <div className="text-6xl mb-6">✅</div>

        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Commande Confirmée !
        </h1>

        <p className="text-gray-600 mb-6">
          Votre commande a été traitée avec succès.
          <br />
          Vous recevrez un message de confirmation.
        </p>

        <p className="text-sm text-gray-400">
          Redirection vers la page d’accueil…
        </p>

      </div>
    </div>
  );
};

export default PaymentSuccess;

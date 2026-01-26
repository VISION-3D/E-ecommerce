import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

/* ✅ Initialisation EmailJS (OBLIGATOIRE) */
emailjs.init('h2al5rMyaUdigr9IM');

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Demande générale',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
     'service_pz3hy7y',
      'template_i42e22d',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: `
Sujet : ${formData.subject}
Téléphone : ${formData.phone}

Message :
${formData.message}
        `
      }
    )
    .then(() => {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Demande générale',
        message: ''
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Impossible d\'envoyer le message. Vérifie la configuration EmailJS.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-aloe-green rounded-full mb-6">
            <MessageCircle className="text-white" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-aloe-green-dark mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Nous sommes là pour répondre à vos questions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-xl p-4">
              <Phone className="text-aloe-green mx-auto mb-2" size={24} />
              <p className="font-semibold">Téléphone</p>
              <p className="text-sm text-gray-600">+221 949 06 85</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <Mail className="text-aloe-green mx-auto mb-2" size={24} />
              <p className="font-semibold">Email</p>
              <p className="text-sm text-gray-600">ssene07@gmail.com</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <Clock className="text-aloe-green mx-auto mb-2" size={24} />
              <p className="font-semibold">Horaires</p>
              <p className="text-sm text-gray-600">Lun–Ven : 8h–20h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Send className="mr-2" /> Envoyez-nous un message
          </h2>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="font-semibold text-green-800">
                Message envoyé avec succès ✅
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Votre nom"
              className="w-full px-4 py-3 border rounded-lg"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              className="w-full px-4 py-3 border rounded-lg"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              className="w-full px-4 py-3 border rounded-lg"
              value={formData.phone}
              onChange={handleChange}
            />

            <select
              name="subject"
              className="w-full px-4 py-3 border rounded-lg"
              value={formData.subject}
              onChange={handleChange}
            >
              <option>Demande générale</option>
              <option>Commande</option>
              <option>Support produit</option>
              <option>Partenariat</option>
            </select>

            <textarea
              name="message"
              required
              rows="6"
              placeholder="Votre message"
              className="w-full px-4 py-3 border rounded-lg"
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-semibold ${
                isSubmitting
                  ? 'bg-gray-400'
                  : 'bg-aloe-green text-white hover:bg-aloe-green-dark'
              }`}
            >
              {isSubmitting ? 'Envoi en cours…' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import React from 'react';
import { Leaf, Shield, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const AproposPage = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            À Propos de Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour des produits naturels à base d'Aloe Vera Forever Living
          </p>
        </motion.div>

       {/* Notre Histoire */}
<motion.div
  className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 overflow-hidden"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <div className="flex flex-col md:flex-row items-center gap-10">

    {/* Texte */}
    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.span
  className="inline-flex items-center gap-2 mb-4 px-5 py-1.5 text-sm font-semibold text-green-800 bg-green-100 rounded-full shadow-sm"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
>
  <Leaf size={16} className="text-green-700 animate-pulse" />
  Notre parcours
</motion.span>


      <h2 className="text-4xl font-extrabold text-green-800 mb-6 leading-tight">
        Une histoire de passion,<br />
        de nature et de confiance
      </h2>

      <p className="text-gray-600 text-lg mb-5 leading-relaxed">
        Fondée en <strong>2023</strong>, <strong>Vitalité & Bien-être</strong> est née d’une conviction simple :
        la nature détient les clés d’une santé durable et équilibrée.
      </p>

      <p className="text-gray-600 text-lg mb-5 leading-relaxed">
        En découvrant les bienfaits exceptionnels de l’<strong>Aloe Vera</strong>,
        nous avons naturellement choisi de collaborer avec
        <strong className="text-green-800"> Forever Living Products</strong>,
        leader mondial des produits à base d’Aloe Vera pur.
      </p>

      <p className="text-gray-600 text-lg leading-relaxed">
        Aujourd’hui, notre mission est claire :
        <strong> rendre ces solutions naturelles accessibles à tous au Sénégal</strong>,
        tout en offrant un accompagnement humain, personnalisé et de confiance.
      </p>
    </motion.div>

    {/* Image */}
    <motion.div
      className="md:w-1/2 relative"
      initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Effet décoratif */}
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-100 rounded-full blur-3xl"></div>

      <img
        src="/assets/images/heros1.jpg"
        alt="Aloe Vera Forever Living"
        className="relative rounded-2xl shadow-2xl object-cover w-full hover:scale-105 transition-transform duration-500"
      />
    </motion.div>

  </div>
</motion.div>


        {/* Nos Valeurs */}
        <div className="mb-16">
          <motion.h2
            className="text-3xl font-bold text-center text-green-800 mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    { icon: Leaf, title: "Naturalité", text: "Produits 100% naturels sans additifs artificiels." },
    { icon: Shield, title: "Qualité", text: "Produits certifiés Forever Living." },
    { icon: Users, title: "Accompagnement", text: "Conseils personnalisés selon vos besoins." },
    { icon: Heart, title: "Bien-être", text: "Votre santé est notre priorité." }
  ].map((item, index) => (
    <motion.div
      key={index}
      className="
        relative text-center p-8 rounded-2xl bg-white
        shadow-md hover:shadow-2xl
        transition-all duration-500
        overflow-hidden group
      "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      {/* Lumière de fond */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br from-green-200/40 via-transparent to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* Icône avec halo lumineux */}
      <div className="relative z-10 mb-5">
        <div
          className="
            w-16 h-16 mx-auto rounded-full
            bg-green-100 flex items-center justify-center
            shadow-[0_0_25px_rgba(34,197,94,0.45)]
            group-hover:shadow-[0_0_45px_rgba(34,197,94,0.7)]
            transition-shadow duration-500
          "
        >
          <item.icon
            size={32}
            className="text-green-600 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Texte */}
      <h3 className="relative z-10 font-bold text-xl mb-3 text-green-800">
        {item.title}
      </h3>

      <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
        {item.text}
      </p>
    </motion.div>
  ))}
</div>
          </motion.h2>
        </div>

        {/* Pourquoi Forever */}
        <motion.div
          className="bg-green-50 rounded-xl p-8 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
            Pourquoi Forever Living ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["🌿 Culture Responsable", "Plantations durables sans pesticides."],
              ["⚙️ Stabilisation à froid", "Préservation maximale des nutriments."],
              ["🏆 Leader Mondial", "Référence depuis 1978."]
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow"
                whileHover={{ scale: 1.04 }}
              >
                <h3 className="font-bold text-lg mb-3">{item[0]}</h3>
                <p className="text-gray-600">{item[1]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engagement */}
        <motion.div
          className="text-center bg-white rounded-xl shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Notre Engagement
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Nous nous engageons à vous offrir des produits naturels de qualité et un service client d’exception.
          </p>
          <p className="text-gray-800 font-semibold">
            Rejoignez ceux qui ont choisi la naturalité pour une vie plus saine.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default AproposPage;

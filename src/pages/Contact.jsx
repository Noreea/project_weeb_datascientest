import React from "react";

function Contact() {
  return (
    <main className="text-white px-6 py-16">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        Votre avis compte !
      </h1>
      <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12">
      Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, dites-nous ce que vous aimez et ce que nous pourrions améliorer. Vos suggestions nous aident à faire de ce blog une ressource toujours plus utile et enrichissante.
      </p>

      <form className="bg-purple-10 border border-purple-500 rounded-xl p-8 max-w-3xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-purple-400 block mb-2">Nom</label>
            <input
              type="text"
              className="w-full border-b border-purple-400 bg-transparent text-white p-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-purple-400 block mb-2">Prénom</label>
            <input
              type="text"
              className="w-full border-b border-purple-400 bg-transparent text-white p-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-purple-400 block mb-2">Téléphone</label>
            <input
              type="tel"
              className="w-full border-b border-purple-400 bg-transparent text-white p-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-purple-400 block mb-2">Email</label>
            <input
              type="email"
              className="w-full border-b border-purple-400 bg-transparent text-white p-2 focus:outline-none"
            />
          </div>

        </div>

        <div>
          <label className="text-purple-400 block mb-2">Message</label>
          <textarea
            className="w-full border-b border-purple-400 bg-transparent text-white p-2 h-24 resize-none focus:outline-none"
          ></textarea>
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
          >
            Contact
          </button>
        </div>
      </form>
  
    </main>
  );
}

export default Contact;

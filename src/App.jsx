import { useState,useRef } from "react";

export default function App() {
  const [erreurs, setErreur] = useState([]);

  const inputNom = useRef();
  const inputPrenom = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    let newErreurs = [];

    if (inputNom.current.value === "") {
      newErreurs.push("Le nom doit être rempli");
    }
    if (inputPrenom.current.value === "") {
      newErreurs.push("Le prénom doit être rempli");
    }
    if (inputEmail.current.value === "") {
      newErreurs.push("L'email doit être rempli");
    }
    if (inputPassword.current.value === "") {
      newErreurs.push("Le mot de passe doit être rempli");
    }

    setErreur(newErreurs);
    console.log(newErreurs);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500 p-4">
      <div className="w-full max-w-md">
        {erreurs.length > 0 && (
          <div className="bg-red-600 text-white font-bold p-4 mb-4 rounded">
            <ul className="list-disc list-inside text-left">
              {erreurs.map((erreur, index) => (
                <li key={index}>{erreur}</li>
              ))}
            </ul>
          </div>
        )}

        <form
          className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nom</label>
            <input
              type="text"
              placeholder="Veuillez entrer votre nom"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              ref={inputNom}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Prénom</label>
            <input
              type="text"
              placeholder="Veuillez entrer votre prénom"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              ref={inputPrenom}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Veuillez entrer votre email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              ref={inputEmail}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="Veuillez entrer votre mot de passe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              ref={inputPassword}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

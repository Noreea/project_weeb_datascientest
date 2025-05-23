import React from "react";
import Button from "../components/Button";

function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Se connecter</h1>

        <form className="space-y-6">
          {/* Champ Email */}
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="text-center border-b border-purple_text bg-transparent p-2 text-2xl placeholder-purple_text focus:outline-none focus:ring-1 focus:ring-purple_text"
            />
          </div>

          {/* Champ Password + Bouton */}
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="text-center border-b border-purple_text bg-transparent p-2 text-2xl placeholder-purple_text focus:outline-none focus:ring-1 focus:ring-purple_text"
            />
            <Button type="submit" className="mt-8">
              Se connecter
            </Button>
          </div>

          {/* Lien mot de passe oublié */}
          <div className="text-center mt-4">
            <a href="#" className="hover:underline">Mot de passe oublié ?</a>
          </div>

          {/* Lien création de compte */}
          <div className="text-center">
            Vous n’avez pas de compte ? Vous pouvez en {" "}
            <a href="#" className="underline underline-offset-4 font-bold hover:text-purple_text">
              créer un
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;

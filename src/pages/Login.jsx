import React from "react";

function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16  text-white">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Se connecter</h1>

        <form className="space-y-6">
          <div>
            <label className="block text-purple-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full border-b border-purple-500 bg-transparent text-white p-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-purple-400 mb-1">Password</label>
            <input
              type="password"
              className="w-full border-b border-purple-500 bg-transparent text-white p-2 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition"
          >
            Se connecter
          </button>

          <div className="text-sm text-center mt-4">
            <a href="#" className="hover:underline text-purple-400">Mot de passe oublié ?</a>
          </div>
          <div className="text-sm text-center">
            Vous n’avez pas de compte ? {" "} Vous pouvez en {" "}
            <a href="#" className="underline underline-offset-4 text-purple-400 hover:text-purple-300">
              créer un
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;

import Button from "../components/Button";

function Home() {
  return (
    <main className="text-white">
      <div className="mx-auto px-10 sm:px-12 lg:px-8 py-12 space-y-24">
        {/* Héros */}
        <section className="flex flex-col items-center justify-between gap-10 mt-8 mx-24">
          {/* Texte */}
          <div className="max-w-7xl flex-1 space-y-6 text-center px-6">
            <h1 className="text-3xl md:text-7xl font-bold leading-tight">
              Explorez le <span className="text-purple_text font-thin tracking-wider">Web</span> sous toutes ses <span className="underline underline-offset-8 decoration-purple_text decoration-4">facettes</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300">
              Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures pratiques.
              Que vous soyez développeur, designer ou passionné du digital, notre blog vous offre du contenu de qualité pour rester à la pointe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button>Découvrir les articles</Button>
              <Button> S’abonner à la newsletter</Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="w-full">
            <img src="/assets/hero.png" alt="Illustration Web" className="w-full h-auto object-contain" />
          </div>
        </section>

        {/* Logos */}
        <section>
          <p className="text-3xl text-center pb-8 md:text-5xl font-bold">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {[
              { src: "/assets/smart_finder.svg", alt: "SmartFinder" },
              { src: "/assets/zoomerr.svg", alt: "Zoomerr" },
              { src: "/assets/shells.svg", alt: "SHELLS" },
              { src: "/assets/waves.svg", alt: "WAVES" },
              { src: "/assets/art_venue.svg", alt: "ArtVenue" },
            ].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img src={logo.src} alt={logo.alt} className="h-8" />
                <span className="font-semibold text-xl">{logo.alt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section Apprenez et progressez */}
        <section>
          <div className="text-left rounded-xl p-6 sm:p-10 flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Texte */}
            <div className="w-full lg:w-1/2 lg:text-left space-y-4">
              <p className="text-lg text-left uppercase tracking-widest font-bold">Des ressources pour tous les niveaux</p>
              <p className="text-3xl text-left md:text-6xl font-bold">
                <span className="text-purple_text">Apprenez</span> et <span className="text-purple_text">progressez</span>
              </p>
              <p className="text-left">
                Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances,
                nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement.
              </p>
              <a href="#" className="inline-block mt-4 font-semibold hover:underline">
                Explorer les ressources ➔
              </a>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/assets/desktop_mini.png"
                alt="Apprendre et progresser"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Section Tendances */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/assets/shapes.svg"
                alt="Tendances Web"
                className="w-full max-w-sm"
              />
            </div>

            {/* Texte */}
            <div className="w-full lg:w-1/2 text-left lg:text-left space-y-4">
              <p className="text-lg uppercase text-left tracking-widest font-bold">Le web, un écosystème en constante évolution</p>
              <p className="text-3xl text-left pb-8 md:text-6xl font-bold">
                Restez informé des dernières <span className="text-purple_text">tendances</span>
              </p>
              <p className="text-gray-300 text-left">
                Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !
              </p>
              <a href="#" className="inline-block mt-4 font-semibold hover:underline">
                Lire les articles récents ➔
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;

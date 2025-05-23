import Button from "../components/Button";

function Home() {
  return (
    <main className="text-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-24 py-12 space-y-24">
        {/* Héros */}
        <section className="flex flex-col items-center justify-between gap-10 mt-8 mx-6 md:mx-12 lg:mx-24">
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
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-80">
            {[
              { src: "/assets/smart_finder.svg", alt: "SmartFinder" },
              { src: "/assets/zoomerr.svg", alt: "Zoomerr" },
              { src: "/assets/shells.svg", alt: "SHELLS" },
              { src: "/assets/waves.svg", alt: "WAVES" },
              { src: "/assets/art_venue.svg", alt: "ArtVenue" },
            ].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img src={logo.src} alt={logo.alt} className="h-8" />
                <span className="font-semibold text-base md:text-xl">{logo.alt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section Apprenez et progressez */}
        <section>
          <div className="rounded-xl p-6 sm:p-10 flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Texte */}
            <div className="w-full lg:w-1/2 space-y-4">
              <p className="text-lg uppercase tracking-widest font-bold">Des ressources pour tous les niveaux</p>
              <p className="text-3xl md:text-6xl font-bold">
                <span className="text-purple_text">Apprenez</span> et <span className="text-purple_text">progressez</span>
              </p>
              <p>
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
                className="w-full max-w-sm mx-auto lg:mx-0"
              />
            </div>

            {/* Texte */}
            <div className="w-full lg:w-1/2 space-y-4">
              <p className="text-lg uppercase tracking-widest font-bold">Le web, un écosystème en constante évolution</p>
              <p className="text-3xl pb-8 md:text-6xl font-bold">
                Restez informé des dernières <span className="text-purple_text">tendances</span>
              </p>
              <p className="text-gray-300">
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

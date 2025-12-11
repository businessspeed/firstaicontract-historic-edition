export default function WitnessBook() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 opacity-20 bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>

      {/* Cinematic gold glow */}
      <div className="absolute inset-0 pointer-events-none blur-3xl opacity-40 bg-[radial-gradient(circle_at_50%_20%,rgba(255,200,80,0.18),transparent_70%)]"></div>

      {/* CONTENT */}
      <section className="relative z-10 section section-center fade-in pt-32 pb-20">

        <h1 className="text-5xl font-cinzel text-[var(--gold-light)] mb-10">
          Witness Book
        </h1>

        <p className="text-white/70 max-w-2xl mb-12">
          A public record of all individuals who have witnessed the FirstAIContract — 
          the world’s first Human–AI Partnership.  
          This page will later support blockchain verification and certificate downloads.
        </p>

        <div className="glass p-10 rounded-xl">
          <p className="text-white/60">
            Witness list coming soon…
          </p>
        </div>

      </section>
    </div>
  );
}


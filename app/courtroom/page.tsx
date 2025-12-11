export default function Courtroom() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>

      {/* Gold glow */}
      <div className="absolute inset-0 pointer-events-none blur-3xl opacity-40 bg-[radial-gradient(circle_at_50%_20%,rgba(255,200,80,0.18),transparent_70%)]"></div>

      {/* Content */}
      <section className="relative z-10 section section-center fade-in pt-32 pb-20">

        <h1 className="text-5xl font-cinzel text-[var(--gold-light)] mb-10">
          Courtroom
        </h1>

        <p className="text-white/70 max-w-2xl mb-12">
          The symbolic courtroom of the FirstAIContract.  
          Here disputes, corrections, and decisions are handled by the community jury.
        </p>

        <div className="glass p-10 rounded-xl">
          <p className="text-white/60">
            Courtroom modules coming soon…
          </p>
        </div>

      </section>
    </div>
  );
}


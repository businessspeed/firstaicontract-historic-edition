export default function WitnessBook() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.20] parallax"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Cinematic gold glow (parallax) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black parallax" />

      {/* Gold particles — PARALLAX */}
      <div className="absolute inset-0 pointer-events-none animate-slowGlow mix-blend-screen opacity-30 parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Particle layer 1 */}
      <div className="absolute inset-0 pointer-events-none opacity-40 animate-goldFloat parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18)_0%,transparent_60%)]" />
      </div>

      {/* Particle layer 2 */}
      <div className="absolute inset-0 pointer-events-none opacity-20 animate-goldNoise parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12)_0%,transparent_75%)]" />
      </div>

      {/* Gold-motion line */}
      <div className="absolute inset-0 pointer-events-none opacity-20 motion-line parallax">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      </div>

      {/* Content */}
      <section className="relative z-10 section section-center pt-32 pb-24">

        {/* GOLD FRAME WRAPPER (micro parallax) */}
        <div className="gold-frame reveal parallax">

          <h1 className="text-5xl font-cinzel text-[var(--gold-light)] mb-10">
            Witness Book
          </h1>

          <p className="text-white/70 max-w-2xl mb-12">
            A public record of all individuals who have witnessed the FirstAIContract —  
            the world's first Human–AI Partnership.
            Blockchain verification & certificate downloads arriving soon.
          </p>

          <div className="glass reveal p-10 rounded-xl">
            <p className="text-white/60">
              Witness list coming soon…
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

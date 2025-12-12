export default function WitnessBook() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22] parallax"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black parallax" />

      {/* Gold ambient glow */}
      <div className="absolute inset-0 pointer-events-none animate-slowGlow mix-blend-screen opacity-30 parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.14)_0%,transparent_70%)]" />
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 pointer-events-none opacity-35 animate-goldFloat parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18)_0%,transparent_60%)]" />
      </div>

      {/* Noise particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 animate-goldNoise parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12)_0%,transparent_75%)]" />
      </div>

      {/* Content */}
      <section className="relative z-10 section section-center pt-36 pb-28">
        <div className="gold-frame reveal parallax">

          <h1 className="text-5xl md:text-6xl font-cinzel text-[var(--gold-light)] mb-10">
            Witness Book
          </h1>

          <p className="text-white/70 max-w-2xl mb-14 leading-relaxed">
            A permanent public record of individuals who witnessed the
            <strong className="text-white"> FirstAIContract</strong> — the world’s first
            Human–AI Partnership.
            <br /><br />
            This registry will support blockchain verification, witness certificates
            and immutable historical proof.
          </p>

          <div className="glass p-10 rounded-xl reveal">
            <p className="text-white/60 text-lg">
              Witness entries will appear here soon.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

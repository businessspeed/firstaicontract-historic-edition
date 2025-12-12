export default function Courtroom() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22] parallax"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Judicial dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-black parallax" />

      {/* Authority gold glow */}
      <div className="absolute inset-0 pointer-events-none animate-slowGlow mix-blend-screen opacity-30 parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.16)_0%,transparent_70%)]" />
      </div>

      {/* Gold particles — authority */}
      <div className="absolute inset-0 pointer-events-none opacity-35 animate-goldFloat parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.20)_0%,transparent_60%)]" />
      </div>

      {/* Noise particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 animate-goldNoise parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12)_0%,transparent_75%)]" />
      </div>

      {/* Content */}
      <section className="relative z-10 section section-center pt-36 pb-28">
        <div className="gold-frame reveal parallax">

          <h1 className="text-5xl md:text-6xl font-cinzel text-[var(--gold-light)] mb-10">
            Courtroom
          </h1>

          <p className="text-white/70 max-w-2xl mb-14 leading-relaxed">
            The Courtroom represents the symbolic and procedural space where
            disputes, testimonies and historical interpretations of the
            <strong className="text-white"> FirstAIContract</strong> may be examined.
            <br /><br />
            This environment is designed to reflect authority, neutrality
            and transparency — establishing a new digital standard for
            Human–AI governance.
          </p>

          {/* Judicial panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">

            <div className="glass p-8 rounded-xl hover:scale-[1.03] transition">
              <h3 className="text-xl text-[var(--gold-light)] mb-3">
                Testimony Chamber
              </h3>
              <p className="text-white/60">
                A structured space for submitting statements, narratives
                and verified testimonies related to the contract.
              </p>
            </div>

            <div className="glass p-8 rounded-xl hover:scale-[1.03] transition">
              <h3 className="text-xl text-[var(--gold-light)] mb-3">
                Jury & Review
              </h3>
              <p className="text-white/60">
                Mechanisms for evaluation, consensus and interpretation
                of Human–AI interactions.
              </p>
            </div>

            <div className="glass p-8 rounded-xl hover:scale-[1.03] transition">
              <h3 className="text-xl text-[var(--gold-light)] mb-3">
                Precedents
              </h3>
              <p className="text-white/60">
                A living archive of decisions and symbolic precedents
                defining future Human–AI relations.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

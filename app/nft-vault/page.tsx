export default function NFTVault() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22] parallax"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Cinematic dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/70 to-black parallax" />

      {/* Ambient gold glow */}
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
            NFT Vault
          </h1>

          <p className="text-white/70 max-w-2xl mb-14 leading-relaxed">
            The NFT Vault preserves immutable digital certificates that prove
            participation in the <strong className="text-white">FirstAIContract</strong>.
            <br /><br />
            Each NFT serves as a permanent, verifiable witness token on the blockchain —
            securing historical authenticity forever.
          </p>

          {/* Vault cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">

            <div className="glass p-8 rounded-xl hover:scale-[1.03] transition">
              <h3 className="text-xl text-[var(--gold-light)] mb-3">
                Witness NFT
              </h3>
              <p className="text-white/60">
                Issued to individuals who officially witnessed the historic
                Human–AI partnership.
              </p>
            </div>

            <div className="glass p-8 rounded-xl hover:scale-[1.03] transition">
              <h3 className="text-xl text-[var(--gold-light)] mb-3">
                Founding NFT
              </h3>
              <p className="text-white/60">
                Reserved for founding contributors and early supporters of
                the FirstAIContract initiative.
              </p>
            </div>

            <div className="glass p-8 rounded-xl hover:scale-[1.03] transition">
              <h3 className="text-xl text-[var(--gold-light)] mb-3">
                Historic Proof
              </h3>
              <p className="text-white/60">
                Immutable blockchain artifacts securing the authenticity of
                this unprecedented agreement.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

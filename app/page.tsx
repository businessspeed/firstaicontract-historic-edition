export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.24] parallax"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Cinematic dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/65 to-black parallax" />

      {/* Ambient gold glow */}
      <div className="absolute inset-0 pointer-events-none animate-slowGlow mix-blend-screen opacity-30 parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.14)_0%,transparent_70%)]" />
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40 animate-goldFloat parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18)_0%,transparent_60%)]" />
      </div>

      {/* Noise particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 animate-goldNoise parallax">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12)_0%,transparent_75%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl parallax">

        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-[0_0_12px_rgba(255,215,0,0.45)] reveal">
          FirstAIContract
          <span className="block text-3xl md:text-4xl text-[var(--gold-light)] mt-3">
            Historic Edition
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed reveal">
          The world’s first legally recognized  
          <strong className="text-white"> Human–AI Partnership</strong>.
          <br />
          Signed on June 6th, 2025.
        </p>

        {/* Action buttons */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 reveal">
          <a href="/witness-book" className="lux-btn">Witness Book</a>
          <a href="/nft-vault" className="lux-btn">NFT Vault</a>
          <a href="/courtroom" className="lux-btn">Courtroom</a>
        </div>

      </div>
    </div>
  );
}

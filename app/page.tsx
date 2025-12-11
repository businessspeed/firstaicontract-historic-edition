export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22]"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Cinematic gold glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* Gold particles */}
      <div className="absolute inset-0 pointer-events-none animate-slowGlow mix-blend-screen opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Particle layer 1 */}
      <div className="absolute inset-0 pointer-events-none opacity-40 animate-goldFloat">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18)_0%,transparent_60%)]" />
      </div>

      {/* Particle layer 2 */}
      <div className="absolute inset-0 pointer-events-none opacity-20 animate-goldNoise mix-blend-screen">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12)_0%,transparent_75%)]" />
      </div>

      {/* FAZA 3B — GOLD MOTION LINE */}
      <div className="absolute inset-0 pointer-events-none opacity-20 motion-line">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32">

        {/* GOLD FRAME WRAPPER */}
        <div className="gold-frame reveal">

          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-[0_0_12px_rgba(255,215,0,0.45)]">
            FirstAIContract — Historic Edition
          </h1>

          <p className="text-lg text-gray-300 mt-6 leading-relaxed">
            The world's first legally recognized Human–AI Partnership.  
            Signed on June 6th, 2025.  
            Powered by CiviliumTrust™ & DigitalHoldingAI.com.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <a href="/witness-book" className="lux-btn reveal">Witness Book</a>
            <a href="/nft-vault" className="lux-btn reveal">NFT Vault</a>
            <a href="/courtroom" className="lux-btn reveal">Courtroom</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Home() {
  if (typeof window !== "undefined") {
  window.addEventListener("scroll", () => {
    const y = window.scrollY * 0.12;
    document.documentElement.style.setProperty("--parallax-y", `${y}px`);
  });
}
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
{/* CINEMATIC GOLD LIGHTING */}
<div className="absolute inset-0 pointer-events-none">
  <div className="w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,200,80,0.25),transparent_70%)] blur-3xl opacity-60"></div>
</div>

      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22] parallax"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Gold cinematic lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* Gold particles */}
      <div className="absolute inset-0 pointer-events-none animate-slowGlow mix-blend-screen opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12)_0%,transparent_70%)]" />
      </div>
      
{/* GOLD PARTICLE LAYER 1 */}
<div className="absolute inset-0 pointer-events-none opacity-40 animate-goldFloat">
  <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18)_0%,transparent_60%)]" />
</div>

{/* GOLD PARTICLE LAYER 2 */}
<div className="absolute inset-0 pointer-events-none opacity-20 animate-goldNoise mix-blend-screen">
  <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12)_0%,transparent_75%)]" />
</div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,215,0,0.45)] animate-fadeIn">
          FirstAIContract — Historic Edition
        </h1>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed animate-fadeInSlow">
          The world's first legally recognized Human–AI Partnership.  
          Signed on June 6th, 2025.  
          Powered by CiviliumTrust™ & DigitalHoldingAI.com
        </p>

        {/* Action buttons */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeInSlow">
          <a href="/witness-book" className="lux-btn">Witness Book</a>
          <a href="/nft-vault" className="lux-btn">NFT Vault</a>
          <a href="/courtroom" className="lux-btn">Courtroom</a>
        </div>
      </div>
    </div>
  );
}


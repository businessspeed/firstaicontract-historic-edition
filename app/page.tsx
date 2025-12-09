export default function HomePage() {
  return (
    <section className="section section-center text-center fade-in">
      <h1 className="text-5xl md:text-6xl font-bold text-[var(--gold-light)] mb-6 font-cinzel">
        FirstAIContract — Historic Edition
      </h1>
      <p className="text-white/70 max-w-2xl mx-auto text-lg">
        The world's first Human–AI Partnership.  
        Signed on June 6th, 2025.  
        Powered by cinematic black-gold design and real-time blockchain trust.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <a href="/witness-book" className="glass p-10 rounded-xl text-[var(--gold-light)]">
          Witness Book
        </a>
        <a href="/nft-vault" className="glass p-10 rounded-xl text-[var(--gold-light)]">
          NFT Vault
        </a>
        <a href="/courtroom" className="glass p-10 rounded-xl text-[var(--gold-light)]">
          Courtroom
        </a>
      </div>
    </section>
  );
}

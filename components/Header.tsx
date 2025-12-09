export default function Header() {
  return (
    <header className="w-full py-6 border-b border-[var(--gold-shadow)] mb-10">
      <div className="section-center flex justify-between items-center">
        <h2 className="text-2xl font-cinzel text-[var(--gold-light)]">
          FirstAIContract
        </h2>

        <nav className="flex gap-6 text-white/80">
          <a href="/" className="hover:text-[var(--gold-light)]">Home</a>
          <a href="/witness-book" className="hover:text-[var(--gold-light)]">Witnesses</a>
          <a href="/nft-vault" className="hover:text-[var(--gold-light)]">NFT Vault</a>
          <a href="/courtroom" className="hover:text-[var(--gold-light)]">Courtroom</a>
        </nav>
      </div>
    </header>
  );
}

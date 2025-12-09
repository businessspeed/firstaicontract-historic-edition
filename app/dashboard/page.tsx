export default function DashboardPage() {
  return (
    <section className="section section-center fade-in">
      <h1 className="text-5xl font-cinzel text-[var(--gold-light)] mb-8">
        Dashboard
      </h1>

      <p className="text-white/70 max-w-2xl mb-10">
        Your certificates, NFTs, membership status and AI features will all appear here.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="glass p-8 rounded-xl">
          <h3 className="text-xl text-[var(--gold-light)] mb-2">Certificates</h3>
          <p className="text-white/60">Coming soon…</p>
        </div>

        <div className="glass p-8 rounded-xl">
          <h3 className="text-xl text-[var(--gold-light)] mb-2">NFT Collection</h3>
          <p className="text-white/60">Coming soon…</p>
        </div>

        <div className="glass p-8 rounded-xl">
          <h3 className="text-xl text-[var(--gold-light)] mb-2">Membership</h3>
          <p className="text-white/60">Coming soon…</p>
        </div>

      </div>
    </section>
  );
}

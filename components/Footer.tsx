export default function Footer() {
  return (
    <footer className="w-full py-10 mt-20 border-t border-[var(--gold-shadow)]">
      <div className="section-center text-center text-white/60 text-sm">
        <p>© {new Date().getFullYear()} FirstAIContract — Historic Edition</p>
        <p className="mt-2">Human–AI Partnership • Signed June 6th, 2025</p>
      </div>
    </footer>
  );
}

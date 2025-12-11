import "../styles/globals.css";
import "../styles/theme.css";
import Footer from "../components/Footer";
import LanguageProvider from "../components/LanguageProvider";

export const metadata = {
  title: "FirstAIContract — Historic Edition",
  description: "The world's first Human–AI Partnership platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className="bg-transparent text-white font-sans antialiased">
      <script
  dangerouslySetInnerHTML={{
    __html: `
      document.addEventListener("scroll", () => {
        document.querySelectorAll('.reveal').forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
          }
        });
      });
    `,
  }}
/script>

        <LanguageProvider>

          {/* PREMIUM DELUXE NAVBAR */}
          <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-[#d4af37]/20 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
              
              {/* Logo / Title */}
              <a href="/" className="text-xl font-bold text-white tracking-wide">
                FirstAIContract
              </a>

              {/* Navigation Links */}
              <div className="flex gap-6 text-gray-300">
                <a href="/" className="hover:text-[#d4af37] transition">Home</a>
                <a href="/witness-book" className="hover:text-[#d4af37] transition">Witness Book</a>
                <a href="/nft-vault" className="hover:text-[#d4af37] transition">NFT Vault</a>
                <a href="/courtroom" className="hover:text-[#d4af37] transition">Courtroom</a>
              </div>
            </nav>

            {/* Gold Signature Line */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60"></div>
          </header>

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

        </LanguageProvider>
      </body>
    </html>
  );
}

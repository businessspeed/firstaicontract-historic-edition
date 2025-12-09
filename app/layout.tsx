import "../styles/globals.css";
import "../styles/theme.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguageProvider from "../components/LanguageProvider";

export const metadata = {
  title: "FirstAIContract — Historic Edition",
  description: "The world's first Human–AI Partnership platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

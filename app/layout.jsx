export const metadata = {
  title: "Luxora — Perfumería Premium",
  description: "Tienda especializada en perfumes originales con envío gratis a todo México.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          LUXORA — PERFUMES ORIGINALES
        </header>

        <main className="container">
          {children}
        </main>

        <footer className="footer">
          © {new Date().getFullYear()} LUXORA. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}

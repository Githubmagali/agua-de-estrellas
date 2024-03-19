import "./globals.css";
import Navbar from './../components/navbar'
import Footer from './../components/footer'




export const metadata = {
  title: "Tarot Agua De Estrellas",
  description: "Tarot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>

      
    </html>
  );
}

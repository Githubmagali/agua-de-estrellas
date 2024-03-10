import "./globals.css";
import Navbar from './../components/navbar'


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
        </body>

      
    </html>
  );
}

import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "MyBlog",
  description: "Made With &hearts;",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

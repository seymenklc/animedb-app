import { Outlet } from "react-router-dom";
// components
import Navbar from "@/components/Layout/Navbar/Navbar";
import Footer from "@/components/Layout/Footer/Footer";

export default function Layout() {
  return (
    <main className="min-h-screen app-container flex flex-col justify-between gap-12">
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

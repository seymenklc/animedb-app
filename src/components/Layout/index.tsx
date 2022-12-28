import { Outlet } from "react-router-dom";
// components
import Navbar from "@/components/Layout/Navbar/Navbar";
import Footer from "@/components/Layout/Footer";

export default function Layout() {
    return (
        <main className='h-screen app-container'>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </main>
    );
}
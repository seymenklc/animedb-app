import { Link } from 'react-router-dom';
// components
import Input from '@/components/Layout/Navbar/Input';
import NavItems from '@/components/Layout/Navbar/NavItems';
import HamburgerButton from '@/components/Layout/Navbar/HamburgerButton';

export default function Navbar() {
    return (
        <header className='flex flex-col md:flex-row md:items-stretch items-center'>
            <div className="py-6 px-9 gap-16 lg:px-5 flex justify-between items-center w-full">
                <Link to='/'>
                    <h1 className="lg:text-4xl text-3xl font-bold text-slate-200">AnimeDB</h1>
                </Link>
                <div className="md:flex gap-7 items-center hidden">
                    <nav className="flex items-center gap-3 text-slate-200 text-xl lg:text-lg">
                        <NavItems />
                    </nav>
                    <Input />
                </div>
                <HamburgerButton />
            </div>
            <div className='md:hidden'><Input /></div>
        </header>
    );
}
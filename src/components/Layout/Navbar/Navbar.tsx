import { Link } from 'react-router-dom';
// components
import Input from '@/components/Layout/Navbar/Input';
import HamburgerButton from '@/components/Layout/Navbar/HamburgerButton';

export default function Navbar() {
    return (
        <header className="py-6 px-9 lg:px-5 flex lg:justify-between justify-between items-center">
            <Link to='/'>
                <h1 className="lg:text-4xl text-3xl font-bold text-slate-200">AnimeDB</h1>
            </Link>
            <div className="md:flex gap-7 items-center hidden">
                <nav className="flex items-center gap-3 text-slate-200 text-xl lg:text-lg">
                    <Link to='/' className='hover:bg-gray-700 p-2 rounded-md transition-all duration-300'>
                        Home
                    </Link>
                    <Link to='/favorites' className='hover:bg-gray-700 p-2 rounded-md transition-all duration-300'>
                        Favorites
                    </Link>
                </nav>
                <Input />
            </div>
            <HamburgerButton />
        </header>
    );
}
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function HamburgerButton() {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <>
            <button
                onClick={() => setMobileMenu(!mobileMenu)}
                type="button"
                className="md:hidden inline-flex items-center p-2 text-sm bg-gray-800
              text-slate-200 rounded-lg hover:bg-gray-700 focus:outline-none relative"
            >
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
            {/* menu items */}
            <nav className={`${mobileMenu ? 'visible ' : 'hidden'} absolute top-20 right-8 z-10 w-44 rounded shadow dark:bg-gray-700`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <Link to='/' className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Earnings
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Sign out
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    );
}
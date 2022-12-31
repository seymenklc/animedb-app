import { Fragment, useState } from "react";
// components
import NavItems from "@/components/Layout/Navbar/NavItems";

export default function HamburgerButton() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleBlur = () => {
        setTimeout(() => {
            setMobileMenu(false);
        }, 100);
    };

    return (
        <Fragment>
            <button
                onBlur={handleBlur}
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
                <div className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    <div className="flex flex-col py-1 px-4">
                        <NavItems />
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}
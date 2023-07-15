import { useState, useRef, useEffect } from "react";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <header className="absolute w-full z-30 bg-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 tracking-widest">

          {/* Site branding */}
          <div className="shrink-0 mr-4 relative">
            {/* Logo */}
            <a href="/" className="block" aria-label="Cruip">
              <div className="flex items-center hover:text-purple-600 ease-in duration-300 text-white ang">
                Pol y Meli
              </div>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu as */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#counter"
                  className="text-gray-300 hover:text-gray-100 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-gray-300 hover:text-gray-100 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Ayudanos
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-gray-100 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Luna de miel
                </a>
              </li>
              {/* 1st level: hover */}
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <a
                    href="#workflow"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Confirma tu asistencia
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

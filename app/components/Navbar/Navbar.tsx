const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#About' },
    { name: 'Song', href: '#Song' },
]

export function Navbar() {
    return (
        <nav className="relative flex flex-row justify-between items-center w-full h-14 sm:h-16 px-3 min-[400px]:px-5 md:px-8 bg-pale-cream text-black">
            {/* Logo */}
            <a href="/" className="shrink-0">
                <img
                    src="/assets/logo/logo_no_bg.png"
                    alt="Logo"
                    className="h-12 min-[400px]:h-14 md:h-20 w-auto"
                />
            </a>

            {/* Navigation Links */}
            <div className="flex items-center md:absolute md:left-1/2 md:-translate-x-1/2 gap-1.5 min-[400px]:gap-3 sm:gap-5 md:gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 sm:gap-2.5 font-bangers px-2 min-[400px]:px-3 md:px-4 py-0.5 text-lg min-[400px]:text-xl md:text-2xl hover:text-white hover:bg-red hover:-rotate-2 hover:shadow-[-3px_3px_0px_#000000] md:hover:shadow-[-4px_4px_0px_#000000] transition-all duration-300 ease-in-out"
                    >
                        {link.name}

                        {/* Titik Lingkaran Merah di dalam kotak Song, berubah putih saat hover */}
                        {link.name === 'Song' && (
                            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red group-hover:bg-white transition-colors duration-300 shrink-0" />
                        )}
                    </a>
                ))}
            </div>
        </nav>
    )
}
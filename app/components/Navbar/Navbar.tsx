const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#About' },
    { name: 'Song', href: '#Song' },
]

export function Navbar() {
    return (
        <nav className="relative flex flex-row justify-between items-center w-full h-15 px-8 bg-pale-cream text-black">
            <div>
                <img src="/assets/logo/logo_no_bg.png" alt="Logo" className="h-20 w-auto" />
            </div>
            <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="group inline-flex items-center gap-2.5 font-bangers px-4 text-2xl hover:text-white hover:bg-red hover:-rotate-2 hover:shadow-[-4px_4px_0px_#000000] transition-all duration-300 ease-in-out"
                    >
                        {link.name}

                        {/* Titik Lingkaran Merah di dalam kotak Song, berubah putih saat hover */}
                        {link.name === 'Song' && (
                            <span className="w-2.5 h-2.5 rounded-full bg-red group-hover:bg-white transition-colors duration-300 shrink-0" />
                        )}
                    </a>
                ))}
            </div>
        </nav>
    )
}
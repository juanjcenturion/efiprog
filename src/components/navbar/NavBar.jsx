

export default function NavBar(){

    return(
        <nav className="bg-gray-800">
            <div className="container flex">
                <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                    <span className="text-white">
                        <i className="fa-solid fa-bars"></i>
                    </span>
                    <span className="capitalize ml-2 text-white hidden">All Categories</span>

                    {/* Dropdown */}
                    <div
                        className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                        <a href="#" className="flex items-center justify-start px-6 py-3 hover:bg-gray-100 transition">
                            <span className="ml-1 text-gray-600 text-sm">Procesadores</span>
                        </a>
                        <a href="#" className="flex items-center justify-start px-6 py-3 hover:bg-gray-100 transition">
                            <span className="ml-1 text-gray-600 text-sm">Memorias Ram</span>
                        </a>
                        <a href="#" className="flex items-center justify-start px-6 py-3 hover:bg-gray-100 transition">
                            <span className="ml-1 text-gray-600 text-sm">Almacenamiento</span>
                        </a>
                        <a href="#" className="flex items-center justify-start px-6 py-3 hover:bg-gray-100 transition">
                            <span className="ml-1 text-gray-600 text-sm">Placas de Video</span>
                        </a>
                        <a href="#" className="flex items-center justify-start px-6 py-3 hover:bg-gray-100 transition">
                            <span className="ml-1 text-gray-600 text-sm">Monitores</span>
                        </a>
                        <a href="#" className="flex items-center  justify-start px-6 py-3 hover:bg-gray-100 transition">
                            <span className="ml-1 text-gray-600 text-sm">Notebooks</span>
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                    <div className="flex items-center space-x-6 capitalize">
                        <a href="/" className="text-gray-200 hover:text-white transition">Inicio</a>
                        <a href="pages/shop.html" className="text-gray-200 hover:text-white transition">Categorias</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Sobre Nosotros</a>
                        <a href="/contact" className="text-gray-200 hover:text-white transition">Contactanos</a>
                    </div>
                    <a href="#" className="text-gray-200 hover:text-white transition">Login</a>
                </div>
            </div>
        </nav>
    )
}
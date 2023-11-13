

export default function NavBar() {

    return (
        <nav className="nav-bar-color">
            <div className="container flex">


                <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                    <div className="flex items-center capitalize">
                        <a href="/" className="text-gray-200 hover:text-primary transition">Inicio</a>

                        <div className="px-4 py-4 md:flex items-center cursor-pointer relative group">
                            <span className="text-white">
                                <a href="pages/shop.html" className="text-gray-200 hover:text-primary transition">Categorias</a>
                            </span>
                            <span className="capitalize ml-2 text-white hidden">All Categories</span>

                            {/* Dropdown */}
                            <div
                                className="absolute left-5 z-50 top-full opacity-100 text-white nav-bar-color shadow-md py-3 divide-y divide-gray-300 divide-dashed group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                                <a href="/shop/procesadores" className="flex items-center justify-start px-6 py-3 hover:text-primary transition">
                                    <span className="ml-1 text-sm">Procesadores</span>
                                </a>
                                <a href="/shop/memoriasram" className="flex items-center justify-start px-6 py-3 hover:text-primary transition">
                                    <span className="ml-1 text-sm">Memorias Ram</span>
                                </a>
                                <a href="/shop/almacenamiento" className="flex items-center justify-start px-6 py-3 hover:text-primary transition">
                                    <span className="ml-1 text-sm">Almacenamiento</span>
                                </a>
                                <a href="/shop/placasdevideo" className="flex items-center justify-start px-6 py-3 hover:text-primary transition">
                                    <span className="ml-1 text-sm">Placas de Video</span>
                                </a>
                                <a href="/shop/monitores" className="flex items-center justify-start px-6 py-3 hover:text-primary transition">
                                    <span className="ml-1 marker:text-sm">Monitores</span>
                                </a>
                                <a href="/shop/notebooks" className="flex items-center  justify-start px-6 py-3 hover:text-primary transition">
                                    <span className="ml-1 text-sm">Notebooks</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="/login" className="text-gray-200 hover:text-primary transition">Iniciar Sesión</a>
                </div>
            </div>
        </nav>
    )
}
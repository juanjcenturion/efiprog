import logo from "../../assets/images/logo.svg"


export default function Header () {
    return(
        
        <header className="py-4 shadow-sm bg-white">
                <div className="container flex items-center justify-between">
                    <a href="index.html">
                    <img src={logo} alt="Logo" className="w-32"/>
                    </a>

                    <div className="w-full max-w-xl relative flex container" >
                        <span className="absolute left-4 top-4 text-lg text-gray-400 hidden md:flex">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input type="text" name="search" id="search"
                            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex "
                            placeholder="search"
                            />
                        <button
                            className="bg-primary border border-primary pt-3 text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">    
                            Search
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a href="/wishlist" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                            <div className="text-xs leading-3">Deseos</div>
                            <div
                                className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                3</div>
                        </a>
                        <a href="/carrito" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <i className="fa-solid fa-bag-shopping"></i>
                            </div>
                            <div className="text-xs leading-3">Carrito</div>
                            <div
                                className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                4</div>
                        </a>
                        <a href="/" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <i className="fa-regular fa-user"></i>
                            </div>
                            <div className="text-xs leading-3">Cuenta</div>
                        </a>
                    </div>
                </div>
            </header>
            )
}
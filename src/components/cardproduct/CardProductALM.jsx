import kingston240 from '../../assets/images/products/almacenamiento/ssdkingston240.jpg'
import kingston480 from '../../assets/images/products/almacenamiento/ssdkingston480.jpg'
import team128 from '../../assets/images/products/almacenamiento/ssdteam128.jpg'
import lexar480 from '../../assets/images/products/almacenamiento/ssdlexar480.jpg'


export default function CardProductALM() {
    return (
        <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white shadow rounded overflow-hidden group">
                    <div className="relative">
                        <img src={kingston240} alt="product 1" className="w-full" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">SSD Kingston - 240GB - A400</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$20.800</p>
                            <p className="text-sm text-gray-400 line-through">$22.650</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Agregar al carrito</a>
                </div>

                <div className="bg-white shadow rounded overflow-hidden group">
                    <div className="relative">
                        <img src={kingston480} alt="product 1" className="w-full" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">SSD Kingston - 480GB - A400</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$31.500</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Agregar al carrito</a>
                </div>

                <div className="bg-white shadow rounded overflow-hidden group">
                    <div className="relative">
                        <img src={team128} alt="product 1" className="w-full" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">SSD Team - 128GB - GX2 530MB/s</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$14.400</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Agregar al carrito</a>
                </div>

                <div className="bg-white shadow rounded overflow-hidden group">
                    <div className="relative">
                        <img src={lexar480} alt="product 1" className="w-full" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">SSD Lexar - 480GB - 550MB/s</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$25.900</p>
                            <p className="text-sm text-gray-400 line-through">$39.590</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Agregar al carrito</a>
                </div>
            </div>
        </div>
    )
}
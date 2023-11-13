import msi1650 from "../../assets/images/products/placas/msi1650.webp"
import msi1650_1 from "../../assets/images/products/placas/1msi1650.jpg"
import msi1650_2 from "../../assets/images/products/placas/2msi1650.jpg"
import msi1650_3 from "../../assets/images/products/placas/3msi1650.jpg"
import msi1650_4 from "../../assets/images/products/placas/4msi1650.jpg"


export default function Products() {
    return (
        <div className="container grid grid-cols-2 gap-6 pt-16">
            <div>
                <img src={msi1650} alt="product" className="w-40"/>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    <img src={msi1650} alt="product2"
                        className="w-full cursor-pointer border border-primary"/>
                    <img src={msi1650_1} alt="product2" className="w-full cursor-pointer border"/>
                    <img src={msi1650_2} alt="product2" className="w-full cursor-pointer border"/>
                    <img src={msi1650_3} alt="product2" className="w-full cursor-pointer border"/>
                    <img src={msi1650_4} alt="product2" className="w-full cursor-pointer border"/>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-medium uppercase mb-2">MSI GeForce - GTX 1650 - 4GB</h2>
                <div className="flex items-center mb-4">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                    </div>
                    <div className="text-xs text-gray-500 ml-3">(150 reseñas)</div>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-800 font-semibold space-x-2">
                        <span>Disponibilidad: </span>
                        <span className="text-green-600">En Stock</span>
                    </p>
                    <p className="space-x-2">
                        <span className="text-gray-800 font-semibold">Marca: </span>
                        <span className="text-gray-600">MSI</span>
                    </p>
                    <p className="space-x-2">
                        <span className="text-gray-800 font-semibold">Categoria: </span>
                        <span className="text-gray-600">Placas de Video</span>
                    </p>
                    <p className="space-x-2">
                        <span className="text-gray-800 font-semibold">Codigo: </span>
                        <span className="text-gray-600">BE45VGRT</span>
                    </p>
                </div>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-6">
                    <p className="text-xl text-primary font-semibold">$204.700</p>
                    <p className="text-base text-gray-400 line-through">$234.300</p>
                </div>
                <p className="mt-6 text-gray-600">La placa de video MSI GeForce RTX 1650 es una potente y eficiente tarjeta gráfica diseñada para brindar un rendimiento excepcional en juegos y aplicaciones de alta demanda gráfica. Equipada con la arquitectura NVIDIA Turing, esta tarjeta garantiza una experiencia de juego suave y realista, con gráficos nítidos y velocidades de fotogramas rápidas.</p>
                <p className="mt-6 text-gray-600"></p>
                <div className="mt-6">
                    <h3 className="text-sm text-gray-800 uppercase mb-2 mt-6">Quantity</h3>
                    <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                        <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                        <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                </div>

                <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                    <a href="#"
                        className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                        <i className="fa-solid fa-bag-shopping"></i> Agregar al carrito
                    </a>
                    <a href="#"
                        className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                        <i className="fa-solid fa-heart"></i> Favoritos
                    </a>
                </div>

                <div className="flex gap-3 mt-4">
                    <a href="#"
                        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#"
                        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#"
                        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
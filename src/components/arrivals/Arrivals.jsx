export default function Arrivals() {
    return(
        <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Nuevos lanzamientos</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="src/assets/images/products/Ryzen-9-7000.png" alt="product 1" className="w-full"/>
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
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"> AMD Ryzen 9 - 5.4 Ghz - 7900x </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$600.000</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(30)</div>
                    </div>
                </div>
                <a href="#"
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="src/assets/images/products/Asus-Rog.png" alt="product 1" className="w-full"/>
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
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">asus rog strix scar - 18 Inch</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$4.600.000</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(10)</div>
                    </div>
                </div>
                <a href="#"
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="src/assets/images/products/Rtx-4090.png" alt="product 1" className="w-full"/>
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
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                            GeForce Nvidia RTX 4090 TI</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$4.500.300</p>
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
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="src/assets/images/products/Samsung-980-Pro.png" alt="product 1" className="w-full"/>
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
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">ssd nvme m2 Samsung 980 pro</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$120.000</p>
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
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
        </div>
    </div>
    )
}

export default function Categories() {
    return (
        <div className="container py-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Comprar por Categoria</h2>
            <div className="grid grid-cols-3 gap-3">
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="src/assets/images/category/category-1.jpg" alt="Procesadores" className="w-full" />
                    <a href="/shop/procesadores"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Procesadores
                    </a>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="src/assets/images/category/category-2.png" alt="category 1" className="w-full" />
                    <a href="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Memorias Ram
                    </a>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="src/assets/images/category/category-3.png" alt="category 1" className="w-full" />
                    <a href="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Almacenamiento
                    </a>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="src/assets/images/category/category-4.png" alt="category 1" className="w-full" />
                    <a href="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Placas de video
                    </a>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="src/assets/images/category/category-5.png" alt="category 1" className="w-full" />
                    <a href="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Monitores
                    </a>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <img src="src/assets/images/category/category-6.png" alt="category 1" className="w-full" />
                    <a href="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Noteboks
                    </a>
                </div>
            </div>
        </div>
    )
}
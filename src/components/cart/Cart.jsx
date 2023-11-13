import asustuf from "../../assets/images/products/monitores/asus24tuf.jpg";
import corsair from '../../assets/images/products/memorias/corsair.jpg'
import kingston480 from '../../assets/images/products/almacenamiento/ssdkingston480.jpg'
import msi1650 from "../../assets/images/products/placas/msi1650.jpg"

export default function Cart() {
    return (
        <div className="container">
            <div className="col-span-9 space-y-4">
                <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                    <div className="w-29">
                        <img src={asustuf} alt="product 6" className="w-full" />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-gray-800 text-xl font-medium uppercase">ASUS 24 - TUF - VG24VQE</h2>
                        <p className="text-gray-500 text-sm">Disponibilidad: <span className="text-green-600">En Stock</span></p>
                    </div>
                    <div className="text-primary text-lg font-semibold">$183.000</div>
                    <div className="text-gray-600 cursor-pointer hover:text-primary">
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            <div className="col-span-9 space-y-4">
                <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                    <div className="w-29">
                        <img src={corsair} alt="product 6" className="w-full" />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-gray-800 text-xl font-medium uppercase">Corsair - DDR4 - 16GB (2x8GB) - 2666MHz</h2>
                        <p className="text-gray-500 text-sm">Disponibilidad: <span className="text-green-600">En Stock</span></p>
                    </div>
                    <div className="text-primary text-lg font-semibold">$52.500</div>
                    <div className="text-gray-600 cursor-pointer hover:text-primary">
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            <div className="col-span-9 space-y-4">
                <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                    <div className="w-29">
                        <img src={kingston480} alt="product 6" className="w-full" />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-gray-800 text-xl font-medium uppercase">SSD Kingston - 480GB - A400</h2>
                        <p className="text-gray-500 text-sm">Disponibilidad: <span className="text-green-600">En Stock</span></p>
                    </div>
                    <div className="text-primary text-lg font-semibold">$31.500</div>
                    <div className="text-gray-600 cursor-pointer hover:text-primary">
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            <div className="col-span-9 space-y-4">
                <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                    <div className="w-29">
                        <img src={msi1650} alt="product 6" className="w-full" />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-gray-800 text-xl font-medium uppercase">MSI GeForce - GTX 1650 - 4GB</h2>
                        <p className="text-gray-500 text-sm">Disponibilidad: <span className="text-green-600">En Stock</span></p>
                    </div>
                    <div className="text-primary text-lg font-semibold">$204.700</div>
                    <div className="text-gray-600 cursor-pointer hover:text-primary">
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            {/* Sección de Envío */}
            <div className="flex justify-between items-center gap-6 mt-4">
                <div className="w-1/3">
                    <label htmlFor="envio" className="text-gray-800 text-lg font-medium uppercase">Opción de Envío:</label>
                </div>
                <div className="w-1/3">
                    <select
                        id="envio"
                        className="border border-gray-300 p-2 rounded w-full"
                    >
                        <option value="envio-normal">Envío Normal</option>
                        <option value="envio-express">Envío Express</option>
                    </select>
                </div>
            </div>

            {/* Sección de Código de Descuento */}
            <div className="flex items-center justify-between mt-6">
                    <div className="">
                        <button
                            className="px-4 py-2 text-center text-md text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                        >
                            Aplicar Descuento
                        </button>
                    </div>
                    <div className="">
                        <input
                            type="text"
                            placeholder="Código de Descuento"
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>
            </div>
            <div className="flex items-center justify-between mt-6">
                <div className="mt-2">
                        <span className="text-gray-800 text-lg font-medium uppercase">Subtotal:</span>
                        <hr />
                        <span className="block text-gray-600 text-sm pt-3">Precio del Envío:</span>
                        <hr />
                        <span className="block text-gray-600 text-sm py-3 ">Descuento:</span>
                        <hr />
                        <span className="text-gray-800 text-lg font-medium uppercase py-3">total:</span>
                </div>
                <div className="text-primary text-lg font-semibold">
                        <span className="pt-3">$471.700</span>
                        <hr />
                        <span className="block py-3 text-gray-600 text-sm"> $3.000</span>
                        <hr />
                        <span className="block py-3 text-gray-600 text-sm"> $0.00</span>
                        <hr />
                        <span className="pt-3">$474.700</span>
                    </div>
                </div>
            </div>
    );
}
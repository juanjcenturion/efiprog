import kingston240 from '../../assets/images/products/almacenamiento/ssdkingston240.jpg'
import asustuf from "../../assets/images/products/monitores/asus24tuf.jpg"
import msi1650 from "../../assets/images/products/placas/msi1650.jpg"





export default function WishList() {
    return (
        <div className="col-span-9 space-y-4">
            <div className="flex flex-col items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28 mb-4">
                    <img src={asustuf} alt="product 6" className="w-full"/>
                </div>
                <div className="w-1/3 text-center">
                    <h2 className="text-gray-800 text-xs font-medium uppercase md:text-xl">ASUS 24 - TUF - VG24VQE</h2>
                    <p className="text-gray-500 text-xs md:text-sm">Disponibilidad: <span className="text-green-600">En Stock</span></p>
                </div>
                <div className="text-primary text-xs font-semibold md:text-lg">$183.000</div>
                <a href="#" className="px-4 py-2 text-center text-xs md:text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                    add to cart
                </a>
                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28 mb-4">
                    <img src={kingston240} alt="product 6" className="w-full"/>
                </div>
                <div className="w-1/3 text-center">
                    <h2 className="text-gray-800 text-xs md:text-xl font-medium uppercase">SSD Kingston - 240GB - A400</h2>
                    <p className="text-gray-500 text-xs md:text-sm">Disponibilidad: <span className="text-green-600">En Stock</span></p>
                </div>
                <div className="text-primary text-xs font-semibold md:text-lg">$20.800</div>
                <a href="#" className="px-4 py-2 text-center text-xs md:text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                    add to cart
                </a>
                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28 mb-4">
                    <img src={msi1650} alt="product 6" className="w-full"/>
                </div>
                <div className="w-1/3 text-center">
                    <h2 className="text-gray-800 text-xs md:text-xl font-medium uppercase">MSI GeForce - GTX 1650 - 4GB</h2>
                    <p className="text-gray-500 text-xs md:text-sm">Disponibilidad: <span className="text-red-600">Fuera de Stock</span></p>
                </div>
                <div className="text-primary text-xs font-semibold">$204.700</div>
                <a href="#"
                    className="px-4 py-2 text-center text-xs md:text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">add
                    to cart</a>

                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>
        </div>
    );
}
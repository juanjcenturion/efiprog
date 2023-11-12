import asustuf from "../../assets/images/products/monitores/asus24tuf.jpg";

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
            {/* Sección de Total y Botón de Pago */}
            <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">Total:</h2>
                </div>
                <div className="text-primary text-lg font-semibold">$408.500</div>
                <button
                    className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                >
                    Pagar
                </button>
            </div>
        </div>
    );
}
export default function FilterProduct() {
    return (
        <div className="container py-15">
            <div className="flex items-center mb-4">
                <select name="sort" id="sort"
                    className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                    <option value="">Filter</option>
                    <option value="price-low-to-high">Bajo Costo</option>
                    <option value="price-high-to-low">Alto Costo</option>
                    <option value="latest">Mas Vendidos</option>
                </select>

                <div className="flex gap-2 ml-auto">
                    <div
                        className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                        <i className="fa-solid fa-grip-vertical"></i>
                    </div>
                    <div
                        className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                        <i className="fa-solid fa-list"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
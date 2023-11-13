export default function Info() {
    return(
        <div className=" col-span-9 grid grid-cols-1 gap-6 z-10 lg:grid-cols-3">

            <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-800 text-lg">Perfil</h3>
                    <a href="#" className="text-primary">Edit</a>
                </div>
                <div className="space-y-1">
                    <h4 className="text-gray-700 font-medium">Facundo Gonzalez</h4>
                    <p className="text-gray-800">Facugonz@gmail.com</p>
                    <p className="text-gray-800">+54 9358 540 8233</p>
                </div>
            </div>

            <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-800 text-lg">Direccion de envio</h3>
                    <a href="#" className="text-primary">Edit</a>
                </div>
                <div className="space-y-1">
                    <h4 className="text-gray-700 font-medium">Casa</h4>
                    <p className="text-gray-800">Buenus Aires 645, Rio Cuarto</p>
                    <p className="text-gray-800">x5800</p>
                    <p className="text-gray-800">+54 9358 540 8233</p>
                </div>
            </div>

            <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-800 text-lg">Direccion de envio secundaria</h3>
                    <a href="#" className="text-primary">Edit</a>
                </div>
                <div className="space-y-1">
                    <h4 className="text-gray-700 font-medium">Trabajo</h4>
                    <p className="text-gray-800">Buenos Aires 125, Rio Cuarto</p>
                    <p className="text-gray-800">x5800</p>
                    <p className="text-gray-800">+54 9251 540 3358</p>
                </div>
            </div>

        </div>
    )
}
import avatar from "../../assets/images/avatar/User-Avatar.png" 

export default function SideBar() {
    return (
        <div className="grid col-span-3">
            <div className="px-4 py-3 shadow flex items-center gap-4">
                <div className="flex-shrink-0">
                    <img src={avatar} alt="profile"
                        className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"/>
                </div>
                <div className="flex-grow">
                    <p className="text-gray-600">Hola,</p>
                    <h4 className="text-gray-800 font-medium">Facundo</h4>
                </div>
            </div>

            <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div className="space-y-1 pl-8">
                    <a href="#" className="block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-regular fa-address-card"></i>
                        </span>
                        Administrar Cuenta
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Informacion del Perfil
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Gestionar Dirección
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Cambiar Contraseña
                    </a>
                </div>

                <div className="space-y-1 pl-8 pt-4">
                    <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-solid fa-box-archive"></i>
                        </span>
                        Historial
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Mis Devoluciones
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Mis Cancelaciones
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Mis Reseñas
                    </a>
                </div>

                <div className="space-y-1 pl-8 pt-4">
                    <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-regular fa-credit-card"></i>
                        </span>
                        Metodos de Pago
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Tarjeta
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Paypal
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Bitcoins (BTC)
                    </a>
                </div>

                <div className="space-y-1 pl-8 pt-4">
                    <a href="#" className="relative text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-regular fa-heart"></i>
                        </span>
                        Mi Lista de Deseos
                    </a>
                </div>

                <div className="space-y-1 pl-8 pt-4">
                    <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </span>
                        Cerrar Sesión
                    </a>
                </div>

            </div>
        </div>
    )
}
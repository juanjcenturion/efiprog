export default function Features () {
    return (
        <div className="container py-16">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="src/assets/images/icons/delivery-van.svg" alt="Delivery" className="w-12 h-12 object-contain"/>
                <div>
                    <h4 className="font-medium capitalize text-lg">Envio Gratis</h4>
                    <p className="text-gray-500 text-sm">Con tu compra sobre los $50.000</p>
                </div>
            </div>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="src/assets/images/icons/money-back.svg" alt="Delivery" className="w-12 h-12 object-contain"/>
                <div>
                    <h4 className="font-medium capitalize text-lg">Devoluciones</h4>
                    <p className="text-gray-500 text-sm">Garantía de reembolso en 30 días</p>
                </div>
            </div>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="src/assets/images/icons/service-hours.svg" alt="Delivery" className="w-12 h-12 object-contain"/>
                <div>
                    <h4 className="font-medium capitalize text-lg">Soporte 24/7</h4>
                    <p className="text-gray-500 text-sm">Atención especializada en todo momento</p>
                </div>
            </div>
        </div>
    </div>
    )
}
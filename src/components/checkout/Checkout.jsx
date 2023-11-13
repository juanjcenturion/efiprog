export default function Checkout() {
    return (
        <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">

            <div className="col-span-8 border border-gray-200 p-4 rounded">
                <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="text-gray-600">Nombre <span
                                className="text-primary">*</span></label>
                            <input type="text" name="first-name" id="first-name" className="input-box" />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="text-gray-600">Apellido <span
                                className="text-primary">*</span></label>
                            <input type="text" name="last-name" id="last-name" className="input-box" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="company" className="text-gray-600">Empresa (opcional)</label>
                        <input type="text" name="company" id="company" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="region" className="text-gray-600">País</label>
                        <input type="text" name="region" id="region" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="address" className="text-gray-600">Provincia</label>
                        <input type="text" name="address" id="address" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="city" className="text-gray-600">Localidad</label>
                        <input type="text" name="city" id="city" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-gray-600">Número de telefono</label>
                        <input type="text" name="phone" id="phone" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-600">Direccion</label>
                        <input type="email" name="email" id="email" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="company" className="text-gray-600">Email</label>
                        <input type="text" name="company" id="company" className="input-box" />
                    </div>
                </div>

            </div>

            <div className="col-span-4 border border-gray-200 p-4 rounded">
                <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">Resumen</h4>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <div>
                            <h5 className="text-gray-800 font-medium">Monitor</h5>
                            <p className="text-sm text-gray-600">Asus VG24VQE</p>
                        </div>
                        <p className="text-gray-600">
                            x1
                        </p>
                        <p className="text-gray-800 font-medium">$183.000</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="text-gray-800 font-medium">Memoria RAM</h5>
                            <p className="text-sm text-gray-600">16GB - Corsair</p>
                        </div>
                        <p className="text-gray-600">
                            x1
                        </p>
                        <p className="text-gray-800 font-medium">$52.500</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="text-gray-800 font-medium">SSD Kingston</h5>
                            <p className="text-sm text-gray-600">480GB - A400</p>
                        </div>
                        <p className="text-gray-600">
                            x1
                        </p>
                        <p className="text-gray-800 font-medium">$31.500</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="text-gray-800 font-medium">Tarjeta Grafica</h5>
                            <p className="text-sm text-gray-600">MSI GeForce - 4GB</p>
                        </div>
                        <p className="text-gray-600">
                            x1
                        </p>
                        <p className="text-gray-800 font-medium">$204.700</p>
                    </div>
                </div>

                <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                    <p>subtotal</p>
                    <p>$471.700</p>
                </div>

                <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                    <p>envío</p>
                    <p>$3.000</p>
                </div>

                <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
                    <p className="font-semibold">Total</p>
                    <p>$474.700</p>
                </div>
                <label htmlFor="envio" className="text-gray-800 font-medium py-3 ">Opción de pago:</label>
                <select
                    id="envio"
                    className="border border-gray-300 p-2 rounded w-full"
                >
                    <option value="envio-normal">Tarjeta</option>
                    <option value="envio-express">Paypal</option>
                    <option value="envio-express">BitCoins(BTC)</option>
                </select>

                <div className="flex items-center mb-4 mt-2">
                    <input type="checkbox" name="aggrement" id="aggrement"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                    <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer text-sm">Acepto los <a href="#"
                        className="text-primary">Términos y condiciones</a></label>
                </div>

                <a href="#"
                    className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Comprar</a>
            </div>

        </div>

    )
}
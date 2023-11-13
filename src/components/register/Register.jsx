export default function Register () {
    return (
        <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">Crear una nueva cuenta</h2>
            <htmlForm action="#" method="post" autoComplete="off">
                <div className="space-y-2">
                    <div>
                        <label htmlFor="name" className="text-gray-600 mb-2 block">Nombre de usuario</label>
                        <input type="text" name="name" id="name"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="nombre de usuario"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">Email</label>
                        <input type="email" name="email" id="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="techcom@gmail.com"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block">Contraseña</label>
                        <input type="password" name="password" id="password"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                    <div>
                        <label htmlFor="confirm" className="text-gray-600 mb-2 block">Confirmar Contraseña</label>
                        <input type="password" name="confirm" id="confirm"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" name="aggrement" id="aggrement"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                        <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">He leído y acepto los <a
                                href="#" className="text-primary">términos y condiciones</a></label>
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                    Crear Cuenta
                    </button>
                </div>
            </htmlForm>

            <div className="mt-6 flex justify-center relative">
                <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">O registrate con</div>
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div className="mt-4 flex gap-4">
                <a href="#"
                    className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="#"
                    className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div>

            <p className="mt-4 text-center text-gray-600">Ya tienes una cuenta? <a href="login.html"
                    className="text-primary">Iniciar Sesión</a></p>
        </div>
    </div>
    )
}
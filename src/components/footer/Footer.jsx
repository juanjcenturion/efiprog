import logo from '../../assets/images/logo.svg'


export default function Footer (){
    return(
        <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-1 ">
            <div className="col-span-1 space-y-4">
                <img src={logo} alt="logo" className="w-28"/>
                <div className="mr-2">
                    <p className="text-gray-500">
                        Haz realidad tus proyectos informáticos con la calidad y rendimiento que mereces
                    </p>
                </div>
                <div className="flex space-x-5">
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-facebook-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-instagram-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-twitter-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
}
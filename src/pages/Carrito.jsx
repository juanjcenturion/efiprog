import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import Cart from "../components/cart/Cart";


export default function Carrito () {
    const namePage = 'Carrito'
    return (
        <div>
            <BreadCrumb text={namePage}/>
            <Cart/>
        </div>
    )
}
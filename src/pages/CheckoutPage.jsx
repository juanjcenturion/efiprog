import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import Checkout from "../components/checkout/Checkout";

export default function CheckoutPage (){
    const namePage = 'Checkout'
    return(
        <div>
            <BreadCrumb text={namePage}/>
            <Checkout/>
        </div>
    )
}
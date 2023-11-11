import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import CardProduct from "../components/cardproduct/CardProduct";

export default function ShopP () {
    const namePage = 'Procesadores'
    return (
        <div>
            <BreadCrumb text={namePage}/>
            <CardProduct/>
        </div>
    )
}
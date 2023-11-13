import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import CardProductP from "../components/cardproduct/CardProductP";
import FilterProduct from "../components/filterproduct/FilterProduct";



export default function ShopP () {
    const namePage = 'Procesadores'
    return (
        <div>
            <BreadCrumb text={namePage}/>
            <FilterProduct/>
            <CardProductP/>
        </div>
    )
}
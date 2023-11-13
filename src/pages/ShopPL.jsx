import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import CardProductPL from "../components/cardproduct/CardProductPL";
import FilterProduct from "../components/filterproduct/FilterProduct";



export default function ShopPL () {
    const namePage = 'Placas de Video'
    return (
        <div>
            <BreadCrumb text={namePage}/>
            <FilterProduct/>
            <CardProductPL/>
        </div>
    )
}
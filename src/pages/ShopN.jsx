import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import CardProductN from "../components/cardproduct/CardProductN";
import FilterProduct from "../components/filterproduct/FilterProduct";


export default function ShopN () {
    const namePage = 'Notebooks'
    return (
        <div>
            <BreadCrumb text={namePage}/>
            <FilterProduct/>
            <CardProductN/>
        </div>
    )
}
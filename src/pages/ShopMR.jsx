import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import CardProductMR from "../components/cardproduct/CardProductMR";
import FilterProduct from "../components/filterproduct/FilterProduct";


export default function ShopMR () {
    const namePage = 'Memorias Ram'
    return (
        <div>
            <BreadCrumb text={namePage}/>
            <FilterProduct/>
            <CardProductMR/>
        </div>
    )
}
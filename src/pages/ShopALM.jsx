import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import CardProductALM from "../components/cardproduct/CardProductALM";
import FilterProduct from "../components/filterproduct/FilterProduct";


export default function ShopALM () {
    const namePage = 'Almacenamiento'
    return (
        <div>
            <BreadCrumb text={namePage}/>
            <FilterProduct/>
            <CardProductALM/>
        </div>
    )
}
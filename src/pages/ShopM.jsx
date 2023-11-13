import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import CardProductM from "../components/cardproduct/CardProductM";
import FilterProduct from "../components/filterproduct/FilterProduct";



export default function ShopM () {
    const namePage = 'Monitores'
    return (
        <div>
            <BreadCrumb text={namePage}/>
            <FilterProduct/>
            <CardProductM/>
        </div>
    )
}
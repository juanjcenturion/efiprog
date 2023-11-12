import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import Wrapper from "../components/wrapper/Wrapper";

export default function WishListPage() {
    const pageName = 'Lista de Deseados'
    return(
        <div>
            <BreadCrumb text={pageName}/>
            <Wrapper/>
        </div>
    )
}
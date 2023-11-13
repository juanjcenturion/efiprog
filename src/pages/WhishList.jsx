import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import WishList from "../components/wishlist/WishList";

import Wrapper from "../components/wrapper/Wrapper";

export default function WishListPage() {
    const pageName = 'Lista de Deseados'
    return(
        <div>
            <BreadCrumb text={pageName}/>
            <Wrapper component={<WishList/>}/>
        </div>
    )
}
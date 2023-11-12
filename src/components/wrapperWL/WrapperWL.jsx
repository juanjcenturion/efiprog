import SideBar from "../sidebar/SideBar";
import WishList from "../wishlist/WishList";

export default function Wrapper() {
    return (
        <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
            {/* FALTA RESPONSIVE */}
            <SideBar/>
            <WishList/>
        </div>
    )
}
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import Register from "../components/register/Register";

export default function RegisterPage() {
    const pageName = 'Register'
    return(
        <div>
            <BreadCrumb text={pageName}/>
            <Register/>
        </div>
    )
}
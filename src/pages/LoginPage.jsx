import Login from "../components/login/Login";
import BreadCrumb from "../components/breadcrumb/BreadCrumb"



export default function LoginPage() {
    const pageName = 'Login'
    return (
        <div>
            <BreadCrumb text={pageName}/>
            <Login/>
        </div>
    )
}
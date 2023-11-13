import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import Info from '../components/info/Info'
import Wrapper from '../components/wrapper/Wrapper'
export default function Account (){
    const namePage = 'Cuenta'
    return(
        <div>
            <BreadCrumb text={namePage}/>
            <Wrapper component={<Info/>}/>
        </div>
    )
}
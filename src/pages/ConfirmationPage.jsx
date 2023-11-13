import PurchaseConfirmation from "../components/purcharseconfirmation/PurcharseConfirmation";
import BreadCrumb from "../components/breadcrumb/BreadCrumb"

export default function ConfirmationPage(){
    const pageName = 'Confirmation'
    return (
        <div>
            <BreadCrumb text={pageName}/>
            <PurchaseConfirmation/>
        </div>
    )
}
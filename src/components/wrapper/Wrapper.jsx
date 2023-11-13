import SideBar from "../sidebar/SideBar";

export default function Wrapper(props) {
    return (
        <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
            {/* FALTA RESPONSIVE */}
            <SideBar/>
            {props.component}
        </div>
    )
}
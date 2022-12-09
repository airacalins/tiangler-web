import SideNav from "../SideNav/SideNav";

function NavigationContainer() {
    return <div className="d-flex">
        <div className="vh-100 background__color--primary" style={{ width: "15%" }}>
            <SideNav />
        </div>

        <div className="w-100 background__color--secondary">

        </div>
    </div>
}

export default NavigationContainer;
import React, { useEffect } from "react";
import SideNav from "../Components/Nav/sideNav";
import "../Styles/Dashboard.css";


function Dashboard() {
    useEffect(() => {
        document.title = 'Dashboard'
    }, []);
    return (
        <>
            <SideNav activePage={"dashboard"} />
        </>
    )
}

export default Dashboard;

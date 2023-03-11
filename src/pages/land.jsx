import React from "react";
import Navbar from "../components/navbarhome/navbarhome";
import Landmain from "../components/landmain/landmain";
import LandFooter from "../components/landfooter/landfooter";
export default function home() {
    return (
        <div>
            <Navbar />
            <Landmain />
            <LandFooter />
        </div>
    );
}


import React from "react";
import Navbar from "../components/navbarhome/navbarhome";
import Landmain from "../components/landmain/landmain";
import LandFooter from "../components/landfooter/landfooter";
import Land2 from "../components/land2/land2";
import Land3 from "../components/land3/land3"
export default function home() {
    return (
        <div>
            <Navbar />
            <Landmain />
            <Land2/>
            <Land3/>
            <LandFooter />
        </div>
    );
}


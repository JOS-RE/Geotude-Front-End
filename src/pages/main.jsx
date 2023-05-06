import React from "react";
import Navbar from "../components/navbarhome/navbarhome";
import Maincam from "../components/maincam/maincam";
import Chatbox from "../components/chatbox/chatbox";

export default function main() {
    
    return (
        <div>
            <Navbar />
            <Maincam />
            <Chatbox />
        </div>
    );
}
import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom"

export const Homepage = () => {

    const navigate = useNavigate();

   return (
    <>
        <div className="hpage">
            <h1>WELCOME</h1>
            <div className="button" onClick={()=>navigate("/login")}>Logout</div>
        </div>
    </>
   );
};

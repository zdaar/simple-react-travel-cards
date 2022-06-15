import React from "react";
import earthLogo from "../images/earth.png";

export default function Navbar() {
  return (
    <nav>
        <img src={earthLogo} alt="a logo of the earth" />
        <p>my travel journal.</p>
    </nav>
  )
 }
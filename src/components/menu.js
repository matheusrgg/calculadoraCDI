import { useState } from "react";

import logo from '../assets/investment-calculator-logo.png';

function Menu(props) {




    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
            <button>LCA</button>
            <button>CDB</button>
        </header>
    )
}


export default Menu

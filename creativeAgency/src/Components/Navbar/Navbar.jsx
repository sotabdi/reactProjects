import React from "react";
import './Navbar.css';
import Logo from "../../assets/Logo.png";
import Button from "../../CommonComponents/Button";

function Navbar (){
    const menuItem = ["Home","About","Service","Blog","Contact"];
    return(
        <div id="navBarFull">
            <div className="container">
                <div className="navBar">
                    <div className="logo">
                        <picture>
                            <img src={Logo} alt={Logo} />
                        </picture>
                    </div>
                    <div className="menuItems">
                        <ul className="menuItemFlex">
                            {menuItem.map(item => (
                                <li><a href="#" className="listItem">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <Button clss={'DarkBtn'} content={'Contact Us'}></Button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
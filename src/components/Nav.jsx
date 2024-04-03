import React from "react";

const Nav = props =>
    <nav className="font-extralight mr-[.9375rem] text-[.90278vw] max-sm:m-0">
        <ul className="h-full flex gap-9px *:my-auto">
            <li className="text-light-green text-[max(.90278vw,.43125rem)] hover:text-light-green-600"><u>SUPORTE</u></li>
            {props.elements.map((element, index) => <li key={index}>{element}</li> )}
        </ul>
    </nav>

export default Nav
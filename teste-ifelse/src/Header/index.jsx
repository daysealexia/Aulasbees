import React, { useState } from "react";
import "./Header.css";

function Header(){
    const [titulo, setTitulo] = useState('Sem nome');
    const [classe, setClasse] = useState('light');


    function handleClick(){
        if (titulo ==="Dayse")
            setTitulo("Alexia")
        else
            setTitulo("Dayse")
    }

    function handleClickDarkMode(){
        if (classe ==="dark")
            setClasse("light")
        else
            setClasse("dark")
    }

    return(
        <div className={classe}>
            <span>{titulo}</span>
            <button className="buttontitulo" onClick={handleClick}>Mudar nome</button>
            <button className="buttondark" onClick={handleClickDarkMode}> Clique aqui para Dark Mode</button>
        </div>
    );
}
export default Header;
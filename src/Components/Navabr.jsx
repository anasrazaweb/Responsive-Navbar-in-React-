import React, { useState } from 'react'
import "../Style/Navbar.css"

const Navabr = () => {
    const [isopan, setisopan] = useState("")
    const troggle = () => {
        setisopan(!isopan)
        console.log("first")
    }
    return (
        <div className='container'>
            <div className="navbar">
                <div className="logo">
                    <h4>
                        Anas
                    </h4>
                </div>
                <ul className={`list ${isopan ? "opanlist" : ""}`}>
                    <li><a href="">home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Project</a></li>
                    <li><a href="">Contnat</a></li>
                    <li><a href="">Login</a></li>
                </ul>
                <div className='icone' style={{fontSize:"28px", fontWeight:"600"}} onClick={troggle}>
                    x
                </div>
            </div>
        </div>
    )
}

export default Navabr
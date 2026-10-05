import { useState } from "react"
import resume from "../resume/Kevin Deleon_Resume 10-3-26.pdf"
import AppearText from "./AppearText"
import { Link } from "react-router-dom"
import hambuger from "../images/hambuger.png"


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    }

    return (
        <AppearText dur={0.5}>
            <nav className="nav-header">
                <div className="trigger_container">
                    <p className="triggerMenu" onClick={toggleMenu}>MENU</p>
                </div>
                <div className={`links ${isOpen ? "is-open" : ""}`}>
                    <Link className="interactable" to="/">HOME</Link>
                    <Link className="interactable" to="/PROJECTS">PROJECTS</Link>
                    <Link className="interactable" to="/ABOUT">ABOUT</Link>
                    <p className="rectangle"></p>
                    <p className="rectangle"></p>
                    <a className="interactable" href={resume} target="blank_">RESUMÉ</a>
                    <a className="Project_link" href="mailto:kevindeleon102022@gmail.com">KEVINDELEON102022@GMAIL.COM</a>
                    <p>NEW YORK, NY</p>
                </div>
            </nav>
        </AppearText>

    )
}

export default NavBar
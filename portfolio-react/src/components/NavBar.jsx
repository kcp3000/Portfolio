import resume from "../resume/Kevin Deleon_Resume 9-5-25.pdf"
import AppearText from "./AppearText"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <AppearText dur={0.5}>
            <nav className="links">
                <Link className="interactable" to="/">HOME</Link>
                <Link className="interactable" to="/PROJECTS">PROJECTS</Link>
                <Link className="interactable" to="/ABOUT">ABOUT</Link>
                <p className="rectangle"></p>
                <p className="rectangle"></p>
                <a className="interactable" href={resume} target="blank_">RESUMÉ</a>
                <a className="Project_link" href="mailto:kevindeleon102022@gmail.com">KEVINDELEON102022@GMAIL.COM</a>
                <p>NEW YORK, NY</p>
            </nav>

        </AppearText>

    )
}

export default NavBar
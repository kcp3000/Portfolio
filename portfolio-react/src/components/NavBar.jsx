import resume from "../resume/Kevin Deleon_Resume 9-5-25.pdf"
import AppearText from "./AppearText"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <AppearText dur={0.5}>
                <nav className="links">
                    <Link to="/">HOME</Link>
                    <Link to="/PROJECTS">PROJECTS</Link>
                    <a href=".section2">ABOUT</a>
                    <p className="rectangle"></p>
                    <p className="rectangle"></p>
                    <a className="resume" href={resume}>RESUMÉ</a>
                    <p>KEVINDELEON102022@GMAIL.COM</p>
                    <p>NEW YORK, NY</p>
                </nav>

        </AppearText>

    )
}

export default NavBar
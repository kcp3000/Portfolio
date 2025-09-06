import resume from "../resume/kevin_res.pdf"
import AppearText from "./AppearText"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <AppearText dur={0.5}>
            <div>
                <nav className="links">
                    <a href={resume}>RESUMÉ</a>
                    <Link to="/PROJECTS">PROJECTS</Link>
                    <a href=".section2">ABOUT</a>
                    <p className="rectangle"></p>
                    <p className="rectangle"></p>
                    <p>NEW YORK, NY</p>
                    <p>KEVINDELEON102022@GMAIL.COM</p>
                </nav>
            </div>
        </AppearText>

    )
}

export default NavBar
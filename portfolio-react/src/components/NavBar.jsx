import resume from "../resume/kevin_res.pdf"
import AppearText from "./AppearText"

const NavBar = () => {
    return (
    <AppearText dur={1}>
        <div>
            <nav className="links">
                <a href={resume}>KEVIN DELEON</a>
                <a href="#3">PROJECTS</a>
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
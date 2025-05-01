import AppearText from "./AppearText"

const NavBar = () => {
    return (
    <AppearText dur={1}>
        <div>
            <nav className="links">
                <a href="/">KEVIN DELEON</a>
                <a href="/">PROJECTS</a>
                <a href="/">ABOUT</a>
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
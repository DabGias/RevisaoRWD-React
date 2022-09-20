import { Link } from "react-router-dom"

function Menu() {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>Pág. 1</Link></li>
                    <li><Link to={"/page2"}>Pág. 2</Link></li>
                    <li><Link to={"/page3"}>Pág. 3</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
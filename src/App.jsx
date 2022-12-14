import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"

function App() {
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Page1/>}/>
                <Route path="/page2" element={<Page2/>}/>
                <Route path="/page3" element={<Page3/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
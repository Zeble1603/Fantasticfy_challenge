import './Layout.css'
import Navbar from '../Navbar/Navbar'
//Main Layout to wrap up the whole page 

export default function Layout ({children}) {
    return (
        <div>
            <div id="layout">
                <Navbar/>
                {children}
            </div>
        </div>
    )
}
import '../App.css';
import Vector from './images/Vector.png'

//Navigaton bar including the airbnb logo
export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={Vector} className="nav--img" alt="airbnb-logo"></img>
        </nav>
    )
}
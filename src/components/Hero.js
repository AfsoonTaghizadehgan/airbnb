import '../App.css';
import allimages from "./images/Group 77.png"

//hero section incluing all images and content
export default function Hero(){
    return(
        <div className="hero">
            
            <img src={allimages} alt="" className="images" />

            <div className="content">
                <h1> Online Experiences</h1>
                <p>Joing unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </div>
    )
}
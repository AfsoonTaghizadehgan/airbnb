import React from "react"
import '../App.css';

import star from "./images/Star.png"

//card section including different experiences in airbnb site
export default function Card(props){

    //badgeText for showing soldout in case there was no empty space for registration
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props)

    return(
        <div className="card">
            <div className="parent-image">
                <img src={require(`./images/${props.coverImg}`)} alt="" className="card--images" />

                {badgeText &&
                  <div className="card--badge" >{badgeText}</div>}

            </div>
            <div className="rating-info">
                <img src={star} alt="" className="star" />
                <span className="rating"> {props.stats.rating} </span>
                <span className="review-count">({props.stats.reviewCount}) <b>.</b></span>
                <span className="country">{props.location}</span>
            </div>
            <p className="card-title"> {props.title}</p>
            <p className="cost"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
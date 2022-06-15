import React from "react";
import mapPinIcon from "../images/map-pin.png";

export default function Card(props) {
  console.log(props)
  return (
    <div>
      <div className="card">
        <div>
          <img className="card--picture" src={props.data.imageUrl} alt="a travel destination" />
        </div>
        <div className="card--content">
          <div className="card--location">
            <img className="card--location-logo" src={mapPinIcon} alt="a map pin" />
            <span className="card--location-country">{props.data.location}</span>
            <span><a href={props.data.googleMapsUrl}>View on Google Maps</a></span>
          </div>
          <h1>{props.data.title}</h1>
          <p className="card--content-travel-dates">{props.data.startDate + " - " + props.data.endDate}</p>
          <p className="card--content-description">{props.data.description}</p>
          
        </div>
      </div>
      
    </div>
  )
}
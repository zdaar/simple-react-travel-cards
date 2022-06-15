import React from "react";
import mapPinIcon from "../images/map-pin.png";

export default function Card(props) {

  return (
    <div>
      <div className="card">
        <div className="card--content">
          <img className="card--picture" src={props.data.imageUrl} alt={"a picture of " + props.data.title} />
          <div className="card--textbox">
            <div className="card--text-locationbox">
              <img className="card--text-location-logo" src={mapPinIcon} alt="a map pin" />
              <span className="card--text-location-country">{props.data.location}</span>
              <a href={props.data.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="card--text-title">{props.data.title}</h1>
            <p className="card--text-traveldates">{props.data.startDate + " - " + props.data.endDate}</p>
            <p className="card--text-description">{props.data.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
import React from "react";
import data from "../data.js"
import Card from "./Card.js"

const travelCards = data.map(travelDestination => {
  return (
    <div>
      <Card key={travelDestination.id} data={travelDestination}/>
      <hr className="divider"/>
    </div>
    )
  }
)

export default function Content() {
  return (travelCards)
}
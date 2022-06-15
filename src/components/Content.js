import React from "react";
import data from "../data.js"
import Card from "./Card.js"

const travelCards = data.map(travel => {
    return (
        <div>
            <Card
            key={travel.id}
            data={travel}
            />
            <hr className="divider"/>

        </div>
        
    )
}

  )

export default function Content() {
    return (travelCards)
    }
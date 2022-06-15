import React from "react";
import data from "../data.js"
import Card from "./Card.js"

const travelCards = data.map(travel => {
    return (
        <Card
        key={travel.id}
        data={travel}
        />
    )
}

  )

export default function Content() {
    return (travelCards)
    }
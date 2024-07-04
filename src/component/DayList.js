import React from "react"
import { Link } from "react-router-dom"
import dummy from "../db/data.json"

export default function DayList(){
    return (
    <div>
        <ul>
            {dummy.days.map(day => (
                <li key={day.id} className="button">
                    <Link to={`/day/${day.day}`}> Day {day.day}</Link>
                </li>
            ))}
        </ul>   
    </div>
   
    )
    
}
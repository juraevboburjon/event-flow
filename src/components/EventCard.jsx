import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="">
      {event.title}
      <p>{event.description}</p>
      <p>{event.date}</p>
      <Link to={`/event/${event.id}`}>See more</Link>
    </div>
  );
}

export default EventCard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const AllEvents = () => {
  const host = import.meta.env.VITE_HOST;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${host}/events`)
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Ошибка загрузки:", error));
  }, [host]);

  return (
    <div className="grid text-center grid-cols-1 md:grid-cols-2 mb-96 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default AllEvents;

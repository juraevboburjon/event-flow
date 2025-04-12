import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const host = import.meta.env.VITE_HOST;
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${host}/events/${id}`)
      .then((response) => {
        setEvent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки:", error);
        setLoading(false);
      });
  }, [host, id]);

  if (loading) {
    return <div className="text-center mt-10">Загрузка...</div>;
  }

  if (!event) {
    return (
      <div className="text-center mt-10 text-red-500">
        Мероприятие не найдено
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-2">Дата: {event.date}</p>
      <p className="text-gray-800">{event.description}</p>
    </div>
  );
};

export default EventDetails;

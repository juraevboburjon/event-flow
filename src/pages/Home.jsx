// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import EventCard from "../components/EventCard";
import Banner from "../components/BannerSlider";
import AllEvents from "./AllEvents";

const Home = () => {
  // const host = import.meta.env.VITE_HOST;
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${host}/events`)
  //     .then((response) => setEvents(response.data))
  //     .catch((error) => console.error("Ошибка загрузки:", error));
  // }, [host]);

  return (
    <div className="p-4 h-screen overflow-scroll">
      <div className="mt-20">
        <Banner />
        <h1 className="text-3xl font-bold text-center mt-20 mb-4 text-emerald-700">
          All Events
        </h1>
        <div className="grid text-center grid-cols-1 md:grid-cols-2 mb-96 lg:grid-cols-3 gap-4">
          <AllEvents />
        </div>
      </div>
    </div>
  );
};

export default Home;

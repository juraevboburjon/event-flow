import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const host = import.meta.env.VITE_HOST;
  const [form, setForm] = useState({
    title: "",
    date: "",
    description: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(`${host}/events`, form);
      navigate("/");
    } catch (error) {
      console.error("Ошибка загрузки:", error);
      setError("Ошибка загрузки");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-xl w-full">
        <h1>Create Event</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" w-full flex flex-col">
          <label>Titile</label>
          <input type="text" name="title" onChange={handleChange} required />
        </div>
        <div className=" w-full flex flex-col">
          <label>Date</label>
          <input type="date" name="date" onChange={handleChange} required />
        </div>
        <div className=" w-full flex flex-col">
          <label>Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default CreateEvent;

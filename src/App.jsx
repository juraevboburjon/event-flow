import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import Layout from "./components/Layout";
import AllEvents from "./pages/AllEvents";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "events", element: <AllEvents /> },
        { path: "event/:id", element: <EventDetails /> },
        { path: "create", element: <CreateEvent /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;

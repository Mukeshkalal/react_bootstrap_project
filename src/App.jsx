import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Exams from "./pages/Exams";
import User from "./pages/auth/Users";
import Error from "./pages/Error";
import SingleUser from "./pages/auth/Users/SingleUser";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/exams",
      element: <Exams />,
    },
    {
      path: "/users",
      element: <User />,
    },
    {
      path: "/user/:userId",
      element: <SingleUser />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
  // return <RouterProvider router={routes} />;
}

export default App;

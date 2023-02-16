import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about/About";
import Main from "./pages/home/Home";

export default createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/sobre-nos',
        element: <About />
    }
]);
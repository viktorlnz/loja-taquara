import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Main from "./pages/home/Home";
import Products from "./pages/product/products/Products";

export default createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/sobre-nos',
        element: <About />
    },
    {
        path: '/contato',
        element: <Contact />
    },
    {
        path: '/produtos',
        element: <Products />
    }
]);
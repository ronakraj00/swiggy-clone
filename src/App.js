import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Help from "./components/Help";
import SignIn from "./components/SignIn";
import Offers from "./components/Offers";
import Cart from "./components/Cart";
import { Outlet } from "react-router-dom";


const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/offers",
                element: <Offers />,
            },
            {
                path: "/help",
                element: <Help />,
            },
            {
                path: "/signin",
                element: <SignIn />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

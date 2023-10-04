import React, { lazy, Suspense, startTransition } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { Outlet } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";
import { lazy } from "react";
import store from "./utils/store";
import { Provider } from "react-redux";
const Help = lazy(() => import("./components/Help.js"));
const SignIn = lazy(() => import("./components/SignIn.js"));
const Offers = lazy(() => import("./components/Offers.js"));
const Cart = lazy(() => import("./components/Cart.js"));

const App = () => {
    return (
        <>
            <Provider store={store}>
                <Header />
                <Outlet />
                <Footer />
            </Provider>
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
                element: (
                    <Suspense
                        fallback={<h2 className="loading">Loading...</h2>}
                    >
                        <Offers />
                    </Suspense>
                ),
            },
            {
                path: "/help",
                element: (
                    <Suspense
                        fallback={<h2 className="loading">Loading...</h2>}
                    >
                        <Help />
                    </Suspense>
                ),
            },
            {
                path: "/signin",
                element: (
                    <Suspense
                        fallback={<h2 className="loading">Loading...</h2>}
                    >
                        <SignIn />
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: (
                    <Suspense
                        fallback={<h2 className="loading">Loading...</h2>}
                    >
                        <Cart />
                    </Suspense>
                ),
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantPage />,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

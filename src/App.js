import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Body from "./components/Body"
import Header from "./components/Header"
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Header />
        <Body />
        <Footer />
    </>
);

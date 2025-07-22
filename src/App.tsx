import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;

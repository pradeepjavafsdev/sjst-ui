import React, { FC, useState } from "react";
import History from "./components/History";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Members from "./components/Members";
import Footer from "./components/Footer";
import DonatePopup from "./components/DonatePopup";
import Home from "./components/Home";

const App: FC = () => {
    const [showDonate, setShowDonate] = useState(false);

    const handleDonateClick = () => {
        setShowDonate(true);
    };

    return (
        <div className="font-sans scroll-smooth">
            <Home onDonateClick={handleDonateClick} />
            <History />
            <Gallery />
            <Events />
            <Members />
            <Footer />
            {showDonate && <DonatePopup onClose={() => setShowDonate(false)} />}
        </div>
    );
};

export default App;

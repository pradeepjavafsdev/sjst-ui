import React, { FC, useState } from "react";
import Home from "./Home";
import History from "./History";
import Gallery from "./Gallery";
import Events from "./Events";
import Members from "./Members";
import Footer from "./Footer";
import DonatePopup from "./DonatePopup";

const HomePage: FC = () => {
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

export default HomePage;

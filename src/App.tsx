import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import History from "./components/History";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Members from "./components/Members";
import Footer from "./components/Footer";
import DonatePopup from "./components/DonatePopup";

const App: React.FC = () => {
  const [showDonate, setShowDonate] = useState(false);

  return (
    <div className="font-sans scroll-smooth">
      <Navbar onDonateClick={() => setShowDonate(true)} />
      <Welcome />
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
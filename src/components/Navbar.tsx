import React from "react";

const Navbar: React.FC<{ onDonateClick: () => void }> = ({ onDonateClick }) => {
  return (
    <div className="navbar bg-base-100 fixed top-0 w-full shadow z-50">
      <div className="flex-1 px-4 text-xl font-bold">SJST Trust</div>
      <div className="flex-none gap-4">
        <a href="#welcome" className="btn btn-ghost">Home</a>
        <a href="#history" className="btn btn-ghost">History</a>
        <a href="#gallery" className="btn btn-ghost">Gallery</a>
        <a href="#events" className="btn btn-ghost">Events</a>
        <a href="#members" className="btn btn-ghost">Members</a>
        <button className="btn btn-primary" onClick={onDonateClick}>Donate</button>
      </div>
    </div>
  );
};

export default Navbar;
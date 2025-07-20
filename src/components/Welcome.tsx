import React from "react";

const Welcome: React.FC = () => (
  <section id="welcome" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300 text-center p-6">
    <h1 className="text-4xl font-bold mb-4">Welcome to SJST Trust</h1>
    <p className="text-xl max-w-2xl">“Helping hands for a better tomorrow.”</p>
  </section>
);

export default Welcome;
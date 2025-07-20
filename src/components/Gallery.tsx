import React from "react";

const Gallery: React.FC = () => (
  <section id="gallery" className="p-10 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-4">Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <img src="/gallery_pic1.jpg" alt="Gallery 1" className="rounded-lg shadow" />
      <img src="/gallery_pic2.jpg" alt="Gallery 2" className="rounded-lg shadow" />
      <img src="/gallery_pic3.jpg" alt="Gallery 3" className="rounded-lg shadow" />
      <img src="/gallery_pic4.jpg" alt="Gallery 4" className="rounded-lg shadow" />
    </div>
  </section>
);

export default Gallery;
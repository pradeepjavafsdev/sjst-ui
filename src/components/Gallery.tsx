import React, { useEffect, useState } from "react";

const images = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1609151745346-c624e507baa2?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1722208128414-72f91ed75037?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1717240674118-492aa66752ef?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1677397060367-bfbd27b7b1b1?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1664851451771-2a78ed2b20fe?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1721186687018-09a9a8afcbf1?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1718908164450-d47abbeb8cf6?w=600&auto=format&fit=crop&q=60",
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1752399604089-45a4aabedf81?w=600&auto=format&fit=crop&q=60",
    },
];

const SkeletonBox = () => (
    <div className="mb-4 rounded-lg bg-gray-300 animate-pulse h-60 w-full break-inside-avoid"></div>
);

const Gallery: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="gallery" className="p-10 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-8">Gallery</h2>

            {/* Masonry layout with skeleton support */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {loading
                    ? Array(8)
                          .fill(0)
                          .map((_, idx) => <SkeletonBox key={idx} />)
                    : images.map((item) => (
                          <img
                              key={item.id}
                              src={item.img}
                              alt={`Gallery ${item.id}`}
                              className="mb-4 rounded-lg shadow w-full break-inside-avoid"
                          />
                      ))}
            </div>
        </section>
    );
};

export default Gallery;

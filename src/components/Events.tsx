import React, { FC } from "react";

const events = [
    {
        id: 1,
        name: "Event 1",
        date: "2022-01-01",
        image: "https://picsum.photos/300/200",
        desc: "This is event 1",
    },
    {
        id: 2,
        name: "Event 2",
        date: "2022-01-01",
        image: "https://picsum.photos/300/200",
        desc: "This is event 2",
    },
    {
        id: 3,
        name: "Event 3",
        date: "2022-01-01",
        image: "https://picsum.photos/300/200",
        desc: "This is event 3",
    },
    {
        id: 4,
        name: "Event 4",
        date: "2022-01-01",
        image: "https://picsum.photos/300/200",
        desc: "This is event 4",
    },
];

const Events: FC = () => (
    <section id="events" className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {events.map((e) => (
                <div className="card bg-base-100 shadow-md" key={e.id}>
                    <figure>
                        <img
                            src={e.image}
                            alt={e.name}
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{e.name}</h2>
                        <p className="text-sm text-gray-600">{e.desc}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Donate</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Events;

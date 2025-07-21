import React, { FC, useEffect, useState } from "react";
import { GiPayMoney } from "react-icons/gi";

interface EventType {
    id: number;
    name: string;
    date: string;
    image: string;
    description: string;
}

const eventsData: EventType[] = [
    {
        id: 1,
        name: "Event 1",
        date: "2022-01-01",
        image: "https://picsum.photos/300/200",
        description: "This is event 1",
    },
    {
        id: 2,
        name: "Event 2",
        date: "2022-01-01",
        image: "https://picsum.photos/300/200",
        description: "This is event 2",
    },
    {
        id: 3,
        name: "Event 3",
        date: "2022-01-01",
        image: "https://picsum.photos/300/200",
        description: "This is event 3",
    },
    {
        id: 4,
        name: "Event 4",
        date: "2022-01-01",
        image: "https://picsum.photos/300/200",
        description: "This is event 4",
    },
];

const SkeletonCard = () => (
    <div className="card bg-white shadow-md animate-pulse">
        <div className="h-48 w-full bg-gray-200 rounded-t"></div>
        <div className="card-body p-4 space-y-3">
            <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            <div className="h-3 w-full bg-gray-300 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
            <div className="h-9 w-24 bg-gray-300 rounded-full ml-auto"></div>
        </div>
    </div>
);

const Events: FC = () => {
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState<EventType[]>([]);

    useEffect(() => {
        // Simulate loading
        const timeout = setTimeout(() => {
            setEvents(eventsData);
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="events" className="p-10 bg-white text-center text-black">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {loading
                    ? Array(4)
                          .fill(0)
                          .map((_, i) => <SkeletonCard key={i} />)
                    : events.map((e) => (
                          <div className="card bg-white shadow-md" key={e.id}>
                              <figure>
                                  <img
                                      src={e.image}
                                      alt={e.name}
                                      className="w-full h-48 object-cover rounded-t"
                                  />
                              </figure>
                              <div className="card-body p-4">
                                  <h2 className="card-title">{e.name}</h2>
                                  <p className="text-sm text-gray-600">
                                      {e.description}
                                  </p>
                                  <div className="card-actions justify-end">
                                      <button className="px-4 py-2 rounded-full font-semibold hover:shadow-[inset_2px_3px_5px_rgba(0,0,0,0.1)] text-white bg-[#FF8243] flex items-center gap-2">
                                          <GiPayMoney />
                                          Donate
                                      </button>
                                  </div>
                              </div>
                          </div>
                      ))}
            </div>
        </section>
    );
};

export default Events;

import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { EconomicEvents } from "../utils/economicEvents";

export const Calendar = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await EconomicEvents();
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-6 text-white">Economic Calendar</h1>
        {events && (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Time</th>
                  <th className="py-2 px-4 text-left">Country</th>
                  <th className="py-2 px-4 text-left">Event</th>
                  <th className="py-2 px-4 text-left">Data</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-2 px-4">{event.event_time}</td>
                    <td className="py-2 px-4">{event.country}</td>
                    <td className="py-2 px-4">{event.event_name}</td>
                    <td className="py-2 px-4">{event.released_data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

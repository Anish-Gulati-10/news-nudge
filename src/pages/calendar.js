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
      <div className="w-4/5 mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-6 text-white">Economic Calendar</h1>
        {events && (
          <div className="overflow-x-auto">
            <table className="w-full table-auto rounded-lg">
              <thead>
                <tr className="bg-slate-800 text-white">
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
                    className={"bg-transparent text-white"}>
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

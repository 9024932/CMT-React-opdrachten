import { useState } from "react";

const BookingForm = ({ onBook }) => {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const services = [
    "Knippen",
    "Baard trimmen",
    "Knippen + Baard",
    "Hot Towel Shave",
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!service || !date || !time) {
      alert("Vul alle velden in!");
      return;
    }

    onBook({ service, date, time });

    setService("");
    setDate("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="w-full px-4 py-3 bg-white text-black border border-zinc-400 rounded
                   focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
      >
        <option value="">Kies een service</option>
        {services.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

   
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
        className="w-full px-4 py-3 bg-white text-black border border-zinc-400 rounded
                   focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
      />

 
      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full px-4 py-3 bg-white text-black border border-zinc-400 rounded
                   focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
      >
        <option value="">Kies een tijd</option>
        {timeSlots.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="w-full py-3 mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600
                   text-black font-bold uppercase tracking-wider rounded
                   hover:from-yellow-400 hover:to-yellow-500
                   transition-all duration-200 shadow-lg active:scale-95"
      >
        Boek Afspraak
      </button>
    </form>
  );
};

export default BookingForm;
import { useState } from "react";

const UserProfile = ({ initialData, onSave }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [phone, setPhone] = useState(initialData?.phone || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Vul alle velden in!");
      return;
    }

    onSave({ name, email, phone });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-black border border-yellow-600/40 rounded-lg p-8 shadow-xl"
      >
        <h2 className="text-center text-2xl font-bold tracking-widest text-yellow-500 mb-8 uppercase">
          Jouw Profiel
        </h2>

        <input
          type="text"
          placeholder="Naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 rounded focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 rounded focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
        />

        <input
          type="tel"
          placeholder="Telefoon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-6 px-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 rounded focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold uppercase tracking-wider rounded hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg"
        >
          Opslaan
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
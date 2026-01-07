import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./components/UserProfile";
import ShopInfo from "./components/ShopInfo";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";
import {
  getUserProfile,
  saveUserProfile,
  getAppointments,
  saveAppointments,
} from "./utils/localStorage";

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const profile = getUserProfile();
    const savedAppointments = getAppointments();

    if (profile) setUserProfile(profile);
    if (savedAppointments) setAppointments(savedAppointments);
  }, []);

  useEffect(() => {
    if (userProfile) saveUserProfile(userProfile);
  }, [userProfile]);

  useEffect(() => {
    saveAppointments(appointments);
  }, [appointments]);

  const handleProfileSave = (profile) => {
    setUserProfile(profile);
    setShowProfile(false);
    toast.success("Profiel opgeslagen!");
  };

  const handleBooking = (booking) => {
    const newAppointment = {
      id: Date.now(),
      ...booking,
      userName: userProfile?.name || "Onbekend",
      createdAt: new Date().toISOString(),
    };
    setAppointments([...appointments, newAppointment]);
    toast.success("Afspraak geboekt!");
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter((app) => app.id !== id));
    toast.info("Afspraak verwijderd");
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 py-8">
      <ToastContainer position="top-right" theme="dark" />

      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase text-yellow-500">
          Old Town Barber
        </h1>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        {!userProfile ? (
          <UserProfile onSave={handleProfileSave} />
        ) : (
          <>
            <div className="flex justify-center">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="px-6 py-2 border border-yellow-500 text-yellow-500 rounded uppercase tracking-wider hover:bg-yellow-500 hover:text-black transition"
              >
                {showProfile ? "Verberg" : "Bewerk"} Profiel
              </button>
            </div>

            {showProfile && (
              <UserProfile
                initialData={userProfile}
                onSave={handleProfileSave}
              />
            )}

            <section className="bg-black border border-yellow-600/30 rounded-lg p-6 shadow-lg">
              <ShopInfo />
            </section>

            <section className="bg-black border border-yellow-600/30 rounded-lg p-6 shadow-lg">
              <BookingForm onBook={handleBooking} />
            </section>

            <section className="bg-black border border-yellow-600/30 rounded-lg p-6 shadow-lg">
              <BookingsList
                appointments={appointments}
                onDelete={handleDeleteAppointment}
              />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

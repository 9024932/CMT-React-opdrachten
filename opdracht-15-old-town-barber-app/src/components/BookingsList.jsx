const BookingsList = ({ appointments, onDelete }) => {
  if (appointments.length === 0) {
    return <p>Geen afspraken geboekt</p>;
  }

  return (
    <section>
      <h2>Jouw Afspraken</h2>

      {appointments.map((appointment) => (
        <div key={appointment.id}>
          <h3>{appointment.service}</h3>
          <p>Datum: {appointment.date}</p>
          <p>Tijd: {appointment.time}</p>
          <p>Voor: {appointment.userName}</p>
          <button onClick={() => onDelete(appointment.id)}>Verwijderen</button>
        </div>
      ))}
    </section>
  );
};

export default BookingsList;

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from './components/UserProfile';
import ShopInfo from './components/ShopInfo';
import BookingForm from './components/BookingForm';
import BookingsList from './components/BookingsList';
import { 
  getUserProfile, 
  saveUserProfile, 
  getAppointments, 
  saveAppointments 
} from './utils/localStorage';
import './App.css';

function App() {
  const [userProfile, setUserProfile] = useState();
  const [appointments, setAppointments] = useState();
  const [showProfile, setShowProfile] = useState();

  return (
    <div>
      <ToastContainer/>
      
      <h1>Old Town Barber</h1>
      
      {!userProfile ? (
        <UserProfile/>
      ) : (
        <>
          <button onClick={() => setShowProfile(!showProfile)}>
            {showProfile ? 'Verberg' : 'Bewerk'} Profiel
          </button>
          
          {showProfile && (
            <UserProfile
            />
          )}
          
          <ShopInfo />
          <BookingForm/>
          <BookingsList
          />
        </>
      )}
    </div>
  );
}

export default App;
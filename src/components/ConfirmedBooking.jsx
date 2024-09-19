import { useNavigate, useLocation } from "react-router-dom";
import { Footer } from "./Footer"
import { Nav } from "./Nav"
import { PiWineFill } from "react-icons/pi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { useEffect, useState } from "react";

export const ConfirmedBooking = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, date, time, guests, occasion } = location.state || {};
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if(!name){
      navigate('/');
    } else {
      setLoad(true);
    }
  }, [name, load, navigate])
  
  return (
    <>  
    {
      load === true && (
        <>
          <Nav />
          <main className="confirmed-booking">
            <div className="confirmation-message">
              <h1>Reservation Confirmed!</h1>
              {
                occasion === "anniversary" 
                ? (<div className="confirmed-occasion"><PiWineFill size={50} color="var(--primaryYellow)"/></div>)
                : ( <div className="confirmed-occasion"><LiaBirthdayCakeSolid size={50} color="var(--primaryYellow)"/></div> )
              }
              <p className="thank-you">Thank you, <strong>{name}</strong>.</p>
              <p>Your reservation is confirmed for <strong>{date}</strong> at <strong>{time}</strong>.</p>
              <p>Number of guests: <strong>{guests}</strong></p>
              <p>We look forward to seeing you soon!</p>
    
              <a href="/" className="btn" style={{alignItems: "center", width: "100%", marginTop: "40px"}}>Back to home</a>
            </div>
          </main>
          <Footer />
        </>
      )
    }
    </>
  )
}

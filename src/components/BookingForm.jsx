import { useEffect, useState } from "react"

export const BookingForm = ({availableTimes = [], dispatch, submitForm}) => {
    const [resName, setResName] = useState('');
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (resDate && resTime && guests >= 1 && occasion) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [resDate, resTime, guests, occasion]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date: resDate,
            time: resTime,
            guests: guests,
            occasion: occasion,
            name: resName
        };

        if(isFormValid){
            // submitForm(e);
            submitForm(formData);
            console.log('Datos de la reserva:', formData);
        }
    };

  return (
    <section className="booking">
        <div className="booking-form">
            <h1>Make Your Reservation</h1>
            <div className="booking-card">
                <p className="description">Complete the form to reserve. 😎🍕</p>
                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="res-name">Enter your name</label>
                    
                    <input type="text" id="res-name" value={resName} onChange={(e) => setResName(e.target.value)} aria-required/>

                    <label htmlFor="res-date">Choose a date</label>
                    
                    <input type="date" id="res-date" value={resDate} onChange={(e) => setResDate(e.target.value)} required min={new Date().toISOString().split('T')[0]} aria-required/>

                    <label htmlFor="res-time">Choose time</label>

                    <select name="" id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)} required aria-required>
                        <option value="" disabled>Select time</option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>

                    <label htmlFor="guests">Number of guests</label>

                    <input type="number" placeholder="1" min={1} max={10} id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required aria-required/>

                    <label htmlFor="occasion">Select occasion</label>

                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required aria-required> 
                        <option value="" disabled>Select occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>

                    <input type="submit" value={"Make Your reservation"} style={{ backgroundColor: isFormValid ? 'var(--primaryYellow)' : 'var(--secundaryGrey)' }}/>
                </form>
            </div>
        </div>
    </section>
  )
}

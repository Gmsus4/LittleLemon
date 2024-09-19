import { useEffect, useReducer } from "react";
import { BookingForm } from "./components/BookingForm"
import { useNavigate } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            const selectedDate = new Date(action.date);
            return fetchAPI(selectedDate);
        default:
            return state;
    }
};

export const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    useEffect(() => {
        dispatch({ type: "UPDATE_TIMES", date: new Date().toISOString() });
    }, []);

    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed", {state: formData})
        }
    }

  return (
    <div>
        <Nav />
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        <Footer />
    </div>
  )
}

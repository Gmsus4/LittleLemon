import { FaStar } from "react-icons/fa"

export const CustomersSay = ({rating, name, url, testimonial}) => {
  return (
    <div className="customers-say">
        <p>{testimonial}</p>
        <div className="linediv" />
        <div className="csinfo">
            <div className="csperson">
                <span>{name}</span>
                <div className="rating">
                    <p>{rating}</p>
                    <FaStar className="faStar"/>
                </div>
            </div>
            <img src={url} alt={name}/>
        </div>
    </div>
  )
}

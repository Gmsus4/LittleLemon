import { MdDeliveryDining } from "react-icons/md"

export const Card = ({title, description, price, urlImage, urlOrder, alt}) => {
  return (
    <div className="card">
        <img src={urlImage} alt={alt}/>
        <div className="card-header">
          <h3>{title}</h3>
          <span>${price}</span>
        </div>
        <div className="card-main">
          <p>{description}</p>
          <div>
            <a href={urlOrder}>Order a delivery</a>
            <MdDeliveryDining size={22}/>
          </div>
        </div>
    </div>
  )
}

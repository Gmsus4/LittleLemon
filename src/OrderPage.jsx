import { FaShoppingCart } from "react-icons/fa"
import { Footer } from "./components/Footer"
import { Nav } from "./components/Nav"

export const OrderPage = () => {
  return (
    <>
        <Nav />
        <div className="order-online-container">
            <div className="order-online">
              <h1>Order Online</h1>
              <p>Enjoy our delicious meals at home. Order online now!</p>
              <button className="order-button">
                <FaShoppingCart size={20} />
                Order Now
              </button>
            </div>
        </div>
        <Footer />
    </>
  )
}

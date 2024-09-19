import { Button } from "./Button"
import { Chicago } from "./Chicago"

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div>
          <Chicago 
            description={"At Little Lemon Chicago, enjoy Mediterranean-inspired dishes made with fresh ingredients. Perfect for intimate dinners or special celebrations. Reserve your table today!"}
            marginTop="0px"
          />
          <Button btnTitle={"Reserve a Table"} url={"/booking"}/>
        </div>
        <img src="/restauranfood.webp" alt="Delicious Mediterranean food served at Little Lemon restaurant" />
      </div>
    </header>
  )
}
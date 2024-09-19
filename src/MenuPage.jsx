import { Card } from "./components/Card"
import { Footer } from "./components/Footer"
import { Nav } from "./components/Nav"
import { MENU } from "./seeds/Menu"

export const MenuPage = () => {
  return (
    <div className="menu-container">
        <Nav />
          <section aria-labelledby="specials-heading">
          <h1 id="specials-heading">Explore Our Menu</h1>
            <div className="menu-cards">
              {
                MENU.map(({title, price, alt, description, urlImage, urlOrder}) => (
                  <Card
                    key={title + price}
                    title={title}
                    price={price}
                    urlOrder={urlOrder} alt={alt}
                    urlImage={urlImage}
                    description={description}
                  />
                ))
              }
            </div>
        </section>
        <Footer />
    </div>
  )
}

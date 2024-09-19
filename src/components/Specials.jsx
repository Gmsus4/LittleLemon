import { Button } from './Button'
import { Card } from './Card'

export const Specials = () => {
  return (
    <section aria-labelledby="specials-heading">
        <div className="specials">
          <h2 id="specials-heading">This weeks specials!</h2>
          <Button btnTitle={"Online Menu"} url={"/menu"}/>
        </div>
        <div className="cards">
          <article>
            <Card
              title={"Greek salad"}
              price={12.99}
              urlOrder={"#"} alt={"Greek salad with lettuce, peppers, olives, and feta cheese garnished with garlic and rosemary croutons"}
              urlImage={"/greek-salad.webp"}
              description={
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
              }
            />
          </article>
          <article>
            <Card
              title={"Bruchetta"}
              price={12.99}
              urlOrder={"#"} alt={"Grilled bread topped with garlic, salt, and olive oil"}
              urlImage={"/bruchetta.webp"}
              description={
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
              }
            />
          </article>
          <article>
            <Card
              title={"Lemon Dessert"}
              price={12.99}
              urlOrder={"#"} alt={"Delicious lemon dessert made from Grandma's recipe book"}
              urlImage={"/lemon-dessert.webp"}
              description={
                "This comes straigth from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
              }
            />
          </article>
        </div>
    </section>
  )
}
import { Card } from "./components/Card";

export const Main = () => {
  return (
    <main>
      <section>
        <div className="specials">
          <h2>This weeks specials!</h2>
          <a href="#">Online Menu</a>
        </div>
        <div className="cards">
          {/* title, description, price, urlImage, urlOrder, alt, width */}
          <Card
            title={"Greek salad"}
            price={12.99}
            urlOrder={"#"} alt={""}
            urlImage={"/greek-salad.jpg"}
            description={
              "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            }
          />
          <Card
            title={"Bruchetta"}
            price={12.99}
            urlOrder={"#"} alt={""}
            urlImage={"/bruchetta.jpg"}
            description={
              "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            }
          />
          <Card
            title={"Lemon Dessert"}
            price={12.99}
            urlOrder={"#"} alt={""}
            urlImage={"/lemon-dessert.jpg"}
            description={
              "This comes straigth from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            }
          />
        </div>
      </section>
    </main>
  );
};

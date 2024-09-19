import { About } from "./About";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";

export const Main = () => {
  return (
    <main className="main-homepage">
        <Specials />
        <Testimonials />
        <About />
    </main>
  );
};

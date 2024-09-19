import { About } from "./components/About";
import { CardAbout } from "./components/CardAbout";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

export const AboutPage = () => {
  return (
    <>
      <Nav />
      <main className="main-about">
        <About />
        <CardAbout
          title={"Our History"}
          description={
            "Little Lemon was founded with a passion for delivering exceptional culinary experiences. Our story began with two friends, Mario and Adrian, who shared a dream of opening a restaurant that embodies their love for food and hospitality. Their vision was to create a space where every guest feels like part of the family, and every dish tells a story."
          }
          urlImage={"../ourhistory.webp"}
        />
        <CardAbout
          title={"Our Vision"}
          isReverse={true}
          description={
            "At Little Lemon, our vision is to redefine dining by blending exceptional food with an inviting atmosphere. We aim to be more than just a place to eat; we want to be a destination where people come together to celebrate, connect, and savor life’s moments. Whether you're here for a special occasion or just a casual meal, our goal is to provide an experience that exceeds expectations and leaves you looking forward to your next visit."
          }
          urlImage={"../our-vision.webp"}
        />
        <CardAbout
          title={"Community Engagement"}
          description={
            "We believe in giving back to the community that supports us. Little Lemon actively participates in local events, collaborates with nearby businesses, and supports various charitable causes. Our commitment to making a positive impact extends beyond the walls of our restaurant, and we take pride in contributing to the betterment of our neighborhood."
          }
          urlImage={"../community-engagement.webp"}
        />
      </main>
      <Footer />
    </>
  );
};

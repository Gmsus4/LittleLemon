import { TESTIMONIALS } from "../seeds/Testimonials"
import { CustomersSay } from "./CustomersSay"

export const Testimonials = () => {
  return (
    <section className="section-testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials">
            {
                TESTIMONIALS.map((testimonial, index) => (
                    <article key={index} aria-labelledby={`testimonial-${index}`}>
                        <CustomersSay 
                            id={`testimonial-${index}`}
                            name={testimonial.name}
                            rating={testimonial.rating}
                            testimonial={testimonial.testimonial}
                            url={testimonial.url}
                        />
                    </article>
                ))
            }
        </div>
    </section>
  )
}

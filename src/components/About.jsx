import { Chicago } from "./Chicago"

export const About = () => {
  return (
    <section className="section-about" id="about">
        <div className="about-container">
            <div>
                <Chicago 
                    description={"Located in the heart of Chicago, at Little Lemon we take pride in being a standout culinary destination. Our team of experienced chefs works tirelessly to offer dishes that delight both locals and visitors. Whether you're looking for a dining spot or want to bring our flavors home, we guarantee a memorable experience."}
                    color={"black"}
                />
            </div>
            <div className="adrian-mario">
                <img src="../Mario and Adrian b.webp" alt="Mario and Adrian cooking in the kitchen" className="imga"/>
                <img src="../Mario and Adrian A.webp" alt="Mario and Adrian celebrating in the restaurant" className="imgb"/>
            </div>
        </div>
    </section>
  )
}

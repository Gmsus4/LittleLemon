export const CardAbout = ({
  title,
  description,
  urlImage,
  alt,
  isReverse = false,
}) => {
  return (
    <section className="section-about-me">
        {isReverse === false ? (
          <div className="about-card" style={{ padding: isReverse ? "20px 50px 20px 20px" : "20px 20px 20px 50px"}}>
            <div className="about-card-info">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="about-card-img">
              <img src={urlImage} alt={alt} />
            </div>
          </div>
        ) : (
          <div className="about-card img-reverse" style={{ padding: isReverse ? "20px 50px 20px 20px" : "20px 20px 20px 50px"}}>
            <div className="about-card-img">
              <img src={urlImage} alt={alt} />
            </div>
            <div className="about-card-info">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        )}
    </section>
  );
};

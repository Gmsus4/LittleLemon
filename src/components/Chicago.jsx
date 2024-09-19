export const Chicago = ({description, marginTop = 0, color, ish1 = true}) => {
  return (
    <div className="chicago">
        {
          ish1 ? (<h1>Little Lemon</h1>) : (<h2>Little Lemon</h2>)
        }
        <p className="subtitle" style={{ color: color }} aria-label="Location">Chicago</p>
        <p style={{ marginTop: marginTop }} aria-describedby="description-info">{description}</p>
    </div>
  )
}

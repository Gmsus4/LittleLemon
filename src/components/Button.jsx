export const Button = ({url, btnTitle}) => {
  return (
    <a href={url} className="btn" aria-label={btnTitle}>{btnTitle}</a>
  )
}

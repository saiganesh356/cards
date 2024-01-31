import './index.css'

const CardItems = props => {
  const {card} = props
  const {description, title, imgUrl, className} = card

  return (
    <li className={`${className}`}>
      <h1 className="header-text">{title}</h1>
      <p className="para-card">{description}</p>
      <img src={`${imgUrl}`} className="image-com" alt={`${title}`} />
    </li>
  )
}

export default CardItems

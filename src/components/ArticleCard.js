export const ArticleCard = ({title, description, date, image}) => {
  return (
    <div className="article-card">
      <img src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  )
}
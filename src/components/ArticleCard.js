import { Link } from 'react-router-dom'
import './ArticleCard.css'

export const ArticleCard = ({title, description, date, image}) => {
  const link = title.split(' ').slice(0, 4).join('-')
  
  return (
    <Link to={`/article/${link}`} className="article-card">
        <img src={image} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{date}</p>
        </div>
    </Link>
  )
}
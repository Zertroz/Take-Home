import { Link } from 'react-router-dom';
import './ArticleCard.css';

export const ArticleCard = ({title, description, date, image}) => {
  const link = title.slice(0, 30);
  
  return (
    <Link to={`/article/${link}`} className="article-card">
        <img src={image} />
        <div>
          <h2>{title}</h2>
          <p className='desc'>{description}</p>
          <p className='desc'>{date}</p>
        </div>
    </Link>
  );
}
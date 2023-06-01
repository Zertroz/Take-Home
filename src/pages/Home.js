import { ArticleCard } from "../components/ArticleCard"
import './Home.css'

export const HomePage = ({articles}) => {
  const cards = articles.map(article => <ArticleCard key={article.title} title={article.title} description={article.description} image={article.urlToImage} date={article.publishedAt} />)

  return (
    <section className="home-page">
      <div className="card-container">
        {cards}
      </div>
    </section>
  )
}
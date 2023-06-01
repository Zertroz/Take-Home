import { ArticleCard } from "../components/ArticleCard"
import { Form } from "../components/Form"
import { NavBar } from "../components/NavBar"
import './Home.css'

export const HomePage = ({articles}) => {
  const cards = articles.map(article => <ArticleCard key={article.title} title={article.title} description={article.description} image={article.urlToImage} date={article.publishedAt} />)

  return (
    <section className="home-page">
      <NavBar />
      <div className="card-container">
        <Form />
        {cards}
      </div>
    </section>
  )
}
import { ArticleCard } from "../components/ArticleCard"
import { Form } from "../components/Form"
import './Home.css'

export const HomePage = ({articles}) => {
  const cards = articles.map(article => <ArticleCard key={article.title} title={article.title} description={article.description} image={article.urlToImage} date={article.publishedAt} />)

  console.log(cards)

  return (
    <section className="home-page">
      <header>
        <h1>Website Title</h1>
      </header>
      <section className="body">
        <div className="form-container">
          <Form />
        </div>
        <div className="card-container">
          {cards}
        </div>
      </section>
    </section>
  )
}
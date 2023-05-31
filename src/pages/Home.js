import { ArticleCard } from "../components/ArticleCard"

export const HomePage = ({articles}) => {
  const cards = articles.map(article => <ArticleCard key={article.title} title={article.title} description={article.description} image={article.urlToImage} date={article.publishedAt} />)

  console.log(cards)

  return (
    <div>
      {cards}
    </div>
  )
}
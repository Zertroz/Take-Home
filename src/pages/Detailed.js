import { NavBar } from "../components/NavBar"

export const DetailedPage = ({title, articles}) => {
  const fixedTitle = title.split('-').join(' ')
  const selectedArticle = articles.find(article => article.title.includes(fixedTitle))

  return (
    <section>
      <NavBar />
      <h2>{selectedArticle.title}</h2>
      <h3>{selectedArticle.description}</h3>
      <p>By {selectedArticle.author}</p>
      <p>Source: {selectedArticle.source.name}</p>
      <p>Published {selectedArticle.publishedAt}</p>
      <img src={selectedArticle.urlToImage} alt={selectedArticle.title}/>
      <p>{selectedArticle.content}</p>
      <a href={selectedArticle.url}>Read More...</a>
    </section>
  )
}
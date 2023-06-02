import './Detailed.css'

export const DetailedPage = ({title, articles}) => {
  if(articles.length) {
    const selectedArticle = articles.find(article => article.title.includes(title))

    return (
      <section className="detail-page">
        <h2>{selectedArticle.title}</h2>
        <h3>{selectedArticle.description}</h3>
        <div className="attributions">
          <p>By {selectedArticle.author}</p>
          <p>Source: {selectedArticle.source.name}</p>
          <p>Published {selectedArticle.publishedAt}</p>
        </div>
        <img src={selectedArticle.urlToImage} alt={selectedArticle.title}/>
        <p>{selectedArticle.content}</p>
        <a href={selectedArticle.url}>Read More...</a>
      </section>
    )
  } else {
    return (<p>Loading...</p>)
  }
}
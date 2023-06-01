import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { DetailedPage } from './pages/Detailed';
import './App.css';
import { useEffect, useState } from 'react';
import { data } from './data/data';

function App() {
  const [articles, setArticles] = useState(data.articles);

  useEffect(() => {
    setArticles(data.articles);
  })

  return (
    <main>
      <Route exact path='/' render={() => (<HomePage articles={articles}/>)} />
      <Route exact path='/article/:title' render={({match}) => (<DetailedPage title={match.params.title} articles={articles}/>)} />
    </main>
  );
}

export default App;

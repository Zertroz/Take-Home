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
      <Route path='/' render={() => (<HomePage articles={articles}/>)} />
      <Route path='/article/:id' render={() => (<DetailedPage />)} />
    </main>
  );
}

export default App;

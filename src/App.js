import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { DetailedPage } from './pages/Detailed';
import './App.css';
import { useEffect, useState } from 'react';
import { data } from './data/data';
import { NavBar } from './components/NavBar';
import { apiCall } from './apiCalls';

function App() {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState('tech');

  const getArticles = async () => {
    const call = await apiCall(keyword);
    setArticles(call.articles)
  }

  useEffect(() => {
    getArticles()
  })

  return (
    <main>
      <NavBar />
      <Route exact path='/' render={() => (<HomePage articles={articles}/>)} />
      <Route exact path='/article/:title' render={({match}) => (<DetailedPage title={match.params.title} articles={articles}/>)} />
    </main>
  );
}

export default App;

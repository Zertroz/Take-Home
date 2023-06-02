import { Route } from 'react-router-dom';
import { HomePage } from './pages/Home/Home.js';
import { DetailedPage } from './pages/Detailed/Detailed';
import './App.css';
import { useEffect, useState } from 'react';
import { NavBar } from './components/Navbar/NavBar.js';
import { apiCall } from './apiCalls';

function App() {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState('tech');

  const getArticles = async () => {
    const call = await apiCall(keyword);
    setArticles(call.articles);
  }

  useEffect(() => {
    getArticles();
  }, [keyword]);

  return (
    <main>
      <NavBar setKeyword={setKeyword}/>
      <Route exact path='/' render={() => (<HomePage articles={articles}/>)} />
      <Route exact path='/article/:title' render={({match}) => (<DetailedPage title={match.params.title} articles={articles}/>)} />
    </main>
  );
}

export default App;

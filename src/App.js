import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { DetailedPage } from './pages/Detailed';
import './App.css';

function App() {
  return (
    <main>
      <Route path='/' render={() => (<HomePage />)} />
      <Route path='/article/:id' render={() => (<DetailedPage />)} />
    </main>
  );
}

export default App;

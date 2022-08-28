import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Portfolio' component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

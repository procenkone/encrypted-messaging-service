import './App.css';
import Header from './components/Header';
import Create from './components/Create';
import Erorr from './components/Erorr';
import Main from './components/Main';
import Note from './components/Note';
import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div className="main d-flex flex-column min-vh-100">


      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route  path='/about' component={About} />
           <Route path='/create' component={Create} />
          <Route exact path='/note/' component={Note} />
          <Route exact path='/note/:noteURL' component={Note} />
          <Route component={Erorr} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

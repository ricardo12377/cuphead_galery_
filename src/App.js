import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import ReactDOM from 'react-dom'
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import ClientForm from './components/form/ClientForm';
import Login from './pages/Login';
import Galeria from './pages/Galeria';







function App () {
  return(
    <Router>
    <div  className={styles.container_app} >
      <Navbar />
    
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={ClientForm} />
        <Route path="/galeria" component={Galeria} />
      </Switch>
      
    </div>
  </Router>
  
    
  
   
   
   
)
}



export default App;

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
import Form2 from './components/form/Form2';
import Footer from './components/layout/Footer';







function App () {
  return(
    <Router>
    <div  className={styles.container_app} >
      <Navbar />
    
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={ClientForm} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/form2" component={Form2} />
      </Switch>
      <Footer />
    </div>
  </Router>
  
    
  
   
   
   
)
}



export default App;

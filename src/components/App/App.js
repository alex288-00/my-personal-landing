
import './App.css';
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import FeedBack from "../FeedBack/FeedBack";
import Footer from '../Footer/Footer';
// import Up from '../Up/Up';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
      <Header />
      <AboutMe />
      <Portfolio />
      <FeedBack />
      <Footer />
      {/* <Up /> */}
      </Route>
      </Switch>
    </div>
  );
}

export default App;

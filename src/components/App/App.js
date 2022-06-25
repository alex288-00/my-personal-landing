
import './App.css';
import { useState } from "react";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import FeedBack from "../FeedBack/FeedBack";
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
// import Up from '../Up/Up';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  function handleBurgerClick () {
    setOpenBurger(true);
}

  function handleFormClick () {
    setOpenForm(true)
}

function closeForm () {
        setOpenForm(false)
    }

    function closeBurgerMenu () {
      setOpenBurger(false);
  }

  return (
    <div className="App">
      <Switch>
        <Route>
      <Header isOpenForm={openForm} onCloseForm={closeForm} onOpenForm={handleFormClick} onOpenBurger={handleBurgerClick} />
      <AboutMe />
      <Portfolio onOpenForm={handleFormClick} onOpenBurger={handleBurgerClick}/>
      <FeedBack />
      <Footer />
      <BurgerMenu isOpenBurger={openBurger} onCloseBurger={closeBurgerMenu} isOpenForm={openForm} onCloseForm={closeForm} onOpenForm={handleFormClick}/>
      {/* <Up /> */}
      </Route>
      </Switch>
    </div>
  );
}

export default App;

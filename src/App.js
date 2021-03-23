
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GridContainer from "./components/GridContainer";
import Hero from "./components/Hero";
import GlobalStyle from "./globalStyles";
import Header from "./Header";
import {SliderData} from './SliderData';
import  Details from "./components/Details";
import Modal from './components/Modal';
import Cart from './components/cart'
import Default from "./components/Default";



function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      <div >
        <Header />
        <Switch>
          <Route exact  path="/" >
            <Hero  slides = {SliderData}/>
            <GridContainer />
          </Route>
          <Route path = "/details">
            <Details />
          </Route>
          <Route path ="/cart">
            <Cart />
          </Route>
          <Route>
            <Default />
          </Route>
        </Switch>
        <Modal />
      </div>
  </Router>
  </>
  );
}

export default App;

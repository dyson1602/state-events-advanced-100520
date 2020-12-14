import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'
import beyArray from './api.js'


class App extends React.Component {

  state = {
    beyArray: beyArray,
    favArray: []
  }

  clickHandler = (beyObj) => {
   
    
  }
    
  

  render() {
    return (
      <>
        <div className="container" >
          <BeyContainer clickHandler={this.clickHandler} beyArray={this.state.beyArray}/>
          <Favorites beyObjFavArray={this.state.beyObjFavArray} clickHandler={this.clickHandler}/>
        </div>
      </>
    )
  }
};

export default App;

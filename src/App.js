import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'
import beyArray from './api.js'


class App extends React.Component {

  state = {
    beyArray: beyArray
  }

  clickHandler = (beyObj) => {
    let array = this.state.beyArray.map(bO => {
      if (bO.id === beyObj.id) {
        bO.favorite = !bO.favorite
        return bO
      } else {
        return bO
      }
    })
   this.setState({beyArray: array})
  }

  render() {
    console.log(this.state.beyArray)
    return (
      <>
        <div className="container" >
          <BeyContainer clickHandler={this.clickHandler} beyArray={this.state.beyArray} />
          <Favorites clickHandler={this.clickHandler} beyArray={this.state.beyArray}/>
        </div>
      </>
    )
  }
};

export default App;

import React, { Component } from "react";
import BeyCard from "../Components/BeyCard";


export default class Favorites extends Component {
  render() {
    let favArray = this.props.beyArray.filter(beyObj => beyObj.favorite === true)
    let favObjs = favArray.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} clickHandlerFav={this.props.clickHandler}/>)

    return (
      <>
        <div className="favorites">
          <h1>Favorites</h1>
          {favObjs}
        </div>
      </>
    );
  }
}

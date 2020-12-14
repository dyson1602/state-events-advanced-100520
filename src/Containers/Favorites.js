import React, { Component } from "react";
import BeyCard from "../Components/BeyCard";


export default class Favorites extends Component {
  render() {
    let favObjs = this.props.beyObjFavArray.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} clickHandler={this.props.clickHandler}/>)
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

import React from "react";
import beyArray from "../api";

class BeyCard extends React.Component {

  callFavoriteClickHandler = () => {
    this.props.clickHandler(this.props.beyObj)
  }



  // callUnfavoriteClickHandler = () => {
  //   this.setState((prevState) => ({favorite: !prevState.favorite}))
  // }

  render() {
    return (
      <>
        <div className="card">
          {this.props.beyObj.name}
          <img onClick={this.callFavoriteClickHandler} src={this.props.beyObj.img} />
        </div>
      </>
    );
  }

};

export default BeyCard;

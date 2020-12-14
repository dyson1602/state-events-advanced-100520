import React from "react";

class BeyCard extends React.Component {

  callFavoriteClickHandler = () => {
    this.props.clickHandler(this.props.beyObj)
  }

  render() {
    return (
      <>
        <div className="card">
          {this.props.beyObj.name}
          <img alt={this.props.beyObj.name} onClick={this.callFavoriteClickHandler} src={this.props.beyObj.img} />
        </div>
      </>
    );
  }

};

export default BeyCard;

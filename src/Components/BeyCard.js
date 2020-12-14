import React from "react";

class BeyCard extends React.Component {

  callFavoriteClickHandler = () => {
    if (this.props.beyObj.favorite === false && this.props.clickHandler){
      this.props.clickHandler(this.props.beyObj)
    } else if (this.props.beyObj.favorite === true && this.props.clickHandlerFav){
      this.props.clickHandlerFav(this.props.beyObj)
    }
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

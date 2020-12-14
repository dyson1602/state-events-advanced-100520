import React from "react";
import BeyCard from '../Components/BeyCard'
import beyArray from '../api.js'

class BeyContainer extends React.Component {

  render() {
    console.log(beyArray)
    let beyCards = this.props.beyArray.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} clickHandler={this.props.clickHandler}/>)
    return (
      <>
        <div className="index">
          <h1>Index</h1>
          { beyCards }
        </div>
      </>
    );
  }
}

export default BeyContainer;

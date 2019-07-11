
import React, { Component } from 'react';
import './price.css';


class Price extends Component {
    
    render(){  
      if(this.props.bookPrice.isEbook === true){
        return (
            <div className="displayPrice">
                Price: ${this.props.bookPrice.listPrice.amount}
            </div>
          ) 
      } else {
          return <div></div>;
      }

}
}
    
export default Price;
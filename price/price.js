
import React, { Component } from 'react';
import './price.css';


class Price extends Component {
    
    render(){  
     console.log(this.props.bookPrice)
        return (
            <div className="displayPrice">
                Price: ${this.props.bookPrice.listPrice.amount}
            </div>
          ) 
            

    }
}
    
export default Price;
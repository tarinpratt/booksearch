
import React, { Component } from 'react';
import './book.css';
import Price from '../price/price';



class Book extends Component {
    
    render(){
  return (
    <div className="displayBooks">
        {this.props.books.map((item, i) => {
            return <div className="books" key={i}>
            <h2 className="bookTitle">
            <a 
            href={item.previewLink} 
            target="_blank"
            rel="noopener noreferrer"
            >{item.title}
            </a>
             </h2>
             <div className="bookAuthor">
            Author: {item.authors} 
            </div>
            <div className="bookPrice">
               <Price 
               bookPrice={this.props.price[i]}/>
          </div>
            <div className="bookDescription">
            {item.description}
           </div>
           <img className="imageLink" src={item.imageLinks.smallThumbnail} alt="book"/>
           </div>
        })}
  
    </div>
  ) 
}
}
export default Book;
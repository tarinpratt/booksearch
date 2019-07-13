
import React, { Component } from 'react';
import './book.css';
import Price from '../price/price';



class Book extends Component {
    
    render(){
    console.log(this.props.books)
  return (
    <div className="displayBooks">
        {this.props.books.map((item, i) => {
            return <div className="books" key={i}>
               {(item.hasOwnProperty('imageLinks'))
                  &&
                <img className="imageLink" src={item.imageLinks.smallThumbnail} alt="book"/>
                }
                <div className="bookInfo">
            <h2 className="bookTitle">
            <a 
            href={item.previewLink} 
            target="_blank"
            rel="noopener noreferrer"
            >{item.title}
            </a>
             </h2>
             {(item.hasOwnProperty('authors'))
             &&
             <h3 className="bookAuthor"> 
            Author: {item.authors} 
            </h3>
             }
            <h3 className="bookPrice">
               
                {(this.props.price[i].saleability !== 'FREE' 
                && this.props.price[i].saleability !== 'NOT_FOR_SALE'
                 && this.props.price[i].hasOwnProperty('listPrice'))
                  &&
            <Price bookPrice={this.props.price[i]}/>
                }
          </h3>
            <div className="bookDescription">
            {item.description}
           </div>
           </div>

           </div>
        })}
  
    </div>
  ) 
}
}
export default Book;
import React, { Component } from  'react';
import Header from './header/header';
import SearchBar from './searchBar/searchBar';
import Book from './book/book';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      printType: "All",
      filter: "None",
      q: " ",
      books: [],
      price: [],
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  onFormSubmit(q, printType, filter) {
    this.setState({
      q,
      printType,
      filter
    });

    console.log('searchTerm=', q.trim())
    console.log('printType=', printType.trim())
    console.log('filter=', filter.trim())
    let url = 'https://www.googleapis.com/books/v1/volumes?q='+q.trim()+'&printType='+printType.trim()+'&key=AIzaSyAJCAAFBbMPmzk9w8xmA4XB_iqeTvSyaps';
    if(filter !== 'None'){
      url += '&filter='+filter.trim();
    }
  
      fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        const books = Object.keys(data.items).map(key => data.items[key].volumeInfo);
        const price = Object.keys(data.items).map(key => data.items[key].saleInfo);
        this.setState({
            books,
            price,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      
      });
  
    
  

}
  
  render(){
   
    return <div className="App">
      <Header />
    <SearchBar 
    onSubmit={this.onFormSubmit}/>
    <Book 
    books={this.state.books} 
    price={this.state.price}
    />
  
    </div>
  }
}

export default App;
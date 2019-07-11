import React, { Component } from  'react';
import Header from './header/header';
import SearchBar from './searchBar/searchBar';
import Book from './book/book';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      printType: " ",
      filter: " ",
      searchTerm: " ",
      books: [],
      price: [],
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(searchTerm, printType, filter) {
    this.setState({
      searchTerm,
      printType,
      filter
    });
    console.log('searchTerm', searchTerm)
    console.log('printType', printType)
    console.log('filter', filter)

}
  


  componentDidMount() {
    //const url = 'https://www.googleapis.com/books/v1/volumes?q='
    //add search term value after q='
    //const filterUrl = '&filter='
    //param values for filter can either be no filter, free-ebooks, paid-ebooks, or ebooks
    //const printTypeUrl = '&printType='
    //param values for printType can be all, books, or magazines
  
    fetch('https://www.googleapis.com/books/v1/volumes?q={searchTerm}&filter={filter}&printType={printType}&key=AIzaSyAJCAAFBbMPmzk9w8xmA4XB_iqeTvSyaps')
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
    /*
        console.log(data.items[0].volumeInfo)
        console.log(data.items[0].volumeInfo.title);
        console.log(data.items[0].volumeInfo.description)
        console.log(data.items[0].volumeInfo.authors)
        console.log(data.items[0].saleInfo.listPrice.amount)
        console.log(data.items[0].volumeInfo.imageLinks.smallThumbnail)
        console.log(data.items[0].volumeInfo.previewLink)*/
      
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
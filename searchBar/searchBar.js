import React, { Component } from  'react';
import './searchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: " ",
      filter: " ",
      printType: " ",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleSubmit(e) {
     e.preventDefault();
     this.setState({
       [e.target.name]: e.target.value
     });
     console.log('search state', this.state.searchTerm)
     console.log('filter state', this.state.filter)
     console.log('printType', this.state.printType)
   }

   submitForm(e) {
     
     e.preventDefault();
     const searchTerm = this.state.searchTerm;
     const filter = this.state.filter;
     const printType = this.state.printType;
     const {onSubmit} = this.props;
     onSubmit(searchTerm, printType, filter);
   }


  
  render(){
    
    return <form className="SearchBar" onSubmit={this.submitForm}>
            <div className="SearchBar__Heading">
            <label className="SearchBoxLabel" htmlFor="searchBox">Search:</label>
            <input 
        type="text" 
        className="searchTerm" 
        placeholder="henry" 
        name="searchTerm"
        value={this.state.searchTerm}
        onChange={this.handleSubmit}

              />
            </div>
            <button type="submit">Search</button>
            <div className="filterOptions">
            <div className="printTypeForm">
          <label htmlFor="printType">Print Type:</label>
          <select 
          id="printType" 
          name="printType" 
          value={this.state.printType}
          onChange={this.handleSubmit}>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
        </div>
        <div className="bookTypeForm">
          <label htmlFor="filter">Book Type:</label>
          <select 
          id="filter" 
          name="filter"
          value={this.state.filter}
          onChange={this.handleSubmit}>
            <option value="None">No Filter</option>
            <option value="free-ebooks"> Free ebooks</option>
            <option value="paid-ebooks">Paid ebooks</option>
            <option value="ebooks">ebooks</option>
          </select>
        </div>
        </div>
    </form>
  }
}

export default SearchBar;
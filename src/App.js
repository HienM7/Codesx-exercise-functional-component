import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import HeaderBar from './components/HeaderBar';
import Book from './components/Book';

class App extends Component {

  constructor() {
    super();
    this.items = [{url:"//", title: "Books"}]
    this.book = {
      coverUrl:"http://res.cloudinary.com/helios-m7/image/upload/v1588171511/vztjerbqg5ydruj3pvjx.png", 
      title: "Book1", 
      description: "This is the book"
    };
  }
  render() {
    
    return (
      <div className="App">
        <HeaderBar items={this.items}/>
        <Book book={this.book} />
      </div>
    );
  }
}

export default App;

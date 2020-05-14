import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import 'bootstrap/dist/css/bootstrap.min.css';


 class Book extends Component {

  render() {
    const { book } = this.props;
    return (
      <div className="BookContainer">
        <div className="BookCover"><img src={book.coverUrl} alt="" width="64px"/></div>
        <div className="BookTitle">{book.title}</div>
        <div className="Description">{book.description}</div>
      </div>
     );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired
  })
}
export default Book;


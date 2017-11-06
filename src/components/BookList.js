import React from 'react'
import {Book} from './Book'

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map(book => <Book title="book.title" img_url="book.image_url" />)}
  </div>
);

BookList.propTypes = {
  books: PropTypes.shape({
    img_url: PropTypes.string.isRequired,
    title: PropsTypes.string.isRequired
  });
}

export {BookList}

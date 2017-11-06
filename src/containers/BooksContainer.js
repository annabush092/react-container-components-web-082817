import React from 'react'
import {BookList} from '../components/BookList'

export default class BooksContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentWillMount() {
    fetch('/api/current_user/book_list')
      .then(response => response.json())
      .then((books => this.setState({ books }));
  }

  render() {
    return <BookList books={this.state.books} />
  }
}

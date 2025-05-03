import Book from './Book.js';

class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year); 
    this._format = format;
  }

  printInfo() {
    console.log(`Title: ${this._title}, Author: ${this._author}, Year: ${this._year}, Format: ${this._format}`);
  }

  get format() {
    return this._format;
  }

  set format(newFormat) {
    if (typeof newFormat === 'string') {
      this._format = newFormat;
    } else {
      console.log('Invalid format');
    }
  }

  static filterByFormat(ebook, format) {
    if (ebook._format === format) {
      console.log('****');
    }
    return ebook;
  }
}

export default EBook;
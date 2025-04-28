class Book {
    constructor(title, author, year) {
      this._title = title;
      this._author = author;
      this._year = year;
    }
  
    printInfo() {
      console.log(`Title: ${this._title}, Author: ${this._author}, Year: ${this._year}`);
    }
  
    get title() {
      return this._title;
    }
  
    set title(newTitle) {
      if (typeof newTitle === 'string') {
        this._title = newTitle;
      } else {
        console.log('Invalid title');
      }
    }
  
    get author() {
      return this._author;
    }
  
    set author(newAuthor) {
      if (typeof newAuthor === 'string') {
        this._author = newAuthor;
      } else {
        console.log('Invalid author');
      }
    }
  
    get year() {
      return this._year;
    }
  
    set year(newYear) {
      if (typeof newYear === 'number') {
        this._year = newYear;
      } else {
        console.log('Invalid year');
      }
    }
  
    static findOldest(books) {
      return books.reduce((oldest, current) => current._year < oldest._year ? current : oldest);
    }
  }
  
  export default Book;
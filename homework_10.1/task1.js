import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 1937);
const book2 = new Book('1984', 'George Orwell', 1949);

const ebook1 = new EBook('Digital Fortress', 'Dan Brown', 1998, 'PDF');

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

ebook1.format = 'EPUB';
console.log(ebook1.format);

const oldest = Book.findOldest([book1, book2, ebook1]);
oldest.printInfo();

EBook.filterByFormat(ebook1, 'EPUB');
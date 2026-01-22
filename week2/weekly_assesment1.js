
class Bookstore {
    constructor(name){
        this.name = name;
        this.books = [];
    };

    storeBook(book){
        this.books.push(book);
    };

    getAllBooks(){
        return this.books;
    };

    getBooksCount(){
        if(this.books.length === 0){
            return 0;
        }
        return this.books.length;
    };

    getBooksValue(){
        if(this.books.length === 0){
            return 0;
        }
        return this.books.reduce((total, book) => total + book.price, 0);
    }

};


class Book {
    constructor(title, pages, price) {
        this.title = title;
        this.pages = pages;
        this.price = price;
    };

    changeTitle(newTitle) {
    this.title = newTitle;
  }
}
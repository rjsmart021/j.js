//1. Exploring JavaScript Objects
//Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

function Book(title,author,page){
    this.title = title;
    this.author = author;
    this.page = page
    this.toString = toString
}

function toString(){
    return this.title + 'by' + this.author + ', is '+ this.page + ' long.'
}
print (){
    console.log(this.toString());
}

var mobyDick = new Book ( 'Hamlet' , 'William Shakespeare' , 82 );
Hamlet.print ();
//Task 2: Implement a method within the Book object to display book information.
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publicationYear}`);
  }
}

const myBook = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
myBook.displayDetails();
//Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.
// Constructor function for Book
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const library = [];

function addBook(title, author, pages) {
    const book = new Book(title, author, pages);
    library.push(book);
}

function searchBooks(criteria, value) {
    return library.filter(book => book[criteria].toLowerCase().includes(value.toLowerCase()));
}

addBook('The Great Gatsby', 'F. Scott Fitzgerald', 180);
addBook('To Kill a Mockingbird', 'Harper Lee', 281);
addBook('1984', 'George Orwell', 328);

console.log(searchBooks('title', '1984')); // Search by title
console.log(searchBooks('author', 'Harper Lee')); // Search by author
//Task 4: Create functions that utilize the filter method to filter
//out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.
// Filter books based on search input and render filtered books to the DOM
 let filterBooks = (books) => {
  let flattenedObj;
   const flattenedObjsArr = [];
   for (let obj = 0; obj < books.length; obj++) {
    const objValues = Object.values(books[obj]);
    flattenedObj = [...objValues.flat()]
    flattenedObjsArr.push(flattenedObj)
  }
  return flattenedObjsArr;
};
//2. Exploring Objects and Math in JavaScript
//Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

const myAccount = new Account('123456', 1000, 'John Doe');
console.log(myAccount);
//Task 2: Implement methods within the Account object to deposit and withdraw funds.
class Account {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
    } else if (amount > this.balance) {
      console.log('Insufficient funds.');
    } else {
      console.log('Withdrawal amount must be positive.');
    }
  }

  getBalance() {
    return this.balance;
  }
}

const myAccount = new Account(100);
myAccount.deposit(50);  // Deposited: $50. New balance: $150
myAccount.withdraw(30); // Withdrew: $30. New balance: $120
myAccount.withdraw(200); // Insufficient funds.
console.log(`Final balance: $${myAccount.getBalance()}`); // Final balance: $120
//Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.

function calculateCompoundInterest(principal, rate, timesCompounded, years) {
    // Convert the rate from a percentage to a decimal
    let decimalRate = rate / 100;

    // Calculate the compound interest
    let amount = principal * Math.pow((1 + decimalRate / timesCompounded), (timesCompounded * years));

    // Return the final amount
    return amount;
}

let principal = 1000; // Initial balance
let rate = 5; // Interest rate in percentage
let timesCompounded = 4; // Quarterly compounding
let years = 10; // Number of years

let finalAmount = calculateCompoundInterest(principal, rate, timesCompounded, years);
console.log(`The final amount after ${years} years is $${finalAmount.toFixed(2)}`);



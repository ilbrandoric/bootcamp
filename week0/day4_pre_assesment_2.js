
/*

Exercise 2 (with Expected Output)

Implement a function named filterBooks that receives an array as parameter.
Each object in the array represents a book and contains two properties:

genre → a string ("fantasy", "horror", "romance")
pages → a number

Your task:
Return a new array containing only the books whose genre is NOT "horror".

Example Input:

[
  { genre: "fantasy", pages: 400 },
  { genre: "horror", pages: 250 },
  { genre: "romance", pages: 300 },
  { genre: "horror", pages: 180 }
]
Expected Output:

[
  { genre: "fantasy", pages: 400 },
  { genre: "romance", pages: 300 }
]

Example Input (all horror books):

[
  { genre: "horror", pages: 220 },
  { genre: "horror", pages: 150 }
]
Expected Output:

[]


*/

// Example array. Note array [with {objects1}, {object2} ...]
// Note this is a 'one level' or flat array, not a matrix (nested arrays) like previous exercise. 

const booksArray = [
  { genre: "fantasy", pages: 400 },
  { genre: "horror", pages: 250 },
  { genre: "romance", pages: 300 },
  { genre: "horror", pages: 180 }
]

// filderBooks function 


function filterBooks(booksArray) {
  const result = [];

  for (let i = 0; i < booksArray.length; i++) {
    const book = booksArray[i];

    if (book.genre !== "horror") {
      result.push(book);
    }
  }

  return result;
}
// Calling the function and logging the output

const kidFriendlyFilter = filterBooks(booksArray);
console.log(kidFriendlyFilter)
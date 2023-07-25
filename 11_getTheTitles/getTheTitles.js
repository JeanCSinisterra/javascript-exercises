const getTheTitles = function(arr) {
    // Check if the input is an Array
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an Array.");
    }

    // Extract the titles of the books in the array
    const bookTitles = arr.map((obj) => {
        if (!("title" in obj)) {
            throw new Error("Each element in the array must be an object with a 'title' property.");
        }
        return obj.title;
    });

    return bookTitles;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
];

const booksTitles = getTheTitles(books);
console.log(booksTitles); // Output: ["Book", "Book2"]


// Do not edit below this line
module.exports = getTheTitles;

const getTheTitles = function (arr) {
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
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald'
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee'
    },
    {
        title: '1984',
        author: 'George Orwell'
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen'
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien'
    },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling'
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger'
    },
    {
        title: 'Brave New World',
        author: 'Aldous Huxley'
    },
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky'
    },
    {
        title: 'The Chronicles of Narnia',
        author: 'C.S. Lewis'
    }
];

const booksTitles = getTheTitles(books);
console.log(booksTitles);
// Do not edit below this line
module.exports = getTheTitles;

const getTheTitles = function(books) {

    // Works but not ideal:

    // const titles = [];
    // for (let i=0; i<books.length; i++) {
    //     titles[i] = books[i].title;
    // }

    // Better way:

    const titles = books.map(book => book.title);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

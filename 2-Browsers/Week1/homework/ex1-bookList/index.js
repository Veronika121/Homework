//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable
const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

for (const item of myBooks) {
  if (item.title === 'The Design of Everyday Things') {
    item.src = 'assets/the_design_of_everyday_things.jpg';
  } else if (item.title === 'The Most Human Human') {
    item.src = 'assets/the_most_human_human.jpg';
  } else if (item.title === 'The Pragmatic Programmer') {
    item.src = 'assets/the_pragmatic_programmer.jpg';
  }
}

function createBookList(books) {
  const ul = document.createElement('ul');
  for (const item of books) {
    const newPar = document.createElement('p');
    newPar.innerText = `${item.title} - ${item.author}`;
    const li = document.createElement('li');
    li.appendChild(newPar);

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title;
    li.appendChild(img);

    if (item.alreadyRead === false) {
      li.style.backgroundColor = 'red';
    } else {
      li.style.backgroundColor = 'green';
    }

    ul.appendChild(li);
  }
  return ul;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);

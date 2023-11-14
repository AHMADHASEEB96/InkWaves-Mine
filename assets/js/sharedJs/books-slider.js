//#region //////////////////////////////////////////////////////////////////////////////////////// Implement Book Slider
const sliderSection = document.querySelector(`section.recent-books`);
sliderSection.innerHTML += `<div class="container slider-content">
<div class="section-header">
    <h3> Recently added books</h3>
</div>
<div class="books-holder">
    <span class="left-arrow slider-arrow slider-l-arrow"><i class="fa-solid fa-caret-left"></i></span>
    <span class="right-arrow slider-arrow slider-r-arrow"><i class="fa-solid fa-caret-right"></i></span>
   
    
</div>
<div class="position-changer">
    <input id="books-slider-range-Input" type="range" min="0" step="1">
    <div class="carousel-arrows hidden">
        <span class="left-arrow"><i class="fa-solid fa-caret-left"></i></span>
        <span class="right-arrow"><i class="fa-solid fa-caret-right"></i></span>
    </div>
</div>
</div>
`;
//#endregion

//#region //////////////////////////////////////////////////////////////////////////////////////// Book Slider Elements
const sliderContent = document.querySelector(`.slider-content`);
const leftArrow = document.querySelector(`.slider-l-arrow`);
const rightArrow = document.querySelector(`.slider-r-arrow`);
const range = document.querySelector(`.position-changer input`);
const loader = document.querySelector(`.loader`);
//#endregion

let bookData = {};
const booksHolder = document.querySelector(`.books-holder`);
let books = document.querySelectorAll(`.book`);
let booksFetchingUrl = "http://webstercassin1-001-site1.ftempurl.com/api/Items";
// First hide the slider till the data comes from the server
sliderContent.classList.add(`hidden`);
getAllBooks();
// fetch the server to get the books
async function getAllBooks() {
  try {
    let response = await fetch(booksFetchingUrl);
    let data = await response.json();
    // get the first 20 books
    // console.log(data.data)
    let recentBooks = data.data.slice(0, 20);
    // add books to the slider
    recentBooks.forEach((book) => {
      // for each book of the 20 books create a div with class book and insert it's data inside
      let bookDiv = document.createElement("a");
      // once the div is clicked store the object to the local storage and go to the  book details page
      bookDiv.addEventListener(`click`, (_) => {
        // send the it to the book details page using the routing system
        // window.location.href = `/pages/book-details.html?id=${book.id}`;
        // it is better to put the link in the anchor tag so that the user can open it in new tap if he want, to open many books in the same time to compare
      });
      
      bookDiv.setAttribute('href',  `/pages/book-details.html?id=${book.id}`) 
      bookDiv.classList.add(`book`);
      bookDiv.style.cssText = ` background-image: url('${book.image}') !important;`;
      bookDiv.innerHTML = `
  <img class = 'slider-img' src='${ book.image}'> 

    <div class="book-details" style = "color:red!important;">
    <h5 class="book-title">${book.title}</h5>
    <p class="book-category">${book.categorys.map(
      (c) => c.name
    )}</p> <!-- map over the array of a number of objects and from each one get the name, this creates an array of the results (names) -->
    <span class="book-price"> ${
      book.price
    } <span class="currency">EGP</span> </span>
</div>`;
      // Now reveal the section again.

      // console.log(loader)
      loader.classList.add(`hidden`);
      sliderContent.classList.remove(`hidden`);

      // bookDiv.style.backgroundImage =`url('${book.image}')`;

      booksHolder.appendChild(bookDiv);
      books = document.querySelectorAll(`.book`); // Must update the NodeList after each item is created by adding it to the nodeList.
      // console.log(books)
    });

    //#region //////////////////////////////////////////////////////////////////////////////////////// Book Slider Functionality

    //////////////////// Fetch the books

    // when hover over a book reveal the details
    console.log(books);
    books.forEach((b) => {
      b.addEventListener(`mouseover`, (_) => {
        b.querySelector(
          `.book-details`
        ).style.cssText = `opacity: 1; transform : translateY(0%)`;
      });
      b.addEventListener(`mouseout`, (_) => {
        b.querySelector(`.book-details`).style.cssText = `opacity: 0;`;
      });
    });

    const sliderRanger = document.querySelector(`#books-slider-range-Input`);
    sliderRanger.setAttribute(`max`, `${books.length * 100}`);
    sliderRanger.max = `${(books.length - 4) * 100}`;

    for (let i = 0; i < books.length; i++) {
      books[i].style.cssText = `transform :translateX(${
        i * 100
      }%); border-left: 6px solid white;`;
    }

    let basePosition = 0;
    leftArrow.addEventListener(`click`, () => {
      if (basePosition < 0) {
        basePosition += 100;
        changeRangePosition();
      }
      for (let i = 0; i < books.length; i++) {
        books[i].style.cssText = `transform :translateX(${
          i * 100 + basePosition
        }%);border-left: 6px solid white;`; // 0 - -100 = 100
      }
    });
    rightArrow.addEventListener(`click`, () => {
      //When clicking reduce the basePosition by 100 as long it is more than tha length
      if (basePosition > (-books.length + 4) * 100) {
        // if 14 books , basePosition > -1100 (the 4 is the number of images in the visible part of the slider)
        /* If the length is 14 that means each book will be able to translate maximum 14 times, but that will male the movement stop when tha last book is in the place 
      of the very first book, this will leave unoccupied space on it's right in the visible part of the slider, that's why the movement needs to be reduced by the number 
      of books in the visible portion of the slider, it is like, before reaching the left border of the slider by 4 books ( including the last one in the visible part) stop the movement  */
        basePosition -= 100;
        changeRangePosition();
      }

      for (let i = 0; i < books.length; i++) {
        books[i].style.cssText = `transform :translateX(${
          i * 100 + basePosition
        }%);border-left: 6px solid white;`;
      }
    });

    sliderRanger.oninput = travelBooks;

    function travelBooks() {
      let value = sliderRanger.value;
      for (let i = 0; i < books.length; i++) {
        books[i].style.cssText = `transform :translateX(${
          i * 100 - +value
          //   100 - value * 5
        }%); border-left: 6px solid white;  `;
      }
    }

  
    function changeRangePosition() {
      sliderRanger.value = `${basePosition}`;
      console.log(sliderRanger.value);
    }
  } catch (error) {
    console.log(error);
  }
}

// code that depends on the data to be coming from the serve needs to be inside the async function not after it.
// Also never forget to always update the NodList after each item that will be created dynamically is created.
//#endregion
/* let toExport = "Ahmad Is my Name";
export { bookData };
 */
//  document.body.cssText = `background-image : url("https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=sph")`

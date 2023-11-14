`use strict`;
// import {bookDetails} from '/assets/js/sharedJs/books-slider.js'
// console.log(bookDetails)
// let selectedBook = JSON.parse(localStorage.getItem('selectedBook'))
// console.log(selectedBook)

//#region ////////////////////////////////////////////////////////////////////////////////////////////////////////////// Book details Functionality
const bookDetailsSection = document.querySelector(`.book-details-sec`);

// once tha pge is loaded load the clicked book details
// get the book id  from the routing system.
const urlParameters = new URLSearchParams(window.location.search);
const bookId = urlParameters.get("id");
// fetch the book using the id
let bookUrl = `http://webstercassin1-001-site1.ftempurl.com/api/Items/${bookId}`;
async function getBook() {
  let response = await fetch(bookUrl);
  let data = await response.json();
  // return bookInfo = data.data; // causes error
  return data.data;
  // console.log(bookInfo)
}

let bookDetails = await getBook();
console.log(bookDetails);
if (bookDetails) {
  // then implement the elements after integrating them with the received data to the page
  bookDetailsSection.innerHTML = `<div class="container">
<div class="book-representation p-3 d-flex">
    <div class="book-gallery">
        <div class="main-image-div">
            <div class=" main-image w-100"><img src='${
              bookDetails.image
            }' alt="">
            </div>

        </div>
        <div class="sub-images pt-1">
            <div class="sub-image active-sub-image"><img src='${
              bookDetails.image
            }'
                    alt=""></div>
            <div class="sub-image "><img src="/assets/media/product-details/img-2.jpg" alt=""></div>
            <div class="sub-image "><img src="/assets/media/product-details/img-3.jpg" alt=""></div>
            <div class="sub-image "><img src="/assets/media/product-details/img-4.jpg" alt=""></div>
            <div class="sub-image "><img src="/assets/media/product-details/img-2.jpg" alt=""></div>
            <div class="sub-image "><img src="/assets/media/product-details/img-3.jpg" alt=""></div>
            <div class="sub-image "><img src="/assets/media/product-details/img-1.jpg" alt=""></div>

        </div>
    </div>
    <div class="book-info ps-4">
        <div class="book-title-bookmar d-flex gap-3">
            <h4 class> ${bookDetails.title} </h4>
            <h4 class="bookmark-book">
                <i class="fa-solid fa-bookmark bookmark-book-icon"></i>
            </h4>
        </div>
        <div> <span>Author :</span><span> ${
          bookDetails.subDescription.author
        } </span></div>
        <div> <span>Categories :</span><span> ${bookDetails.categorys.map(
          (category) => category.name
        )}</span></div>
        <div class="book-rating">
            <span class="rating-star">⭐</span>
            <span class="rating-star">⭐</span>
            <span class="rating-star">⭐</span>
            <span class="rating-star">⭐</span>
            <span class="rating-star">⭐</span>
            <div class="rating-number"> <span class="rate-value">5</span> /5 ( <span
                    class="rates-nubmer">
                    170</span> rates )</div>
        </div>
        <hr>
       <!--  <span>Starting from</span> -->
       <div> 

       <span class="book-price h3"> EGP ${bookDetails.price} </span> 
            <span class = "inclusive-of-vat"> Inclusive of EGP ${
              bookDetails.tax
            }  VAT </span>
            <p> <span class = "text-decoration-line-through me-2"> Instead of EGP ${
              bookDetails.price + bookDetails.discount
            } </span> 
              <span>you saved EGP ${
                bookDetails.discount
              }</span> <span class = "bg-primary text-light px-2 border rounded"> ${(
    (bookDetails.discount * 100) /
    bookDetails.price
  ).toFixed(2)}% off</span></p> 
       </div>

        <div class="stock"><span class="books-in-stock"> ${
          bookDetails.quantity
        } </span> in stock</div>
        <hr>
        <div class="book-description">
            <p>
                For something supposedly so brilliant and evolutionarily advanced, the human brain is
                pretty
                messy, fallible and disorganized. In The Idiot Brain neuroscientist Dean Burnett
                celebrates
                the imperfections of the human brain in all their glory, and the impact of these quirks
                on
                our daily lives. Expertly researched and entertainingly written, this book is for anyone
                who
                has wondered why their brain seems to be sabotaging their life, and what on earth it is
                really up to.</p>
            <button class="btn p-0 m-0 text-primary book-more-details-btn">More details</button>
        </div>
        <div class="action-on-book">
            <!-- <form action=""> -->
                <h5> Quantity </h5>
                <div class="qyt d-flex gap-3">
                    <!-- <input class = "qyt-input"type="number" name="" id="" value="1">  -->
                    <div class="qyt-arrows d-flex flex-column ">
                        <span class="qyt-up"> <i class="fa-solid fa-caret-up  p-0 m-0"></i> </span>
                        <input class="qyt-input" type="number" name="" id="" min="1" value="1" required>
                        <span class="qyt-down"> <i class="fa-solid fa-caret-down  p-0 m-0"></i> </span>

                    </div>

                </div>
                <div class="action-buttons my-3">
                    <div class="add-to-cart my-2">
                        <input type="submit" value="Add to cart"
                            class=" add-book-to-cart-submit btn btn-secondary"> </input>
                    </div>
                    <div class="add-to-cart">
                        <input type="submit" value="Buy" class=" buy-book-submit btn btn-secondary">
                        </input>
                    </div>
                </div>

            <!-- </form> -->
        </div>

    </div>

</div>
<div class="book-more-details p-3">
    <h1> More details</h1>

    <div class="about-author">
        <h5>About author </h5>
        <p> Dean Burnett is a neuroscientist, blogger, sometimes-comedian and author. He lives in
            Cardiff, and is currently an honorary research fellow at the Cardiff University Psychology
            School. His previous books, The Idiot Brain and The Happy Brain, were international
            bestsellers published in over twenty-five countries. His Guardian articles have been read
            over sixteen million times and he currently writes the 'Brain Yapping' blog for the Cosmic
            Shambles network. </p>
    </div>
    <h5>About book</h5>
    <div class="further-details">
        <div class="detail"><span>Author </span><span>Dean Burnet</span></div>
        <div class="detail"><span>Categories</span><span>${bookDetails.categorys.map(
          (category) => category.name
        )}</span> </div>
          <div class="detail"><span>Publisher </span><span>Guardian Faber Publishing</span></div>
          <div class="detail ${
            bookDetails.subDescription.edition ? "" : "hidden"
          }"><span> Edition </span><span>${
    bookDetails.subDescription.edition
  }</span></div>

          <div class="detail ${
            bookDetails.subDescription.year ? "" : "hidden"
          }"><span>Publishing year </span><span>${
    bookDetails.subDescription.year
  }</span></div>

          <div class="detail"><span>Language </span><span>${
            bookDetails.subDescription.language
          }</span></div>
          <div class="detail"><span>ISBN </span><span> ${
            bookDetails.subDescription.isbn
          }</span></div>
          <div class="detail"><span>Paperback </span><span>‎ ${
            bookDetails.subDescription.pages
          } pages</span></div>
          <div class="detail"><span>Dimensions </span><span>12.9 x 2 x 19.8 cm</span></div>
          <div class="detail ${
            bookDetails.subDescription.weight ? "" : "hidden"
          }"><span>Wight </span><span>${
    bookDetails.subDescription.weight
  }</span></div>
       
        <div class="detail"><span>Also </span><span>Best Sellers Rank: #3,875 in Books </span></div>

    </div>


</div>


</div>`;
} else {
  bookDetailsSection.innerHTML = `<div class = 'd-flex justify-content-center align-items-center'> <img src = 'https://cdn.dribbble.com/userupload/10464615/file/original-a76504d7322551a956a46365e67c0cbe.png?resize=1024x768'> <!-- <h1>  Can not Find Data </h1> --> </div>`;
}

//#region ////////////////////////////////////////////////////////////////////////////////////////////////////////////// Book details Elements
// Product details
const bookmarkBookDiv = document.querySelector(`.bookmark-book`);
const bookmarkBookIcon = document.querySelector(`.bookmark-book-icon`);
const subImages = document.querySelectorAll(
  `.book-details-sec .container .book-gallery .sub-images .sub-image`
);
const mainImage = document.querySelector(
  `.book-details-sec .container .book-gallery .main-image-div .main-image img`
);
const qytArrows = document.querySelector(`.action-on-book .qyt .qyt-arrows`);
const qytInput = document.querySelector(`.action-on-book .qyt .qyt-input`);
const qytUp = document.querySelector(
  `.action-on-book .qyt .qyt-arrows .qyt-up`
);
const qytDown = document.querySelector(
  `.action-on-book .qyt .qyt-arrows .qyt-down`
);
const ActionInputValue = document.querySelectorAll(`.qyt-input-value`);
const bookMoreDetails = document.querySelector(`.book-more-details`);
const bookMoreDetailsBtn = document.querySelector(`.book-more-details-btn`);
//#endregion

// Bookmark book
bookmarkBookDiv.addEventListener(`click`, bookmarkBook);
function bookmarkBook(e) {
  // e.target.style.color = "orange"
  e.target.classList.toggle(`book-bookmarked`);
  // bookmarkBookIcon.style.color = "red"
}

// Quantity-changing
let addToCartUrl = `http://webstercassin1-001-site1.ftempurl.com/api/Cart?itemId=${bookId}&quantity=1`;

// On clicking

qytUp.addEventListener(`click`, function () {
  // make sure the value not more less than 0 or more than the quantity in stock
  if (qytInput.value >= 0 && qytInput.value < bookDetails.quantity) {
    qytInput.value++;
    changeSubmitValue();
    updateUrlQty(qytInput.value)
    //
  } else if (qytInput.value >= bookDetails.quantity) alert("Reached the maximum amount to buy");
});
qytDown.addEventListener(`click`, function () {
  if (qytInput.value > 0) {
    qytInput.value--;
    changeSubmitValue();
    updateUrlQty(qytInput.value)
  }
});
// On input
qytInput.oninput = changeSubmitValue; // only refer no call
function changeSubmitValue() {
  // don't allow user to insert manually a number more than the available quantity, if he did take the value down to the quantity available.
  qytInput.value >= bookDetails.quantity
    ? (qytInput.value = bookDetails.quantity)
    : // Don't allow very big sized numbers
      (qytInput.value = qytInput.value.length < 6 ? qytInput.value : 0);
  document.querySelector(`.add-book-to-cart-submit`).value =
    qytInput.value > 0
      ? `Add ${qytInput.value} book${qytInput.value > 1 ? "s" : ""} to cart`
      : "Add to cart";
  document.querySelector(`.buy-book-submit`).value =
    qytInput.value > 0
      ? `Buy ${qytInput.value} book${qytInput.value > 1 ? "s" : ""}`
      : "Buy";
}
// const subImages = document.querySelectorAll(`.sub-image `)
console.log(mainImage);
// Go to more details
bookMoreDetailsBtn.addEventListener(`click`, toMoreDetail);
function toMoreDetail() {
  bookMoreDetails.scrollIntoView({ top: 100, scroll: "smooth" });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////    PRODUCT DETAILS
// Change images in gallery
subImages.forEach((subImage) => {
  subImage.addEventListener(`click`, function () {
    subImages.forEach((si) => {
      si.classList.remove("active-sub-image");
    });

    subImage.classList.add("active-sub-image");
    mainImage.src = subImage.querySelector(`img`).getAttribute(`src`);
  });
});



/////////// Add to cart 
let token = getToken();  // Fetch token once
console.log(token)
function updateUrlQty(qty) {
  addToCartUrl = `http://webstercassin1-001-site1.ftempurl.com/api/Cart?itemId=${bookId}&quantity=${qty}`;
  console.log(addToCartUrl);
}

function getToken() {
  // use short circuiting to get the talking from local or session storage
  return localStorage.getItem('token') || sessionStorage.getItem('token') ;
}

async function postData(url) {
  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
      // body: JSON.stringify(bodyData)
    });

    let data = await response.json();
    if (data.succeeded) {
      alert(' Item Added To Cart')

    } else {
      // alert(data.Messages[0])
      alert(' Something wrong happened, Item not added and it may exists in cart already')
    }
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

document.querySelector('.add-book-to-cart-submit').addEventListener('click', async () => {
  // Once the button is get the token again, because in case the user is signed the token is saved to the storage so 
  //we need to refresh the process of getting the token from the local storage once the user clicks add to cart the first time after signing in
  token = getToken();  
// if the token is found in local or session storage means the user is now logged in
  if ( token) {
 // add this item to the cart  
    try {
      await postData(addToCartUrl);
      // If the postData is successful, you can show the success message or perform other actions.
     
    } catch (error) {
      console.error('Error adding item to the cart:', error.message);
      // Handle the error if needed
    }
  } else {
    bodyOverlay.classList.remove('hidden');
    signModal.classList.toggle('hidden');
    signInBtn.classList.add('activeBtn');
    signUpBtn.classList.remove('activeBtn');
    revealSignInForm();
  }
});




////////////// Add to bookmarks
let addToBookmarksUrl = `http://webstercassin1-001-site1.ftempurl.com/api/Favourite?itemId=${bookId}`
let bookmarksDate = {
  itemId: `${bookId}`
}
bookmarkBookDiv.addEventListener(`click`, _ =>   postData(addToBookmarksUrl))
console.log(token)
console.log(sessionStorage)
getBookmarkedBooks()
async function getBookmarkedBooks() {
  let response = await fetch('http://webstercassin1-001-site1.ftempurl.com/api/Favourite',{
    headers : {
      'Authorization' : `bearer ${token}`,
      'Content-type': 'application/json'
    }
  });
  let data = await response.json();
  console.log(data.data)
}

//#endregion

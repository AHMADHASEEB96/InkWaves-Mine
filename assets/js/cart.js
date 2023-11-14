
// get books in cart 

let token = localStorage.getItem(`token`)  ||  sessionStorage.getItem('token'); 
// !token ? document.querySelector(`.cart-body`).innerHTML = `<div class = "container flex-center-all"> <h1> Kindly login to interact with cart </h1></div>`:
async function getCartBooks() {
  let response = await fetch('http://webstercassin1-001-site1.ftempurl.com/api/cart',{
    headers : {
      'Authorization' : `bearer ${token}`,
      'Content-type': 'application/json'
    }
  });
  let data = await response.json();
 return data.data
}

/*  if await is used outside an async function then the script Must be of type module */
let  cartData = await getCartBooks() 
console.log( cartData)


//#region ////////////////////////////////////////////////////////////////////////////////////// Cart Elements
const cartTotal = document.querySelector(`.cart-total`)
const cartShipping = document.querySelector(`.cart-shipping`)
const cartSubtotal = document.querySelector(`.cart-subtotal`)
const cartTaxes = document.querySelector(`.cart-taxes`)
const cartItemsCount = document.querySelector(`.cart-items-count`)
const cartItemsContainer = document.querySelector(`.cart-products-container`)
//#endregion

//#region ////////////////////////////////////////////////////////////////////////////////////// Cart Functionalities
cartTotal.textContent = (cartData.subTotal + cartData.tax + cartData.shipping ).toFixed(2)
cartShipping.textContent = cartData.shipping.toFixed(2)
cartSubtotal.textContent = ( cartData.subTotal).toFixed(2)
cartTaxes.textContent = ( cartData.tax).toFixed(2)
cartItemsCount.textContent = cartData.itemCount
//////// fill cart hero details

//#endregion

// Change info in the cart hero
const checkoutBtns = document.querySelectorAll(`.checkout-btn`);
checkoutBtns.forEach(btn => {
  btn.addEventListener(`click`, goToCheckOut)
  function goToCheckOut() {
    // first create a state that the user is going to the checkout page by clicking the button and not any way else like pasting the path in the url input directly 
    sessionStorage.setItem(`isUserCheckingOut`,`true`)
    window.location.href = '/pages/checkout.html'
  }
})

/////////////////// Fill the cart 
cartData.items.forEach(item => {
  cartItemsContainer.innerHTML += `
  <div class="cart-product p-2 d-flex gap-3 border my-2">
      <div class="cart-product-details-side d-flex gap-3" style="flex: 1;">
          <div class="cart-product-img"><img class="w-100 h-100"
                  src="${item.image}"
                  alt="Product-image">
          </div>
          <div class="cart-product-details">
              <div class="cart-product-title d-flex gap-3 ">
                  <h4> ${item.title} </h4>
                  <h4 class="bookmark-book">
                      <i class="fa-solid fa-bookmark bookmark-book-icon"></i>
                  </h4>
                  <h4 class="cart-product-price" ><span class="cart-book-price" prod-price-id = '2' value = '${item.price}'> ${item.price} </span> EGP</h4>
              </div>
              <div class="cart-product-description">
                  <p class="cart-book-Author"> Author : <span> Dean Burnet </span></p>
                  <p class="cart-book-publisher"> Publisher : <span>Burnet</span></p>
                  <p class="cart-book-category"> Category : <span> Neuropsychology, Humor &
                          Entertainment</span></p>
                  <div class="book-rating d-flex gap-3 align-items-center">
                      <div class="rating-stars">
                          <span class="rating-star">⭐</span>
                          <span class="rating-star">⭐</span>
                          <span class="rating-star">⭐</span>
                          <span class="rating-star">⭐</span>
                          <span class="rating-star">⭐</span>
                      </div>
                      <div class="rating-number"> <span class="rate-value">5</span> /5 ( <span
                              class="rates-nubmer">
                              170</span> rates )</div>
                  </div>
                  <p class="more-details-on-product"><a href=""> More details </a></p>
              </div>
          </div>
      </div>
      <div class="cart-product-transaction-side" style="flex: 1;">

          <div class="action-on-book">
              <div class="qyt d-flex gap-3">
                  <div class="qyt-arrows d-flex gap-3">
                      <button class="qyt-down cart-qyt-btn btn btn-secondary" qyt-prod-id = '2' qut-btn-type = 'down'> Decrease  </button>
                      <input class="qyt-input" type="number"  value="${item.quantity}" required qyt-input-prod-id = '2' disabled>
                      <button class="qyt-up cart-qyt-btn btn btn-secondary" qyt-prod-id = '2' qut-btn-type = 'up'> Increase  </button>
                      </span>
                  </div>
              </div>
              <div class="total-price mt-1" > Total Item's price : 
                  <span class="total-price-for-this-product" total-price-prod-id = '2'> </span>    


              </div>
              <div class="in-stock mt-1 "> <span class="number-in-stock"> 7 </span> in stock </div>
          </div>
          <div class="cart-delivery-details m-0">
              <div class="delivery-by d-flex align-items-center gap-3">
                  <span> Delivery by</span>
                  <h5 class="py-1 delivery-time"> Thu, Nov 10</h5>
              </div>
          </div>

          <div class="remove-product" trash-for = '${item.id}'> <i class="fa-solid fa-trash"></i> </div>
      </div>
  </div>
`
// remove a product 

})
// Control quantity

const cartQytBtns = document.querySelectorAll(`.cart-qyt-btn`)
cartQytBtns.forEach(qBtn => {controlQyt(qBtn)})
function controlQyt (qBtn) {
qBtn.addEventListener(`click`, _ => {
  let prodId = qBtn.getAttribute(`qyt-prod-id`)
  let qytBtnType = qBtn.getAttribute(`qut-btn-type`)
  
  // get the input of that product
  const thisInput = document.querySelector(`[qyt-input-prod-id = '${prodId}']`)
  qytBtnType == 'up' ?   thisInput.value ++ : thisInput.value > 1 ? thisInput.value -- : thisInput.value = 1 ; 
  console.log(thisInput.value)
  let totalPriceEl = document.querySelector(`[total-price-prod-id = '${prodId}']`)
  let productPrice = document.querySelector(`[prod-price-id = '${prodId}']`).getAttribute(`value`)
  console.log(  thisInput.value * productPrice)
  totalPriceEl.textContent = thisInput.value * productPrice
})
}

cartData.items.forEach(item => {
document.querySelector(`[trash-for = '${item.id}']`).addEventListener(`click`, (e)=> {
  deleteItem(item.id) 
})
})

async function deleteItem(id) {
  let token = localStorage.getItem(`token`) || sessionStorage.getItem(`token`);
  const deleteUrl = `http://webstercassin1-001-site1.ftempurl.com/api/Cart?id=${id}`;
  let response = await fetch(deleteUrl, {
    method : 'DELETE',
    headers : {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  let data = await response.json()
  console.log(data)
  window.location.reload

}

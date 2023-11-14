//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Implement the HTML Markup

document.querySelector(`section.testimonials`).innerHTML = ` <div class="container">
<div class="review-arrows-div d-flex justify-content-center align-items-center">
    <div class="review-position text-light me-3" > <span class="review-number"> 1 </span> of <span class="total-reviews"> 20 </span></div>
    <div class="review-left-icon"> <i class="fa-solid fa-chevron-left me-3 review-l-arrow"></i> </div>
<div class="review-right-icon"> <i class="fa-solid fa-chevron-right review-r-arrow" ></i> </div>
</div>
<div class="testimonial " data-testimonial-position = "1">
    <div class="reviewed-on"> <i class="fa-brands fa-square-twitter"></i> </div>
  
    <div class="reviewer-image">
    </div>
    <div class="reviewer">
        <h5 class="reviewer-name">Muhammad Salama</h5>
        <p class="reviewer-review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            praesentium eos ipsum neque placeat optio possimus veniam ipsam doloribus voluptates veritatis
            nisi beatae, omnis sit ipsa iure facilis, architecto eligendi?</p>
    </div>
</div>
<div class="testimonial hidden" data-testimonial-position = "2">
    <div class="reviewed-on"> <i class="fa-brands fa-square-twitter"></i> </div>
  
    <div class="reviewer-image">
    </div>
    <div class="reviewer">
        <h5 class="reviewer-name">Noha Nasser</h5>
        <p class="reviewer-review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            praesentium eos ipsum neque placeat optio possimus veniam ipsam doloribus voluptates veritatis
            nisi beatae, omnis sit ipsa iure facilis, architecto eligendi?</p>
    </div>
</div>
<div class="testimonial hidden" data-testimonial-position = "3">
    <div class="reviewed-on"> <i class="fa-brands fa-square-twitter"></i> </div>
  
    <div class="reviewer-image">
    </div>
    <div class="reviewer">
        <h5 class="reviewer-name">Ahmad Haseeb</h5>
        <p class="reviewer-review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            praesentium eos ipsum neque placeat optio possimus veniam ipsam doloribus voluptates veritatis
            nisi beatae, omnis sit ipsa iure facilis, architecto eligendi?</p>
        </div>
    </div>
    <div class="testimonial hidden" data-testimonial-position = "4">
        <div class="reviewed-on"> <i class="fa-brands fa-square-twitter"></i> </div>
        
        <div class="reviewer-image">
        </div>
        <div class="reviewer">
        <h5 class="reviewer-name">Mustafa Abdelrazak</h5>
        <p class="reviewer-review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            praesentium eos ipsum neque placeat optio possimus veniam ipsam doloribus voluptates veritatis
            nisi beatae, omnis sit ipsa iure facilis, architecto eligendi?</p>
    </div>
</div>
<div class="testimonial hidden" data-testimonial-position = "5">
    <div class="reviewed-on"> <i class="fa-brands fa-square-twitter"></i> </div>
  
    <div class="reviewer-image">
    </div>
    <div class="reviewer">
        <h5 class="reviewer-name">Muhammad AbdelFattah</h5>
        <p class="reviewer-review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            praesentium eos ipsum neque placeat optio possimus veniam ipsam doloribus voluptates veritatis
            nisi beatae, omnis sit ipsa iure facilis, architecto eligendi?</p>
    </div>
</div>
<div class="testimonial hidden" data-testimonial-position = "6">
    <div class="reviewed-on"> <i class="fa-brands fa-square-twitter"></i> </div>
  
    <div class="reviewer-image">
    </div>
    <div class="reviewer">
        <h5 class="reviewer-name">Somaia</h5>
        <p class="reviewer-review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            praesentium eos ipsum neque placeat optio possimus veniam ipsam doloribus voluptates veritatis
            nisi beatae, omnis sit ipsa iure facilis, architecto eligendi?</p>
    </div>
</div>
</div>`
//#endregion

//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Elements
const testimonials = document.querySelectorAll(".testimonial");
const reviewArrowsDiv = document.querySelector(`.review-arrows-div`);
const reviewPosition = document.querySelector(`.review-position`);
const reviewLeftIcon = document.querySelector(`.review-l-arrow`);
const reviewRightIcon = document.querySelector(`.review-r-arrow`);
console.log(reviewLeftIcon);
const reviewNumber = document.querySelector(`.review-number`);
const totalReviews = document.querySelector(`.total-reviews`);
//#endregion

//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Functonality

totalReviews.textContent = testimonials.length;
let position = 1;
reviewNumber.textContent = position;
reviewArrowsDiv.addEventListener("click", changeReview);
reviewArrowsDiv.addEventListener("mouseover", hoverOverIconOnlyNotPath);
function hoverOverIconOnlyNotPath(e) {
if (e.target.classList.contains(`review-l-arrow`) || e.target.classList.contains(`review-r-arrow`)) {e.target.style.cursor = 'pointer'}
}
function changeReview(e) {
  if (
    e.target != reviewPosition &&
    e.target != reviewNumber &&
    e.target != totalReviews
  ) {
    if (e.target.classList.contains(`review-r-arrow`)) {
      if (position < testimonials.length) {
        position++;
      } else {
        position = 1; // Reset to the first testimonial when reaching the end
      }
    } else if (e.target.classList.contains(`review-l-arrow`)) {
      if (position > 1) {
        position--;
      } else {
        position = testimonials.length; // Set to the last testimonial when reaching the beginning
      }
    }
    reviewNumber.textContent = position;
    console.log(position);

    // Assuming testimonials is an array of DOM elements
    testimonials.forEach((testimonial) => testimonial.classList.add(`hidden`));
    document
      .querySelector(`[data-testimonial-position="${position}"]`)
      .classList.remove(`hidden`);
  }
}
//#endregion



/* Comments 
*** Bay attention to theses Explanation
* The Icon downloaded form font awesome library sometimes is converted to type <svg> and also it sometime includes an element of type <path> inside ite that listens to the event when you
click on the icon, thats why the event may not be handled the way you want because you are trying to target the icon itself because it has the classes you working with, in the previous example
I have created a hovering event first to make the cursor turns to pointer only when the target contains certain class, that the svg icon or the <i> element contains, this wah the user
will understand that the icon he is clicking will only respond when the cursor is pointer, still the path listens to the event put no thing will happen.
this login may not so good working , I am not very sure it is just a try to handle this issue
*/
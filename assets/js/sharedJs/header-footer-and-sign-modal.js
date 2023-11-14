//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Upper Page
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Implement Upper Page Content
function renderUpperSignButtons() {
  return ` <div class = "upper-sign-btns"> 
  <button class="header-sign-btns mx-2" id="header-sign-in-btn"> Sign in</button>
  <button class="header-sign-btns" id="header-sign-up-btn"> Sign up</button>
</div>`;
}
function renderUpperUserData() {
  return `<div class = "upper-logged-user hidden"> 
  <i class="fa-solid fa-circle-user user-account"></i>
  <i class="fa-solid fa-right-from-bracket user-log-out"></i>
</div>`;
}
let userInfo = JSON.parse(window.localStorage.getItem(`userInfo`));
if (userInfo) {
  console.log(userInfo);
}
// console.log(window.localStorage.getItem(`userInfo`))
document.querySelector(`.upper-page`).innerHTML = `<div class="container">
<div class="header ">

    <a href="/index.html" >
        <div class="logo"><img src="../assets/media/images/logo.ng.png" alt="ink waves logo">
            <span style="font-family:  cairo; font-weight: bold; color: rgb(17, 78, 114);">InkWaves</span>

        </div>
    </a>
    <div class="header-content">
      <div class = 'hello-user'> <span class = 'user-name'> </span></div>
        <div class="search">
            <input type="search" placeholder="Search" class="search-bar">
            <!-- <i id = "glass-icon" class="fa-solid fa-magnifying-glass search-icon"></i> -->
        </div>
        <a href="/pages/cart.html" class="cart-anchor"> <i class="fa-solid fa-cart-shopping cart-icon"></i> <span
                class="number-of-products-in-cart">1</span> </a>
        <i class="fa-solid fa-bookmark header-bookmark"></i>
        
       <div class = "upper-sign-btns"> 
         <button class="header-sign-btns mx-2" id="header-sign-in-btn"> Sign in</button>
         <button class="header-sign-btns" id="header-sign-up-btn"> Sign up</button>
       </div>

       <div class = "upper-logged-user d-flex justify-content-center align-items-center hidden"> 
         <div class = "user-in-header"> 
         <i class="fa-solid fa-circle-user user-account"></i>
         
         <div class = "user-window  ">
        <ul> 

<li> <a href = "/pages/user-dashboard.html"> <i class="fa-solid fa-table-columns"></i>  Dashboard  </a> </li>
<li> <a href = "/pages/user-dashboard.html"> <i class="fa-solid fa-handshake"></i> My Orders  </a> </li>
<li> <a href = "/pages/user-dashboard.html"> <i class="fa-solid fa-marker"></i> Update info  </a> </li>
<hr>
<li style = "cursor: pointer;" class = "log-out">  <i class="fa-solid fa-right-from-bracket log-out"></i> Log out </li>

        </ul>  
        </div>
        </div>
         <!-- <i class="fa-solid fa-right-from-bracket user-log-out  ms-2"></i> -->
       </div>

    </div>

</div>
<nav class="navbar">
    <ul class="">
        <li>
            <a href="" id="a-1" itemName="print" class="listitem">

                Print
            </a>
        </li>
        <li>
            <a href="/pages/book-details.html" id="a-1" itemName="book-details" class="listitem w-100">
                Book details
            </a>
        </li>
        
        <li>
            <a href="/pages/book-store.html" id="a-2" itemName="book-store" class="listitem">
                Book store
            </a>
        </li>
        <li>
            <a href="/pages/reset-password.html" itemName="3" id="a-3" class="listitem">
                Reset pass
            </a>
        </li>
        <li>
            <a href="/pages/update-pass.html" itemName="3" id="a-3" class="listitem">
                update pass
            </a>
        </li>
        <li>
            <a href="/pages/contact.html" id="a-4" itemName="4" class="listitem">
                Contact InkWaves
            </a>
        </li>
        <li>
            <a href="" id="a-5" itemName="privacy-and-conditions" class="listitem">
                Privacy and Policy
            </a>
        </li>
        <li>
            <a href="" id="a-6" itemName="about" class="listitem">
                About InkWaves
            </a>
        </li>
    </ul>
</nav>
<!-- <div id="subsections-div" class="sub-divs-container hidden width-100% "> -->
    <div id="subsection-print" class="subsection">
        <div class="sub-links">
          
            <p class="sub-link"> Here is the sublink print</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
        </div>
        <div class="boxes-side">
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
                <p class="box-description"> this is a short description</p>
            </a>
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
            </a>
        </div>
    </div>
    <div id="subsection-book-details" class="subsection">
        <div class="sub-links">
          
            <p class="sub-link"> Here is the sublink print</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
        </div>
        <div class="boxes-side">
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
                <p class="box-description"> this is a short description</p>
            </a>
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
            </a>
        </div>
    </div>
    <div id="subsection-user-dashboard" class="subsection">
        <div class="sub-links">
          
            <p class="sub-link"> Here is the sublink print</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
        </div>
        <div class="boxes-side">
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
                <p class="box-description"> this is a short description</p>
            </a>
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
            </a>
        </div>
    </div>
    <div id="subsection-book-store" class="subsection">
        <div class="sub-links">
            <p class="sub-link"> Here is the sublink store</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
        </div>
        <div class="boxes-side">
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
                <p class="box-description"> this is a short description</p>
            </a>
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
            </a>
        </div>
    </div>
    <div id="subsection-privacy-and-conditions" class="subsection">
        <div class="sub-links">
            <p class="sub-link"> Here is the sublink conditions</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
        </div>
        <div class="boxes-side">
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
                <p class="box-description"> this is a short description</p>
            </a>
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
            </a>
        </div>
    </div>
    <div id="subsection-about" class="subsection">
        <div class="sub-links">
            <p class="sub-link"> Here is the sublink about</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
        </div>
        <div class="boxes-side">
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
                <p class="box-description"> this is a short description</p>
            </a>
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
            </a>
        </div>
    </div>
    <div id="subsection-4" class="subsection">
        <div class="sub-links">
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
        </div>
        <div class="boxes-side">
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
                <p class="box-description"> this is a short description</p>
            </a>
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
            </a>
        </div>
    </div>
    <div id="subsection-5" class="subsection">
        <div class="sub-links">
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
            <p class="sub-link"> Here is the sublink</p>
        </div>
        <div class="boxes-side">
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
                <p class="box-description"> this is a short description</p>
            </a>
            <a href="" class="box">
                <h6 class="box-title">Box Title </h6>
            </a>
        </div>
    </div>
<!-- </div> -->
</div>`;
//#endregion
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Upper page Elements

const userName = document.querySelector(`.user-name`);
const logOut = document.querySelector(`.log-out`);
const bodyOverlay = document.querySelector(`.body-overlay`);
const upperPage = document.querySelector(`.upper-page`);
const subsectionsDiv = document.getElementById("subsections-div");
const navbar = document.querySelector(`.navbar`);
const listItems = document.querySelectorAll(".listitem");
const subsections = document.querySelectorAll(".subsection");
const headerSignBtns = document.querySelectorAll(`.header-sign-btns`);
const searchBar = document.querySelector(`.search-bar`);
const searchIcon = document.getElementById(`glass-icon`);
const upperSignBtns = document.querySelector(`.upper-sign-btns`);
const headerSignInBtn = document.getElementById(`header-sign-in-btn`);
const headerSignUpBtn = document.getElementById(`header-sign-up-btn`);
const userLogOut = document.querySelector(`.user-log-out`);
const userAccount = document.querySelector(`.user-account`);
console.log(userAccount);
const userWindow = document.querySelector(`.user-window `);
const userWindowUl = document.querySelector(`.user-window ul`);
const upperLoggedUser = document.querySelector(`.upper-logged-user`);
//#endregion
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// upper Page Functionalities

// Once the page loads update the header to show the user info if it was logged in (as long the token is stored in local or session storage).
updateLoginUI();

// remove the token from both local and session storages on clicking on logout
logOut.addEventListener(`click`, logUserOut);
function logUserOut() {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  //refresh the page to update the header
  window.location.reload();
  // any way if the token was stored in the session storage then it will be removed automatically by ending the session.
}

//Reveal user window on click, with animation effect
upperLoggedUser.addEventListener(`click`, revealUserWindow);
function revealUserWindow() {
  if (userWindow.clientHeight == 0) {
    userWindow.style.padding = `40px`; // if padding was added using css then the client height would not be zero
    userWindow.style.height = `${userWindow.scrollHeight + 50}px`;
    userWindow.style.border = `1px solid #eee`;
  } else {
    userWindow.style.padding = `0px`; // to make sure there is no padding making clientHeight != zero
    userWindow.style.height = "0px";
    userWindow.style.border = `none`;
  }
}

headerSignInBtn.addEventListener(`click`, function () {
  bodyOverlay.classList.remove(`hidden`);
  signModal.classList.toggle(`hidden`);
  signInBtn.classList.add(`activeBtn`);
  signUpBtn.classList.remove(`activeBtn`);
  revealSignInForm();
});
headerSignUpBtn.addEventListener(`click`, function () {
  bodyOverlay.classList.remove(`hidden`);
  signModal.classList.toggle(`hidden`);
  signUpBtn.classList.add(`activeBtn`);
  signInBtn.classList.remove(`activeBtn`);
  revealSignUpForm();
});
//#region //////////////////////////////////////////////////////////////////////////////////////// Nav bar
subsections.forEach((ss) => ss.classList.add("hidden"));
/* 
const hero = document.querySelector(`.hero`)
console.log(subsections)
subsections.forEach((subS) => {
  // hide all subsections
  subS.classList.add("hidden");
  // link this section to the related listitem
  // get the last word from the subsection id which is the same like the value of the attribute itemName in the listitem
  let listItemName = subS.id.slice(11) // slice from 11 to the end
  let currentLI = document.querySelector(`[itemName = '${listItemName}']`) // target the related listitem
  if (currentLI != null) { // make sure there is a related list item first
    currentLI.addEventListener("mouseover", function () { // when hovering 
      subS.classList.remove(`hidden`); // reveal the current subsection
      opacityBG.classList.remove(`hidden`); // reveal the overlay
      opacityBG.classList.add(`reveal-background-opacity`);
      // subS.style.height = `${subS.scrollHeight}px !important`
      if (hero) hero.style.transform = `translateY(${subS.clientHeight}px)` // translate the hero downward a space like the height of the subsection

    });
  }
 
// On hovering out do opposite
  if (currentLI != null) {
    currentLI.addEventListener("mouseout", function () {
      subS.classList.add('hidden')
      opacityBG.classList.add(`hidden`);
      // move it back the same amount of space , to respond to the transition effect on the way back
    if (hero) { hero.style.transform = `translateY(${-subS.scrollHeight}px)`} 

    });
  }

});

subsections.forEach((ss) => {
  ss.addEventListener("mouseover", () => {
    // subsectionsDiv.classList.remove(`hidden`);
    ss.classList.remove(`hidden`);
    opacityBG.classList.remove(`hidden`);
  });
});
subsections.forEach((ss) => {
  ss.addEventListener("mouseout", () => {
    ss.classList.add(`hidden`);
    opacityBG.classList.add(`hidden`);
  });
});
 */
// the previous approach of iterating over the subsections costed me less code than the one where I iterate over the list Items.
//#endregion
//#endregion
//#endregion upper page

//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Sign Modal
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Implement the Sign Modal to the html file
const userSignModal = document.getElementById(`sign-modal`);
userSignModal.innerHTML = ` <button id="close-icon" class="fa-solid fa-circle-xmark close-modal-icon hidden"></button>
<!-- <button id = "closeModalButton" onclick="close()"> Close</button> -->
<div id="sign-side">
    <div class="internal-overlay hidden"></div>


    <div class="sign-side-holder hidde">
        <div id="sign-in-up-buttons" class=" my-3">
            <button class="sign-buttons sign-in-btn activeBtn"> Sign in
            </button><button class="sign-buttons sign-up-btn"> Sign up </button>
        </div>
        <div class="sign-windows">
            <form action="" class="sign-up-form sign-form hidden">
                <input type="text" name="firstName" placeholder="First name" required>
                <input type="text" name="lastName" placeholder="Last name" required>
                <!--   <label for="">
                    <h6>Gender</h6>
                    <label for="male-radio"  style="font-size: 12px;"> Male </label>
                    <input class = "form-check-input" name = "gender" value = "male" type="radio" id="male-radio" required>
                    <label for="female-radio" style="font-size: 12px;"> Female </label>
                    <input class = "form-check-input" name = "gender" value = "female" type="radio" id="female-radio">
                </label> -->
                <input type="phone" placeholder="Phone number">
                <input type="" name="email" placeholder="E-mail" autocomplete="username" required>
                <input type="password" name="password" placeholder="Password" autocomplete="new-password"
                    required>
                <!-- <input type="password" placeholder="Confirm Password" autocomplete="new-password" required> -->
                <div class="privacy-agreement">
                    By signing up you commit that you read and agreed with our <a href="" target="_blank">
                        privacy </a> and <a href="" target="_blank"> policy </a>
                </div>
                
<input type="submit" value="Sign up" class="sign-up-submit sign-buttons btn btn-primary modal-sign-btns"> 
                
            </form>
            <!-- <form action="" class="sign-in-form sign-form" onsubmit=" reset() ;return false"> -->
            <form action="" class="sign-in-form sign-form">

                <h3> Welcome back </h3>
                <p class = "message-to-user"> Nice to see you again </p>
                <input type="" name="lemail" placeholder="E-mail" autocomplete="username" required>
                <input type="password" name="lpassword" placeholder="Password" autocomplete="current-password"
                    required>
                <div class="remember-me">
                    <label>
                        <input type="checkbox" name="" id = 'sign-in-remember-me'>
                        Remember me
                    </label>
                    <a href="reset-password.html"> <span> Forgot password? </span></a>
                </div>
                <input type="submit" value="Sign in"
                    class="sign-in-submit sign-buttons btn btn-primary modal-sign-btns">

            </form>
            <p class="or-use"> Or use <span class="line-l line"></span> <span class="line-r line"></span>
            </p>
            <div id="sign-up-with-buttons" class=" my-3">
               <!--  <button class="sign-buttons ">
                    <img width="25" height="25" src="https://img.icons8.com/color/48/google-logo.png"
                        alt="google-logo" />
                    Google
                </button>
                <button class="sign-buttons ">
                    <img width="25" height="25" src="https://img.icons8.com/color/48/facebook-circled--v1.png"
                        alt="facebook-circled--v1" />
                    Facebook </button> -->
                    <div id="g_id_onload" data-client_id="536158144980-493s2fasqtibjfhfgebavsvvcr98l81s.apps.googleusercontent.com"
        data-context="signin" data-ux_mode="popup" data-callback="signInWithGoogle" data-auto_prompt="false">
    </div>

    <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="filled_blue"
        data-text="signin_with" data-size="large" data-logo_alignment="left">
    </div>
            </div>
        </div>
    </div>
</div>
<div id="details-side" class="d-flex justify-content-center align-items-center">
    <a href="index.html" class="logo w-75 h-75  modal-logo">
        <div class="logo w-100 h-100"><img class="w-100 h-100" src="../assets/media/images/logo.ng.png"
                alt="ink waves logo">
        </div>
    </a>
    <form action="" class="enter-ur-mail sign-form hidden">
        <h4 class='ur-mail-header'>Insert Your Mail </h4>
        <input type="email" placeholder="E-mail" autocomplete="username">
        <input type="submit" value="Send" class="btn btn-primary send">
    </form>
    <div class="activation-code hidden">
        <p> We have sent you a code on your Mail, please insert it</p>
        <input type="number" name="" id="">
        <input type="submit" value="Submit" class=" submit-code btn btn-primary">
        <p class="m-0"> You should receive a code within </p>
        <span class="timer"> Time </span>
        <button class="Send-another-btn btn btn-primary" disabled> Send another</button>
    </div>
</div>`;
//#endregion
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Sign Modal Elements
const signModal = document.getElementById(`sign-modal`);
const signSide = document.getElementById(`sign-side`);
const detailsSide = document.getElementById(`details-side`);
const closeModalIcon = document.querySelector(`.close-modal-icon`);
const closeIcon = document.getElementById(`close-icon`);
const signInBtn = document.querySelector(".sign-in-btn");
const signUpBtn = document.querySelector(".sign-up-btn");
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");
const rememberMeCheckbox = document.querySelector("#sign-in-remember-me");
const signInSubmit = document.querySelector(".sign-in-submit");
const signUpSubmit = document.querySelector(`.sign-up-submit`);
const modalSignButtons = document.querySelectorAll(`.modal-sign-btns`);
const detailsBoxes = document.querySelectorAll(`.details-box`);
const bullets = document.querySelector(`.bullets`);
const pageNavLogo = document.getElementById(`page-nav-logo`);
const messageToUser = document.querySelector(".message-to-user");
//#endregion
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Sign Modal Functionality
closeIcon.addEventListener(`click`, close);
function close() {
  console.log(`close function fetched`); /////////////////////
  signModal.classList.add(`hidden`);
}

signInBtn.addEventListener("click", revealSignInForm);
signUpBtn.addEventListener("click", revealSignUpForm);
function revealSignInForm() {
  signInForm.classList.remove("hidden");
  signUpForm.classList.add("hidden");
  signInBtn.classList.add(`activeBtn`);
  signUpBtn.classList.remove(`activeBtn`);
}
function revealSignUpForm() {
  signUpForm.classList.remove("hidden");
  signInForm.classList.add("hidden");
  signInBtn.classList.remove(`activeBtn`);
  signUpBtn.classList.add(`activeBtn`);
}

detailsBoxes.forEach((sb) => {
  let bullet = document.createElement("li");
  bullet.style.cssText = `background-color : blue; border-radius: 50%; width : 8px; height : 8px;`;
  bullets.appendChild(bullet);
});

// Close modal on clicking on the overlay ( Any where outside the modal itself) or pressing the Esc button
document.body.addEventListener(`click`, function (e) {
  if (e.target == bodyOverlay) {
    closeModal();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key == "Escape") {
    closeModal();
  }
});

function closeModal() {
  signModal.classList.add(`hidden`);
  bodyOverlay.classList.add(`hidden`);
}
/////

// Timer
const timerSpan = document.querySelector(`.timer`);
const sendAnotherBtn = document.querySelector(`.Send-another-btn `);
const activationCodeDiv = document.querySelector(`.activation-code`);
const modalLogo = document.querySelector(`.modal-logo`);
const signModalInternalOverlay = document.querySelector(`.internal-overlay`);

// Define the initial values ( the interval needs to be stored in a variable to clear it later )
let timerInterval = null;
let seconds = 10;
// once the submit or send code buttons are clicked initiate the seconds and the intervale
// signUpSubmit.addEventListener("click", countDown);
sendAnotherBtn.addEventListener("click", countDown);

function countDown() {
  // reveal the activation code division
  activationCodeDiv.classList.remove("hidden");
  modalLogo.classList.add("hidden");
  // signModalInternalOverlay.classList.remove('hidden')

  // do the opposite of those when the submit code button is clicked and the code is the right one , show the logo again and a message (in separate page) that the account is activated and sign the user in
  seconds = 60;
  // disaple the send button till the count down is finished
  sendAnotherBtn.setAttribute("disabled", "");
  // start the interval
  timerInterval = setInterval(countingDown, 1000);
}
// start the count down
function countingDown() {
  if (seconds > 0) {
    seconds--;
    timerSpan.textContent = `${seconds} Second`;
  } else {
    // once the count down is finished enable the button and clear the interval to not interfere with the coming one
    clearInterval(timerInterval);
    sendAnotherBtn.removeAttribute("disabled");
  }
}

//#region //////////////////////////////////////////////////////////////////////////////////////// Sign Fetch
//#region ///////////////////////////////////////////////////// Sign up
const registerUser = async (userData) => {
  try {
    const response = await fetch(
      "http://webstercassin1-001-site1.ftempurl.com/api/Auth/Register",
      {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      const data = await response.json();
      // Handle the response from the backend
      console.log("Registration successful:", data);
      signUpSubmit.value = `Confirm Code Now`;
      signUpSubmit.style.backgroundColor = "green";
      countDown();
    } else {
      signUpSubmit.value = `Couldn't Sign up`;
      signUpSubmit.style.backgroundColor = "red";
      setTimeout((_) => {
        signUpSubmit.value = `Try again`;
        signUpSubmit.style.backgroundColor = "#0b5ed7";
      }, 3000);

      // throw new Error("Registration failed");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

document
  .querySelector(".sign-up-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    // getAllUserc();
    signUpSubmit.value = `loading...`;

    const firstName = document.querySelector(
      'input[placeholder="First name"]'
    ).value;
    console.log(firstName);
    const lastName = document.querySelector(
      'input[placeholder="Last name"]'
    ).value;
    console.log(lastName);
    const email = document.querySelector('input[placeholder="E-mail"]').value;
    console.log(email);
    const password = document.querySelector(
      'input[placeholder="Password"]'
    ).value;
    console.log(password);

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    await registerUser(userData);
  });

/* async function getAllUserc() {
  let res = await fetch(
    "http://webstercassin1-001-site1.ftempurl.com/api/Users",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjgxNTQxYmY4LThhMWEtNDZmYi1jZWM4LTA4ZGJkODlmYjljZSIsImVtYWlsIjoibSIsIm5hbWUiOiIiLCJmYW1pbHlfbmFtZSI6Im0iLCJleHAiOjE2OTg5NjQwOTUsImlzcyI6Iklua3dhdmUiLCJhdWQiOiJJbmt3YXZlIn0.omzFy37kPcZ5GhseWCxdiiSFIGA-TSaztRH0d-Geito",
      },
    }
  );
  let data = await res.json();
  console.log(data);
} */
//#endregion signup
//#region ///////////////////////////////////////////// Login

document.querySelector(".sign-in-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // change the button's text to loading till the request succeed.
  console.log(rememberMeCheckbox.checked);
  signInSubmit.value = `loading...`;
  const email = document.querySelector('input[name="lemail"]').value;
  console.log(email);
  const password = document.querySelector('input[name="lpassword"]').value;
  console.log(password);
  const userData = {
    email,
    password,
  };

  loginUser(userData);
});

const loginUser = async (userData) => {
  try {
    const response = await fetch(
      "http://webstercassin1-001-site1.ftempurl.com/api/Auth/Login",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await response.json();
    let user = data.data;
    // Handle the response from the backend
    console.log(user);
    if (!data.succeeded) {
      messageToUser.textContent = "Wrong Email or password was inserted";
      messageToUser.style.color = "red";
      signInSubmit.value = `Couldn't Sign in`;
      signInSubmit.style.backgroundColor = "red";
      setTimeout((_) => {
        signInSubmit.value = `Try again`;
        signInSubmit.style.backgroundColor = "#0b5ed7";
      }, 3000);
    } else {
      // If the request was succeeded
      // save token to localStorage or sessionStorage depending on did the user check or didn't check the box
      console.log(user);
      let token = user.accessToken;
      rememberMeCheckbox.checked
        ? window.localStorage.setItem("token", `${token}`)
        : sessionStorage.setItem("token", `${token}`);
      messageToUser.textContent = `Welcome back ${user.firstName}`; //put the name received from the server response
      messageToUser.style.color = "green";
      // hide the modal to keep the user in the current page
      setTimeout(closeModal, 2000);
      //update the submit button
      signInSubmit.value = `Signed in`;
      signInSubmit.style.backgroundColor = "green";
      // now refresh the page in case there is data to be requested by opening this page ( like in case of cart and favorites)
      window.location.reload();
    }
  } catch (error) {
    console.error("Error:", error);
  }

  //  update header to Keep the user signed in as long the token is stored in the local storage or session storage
  updateLoginUI();
  // this process needs to be inside the function and at it's end so the header updates once the function is called and the request is done
};

function updateLoginUI() {
  // if the token is stored in local or session storage then update the header to show that the user is singed
  if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
    upperSignBtns.classList.add(`hidden`);
    upperLoggedUser.classList.remove(`hidden`);
    userName.textContent = "Username";
  } else {
    // otherwise update the header to show that the user is not signed in
    upperSignBtns.classList.remove(`hidden`);
    upperLoggedUser.classList.add(`hidden`);
  }
}

//#endregion sign In

//#endregion
//#endregion
//#endregion Sign Modal
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Page Nav
const opacityBG = document.querySelector(`.background-opacity`);
const heroNav = document.querySelector(`.hero-nav`);
let pageNavListItems = document.querySelectorAll(`.hero-list-item`); // will be assigned again later
///////////// Reveal the list item on section intersecting the view
pageNavLogo.onclick = (_) => {
  upperPage.scrollIntoView();
};
window.onscroll = (_) => {
  pageNavLogo.textContent =
    pageNavLogo.getBoundingClientRect().top < 20
      ? "InkWaves - Go up "
      : "InkWaves";
};
// Create the options
let options = {
  root: null, // null for the view, set an element if you want
  rootMargin: "10px",
  threshold: 0.5, // observe the target when 70% of it's height is intersecting with the view
};
// Create a new Intersection Observer instance
var observer = new IntersectionObserver(callB, options);
//call the callback function when the observer observe the target
function callB(entries) {
  // Loop through the entries
  entries.forEach(function (entry) {
    // If the element is intersecting
    if (entry.isIntersecting) {
      let sectionName = entry.target.getAttribute("sectionOf");
      pageNavListItems.forEach((li) => {
        if (li.getAttribute("itemOf") == sectionName) {
          li.classList.add(`reveal-on-Intersection`);
        } else {
          li.classList.remove(`reveal-on-Intersection`);
        }
      });
    }
  });
}
//////////////////////////// Generate the nav list items one for each new section that has the tag name section
const sections = document.querySelectorAll(`section`);
sections.forEach((section) => {
  // observe the section
  observer.observe(section);
  let sectionName = section.getAttribute(`sectionOf`);
  let pageNavLi = document.createElement(`li`);
  pageNavLi.setAttribute(`itemOf`, `${sectionName}`);
  pageNavLi.classList.add(`hero-list-item`);
  pageNavLi.textContent = `${section.getAttribute(`sectionTitle`)}`;
  heroNav.appendChild(pageNavLi);
});
pageNavListItems = document.querySelectorAll(`.hero-list-item`); // must be here after the creating code and not in the start of the file. (Not very sure)
pageNavListItems.forEach((li) => {
  li.addEventListener(`click`, () => {
    console.log(li.textContent);
    sections.forEach((section) => {
      if (section.getAttribute(`sectionOf`) == li.getAttribute(`itemOf`)) {
        section.scrollIntoView();
        // or this way, to include the nav height in the process
        // let sectionTop = section.getBoundingClientRect().top;
        // window.scrollTo({top : sectionTop , behavior: `smooth`})
        // observer.observe(section);
      }
    });
  });
});

//   This whole code about the page nave  works but needs alot of refactoring
//#endregion

//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Footer
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Implement footer
document.querySelector(`footer`).innerHTML = ` <div class="container">

<div class="left-footer">
    <div class="left-footer-logo">
        <a href="index.html">
            <div class="logo"><img src="../assets/media/images/logo.ng.png" alt="ink waves logo">
            </div>
        </a>
        <p> We provide best printing and book selling service </p>
    </div>
    <div class="left-footer-details">
        <h6>Get our app on</h6>
        <a href=""><i class="fa-brands fa-app-store-ios me-4"></i></a>
        <a href=""><i class="fa-brands fa-google-play"></i></a>
    </div>
</div>

<div class="middle-footer ">
    <ul class=" footer-list">
        <a href="" id="a-1" class="footer-listitem">
            <li> Print </li>
        </a>
        <a href="" id="a-2" class="footer-listitem">
            <li>Book store</li>
        </a>
        <a href="" id="a-3" class="footer-listitem">
            <li>Listitem</li>
        </a>
        <a href="" id="a-4" class="footer-listitem">
            <li>Listitem</li>
        </a>
        <a href="" id="a-5" class="footer-listitem">
            <li> Privacy and </li>
        </a>
        <a href="" id="a-6" class="footer-listitem">
            <li>About Ink Waves</li>
        </a>
        <a href="" id="a-1" class="footer-listitem">
            <li> Print </li>
        </a>
        <a href="" id="a-2" class="footer-listitem">
            <li>Book store</li>
        </a>
        <a href="" id="a-3" class="footer-listitem">
            <li>Listitem</li>
        </a>
        <a href="" id="a-4" class="footer-listitem">
            <li>Listitem</li>
        </a>
        <a href="" id="a-5" class="footer-listitem">
            <li> Privacy and </li>
        </a>
        <a href="" id="a-6" class="footer-listitem">
            <li>About Ink Waves</li>
        </a>
    </ul>
</div>
<div class="right-footer">

    <h3> Our vision</h3>
    <p>Our mission is to be the leading digital marketplace in Africa, providing a platform for businesses
        of all sizes to reach</p>
    <p>Our mission is to be the leading digital marketplace for independent publishers, providing them with
        a platform to reach customers world</p>
</div>



</div>
<div class="subfooter " style="height: 50px;">
<div class=" d-flex justify-content-center align-items-center flex-column">
    <ul class="d-flex gap-3 px-0 my-0 footer-social-list">
        <li> <a href="" target="_blank"> <i class="fa-brands fa-facebook"> </i> </a> </li>


        <li> <a href="mailto" target="_blank"> <i class="fa-solid fa-at"></i> </a>
        </li>
        <li><a href="https://wa.me/+201555807058" target="_blank"> <i class="fa-brands fa-whatsapp"
                    style='font-weight:600;'></i>
            </a></li>
        <li> <a href="tel:+20" target="_blank"> <i class="fa-solid fa-square-phone-flip"></i>
            </a></li>
        <li> <a href="https://github.com/AHMADHASEEB96" target="_blank"> <i class="fa-brands fa-github"></i>
            </a>
        </li>
        <li><a href=""> <i class="fa-solid fa-tree"></i></a></li>
    </ul>
    <p id="copyrights-p" class="my-0"> All rights reserved for InkWaves platform <span> </span> </p>
</div>
</div>
<!--  <div class="subfooter " style="height: 50px;">
<div class=" d-flex justify-content-center align-items-center flex-column">
    <ul class="d-flex gap-3 px-0 my-0 footer-social-list">
        <li> <a href="https://www.facebook.com/Alphauseracc" target="_blank"> <i
                    class="fa-brands fa-facebook"> </i> </a> </li>


        <li> <a href="mailto:amduseracc@gmail.com" target="_blank"> <i class="fa-solid fa-at"></i> </a>
        </li>
        <li><a href="https://wa.me/+201555807058" target="_blank"> <i class="fa-brands fa-whatsapp"
                    style='font-weight:600;'></i>
            </a></li>
        <li> <a href="tel:+201555807058" target="_blank"> <i class="fa-solid fa-square-phone-flip"></i>
            </a></li>
        <li> <a href="https://github.com/AHMADHASEEB96" target="_blank"> <i class="fa-brands fa-github"></i>
            </a>
        </li>
        <li><a href="https://linktr.ee/ahmadhaseeb"> <i class="fa-solid fa-tree"></i></a></li>
    </ul>
    <p id="copyrights-p" class="my-0"> All rights reserved for InkWaves platform <span> </span> </p>
</div>
</div> -->
`;
//#endregion
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Footer Elements
//#endregion
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Footer Functionalities
//Dynamic year
const copyrightsYear = document.querySelector(`#copyrights-p span`);
copyrightsYear.textContent = new Date().getFullYear();
//#endregion

//#endregion Footer
//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// General functions
function animateHeight(element) {
  // Get the element's current height
  let startHeight = element.clientHeight;
  // Temporarily set the height to 'auto'
  element.style.height = "auto";
  // Get the height with the new content
  let endHeight = element.clientHeight;
  // Revert the height back to its original value
  element.style.height = startHeight + "px";
  // Force a repaint (this is needed on some browsers to ensure the next step works)
  element.getBoundingClientRect();
  // Animate the height
  element.style.transition = "height 0.3s ease";
  element.style.height = endHeight + "px";
}

//#endregion

// export  {revealSignInForm, signUpForm, signInForm, signUpBtn, signInBtn} ;
function signInWithGoogle(res) {
  let response = jwt_decode(res)
  console.log(response);
}

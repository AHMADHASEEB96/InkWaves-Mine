`use strict`;
// *************** ELEMENTS
//#region Orders
const userSectionsHeaders = document.querySelectorAll(`.user-section-header`)

//#endregion 
//#region Update info 
  const updateInfoLabels = document.querySelectorAll(`.update-user-info .container form label`)
  const updateInfoInputs = document.querySelectorAll(`.update-user-info .container form input`)
  //#endregion



// *************** FUNCTIONALITIES
//#region //////////////////////////////////////////////////////////////////////////////////////// Orders
// Extend the division on clicking over the header
userSectionsHeaders.forEach(header => {
let isUserDivRevealed = false; // Must be inside forEach
    let headerFor = header.getAttribute(`header-for`)
    let contentDiv = document.getElementById(`${headerFor}`)
    header.addEventListener(`click`, openUserContentDiv)
    function openUserContentDiv () {
        // highlight the container
        let headerContainer = header.closest('.container')
        let parentSection = headerContainer.closest('section')
    if (headerContainer !== null) { headerContainer.classList.toggle('activate-user-section')}
        // contentDiv.classList.toggle(`activeUserDiv`) // transition doesn't work with fit content
        if (!isUserDivRevealed) {
            contentDiv.style.height = `${contentDiv.scrollHeight}px`
            // parentSection.scrollIntoView({behavior: "smooth"}) // no control over tha space to the window's top
            window.scrollTo({top : parentSection.getBoundingClientRect().top - 100 , behavior  :'smooth'})
            isUserDivRevealed = true;
        } else {
            contentDiv.style.height = `${0}px`
            isUserDivRevealed = false;
        }
       
    }
})

//#endregion

//#region //////////////////////////////////////////////////////////////////////////////////////// Update Info
// Hide all input 
/* updateInfoInputs.forEach(input => {input.classList.add(`hidden`)})
updateInfoLabels.forEach(label => {
    // console.log(label)
    let labelFor = label.getAttribute(`for`);
    label.addEventListener(`click`, () => {
        let input = document.getElementById(`${labelFor}`)
        updateInfoInputs.forEach(oneInput => {oneInput.classList.add(`hidden`)})
        input.classList.add('activeInput')
        input.classList.remove(`hidden`)
    })
// console.log(input)
}) */
//#endregion





//#region ////////////////////////////////////////////////////////////////////////////////////////////////////// Implement Printing options
const printingOPtions = document.querySelector(`.printing-options`);

printingOPtions.innerHTML = `
<div class="container">
<div class="section-header">
    
    <p class = "fw-bold"> Upload your Cover Image, See for your self and Customize your options </p>
</div>
<div class="options-holder">
    <div class="options-category">
        <h5>Paper Size</h5>
        <div class="category-options">
            <button class="option-btn paper-size-option-btn " text="A5" options-category = 'paperSize' chosen-option="A5"> A5
            </button>
            <button class="option-btn paper-size-option-btn active-option-btn" text="A4"
                options-category = 'paperSize' chosen-option="A4">A4</button>
            <button class="option-btn paper-size-option-btn" text="A3"
                options-category = 'paperSize' chosen-option="A3">A3</button>
            <button class="option-btn paper-size-option-btn" text="A2"
                options-category = 'paperSize' chosen-option="A2">A2</button>
            <button class="option-btn paper-size-option-btn" text="A1"
                options-category = 'paperSize' chosen-option="A1">A1</button>
            <button class="option-btn paper-size-option-btn" text="A0"
                options-category = 'paperSize' chosen-option="A0">A0</button>
        </div>

    </div>
    <div class="options-category paper-type">
        <h5>Paper type</h5>
        <div class="category-options">
            <button class="option-btn active-option-btn" options-category = 'paperType' chosen-option="normal"> Normal </button>
            <button class="option-btn">
                Glossy</button><button class="option-btn" options-category = 'paperType' chosen-option="sticker">Sticker</button>
            <button class="option-btn">Thick</button>

        </div>

    </div>
    <div class="options-category printing-color">
        <h5>Printing Color</h5>
        <div class="category-options">
            <button class="option-btn active-option-btn" options-category = 'PrintingColor' chosen-option="black"> Black </button>
            <button class="option-btn" options-category = 'PrintingColor' chosen-option="color">Color</button>
        </div>

    </div>

    <div class="options-category printing-layout">
        <h5>Printing Layout</h5>
        <div class="category-options printing-layout-options">
            <img src="/assets/media/images/printing options/label (1).png" alt="printing layout 1"
                class="printing-layout-img" options-category = 'printingLayout' chosen-option="single">
            <img src="/assets/media/images/printing options/label (2).png" alt="printing layout 2"
                class="printing-layout-img" options-category = 'printingLayout' chosen-option="double-tall">
            <img src="/assets/media/images/printing options/label (3).png" alt="printing layout 3"
                class="printing-layout-img" options-category = 'printingLayout' chosen-option="quadrant-tall">
            <img src="/assets/media/images/printing options/label (4).png" alt="printing layout 4"
                class="printing-layout-img" options-category = 'printingLayout' chosen-option="double-short">
            <img src="/assets/media/images/printing options/label (5).png" alt="printing layout 5"
                class="printing-layout-img" options-category = 'printingLayout' chosen-option="quadrant-short">
        </div>

    </div>

    <div class="options-category printing-side">
        <h5>Printing side</h5>
        <div class="category-options">
            <button class="option-btn active-option-btn" options-category ='printingSide' chosen-option = 'one side'> 1-Side </button>
            <button class="option-btn" options-category ='printingSide' chosen-option = 'two sides'>2-Sided</button>
        </div>

    </div>
    <div class="options-category">
        <h5>Binding Option</h5>
        <div class="category-options binding-options">
            <div class="binding-option A4 A5 A3 A2 A1 A0" options-category = 'BindingOption' chosen-option = 'no binding'>
                <img src="/assets/media/images/binding options/no-binding.png" alt=""
                    style="margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0">No binding</h6> <span> Unlimited pages </span>
                </div>
            </div>
            <div class="binding-option A4" options-category = 'BindingOption' chosen-option = 'Plastic sleeves'>
                <img src="/assets/media/images/binding options/plastic-sleevs.png" alt=""
                    style="margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0">Plastic sleeves</h6> <span> 1 - 50 pages </span>
                </div>
            </div>
            <div class="binding-option A4 A5 A3" options-category = 'BindingOption' chosen-option = 'Corner stapled'>
                <img src="/assets/media/images/binding options/corner-stapled.png" alt=""
                    style="margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0">Corner stapled</h6> <span> 2 - 100 pages</span>
                </div>
            </div>
            <div class="binding-option A4 A5 " options-category = 'BindingOption' chosen-option = 'Side stapled'>
                <img src="/assets/media/images/binding options/side-stapled.png" alt=""
                    style="margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0">Side stapled</h6> <span> 2 - 100 pages</span>
                </div>
            </div>
            <div class="binding-option A4 A5" options-category = 'BindingOption' chosen-option = 'Wire'>
                <img src="/assets/media/images/binding options/wire.png" alt=""
                    style="margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0">Wire</h6> <span>2 - 300 pages </span>
                </div>
            </div>
            <div class="binding-option A4 A5" options-category = 'BindingOption' chosen-option = 'Spiral'>
                <img src="/assets/media/images/binding options/spiral.png" alt="" style="
                    margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0">Spiral</h6> <span>10 - 200 pages</span>
                </div>
            </div>
            <div class="binding-option A4 A5" options-category = 'BindingOption' chosen-option = 'Stiched binding'>
                <img src="/assets/media/images/binding options/stiched.png" alt=""
                    style="margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0">Stiched binding</h6> <span> 100 - 600 pages</span>
                </div>
            </div>
            <div class="binding-option A4 A5" options-category = 'BindingOption' chosen-option = 'Velo'>
                <img src="/assets/media/images/binding options/velo.png" alt=""
                    style="margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0">Velo</h6> <span>15-200 pages </span>
                </div>
            </div>
            <div class="binding-option A4" options-category = 'BindingOption' chosen-option = 'Strip'>
                <img src="/assets/media/images/binding options/strip.png" alt=""
                    style="margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0">Strip</h6> <span> 10-100 pages </span>
                </div>
            </div>
            <div class="binding-option A4" options-category = 'BindingOption' chosen-option = '2 ring'>
                <img src="/assets/media/images/binding options/2-ring.png" alt=""
                    style="margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0"> 2-ring </h6> <span> 1-500 pages</span>
                </div>
            </div>
            <div class="binding-option A4" options-category = 'BindingOption' chosen-option = '3-ring'>
                <img src="/assets/media/images/binding options/3-ring.png" alt=""
                    style="margin-bottom: 2p5;">
                <div class="binding-option-title">
                    <h6 class="my-0"> 3-ring</h6> <span>1-600 pages </span>

                </div>
            </div>
        </div>

    </div>
</div>
</div>
`;

//#region Printing options
const optionsHolder = document.querySelector(`.options-holder`);
const optionsButtons = document.querySelectorAll(`.option-btn`);
const sizeOptionBtn = document.querySelectorAll(`.paper-size-option-btn`);
const optionsCategories = document.querySelectorAll(`.options-category`);
const printingLayoutImg = document.querySelectorAll(`.printing-layout-img`);
const paperType = document.querySelector(`.paper-type`);
const paperTypeOptionsButtons = document.querySelectorAll(
  `.paper-type .option-btn`
);
const printingColor = document.querySelector(`.printing-color`);
const printingColorOptionsButtons = document.querySelectorAll(
  `.printing-color .option-btn`
);
const printingSide = document.querySelector(`.printing-side`);
const printingSideOptionsButtons = document.querySelectorAll(
  `.printing-side .option-btn`
);
const coverZoomController = document.querySelector(`#cover-scale`);

const printingLayout = document.querySelector(`.printing-layout`);
const bindingOptions = document.querySelectorAll(`.binding-option`);
const bgSizeButtons = document.querySelectorAll(`.bg-size-btn`);
const bgRepeatButtons = document.querySelectorAll(`.bg-repeat-btn`);
//#endregion

//#region //////////////////////////////////////////////////////////////////////////////////////// Binding options Functionality

// Create the final options object 
let chosenOptions = {

}
// Activate the clicked Button
// call the function by sending the list of the buttons
activateButton(sizeOptionBtn);
activateButton(paperTypeOptionsButtons);
activateButton(printingColorOptionsButtons);
activateButton(printingSideOptionsButtons);
activateButton(printingLayoutImg);
activateButton(bindingOptions);
// Send me a list of buttons and I will handle the activation of the clicked button
function activateButton(optionBtns) {
  optionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // add option to options object 
      let keyName = btn.getAttribute(`options-category`)
      console.log(keyName)
      let valueName = btn.getAttribute(`chosen-option`)
      chosenOptions[keyName] = valueName;
      console.log(chosenOptions)
      optionBtns.forEach((inertBtn) => {
        inertBtn.classList.remove(`active-option-btn`);
      });
      btn.classList.add(`active-option-btn`);
    });
  });
}
// Reveal options divisions according to the clicked button
// for each size option button
sizeOptionBtn.forEach((ob) => {
  ob.addEventListener("click", (e) => {
    e.preventDefault();
    // when any one is clicked hide all the binding options
    bindingOptions.forEach((bo) => bo.classList.add(`hidden`));
    // and show only those has the class name like the text attribute in the clicked button
    let btnText = ob.getAttribute(`text`);
    document.querySelectorAll(`.${btnText}`).forEach((activeOption) => {
      activeOption.classList.remove("hidden");
    });

    // Also hide or reveal the layout options division and Printing side division according to the clicked button
    if (btnText === `A5`) {
      // reveal all divisions and only hide some divisions according to the clicked button
      optionsCategories.forEach((oc) => {
        oc.classList.remove(`hidden`);
      });
      printingLayout.classList.add("hidden");
    } else if (
      btnText === `A3` ||
      btnText === `A2` ||
      btnText === `A1` ||
      btnText === `A0`
    ) {
      optionsCategories.forEach((oc) => {
        oc.classList.remove(`hidden`);
      });
      printingLayout.classList.add("hidden");
      printingSide.classList.add("hidden");
    } else {
      optionsCategories.forEach((oc) => {
        oc.classList.remove(`hidden`);
      });
    }
  });
});



// Do all the next inside the if statement only for the final printing options page and not the one in the landing page.
if (document.querySelector(`.is-this-print-your-document-page`)) {
  //   if the page contains this element only execute the coming




  const imageToPreview = document.querySelector(`.drag-content`);
  coverZoomController.addEventListener('input', _ => {
      console.log(coverZoomController.value)
      let scalingValue = coverZoomController.value / 100;
      imageToPreview.style.transform = `scale(${scalingValue})`
  })
  document
    .getElementById("file-input")
    .addEventListener("change", handleFileSelect);

  function handleFileSelect(event) {
    const fileInput = event.target;
    // const previewImage = document.getElementById('previewImage');

    if (fileInput.files && fileInput.files[0]) {
      // read the selected file
      const reader = new FileReader();
      reader.onload = function (e) {
        imageToPreview.style.backgroundImage = `url(${e.target.result})`;
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  //////////
  // pass the set of buttons you want to highlight the clicked on in it.
  revealActiveBtn(bgSizeButtons)
  revealActiveBtn(bgRepeatButtons)
  // highlight the active button
  function revealActiveBtn(btns) {
    // for each button in the set
    btns.forEach((btn) => {
        // when it is clicked
      btn.addEventListener(`click`, (_) => {
        // remove the highlighting from all
        btns.forEach((inertBtn) =>
          inertBtn.classList.remove("btn-secondary")
        );
        // and highlight it 
        btn.classList.add("btn-secondary");
        // get the size or repeat attribute form this element whatever of them both exists 
        let size = btn.getAttribute(`background-size`);
        let repeat = btn.getAttribute(`background-repeat`);
        // then apply this value to the cover
        imageToPreview.style.backgroundSize = `${size}`;
        imageToPreview.style.backgroundRepeat = `${repeat}`;
      });
    });
  }

  // Add the dragging logic 
  let isDragging = false;
  let dragStartX, dragStartY, dragOffsetX, dragOffsetY;

  const dragContent = document.getElementById("dragContent");

  dragContent.addEventListener("mousedown", (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragOffsetX = dragContent.offsetLeft;
    dragOffsetY = dragContent.offsetTop;
    dragContent.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const offsetX = e.clientX - dragStartX;
    const offsetY = e.clientY - dragStartY;

    dragContent.style.backgroundPositionX = `${dragOffsetX + offsetX}px`;
    dragContent.style.backgroundPositionY = `${dragOffsetY + offsetY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    dragContent.style.cursor = "grab";
  });
}

//#endregion

/* EXTRA
 Magnify the clicked image in a modal
 summary the selected options
 */

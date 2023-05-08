
const galleryItem = document.getElementsByClassName('gallery-item')

// create an element for lightbox
const lightBoxContainer = document.createElement("div");

// create an element for basic area
const lightboxContent = document.createElement('div');

// create an element for images
const lightboxImg = document.createElement('img');

// create an element for previous button to change images
const lightboxPrev = document.createElement('div');

// create an element for next button to change images
const lightboxNext = document.createElement('div');

// create a classlist for lightbox elements .... then go back to CSS and design the classlist styles
lightBoxContainer.classList.add('lightbox');
lightboxContent.classList.add('lightbox-content');
lightboxPrev.classList.add('fa','fa-angle-left', 'lightbox-prev');
lightboxNext.classList.add('fa','fa-angle-right', 'lightbox-next');

// designate parent-child relationships
lightBoxContainer.appendChild(lightboxContent);
lightboxContent.appendChild(lightboxImg);
lightboxContent.appendChild(lightboxPrev);
lightboxContent.appendChild(lightboxNext);
document.body.appendChild(lightBoxContainer);

// create a memory for index
let index = 1;

// reassigns lightbox index
function showLightBox(n){
  if(n > galleryItem.length){
    index = 1;
  } else if(n < 1){
    index = galleryItem.length;
  }
  let imageLocation = galleryItem[index-1].children[0].getAttribute('src');
  lightboxImg.setAttribute('src', imageLocation);
 
  
}

// create a function to display the current image 
function currentImage(){
  lightBoxContainer.style.display = 'block';

  let imageIndex = parseInt(this.getAttribute('data-index'));
  showLightBox(index = imageIndex);
}

// add an event listener for clicking on image
for (let i = 0; i < galleryItem.length; i++){
  galleryItem[i].addEventListener('click', currentImage);
}

// create functions for right and left controls
function sliderImage(n){
  showLightBox(index += n);
}

function prevImage(){
  sliderImage(-1);
}

function nextImage(){
  sliderImage(1);
}

document.addEventListener('keydown', function(event){
  if (event.key === "ArrowLeft"){
    prevImage();
  }else if (event.key === "ArrowRight"){
    nextImage();
  }

})

// add event listeners for controls
lightboxPrev.addEventListener('click', prevImage);
lightboxNext.addEventListener('click', nextImage);

// close the lightbox

function closeLightBox(){
  if (this === event.target){
    lightBoxContainer.style.display = 'none';
  }
}

lightBoxContainer.addEventListener('click', closeLightBox);



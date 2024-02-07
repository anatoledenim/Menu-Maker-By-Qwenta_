let images=["./assets/images/gallery/concerts/gallery-image-0.png","./assets/images/gallery/entreprise/gallery-image-1.jpg","./assets/images/gallery/entreprise/gallery-image-2.jpg","./assets/images/gallery/mariage/gallery-image-3.jpg","./assets/images/gallery/portraits/gallery-image-4.jpg","./assets/images/gallery/mariage/gallery-image-5.jpg","./assets/images/gallery/portraits/gallery-image-6.jpg","./assets/images/gallery/concerts/gallery-image-7.jpg","./assets/images/gallery/entreprise/gallery-image-8.jpg"]
function displayArrow(modalId,arrowPrev,arrowNext){if(modalId===0){arrowPrev.classList.add("arrow-hidden-true")
arrowNext.classList.remove("arrow-hidden-true")}else if(modalId===8){arrowPrev.classList.remove("arrow-hidden-true")
arrowNext.classList.add("arrow-hidden-true")}else{arrowPrev.classList.remove("arrow-hidden-true")
arrowNext.classList.remove("arrow-hidden-true")}}
const galery=Array.from(document.querySelectorAll(".gallery img"))
galery.forEach(image=>{image.addEventListener("click",function(e){const arrowPrev=document.querySelector(".mg-prev")
const arrowNext=document.querySelector(".mg-next")
const imageModal=document.querySelector(".lightboxImage")
let modalId=parseInt(e.target.dataset.id)
displayArrow(modalId,arrowPrev,arrowNext)
arrowNext.addEventListener("click",function(){modalId ++
imageModal.src=images[modalId]
displayArrow(modalId,arrowPrev,arrowNext)})
arrowPrev.addEventListener("click",function(){modalId --
imageModal.src=images[modalId]
displayArrow(modalId,arrowPrev,arrowNext)})})})
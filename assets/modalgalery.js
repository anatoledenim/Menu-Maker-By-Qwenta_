let images = ["./assets/images/gallery/concerts/gallery-image-0.png", "./assets/images/gallery/entreprise/gallery-image-1.jpg", "./assets/images/gallery/entreprise/gallery-image-2.jpg", "./assets/images/gallery/mariage/gallery-image-3.jpg", "./assets/images/gallery/portraits/gallery-image-4.jpg", "./assets/images/gallery/mariage/gallery-image-5.jpg", "./assets/images/gallery/portraits/gallery-image-6.jpg", "./assets/images/gallery/concerts/gallery-image-7.jpg", "./assets/images/gallery/entreprise/gallery-image-8.jpg"]

const galery = Array.from(document.querySelectorAll(".gallery img"))
galery.forEach(image => {
    image.addEventListener("click", function(e) {
        let modalId = e.target.id
        const arrowPrev = document.querySelector(".mg-prev")
        const arrowNext = document.querySelector(".mg-next")
        const imageModal = document.querySelector(".lightboxImage")
        if (modalId === 0) {
            arrowPrev.classList.add("arrow-hidden-true")
        }
        arrowNext.addEventListener("click", function() {
            modalId ++
            imageModal.src = images[modalId]
            if (modalId !== 0) {
                arrowPrev.classList.remove("arrow-hidden-true")
            }
            if (modalId === 8) {
                arrowNext.classList.add("arrow-hidden-true")
            }
        })
        arrowPrev.addEventListener("click", function() {
            modalId--
            imageModal.src = images[modalId]
            if (modalId === 0 ) {
                arrowPrev.classList.add("arrow-hidden-true")
            }
            if (modalId !== 8) {
                arrowNext.classList.remove("arrow-hidden-true")
            }
        })
    })
}); 


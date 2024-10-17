const handleImageChange = (offset)=>{
    const activeSlide = document.querySelector("[data-active]")
    const Allslides = [...document.querySelectorAll(".slide")]
    const currentIndex = [...Allslides].indexOf(activeSlide)
    let newIndex = currentIndex + offset;

    if(newIndex < 0) newIndex = Allslides.length - 1
    if (newIndex >= Allslides.length) newIndex = 0

    Allslides[newIndex].dataset.active = true
    delete activeSlide.dataset.active

}

const onNext = ()=> handleImageChange(1)
const onPrev = ()=> handleImageChange(-1)
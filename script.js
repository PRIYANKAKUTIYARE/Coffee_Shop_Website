const btn1 = document.querySelector("#one")
const btn2 = document.querySelector("#two")

btn1.addEventListener("mouseenter", () =>{
    btn1.style.backgroundColor = "white"
    btn1.style.color = "black"
})
btn1.addEventListener("mouseleave", () =>{
    btn1.style.backgroundColor = "orangered"
    btn1.style.color = "white"
})
btn2.addEventListener("mouseleave", () =>{
    btn2.style.backgroundColor = "white"
    btn2.style.color = "black"
})
btn2.addEventListener("mouseenter", () =>{
    btn2.style.backgroundColor = "orangered"
    btn2.style.color = "white"
})
const wrapper = document.querySelector(".testimonial-wrapper")
const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');
    let currentIndex = 0;
    const totalItems = document.querySelectorAll('.testimonial').length;
    const itemsPerPage = 3;
    function updateCarousel() {
      const itemWidth = wrapper.firstElementChild.offsetWidth;
      wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function scrollLeft() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }

    function scrollRight() {
      if (currentIndex < totalItems - itemsPerPage) {
        currentIndex++;
        updateCarousel();
      }
    }
    btnLeft.addEventListener('click', scrollLeft);
    btnRight.addEventListener('click', scrollRight);

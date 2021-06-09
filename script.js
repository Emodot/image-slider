var slider = document.querySelectorAll('.slider-box img')

function next(){
    for (var i  = 0; i < slider.length; i++) {
        if (slider[i].classList.contains('visible')) {
            slider[i].classList.remove('visible')
            slider[i].classList.add('invisible')

            slider[i + 1].classList.add('visible')
            slider[i + 1].classList.remove('invisible')
        }
        else {
            slider[i].classList.remove('invisible')
            slider[i].classList.add('visible')

            slider[i + 1].classList.remove('visble')
            slider[i + 1].classList.add('invisble')
        }break
    }
}
// function prev(){
//     for (var i  = 0; i < slider.length; i++) {
//         console.log(slider[i])
//     }
// }


// slideImages()

// function slideImages() {
//     var i;
//     var slides = document.getElementById('image');

//     for(i = 0; 1 <slides.length; 1++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
// }
// setTimeout(showSlides, 2000);


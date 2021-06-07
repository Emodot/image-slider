var slider = document.getElementById('slider-box');
var image = ['image-1','image-2','image-3','image-4'];

var i = image.length;

function next(){
    if (i<image.length) {
        i= i+1;
    }else{
        i = 1;
    }
      slider.innerHTML = "<img src=img/"+image[i-1]+".jpeg>";
}

function prev(){
    if (i<image.length+1 && i>1) {
        i= i-1;
    }else{
        i = image.length;
    }
      slider.innerHTML = "<img src=img/"+image[i-1]+".jpeg>";
}



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


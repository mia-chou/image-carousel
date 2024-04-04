let index= 0;

function show_image(i){

index+= i;

let images= document.getElementsByClassName
("image");

let dot=document.getElementsByClassName
("dot")

}

// hide all the images
for (i = 0; i < images.length; i++) 
images[i].style.display = "none";

// remove the active class from the dot
for (i = 0; i < dots.length; i++) 
dots[i].className = dots[i].className.replace(" active", "");

let currentImageIndex = 0;
const images = ["/asset/img/1.png", "/asset/img/2.png", "/asset/img/3.png"];

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex > images.length - 1) currentImageIndex = 0;
    document.getElementById("sliderImage").src = images[currentImageIndex];
}

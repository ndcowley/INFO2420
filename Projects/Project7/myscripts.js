var imgArray = [
    "Images/Fullsize/Image1Lg.png",
    "Images/Fullsize/Image2Lg.png",
    "Images/Fullsize/Image3Lg.png",
    "Images/Fullsize/Image4Lg.png"
];

function showImage(imagePath) {
    document.getElementById("fullsize").src = imagePath;
}

function preloadImages() {
    for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgArray[i];
    }
    
    var thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function(thumb, index) {
        thumb.addEventListener('mouseover', function() {
            showImage(imgArray[index]);
        });
    });
}
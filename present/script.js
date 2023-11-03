function changeImage() {
    var clickableImage = document.getElementById('clickableImage');
    if (clickableImage.src.includes('test.png')) {
        clickableImage.src = 'kado.png';
    } else {
        clickableImage.src = 'coupon.png';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let mybutton = document.getElementById("btn-back-to-top");

    let anasayfaButton = document.getElementById("btn-anasayfa");
    let hakkımızdaButton = document.getElementById("btn-hakkımızda");
    let galeriButton = document.getElementById("btn-galeri");
    let subelerButton = document.getElementById("btn-subeler");
    let iletisimButton = document.getElementById("btn-iletisim");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.addEventListener("click", backToTop);

    if (anasayfaButton) anasayfaButton.addEventListener("click", backToTop);
    if (hakkımızdaButton) hakkımızdaButton.addEventListener("click", backToSecond);
    if (galeriButton) galeriButton.addEventListener("click", backToThird);
    if (subelerButton) subelerButton.addEventListener("click", backToFourth);
    if (iletisimButton) iletisimButton.addEventListener("click", backToLast);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function backToSecond() {
        var Elmnt = document.getElementById('hakkımızda');
        if (Elmnt) {
            var topPos = Elmnt.offsetTop;
            document.body.scrollTop = topPos - 100;
            document.documentElement.scrollTop = topPos - 100;
        }
    }

    function backToThird() {
        var Elmnt = document.getElementById('galeri');
        if (Elmnt) {
            var topPos = Elmnt.offsetTop;
            document.body.scrollTop = topPos - 100;
            document.documentElement.scrollTop = topPos - 100;
        }
    }

    function backToFourth() {
        var Elmnt = document.getElementById('subeler');
        if (Elmnt) {
            var topPos = Elmnt.offsetTop;
            document.body.scrollTop = topPos - 100;
            document.documentElement.scrollTop = topPos - 100;
        }
    }

    function backToLast() {
        var Elmnt = document.getElementById('iletisim');
        if (Elmnt) {
            var topPos = Elmnt.offsetTop;
            document.body.scrollTop = topPos - 100;
            document.documentElement.scrollTop = topPos - 100;
        }
    }

    var mySeeMoreButton = document.getElementById('g-see-more-btn');
    var mySeeLessButton = document.getElementById('g-see-less-btn');
    var imageCards = document.querySelectorAll('.img-card');

    if (mySeeMoreButton) {
        mySeeMoreButton.addEventListener('click', function () {
            imageCards.forEach(function (card) {
                if (getComputedStyle(card).display === 'none') {
                    card.style.display = 'block';
                }
            });
            mySeeLessButton.style.display = 'block';
            mySeeMoreButton.style.display = 'none';
        });
    }

    if (mySeeLessButton) {
        mySeeLessButton.addEventListener('click', function () {
            imageCards.forEach(function (card) {
                if (getComputedStyle(card).display === 'block' && !card.classList.contains('main-img-cards')) {
                    card.style.display = 'none';
                }
            });
            mySeeMoreButton.style.display = 'block';
            mySeeLessButton.style.display = 'none';
        });
    }

    var imageCardLarge = document.getElementById('large-img-card');
    var imageLarge = document.getElementById('large-img');
    if (imageCards) {
        imageCards.forEach(function(card) {
            card.addEventListener('click', function() { 
                    
                    var isImageCardLargeVisible = window.getComputedStyle(imageCardLarge).display !== 'none';
                
                    if (!isImageCardLargeVisible) {
                        var imgElement = this.querySelector('img');
                        
                        if (imgElement) {
                            var src = imgElement.src;
                            imageCardLarge.style.display = 'block';
                            imageCardLarge.classList.add('img-card');
                            imageLarge.src = src;
                        }
                    }
                    else{
                        imageCardLarge.style.display = 'none';
                        imageLarge.src = '';
                        imageCardLarge.classList.remove('img-card');
                    }
            });
        });
    }
    if (imageCardLarge) {
            imageCardLarge.addEventListener('click', function() { 
                    var isImageCardLargeVisible = window.getComputedStyle(imageCardLarge).display !== 'none';
                
                    if (isImageCardLargeVisible) {
                        imageCardLarge.style.display = 'none';
                        imageLarge.src = '';
                        imageCardLarge.classList.remove('img-card');
                    }
            });
    }

});

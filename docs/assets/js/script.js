document.addEventListener('DOMContentLoaded', function() {
    var images = [
        'crackeddirt.JPG',
        'forestline.JPG',
        'forestpath.JPG',
        'banfflake1.JPG',
        'rockpattern.JPG',
        'banfflake2.JPG',
        'santorinisunset1.JPG',
        'santoriniwindmill.jpg',
        'cactus.JPG',
        'santorinisunrise.JPG',
        'santorinicoast1.jpg',
        'santorinicoast2.jpg',
        'acropolis1.jpg',
        'santorinisunset2.jpg',
        'athensacademy1.JPG',
        'tahoesnow1.JPG',
        'BigSky1.JPG',
        'Fuji1.JPG',
        'banfflake3.JPG',
        'banfflake4.jpg',
        'banfflake5.jpg',
        'forestpath2.jpg',
        'whistler1.jpg',
        'colby1.jpg',
        'colby2.jpg',

    ];
    var randomImage = images[Math.floor(Math.random() * images.length)];
    var header = document.getElementById('header');
    header.style.backgroundImage = 'url(' + '{{ site.url }}/assets/img/backgrounds/' + randomImage + ')';
});

document.addEventListener('DOMContentLoaded', function() {
    // Random background image for header
    const images = [
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
    
    const header = document.getElementById('header');
    if (header) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        header.style.backgroundImage = `url(/assets/img/backgrounds/${randomImage})`;
    }

    // Random dance video setup
    const danceVideos = [
        {
            iframeSrc: "https://player.vimeo.com/video/780196253",
            description: "2022 Freestyle, shot/edited by Sho Matsuzaki | ♪♪ <em>Soul of a Man</em> -- Moon, ft Sticky Dub"
        },
        {
            iframeSrc: "https://www.youtube.com/embed/M6nZlqTS2iE",
            description: "2020 Class choreography with Kirah Koo | ♪♪ <em>Krs. // Toast </em> -- Dumebi edit"
        },
        {
            iframeSrc: "https://www.youtube.com/embed/vGdgA-ijewM",
            description: "2019 Class choreography with Earle G and Bridget Sedden @ <a href=\"https://www.iamphresh.com/home\">IAmPhresh</a> | ♪♪ <em>kay franklin - Getaheadhouse Edit </em> -- Esta."
        },
        {
            iframeSrc: "https://www.youtube.com/embed/V-F8Dd4N0UU",
            description: "2018 <em>Ba-Dum</em> | Poetry -- me, Audio -- Madam Data, Video -- Mike Oberlies & Joe Clement"
        },
        {
            iframeSrc: "https://www.youtube.com/embed/5V7loVom_xY",
            description: "2018 Class choreography -- Chris Martin | ♪♪ <em>I Need Never Get Old</em> -- Nathaniel Rateliff & The Night Sweats"
        },
        {
            iframeSrc: "https://www.youtube.com/embed/1_Cgt09qLhg",
            description: "2015 Music video choreography | ♪♪ <em>Lean On Rangeela</em> (Major Lazer // Imran Khan) -- Jai Matt ft. Mugdha Hasabnis, Dr. Srimix, proDiJy"
        }
    ];

    // Get the container element and display a random video
    const videoContainer = document.getElementById('random-dance-video-container');
    if (videoContainer && danceVideos.length > 0) {
        const randomIndex = Math.floor(Math.random() * danceVideos.length);
        const selectedVideo = danceVideos[randomIndex];

        const videoHTML = `
            <div class="video-container">
                <iframe src="${selectedVideo.iframeSrc}" frameborder="0" allowfullscreen></iframe>
            </div>
            <p class="video-info">${selectedVideo.description}</p>
        `;

        videoContainer.innerHTML = videoHTML;
        console.log("Random dance video loaded successfully");
    } else if (!videoContainer) {
        console.error("Video container element not found");
    } else {
        console.error("No dance videos available");
    }
});
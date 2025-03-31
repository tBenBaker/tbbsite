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


 // 1. Define video data 
const danceVideos = [
    {
        iframeSrc: "https://player.vimeo.com/video/780196253",
        description: "2022 Freestyle, shot/edited by Sho Matsuzaki | ♪♪ <em>Soul of a Man</em> -- Moon, ft Sticky Dub"
    },
    {
        iframeSrc: "https://www.youtube.com/embed/M6nZlqTS2iE", // Replace 1 with actual YouTube ID
        description: "2020 Class choreography with Kirah Koo | ♪♪ <em>Krs. // Toast </em> -- Dumebi edit"
    },
    {
        iframeSrc: "https://www.youtube.com/embed/vGdgA-ijewM", // Replace 2 with actual YouTube ID
        description: "2019 Class choreography with Earle G and Bridget Sedden @ <a href=\"https://www.iamphresh.com/home\">IAmPhresh</a> | ♪♪ <em>kay franklin - Getaheadhouse Edit </em> -- Esta."
    },
    {
        iframeSrc: "https://www.youtube.com/embed/V-F8Dd4N0UU", // Replace 3 with actual YouTube ID
        description: "2018 <em>Ba-Dum</em> | Poetry -- me, Audio -- Madam Data, Video -- Mike Oberlies & Joe Clement"
    },
    {
        iframeSrc: "https://www.youtube.com/embed/5V7loVom_xY", // Replace 4 with actual YouTube ID
        description: "2018 Class choreography -- Chris Martin | ♪♪ <em>I Need Never Get Old</em> -- Nathaniel Rateliff & The Night Sweats"
    },
     {
        iframeSrc: "https://www.youtube.com/embed/1_Cgt09qLhg", // Replace 5 with actual YouTube ID
        description: "2015 Music video choreography | ♪♪ <em>Lean On Rangeela</em> (Major Lazer // Imran Khan) -- Jai Matt ft. Mugdha Hasabnis, Dr. Srimix, proDiJy"
    },
     {
        iframeSrc: "https://www.youtube.com/embed/rYi7w4yOaEA", // Replace 6 with actual YouTube ID
        description: "2011 choreography, video edit by Tom Maher | ♪♪ <em>Go Out and Love Someone</em> -- Pogo"
    }
    // Add more video objects here if you have them
];
  // 2. Get the container element
  const videoContainer = document.getElementById('random-dance-video-container');

  // 3. Check if the container exists and there are videos
  if (videoContainer && danceVideos.length > 0) {
      // 4. Select a random video
      const randomIndex = Math.floor(Math.random() * danceVideos.length);
      const selectedVideo = danceVideos[randomIndex];

      // 5. Create the HTML for the selected video
      const videoHTML = `
          <div class="video-container">
              <iframe src="${selectedVideo.iframeSrc}" frameborder="0" allowfullscreen></iframe>
          </div>
          <p class="video-info">${selectedVideo.description}</p>
      `;

      // 6. Insert the HTML into the container
      videoContainer.innerHTML = videoHTML;
  }

});
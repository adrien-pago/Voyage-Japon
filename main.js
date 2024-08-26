document.getElementById('photo-album-btn').addEventListener('click', function() {
    displayPhotoThumbnails();
});

document.getElementById('video-btn').addEventListener('click', function() {
    displayVideo();
});

////////////////////// Affichage des vignettes de chaque ville //////////////////////
function displayPhotoThumbnails() {
    const mediaDisplay = document.getElementById('media-display');
    mediaDisplay.innerHTML = '';

    const cities = [
        { city: 'Tokyo', image: '/assets/photo/Tokyo/tokyo10.jpg' },
        { city: 'Kyoto', image: '/assets/photo/Kyoto/kyoto1.jpg' },
        { city: 'Osaka', image: '/assets/photo/Osaka/osaka1.jpg' },
        { city: 'Matsumoto', image: '/assets/photo/Matsumoto/matsumoto1.jpg' },
        { city: 'Kamakura', image: '/assets/photo/Kamakura/kamakura1.jpg' },
        { city: 'Kanazawa', image: '/assets/photo/Kanazawa/kanazawa1.jpg' },
        { city: 'Himeji', image: '/assets/photo/Himeji/himeji1.jpg' },
        { city: 'Hiroshima', image: '/assets/photo/Hiroshima/hiroshima1.jpg' },
        { city: 'Miyajima', image: '/assets/photo/Miyajima/miyajima1.jpg' },
        { city: 'Shirakawa-go et Ainokura', image: '/assets/photo/Shirakawa-go et Ainokura/ainokura1.jpg' },
        { city: 'Hakone', image: '/assets/photo/Hakone/hakone1.jpg' },
        { city: 'Bonus', image: '/assets/photo/Bonus/bonus1.jpg' },
    ];

    const rowElement = document.createElement('div');
    rowElement.classList.add('row', 'gx-4');

    cities.forEach(city => {
        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.classList.add('col-md-3', 'col-sm-4', 'col-6', 'mb-4', 'position-relative');

        const thumbnailElement = document.createElement('img');
        thumbnailElement.src = city.image;
        thumbnailElement.alt = city.city;
        thumbnailElement.classList.add('photo-thumbnail', 'img-fluid');

        const cityNameOverlay = document.createElement('div');
        cityNameOverlay.classList.add('city-name-overlay');
        cityNameOverlay.textContent = city.city;

        thumbnailElement.addEventListener('click', function() {
            openCityGalleryInFancybox(city.city);
        });

        thumbnailContainer.appendChild(thumbnailElement);
        thumbnailContainer.appendChild(cityNameOverlay);
        rowElement.appendChild(thumbnailContainer);
    });

    mediaDisplay.appendChild(rowElement);
}

////////////////////// Ouverture de la visionneuse Fancybox //////////////////////
function openCityGalleryInFancybox(city) {
    const cityPhotos = getCityPhotos(city);

    Fancybox.show(
        cityPhotos.map((photo) => ({
            src: photo.image,
            thumb: photo.image,
            caption: photo.description || '',  // Utilisation de la description comme légende
            type: 'image'
        })),
        {
            mainClass: 'fancybox-city-gallery',
            dragToClose: false,
            Carousel: {
                infinite: true,
            },
            Thumbs: {
                autoStart: true,
            },
            caption: function (fancybox, carousel, slide) {
                return slide.caption; // On affiche le commentaire ici
            },
            afterShow: (fancybox) => {
                const titleElement = document.createElement('div');
                titleElement.textContent = city;
                titleElement.classList.add('fancybox-city-title');
                titleElement.style.position = 'absolute';
                titleElement.style.top = '0'; // Placé au-dessus de l'image
                titleElement.style.width = '100%';
                titleElement.style.textAlign = 'center';
                titleElement.style.fontSize = '1.5em';
                titleElement.style.color = 'white';
                titleElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                titleElement.style.zIndex = '9999';
                titleElement.style.padding = '10px';

                document.querySelector('.fancybox__container').appendChild(titleElement);
            }
        }
    );
}

////////////////////// Données des photos par ville //////////////////////
function getCityPhotos(city) {
    const photoData = {
        'Tokyo': [
            { image: '/assets/photo/Tokyo/tokyo1.jpg', description: 'Parc Ueno' },
            { image: '/assets/photo/Tokyo/tokyo2.jpg', description: 'Parc Ueno' },
            { image: '/assets/photo/Tokyo/tokyo3.jpg', description: 'Yanaka quartier traditionnel' },
            { image: '/assets/photo/Tokyo/tokyo4.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo' },
            { image: '/assets/photo/Tokyo/tokyo5.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo sous une canicule' },
            { image: '/assets/photo/Tokyo/tokyo6.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo' },
            // Ajoute les autres photos ici
        ],
        'Kyoto': [
            { image: '/assets/photo/Kyoto/kyoto1.jpg', description: 'Temple Kiyomizu-dera' },
            { image: '/assets/photo/Kyoto/kyoto2.jpg', description: 'Sanctuaire Fushimi Inari-taisha' },
            { image: '/assets/photo/Kyoto/kyoto3.jpg', description: 'Arashiyama Bamboo Grove' },
            // Ajoute les autres photos ici
        ],
        // Ajoute les autres villes ici
    };

    return photoData[city] || [];
}

////////////////////// Vidéo //////////////////////
function displayVideo() {
    const mediaDisplay = document.getElementById('media-display');
    mediaDisplay.innerHTML = `
        <video controls class="video-fullscreen">
            <source src="/assets/video/projet.mp4" type="video/mp4">
            Votre navigateur ne supporte pas la balise vidéo.
        </video>
    `;
}

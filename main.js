document.getElementById('photo-album-btn').addEventListener('click', function() {
    displayPhotoThumbnails();
});

document.getElementById('video-btn').addEventListener('click', function() {
    displayVideo();
});

////////////////////// Itinéraire à coté de la carte japon //////////////////////
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
    rowElement.classList.add('row', 'gx-4'); // Utilisation des classes Bootstrap pour la grille

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
            displayCityGallery(city.city);
        });

        thumbnailContainer.appendChild(thumbnailElement);
        thumbnailContainer.appendChild(cityNameOverlay);
        rowElement.appendChild(thumbnailContainer);
    });

    mediaDisplay.appendChild(rowElement);
}

////////////////////// Gallery photo par ville //////////////////////
function displayCityGallery(city) {
    const mediaDisplay = document.getElementById('media-display');
    mediaDisplay.innerHTML = `
        <div class="titre-galery">
            <h1 id="city-name">${city}</h1>
        </div>
        <div class="row">
            <div class="col-lg-8 col-md-12" id="main-photo-section">
                <div id="photo-gallery">
                    <img id="gallery-photo" src="" alt="${city}" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-4 col-md-12 d-none d-lg-flex" id="thumbnail-section">
                <div id="thumbnail-gallery" class="d-flex flex-column overflow-auto" style="max-height: 600px;">
                    <!-- Les miniatures seront ajoutées ici dynamiquement -->
                </div>
            </div>
        </div>
        <div id="description-controls-wrapper">
            <div id="photo-description" class="mt-3"></div>
            <div id="photo-gallery-controls" class="mt-3 d-flex justify-content-between">
                <button id="prev-photo" class="btn btn-secondary d-none d-lg-block">&lt; Précédent</button>
                <button id="next-photo" class="btn btn-secondary d-none d-lg-block">Suivant &gt;</button>
            </div>
        </div>
    `;

    const cityPhotos = getCityPhotos(city);
    let currentPhotoIndex = 0;

    function updateGallery() {
        const photo = cityPhotos[currentPhotoIndex];
        document.getElementById('gallery-photo').src = photo.image;
        document.getElementById('photo-description').innerText = photo.description;
    }

    function nextPhoto() {
        currentPhotoIndex = (currentPhotoIndex + 1) % cityPhotos.length;
        updateGallery();
    }

    function prevPhoto() {
        currentPhotoIndex = (currentPhotoIndex - 1 + cityPhotos.length) % cityPhotos.length;
        updateGallery();
    }

    document.getElementById('next-photo').addEventListener('click', nextPhoto);
    document.getElementById('prev-photo').addEventListener('click', prevPhoto);

    // Gestion du swipe pour changer les photos sur mobile
    const galleryPhoto = document.getElementById('gallery-photo');
    let touchStartX = 0;

    galleryPhoto.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
    });

    galleryPhoto.addEventListener('touchend', (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
            nextPhoto(); // Glisser vers la gauche pour aller à la photo suivante
        } else if (touchEndX - touchStartX > 50) {
            prevPhoto(); // Glisser vers la droite pour aller à la photo précédente
        }
    });

    updateGallery();

    // Afficher les vignettes sur les grands écrans uniquement
    const thumbnailGallery = document.getElementById('thumbnail-gallery');
    if (window.innerWidth >= 992) { // Correspond à la taille d'écran lg dans Bootstrap
        cityPhotos.forEach((photo, index) => {
            const thumbnailElement = document.createElement('img');
            thumbnailElement.src = photo.image;
            thumbnailElement.alt = `Miniature de ${city}`;
            thumbnailElement.classList.add('img-thumbnail', 'mb-3', 'thumbnail-photo');
            thumbnailElement.style.cursor = 'pointer';

            thumbnailElement.addEventListener('click', function() {
                currentPhotoIndex = index;
                updateGallery();
            });

            thumbnailGallery.appendChild(thumbnailElement);
        });
    }
}


////////////////////// Détaille pour chaque photo par ville//////////////////////
function getCityPhotos(city) {
    const photoData = {
        'Tokyo': [
            { image: '/assets/photo/Tokyo/tokyo1.jpg', description: 'Parc Ueno' },
            { image: '/assets/photo/Tokyo/tokyo2.jpg', description: 'Parc Ueno' },
            { image: '/assets/photo/Tokyo/tokyo3.jpg', description: 'Yanaka quartier traditionnel ' },
            { image: '/assets/photo/Tokyo/tokyo4.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo' },
            { image: '/assets/photo/Tokyo/tokyo5.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo sous une canicule' },
            { image: '/assets/photo/Tokyo/tokyo6.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo' },
            { image: '/assets/photo/Tokyo/tokyo7.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo' },
            { image: '/assets/photo/Tokyo/tokyo8.jpg', description: 'Shibuya Sky, avec notre meilleur copain Japonais' },
            { image: '/assets/photo/Tokyo/tokyo9.jpg', description: 'En bas de la Shibuya Sky' },
            { image: '/assets/photo/Tokyo/tokyo10.jpg', description: 'Vue panoramique du haut de la Shibuya Sky' },
            { image: '/assets/photo/Tokyo/tokyo11.jpg', description: 'Vue panoramique du haut de la Shibuya Sky' },
            { image: '/assets/photo/Tokyo/tokyo12.jpg', description: 'Vue panoramique du haut de la Shibuya Sky' },
            { image: '/assets/photo/Tokyo/tokyo13.jpg', description: 'Vue panoramique du haut de la Shibuya Sky' },
            { image: '/assets/photo/Tokyo/tokyo14.jpg', description: 'Vue panoramique du haut de la Shibuya Sky' },
            { image: '/assets/photo/Tokyo/tokyo15.jpg', description: 'Le célèbre Shibuya Crossing:' },
            { image: '/assets/photo/Tokyo/tokyo16.jpg', description: 'Deux amoureux en folie dans Tokyo' },
            { image: '/assets/photo/Tokyo/tokyo17.jpg', description: 'Quartier Shibuya de nuit' },
            { image: '/assets/photo/Tokyo/tokyo18.jpg', description: 'Quartier Shibuya de nuit' },
            { image: '/assets/photo/Tokyo/tokyo19.jpg', description: 'Quartier des affaire de Tokyo' },
            { image: '/assets/photo/Tokyo/tokyo20.jpg', description: 'Dans les métro de Tokyo' },
            { image: '/assets/photo/Tokyo/tokyo21.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo22.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo23.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo24.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo25.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo26.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo27.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo28.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo29.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo30.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo31.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo32.jpg', description: '?????????' },
            { image: '/assets/photo/Tokyo/tokyo33.jpg', description: '?????????' },

        ],
        'Kyoto': [
            { image: 'kyoto1.jpg', description: 'Kyoto - Temple Kiyomizu-dera' },
            { image: 'kyoto2.jpg', description: 'Kyoto - Sanctuaire Fushimi Inari-taisha' },
            { image: 'kyoto3.jpg', description: 'Kyoto - Arashiyama Bamboo Grove' },
        ],
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


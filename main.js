document.getElementById('photo-album-btn').addEventListener('click', function() {
    displayPhotoThumbnails();
});

document.getElementById('video-btn').addEventListener('click', function() {
    displayVideo();
});

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

function clearFancybox() {
    // Supprimer les éléments Fancybox existants
    const fancyboxContainers = document.querySelectorAll('.fancybox__container');
    fancyboxContainers.forEach(container => container.remove());
}

function openCityGalleryInFancybox(city) {
    clearFancybox(); // Nettoyer les anciennes instances
    const cityPhotos = getCityPhotos(city);

   // Ajouter un titre avec le nom de la ville dans le contenu de la Fancybox
    const cityTitle = `<div class="fancybox-city-title">${city}</div>`;

    Fancybox.show(
        cityPhotos.map((photo) => ({
            src: photo.image,
            thumb: photo.image,
            caption: cityTitle + (photo.description || ''), // Ajouter le titre de la ville au-dessus de la description
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
        }
    );
}



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
        'Kyoto':[
            { image: '/assets/photo/Kyoto/kyoto1.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto2.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto3.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto4.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto5.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto6.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto7.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto8.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto9.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto10.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto11.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto12.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto13.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto14.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto15.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto16.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto17.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto18.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto19.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto20.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto21.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto22.jpg', description: 'Alizée en compagnie de Djidji' },
            { image: '/assets/photo/Kyoto/kyoto23.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto24.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto25.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto26.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto27.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto28.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto29.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto30.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto31.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto32.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto33.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto34.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto35.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto36.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto37.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto38.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto39.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto40.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto41.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto42.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto43.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto44.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto45.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto46.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto47.jpg', description: '?????????' },
            { image: '/assets/photo/Kyoto/kyoto48.jpg', description: '?????????' },
        ],
        'Osaka' :[
            { image: '/assets/photo/Osaka/osaka1.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka2.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka3.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka4.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka5.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka6.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka7.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka8.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka9.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka10.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka11.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka12.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka13.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka14.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka15.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka16.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka17.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka18.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka19.jpg', description: '?????????' },
            { image: '/assets/photo/Osaka/osaka20.jpg', description: '?????????' },

        ],
        'Matsumoto' :[

        ],
        'Kanazawa' :[

        ],
        'Kamakura' :[

        ],
        'Himeji' :[

        ],
        'Hiroshima' :[

        ],
   
        'Miyajima' :[

        ],
        'Shirakawa-go et Ainokura' :[

        ],
        'Hakone' :[

        ],
        'Bonus' :[

        ],
       
    };
    const photos = photoData[city] || [];
    return photos;
}

function displayVideo() {
    const mediaDisplay = document.getElementById('media-display');
    mediaDisplay.innerHTML = `
        <video controls class="video-fullscreen">
            <source src="/assets/video/projet.mp4" type="video/mp4">
            Votre navigateur ne supporte pas la balise vidéo.
        </video>
    `;
}

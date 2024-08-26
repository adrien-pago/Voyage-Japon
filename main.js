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

    console.log('Opening Fancybox with photos:', cityPhotos); // Debug

    Fancybox.show(
        cityPhotos.map((photo) => ({
            src: photo.image,
            thumb: photo.image,
            caption: photo.description || '', 
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
                const captionText = slide.caption || '';
                console.log('Slide Caption:', captionText); // Debug
                return captionText;
            },
            afterShow: (fancybox) => {
                console.log('Fancybox Instance:', fancybox);

                const titleElement = document.createElement('div');
                titleElement.textContent = city;
                titleElement.classList.add('fancybox-city-title');
                titleElement.style.position = 'absolute';
                titleElement.style.top = '0'; 
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
        // autres villes...
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

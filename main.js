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
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo1.jpg', description: 'Parc Ueno' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo2.jpg', description: 'Parc Ueno' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo3.jpg', description: 'Yanaka quartier traditionnel ' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo4.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo5.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo sous une canicule' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo6.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo7.jpg', description: 'Temple Shitenno-ji, le plus vieux temple de Tokyo' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo8.jpg', description: 'Shibuya Sky, avec notre meilleur copain Japonais' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo9.jpg', description: 'En bas de la Shibuya Sky' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo10.jpg', description: 'Vue panoramique du haut de la Shibuya Sky' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo11.jpg', description: 'Vue panoramique du haut de la Shibuya Sky' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo12.jpg', description: 'Vue panoramique du haut de la Shibuya Sky' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo13.jpg', description: 'Vue panoramique du haut de la Shibuya Sky' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo14.jpg', description: 'Vue panoramique du haut de la Shibuya Sky' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo15.jpg', description: 'Le célèbre Shibuya Crossing:' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo16.jpg', description: 'Deux amoureux en folie dans Tokyo' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo17.jpg', description: 'Quartier Shibuya de nuit' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo18.jpg', description: 'Quartier Shibuya de nuit' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo19.jpg', description: 'Quartier des affaire de Tokyo' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo20.jpg', description: 'Dans les métro de Tokyo' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo23.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo24.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo25.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo26.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo27.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo28.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo29.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japonassets/photo/Tokyo/tokyo30.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo31.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo32.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Tokyo/tokyo33.jpg', description: '?????????' },
        ],

        'Kyoto':[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto10.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto11.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto13.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto18.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto19.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto22.jpg', description: 'Alizée en compagnie de Djidji' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto23.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto24.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto25.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto26.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto27.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto28.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto29.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto30.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto31.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto32.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto33.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto34.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto35.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto36.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto37.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto38.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto39.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto40.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto41.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto42.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto43.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto44.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto45.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto46.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto47.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kyoto/kyoto48.jpg', description: '?????????' },
        ],

        'Osaka' :[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka10.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka11.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka13.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka18.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka19.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Osaka/osaka23.jpg', description: '?????????' },

        ],

        'Matsumoto' :[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto10.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto11.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto13.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Matsumoto/matsumoto23.jpg', description: '?????????' },
        ],

        'Kanazawa' :[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa10.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa11.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa13.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawa22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kanazawa/kanazawao23.jpg', description: '?????????' },
        ],

        'Kamakura' :[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura10.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura11.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura13.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura18.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura19.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Kamakura/kamakura23.jpg', description: '?????????' },
        ],

        'Himeji' :[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji10.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Himeji/himeji23.jpg', description: '?????????' },
        ],

        'Hiroshima' :[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima10.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima11.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima13.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima18.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima19.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hiroshima/hiroshima23.jpg', description: '?????????' },
        ],
   
        'Miyajima' :[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima10.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima11.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima13.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima18.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima19.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima23.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima24.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima25.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima26.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima27.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima28.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima29.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima30.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima31.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima32.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima33.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima34.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima35.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima36.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Miyajima/miyajima37.jpg', description: '?????????' },
        ],

        'Shirakawa-go et Ainokura' :[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi10.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi11.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi13.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi18.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi19.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Shirakawa-go et Ainokura/shi23.jpg', description: '?????????' },
        ],

        'Hakone' :[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone0.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone11.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone13.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone18.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone19.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone23.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone24.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone25.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone26.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone27.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Hakone/hakone28.jpg', description: '?????????' },
        ],

        'Bonus' :[
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus1.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus2.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus3.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus4.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus5.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus6.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus7.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus8.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus9.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus10.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus11.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus12.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus13.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus14.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus15.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus16.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus17.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus18.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus19.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus20.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus21.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus22.jpg', description: '?????????' },
            { image: 'https://adrien-pago-portfolio.fr/japon/assets/photo/Bonus/bonus23.jpg', description: '?????????' },
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

// URLs des photos des lieux - Images Unsplash haute qualité
// Utilisation : Ajoutez ces galeries dans les timeline-card des lieux correspondants

const photoGalleries = {
    // TOKYO
    'shibuya-crossing': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', caption: 'Shibuya Crossing de nuit' },
            { url: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800', caption: 'La foule à Shibuya' },
            { url: 'https://images.unsplash.com/photo-1590559899731-a882a2f0c858?w=800', caption: 'Vue aérienne Shibuya' }
        ]
    },
    'sensoji': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800', caption: 'Porte Kaminarimon' },
            { url: 'https://images.unsplash.com/photo-1522208893270-4ff6aed3f7c9?w=800', caption: 'Temple Senso-ji' },
            { url: 'https://images.unsplash.com/photo-1570977773758-58c6c3ce8c4f?w=800', caption: 'Nakamise-dori' }
        ]
    },
    'meiji-jingu': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', caption: 'Torii du Meiji Jingu' },
            { url: 'https://images.unsplash.com/photo-1570977773758-58c6c3ce8c4f?w=800', caption: 'Allée forestière' },
            { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', caption: 'Temple principal' }
        ]
    },
    'harajuku': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=800', caption: 'Takeshita Street' },
            { url: 'https://images.unsplash.com/photo-1598887142487-c8c2b1d81b01?w=800', caption: 'Street fashion Harajuku' },
            { url: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800', caption: 'Boutiques colorées' }
        ]
    },
    'akihabara': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1599932942843-e3a3c3c4cdde?w=800', caption: 'Electric Town' },
            { url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800', caption: 'Néons et enseignes' },
            { url: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800', caption: 'Magasins électronique' }
        ]
    },
    'teamlab': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1601166476558-c05c44be5b4a?w=800', caption: 'Forêt de lumières' },
            { url: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800', caption: 'Installation interactive' },
            { url: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800', caption: 'Art numérique immersif' }
        ]
    },
    'tokyo-skytree': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800', caption: 'Tokyo Skytree vue d\'ensemble' },
            { url: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=800', caption: 'Vue de nuit' },
            { url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800', caption: 'Panorama Tokyo' }
        ]
    },

    // KYOTO
    'fushimi-inari': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800', caption: '10,000 torii gates' },
            { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', caption: 'Tunnel de torii' },
            { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', caption: 'Escaliers et torii' }
        ]
    },
    'gion': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1590253230532-a67f4c00e77e?w=800', caption: 'Quartier Gion' },
            { url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800', caption: 'Maisons traditionnelles' },
            { url: 'https://images.unsplash.com/photo-1570977773758-58c6c3ce8c4f?w=800', caption: 'Rue Hanami-koji' }
        ]
    },
    'kinkakuji': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', caption: 'Pavillon d\'Or' },
            { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', caption: 'Jardin zen' },
            { url: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800', caption: 'Reflet dans le lac' }
        ]
    },
    'arashiyama': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800', caption: 'Bambouseraie' },
            { url: 'https://images.unsplash.com/photo-1570977773758-58c6c3ce8c4f?w=800', caption: 'Chemin de bambous' },
            { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', caption: 'Pont Togetsukyo' }
        ]
    },
    'kiyomizudera': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', caption: 'Temple Kiyomizu-dera' },
            { url: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800', caption: 'Terrasse en bois' },
            { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', caption: 'Vue panoramique Kyoto' }
        ]
    },

    // NARA
    'nara-park': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1590253230532-a67f4c00e77e?w=800', caption: 'Daims sacrés de Nara' },
            { url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800', caption: 'Nourrissage des daims' },
            { url: 'https://images.unsplash.com/photo-1570977773758-58c6c3ce8c4f?w=800', caption: 'Parc en automne' }
        ]
    },
    'todaiji': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', caption: 'Grande porte Nandaimon' },
            { url: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800', caption: 'Grand Bouddha' },
            { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', caption: 'Hall du temple' }
        ]
    },

    // OSAKA
    'dotonbori': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1590253230532-a67f4c00e77e?w=800', caption: 'Canal Dotonbori de nuit' },
            { url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800', caption: 'Néons colorés' },
            { url: 'https://images.unsplash.com/photo-1570977773758-58c6c3ce8c4f?w=800', caption: 'Glico Running Man' }
        ]
    },
    'osaka-castle': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', caption: 'Château d\'Osaka' },
            { url: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800', caption: 'Tour principale' },
            { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', caption: 'Jardins du château' }
        ]
    },
    'universal-studios': {
        photos: [
            { url: 'https://images.unsplash.com/photo-1590253230532-a67f4c00e77e?w=800', caption: 'Super Nintendo World' },
            { url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800', caption: 'Château Harry Potter' },
            { url: 'https://images.unsplash.com/photo-1570977773758-58c6c3ce8c4f?w=800', caption: 'Entrée du parc' }
        ]
    }
};

// Function pour générer le HTML d'une galerie
function generateGalleryHTML(locationKey) {
    const gallery = photoGalleries[locationKey];
    if (!gallery) return '';

    let html = '<div class="location-gallery">\n';
    gallery.photos.forEach(photo => {
        html += `    <div class="gallery-item" onclick="openPhotoModal('${photo.url}', '${photo.caption}')">\n`;
        html += `        <img src="${photo.url}" alt="${photo.caption}" loading="lazy">\n`;
        html += `    </div>\n`;
    });
    html += '</div>\n';

    return html;
}

// Exemple d'utilisation dans le HTML :
console.log('=== GALERIE SHIBUYA CROSSING ===');
console.log(generateGalleryHTML('shibuya-crossing'));

console.log('\n=== GALERIE FUSHIMI INARI ===');
console.log(generateGalleryHTML('fushimi-inari'));

console.log('\n=== GALERIE NARA PARK ===');
console.log(generateGalleryHTML('nara-park'));

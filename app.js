// ====================================
// APP V2 - NAVIGATION & FEATURES
// ====================================

// Screen navigation - optimized
function goToScreen(screenId) {
    const targetScreen = document.getElementById(screenId);
    if (!targetScreen) return;

    // Check if already on this screen
    if (targetScreen.classList.contains('active')) return;

    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    targetScreen.classList.add('active');

    // Show/hide bottom tabs (hide on cover screen)
    if (screenId === 'screen-cover') {
        document.body.classList.add('on-cover');
    } else {
        document.body.classList.remove('on-cover');
    }

    // Initialize map only when navigating to Places screen (lazy loading)
    if (screenId === 'screen-places' && !map) {
        setTimeout(initializeMap, 300);
    }

    // Haptic feedback
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }

    // Scroll to top of new screen - with requestAnimationFrame for better performance
    const contentScroll = targetScreen.querySelector('.content-scroll');
    if (contentScroll && contentScroll.scrollTop !== 0) {
        requestAnimationFrame(() => {
            contentScroll.scrollTop = 0;
        });
    }
}

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);

    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }
}

// Dark mode and initial setup will be handled in main DOMContentLoaded below

// ====================================
// ITINERARY / DAY SELECTOR
// ====================================

let currentDay = 1;

function selectDay(dayNumber, clickedElement) {
    // Prevent redundant calls
    if (currentDay === dayNumber) return;

    currentDay = dayNumber;

    // Update buttons
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (clickedElement) {
        clickedElement.classList.add('active');
    } else {
        // Fallback si pas d'élément cliqué (appelé programmatiquement)
        const targetBtn = document.querySelector(`.day-btn:nth-child(${dayNumber})`);
        if (targetBtn) targetBtn.classList.add('active');
    }

    // Update content
    document.querySelectorAll('.day-content').forEach(content => {
        content.classList.remove('active');
    });

    const dayContent = document.getElementById(`day-${dayNumber}`);
    if (dayContent) {
        dayContent.classList.add('active');
    }

    // Haptic feedback
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }
}

// ====================================
// SWIPE GESTURES ENTRE LES JOURS
// ====================================

let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

function handleSwipe() {
    const swipeThreshold = 50;
    const verticalThreshold = 30;

    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);

    // Ignore si scroll vertical
    if (deltaY > verticalThreshold) return;

    // Swipe gauche = jour suivant
    if (deltaX < -swipeThreshold && currentDay < 10) {
        const nextBtn = document.querySelector(`.day-btn:nth-child(${currentDay + 1})`);
        if (nextBtn) nextBtn.click();
    }

    // Swipe droite = jour précédent
    if (deltaX > swipeThreshold && currentDay > 1) {
        const prevBtn = document.querySelector(`.day-btn:nth-child(${currentDay - 1})`);
        if (prevBtn) prevBtn.click();
    }
}

// Swipe initialization will be handled in main DOMContentLoaded below

// ====================================
// CURRENCY CONVERTER V2
// ====================================

const EXCHANGE_RATE = 184.69;

function convertJPYv2() {
    const jpy = parseFloat(document.getElementById('jpy-v2').value);
    if (!isNaN(jpy)) {
        const eur = (jpy / EXCHANGE_RATE).toFixed(2);
        document.getElementById('eur-v2').value = eur;
    }
}

function convertEURv2() {
    const eur = parseFloat(document.getElementById('eur-v2').value);
    if (!isNaN(eur)) {
        const jpy = Math.round(eur * EXCHANGE_RATE);
        document.getElementById('jpy-v2').value = jpy;
    }
}

// ====================================
// BUDGET TRACKER V2
// ====================================

let budgetDataV2 = {
    total: 800,
    spent: 0
};

function addExpenseV2() {
    const input = document.getElementById('expense-v2');
    const amount = parseFloat(input.value);

    if (isNaN(amount) || amount <= 0) {
        showNotificationV2('Montant invalide');
        return;
    }

    budgetDataV2.spent += amount;
    saveBudgetV2();
    updateBudgetDisplayV2();
    input.value = '';

    if (window.navigator.vibrate) {
        window.navigator.vibrate(20);
    }

    showNotificationV2(`${amount}€ ajouté`);
}

function resetBudgetV2() {
    if (confirm('Réinitialiser le budget?')) {
        budgetDataV2.spent = 0;
        saveBudgetV2();
        updateBudgetDisplayV2();
        showNotificationV2('Budget réinitialisé');
    }
}

function updateBudgetDisplayV2() {
    const remaining = budgetDataV2.total - budgetDataV2.spent;
    const percentage = (budgetDataV2.spent / budgetDataV2.total) * 100;

    document.getElementById('spent-v2').textContent = budgetDataV2.spent.toFixed(2) + '€';
    document.getElementById('remaining-v2').textContent = remaining.toFixed(2) + '€';
    document.getElementById('progress-v2').style.width = Math.min(percentage, 100) + '%';

    const progressBar = document.getElementById('progress-v2');
    if (percentage > 100) {
        progressBar.style.background = '#D81B2B';
    } else {
        progressBar.style.background = 'linear-gradient(90deg, #4A7C59 0%, #D81B2B 100%)';
    }
}

function saveBudgetV2() {
    localStorage.setItem('budgetDataV2', JSON.stringify(budgetDataV2));
}

function loadBudgetV2() {
    const saved = localStorage.getItem('budgetDataV2');
    if (saved) {
        budgetDataV2 = JSON.parse(saved);
        updateBudgetDisplayV2();
    }
}

// ====================================
// GOOGLE MAPS
// ====================================

function openMaps(query) {
    const url = `https://maps.google.com/?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
}

// ====================================
// NOTIFICATIONS
// ====================================

function showNotificationV2(message) {
    const notification = document.createElement('div');
    notification.className = 'notification-v2';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: linear-gradient(135deg, #D81B2B 0%, #A91623 100%);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 4px 20px rgba(216, 27, 43, 0.4);
        transition: transform 0.3s ease;
        white-space: nowrap;
        font-size: 14px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);

    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2500);
}

// ====================================
// CHECKLIST PERSISTENCE
// ====================================

function initializeCheckboxes() {
    // Load checklist state
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        const saved = localStorage.getItem(checkbox.id);
        if (saved === 'true') {
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', function() {
            localStorage.setItem(this.id, this.checked);
            if (window.navigator.vibrate) {
                window.navigator.vibrate(10);
            }
        });
    });
}

// ====================================
// PWA INSTALL (if needed)
// ====================================

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // You can show a custom install button here if desired
});

// ====================================
// SERVICE WORKER
// ====================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('✅ Service Worker enregistré:', registration.scope);
            })
            .catch((error) => {
                console.log('❌ Erreur Service Worker:', error);
            });
    });
}

// ====================================
// KEYBOARD SHORTCUTS (Desktop)
// ====================================

document.addEventListener('keydown', (e) => {
    // ESC: Go back
    if (e.key === 'Escape') {
        const activeScreen = document.querySelector('.screen.active');
        if (activeScreen && activeScreen.id !== 'screen-cover') {
            const backBtn = activeScreen.querySelector('.back-btn');
            if (backBtn) {
                backBtn.click();
            }
        }
    }

    // Numbers 1-9: Quick nav from menu
    if (e.key >= '1' && e.key <= '9') {
        const activeScreen = document.querySelector('.screen.active');
        if (activeScreen && activeScreen.id === 'screen-menu') {
            const menuCards = document.querySelectorAll('.menu-card');
            const index = parseInt(e.key) - 1;
            if (menuCards[index]) {
                menuCards[index].click();
            }
        }
    }
});

// ====================================
// OFFLINE/ONLINE DETECTION
// ====================================

function updateOnlineStatus() {
    if (!navigator.onLine) {
        showNotificationV2('Mode hors-ligne');
    }
}

window.addEventListener('online', () => {
    showNotificationV2('Connexion rétablie');
});

window.addEventListener('offline', updateOnlineStatus);

// ====================================
// COMPTEUR DE JOURS AVANT LE DÉPART
// ====================================

function updateCountdown() {
    const departureDate = new Date('2026-03-12T00:00:00');
    const now = new Date();
    const diffTime = departureDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const countdownEl = document.getElementById('countdown-days');
    const containerEl = document.getElementById('countdown-container');

    if (countdownEl && containerEl && diffDays > 0) {
        countdownEl.textContent = diffDays;
        containerEl.style.display = 'flex';
    } else if (containerEl && diffDays <= 0) {
        containerEl.innerHTML = '<p style="color: var(--sakura); font-weight: 700; font-size: 24px;">✈️ C\'est le départ!</p>';
        containerEl.style.display = 'flex';
    }
}

// ====================================
// WEB SHARE API
// ====================================

function shareItinerary() {
    if (navigator.share) {
        navigator.share({
            title: '🇯🇵 Japon 2026 - Mon Voyage',
            text: 'Découvre mon itinéraire pour le Japon! Tokyo, Kyoto, Nara, Osaka - 10 jours magiques du 12 au 21 Mars 2026 🌸⛩️',
            url: window.location.href
        })
        .then(() => {
            showNotificationV2('✅ Partagé!');
            if (window.navigator.vibrate) {
                window.navigator.vibrate(20);
            }
        })
        .catch((err) => {
            if (err.name !== 'AbortError') {
                console.log('Erreur partage:', err);
            }
        });
    } else {
        // Fallback: copier URL
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                showNotificationV2('📋 Lien copié!');
            })
            .catch(() => {
                showNotificationV2('❌ Partage non disponible');
            });
    }
}

// ====================================
// SYSTÈME DE NOTES PAR JOUR
// ====================================

let dayNotes = {};

function loadNotes() {
    const saved = localStorage.getItem('dayNotes');
    if (saved) {
        dayNotes = JSON.parse(saved);
        // Afficher les notes sauvegardées
        Object.keys(dayNotes).forEach(day => {
            const noteEl = document.getElementById(`note-day-${day}`);
            if (noteEl) {
                noteEl.value = dayNotes[day];
            }
        });
    }
}

function saveNote(dayNumber) {
    const noteEl = document.getElementById(`note-day-${dayNumber}`);
    if (noteEl) {
        dayNotes[dayNumber] = noteEl.value;
        localStorage.setItem('dayNotes', JSON.stringify(dayNotes));

        if (noteEl.value) {
            showNotificationV2('💾 Note sauvegardée');
        }
    }
}

// ====================================
// PROGRESSION VOYAGE (Jours accomplis)
// ====================================

let completedDays = [];

function loadCompletedDays() {
    const saved = localStorage.getItem('completedDays');
    if (saved) {
        completedDays = JSON.parse(saved);
        updateDayButtons();
    }
}

function toggleDayComplete(dayNumber) {
    const index = completedDays.indexOf(dayNumber);
    const completeBtn = document.querySelector(`#day-${dayNumber} .day-complete-btn`);

    if (index > -1) {
        completedDays.splice(index, 1);
        if (completeBtn) completeBtn.classList.remove('active');
    } else {
        completedDays.push(dayNumber);
        if (completeBtn) completeBtn.classList.add('active');
    }

    localStorage.setItem('completedDays', JSON.stringify(completedDays));
    updateDayButtons();

    if (window.navigator.vibrate) {
        window.navigator.vibrate(20);
    }

    if (completedDays.includes(dayNumber)) {
        showNotificationV2('✅ Jour accompli!');
    } else {
        showNotificationV2('Jour non accompli');
    }
}

function updateDayButtons() {
    // Reset all buttons first
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('completed');
    });

    document.querySelectorAll('.day-complete-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add completed class to completed days
    completedDays.forEach(dayNum => {
        const dayBtn = document.querySelector(`.day-btn:nth-child(${dayNum})`);
        if (dayBtn) {
            dayBtn.classList.add('completed');
        }

        const completeBtn = document.querySelector(`#day-${dayNum} .day-complete-btn`);
        if (completeBtn) {
            completeBtn.classList.add('active');
        }
    });
}

// ====================================
// PHOTO GALLERY
// ====================================

let currentPhotoModal = null;

function openPhotoModal(imageSrc, caption) {
    // Create modal if it doesn't exist
    if (!currentPhotoModal) {
        currentPhotoModal = document.createElement('div');
        currentPhotoModal.className = 'photo-modal';
        currentPhotoModal.innerHTML = `
            <div class="photo-modal-content">
                <button class="photo-close" onclick="closePhotoModal()">×</button>
                <img src="" alt="">
                <div class="photo-caption"></div>
            </div>
        `;
        document.body.appendChild(currentPhotoModal);

        // Close on background click
        currentPhotoModal.addEventListener('click', (e) => {
            if (e.target === currentPhotoModal) {
                closePhotoModal();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && currentPhotoModal.classList.contains('active')) {
                closePhotoModal();
            }
        });
    }

    // Update modal content
    const img = currentPhotoModal.querySelector('img');
    const captionEl = currentPhotoModal.querySelector('.photo-caption');

    img.src = imageSrc;
    img.alt = caption;
    captionEl.textContent = caption;

    // Show modal
    currentPhotoModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Haptic feedback
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }
}

function closePhotoModal() {
    if (currentPhotoModal) {
        currentPhotoModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ====================================
// INTERACTIVE MAP
// ====================================

let map = null;

function initializeMap() {
    // Check if Leaflet is loaded and map container exists
    if (typeof L === 'undefined' || !document.getElementById('interactive-map')) {
        console.log('⏳ Leaflet or map container not ready');
        return;
    }

    // Initialize map centered on Japan
    map = L.map('interactive-map').setView([36.2048, 138.2529], 6);

    // Add MapTiler tile layer with English labels
    // Get your free API key at: https://cloud.maptiler.com/maps/
    const MAPTILER_KEY = 'BQr9DRpoV8qRqHr8cAlt'; // Replace with your actual key
    L.tileLayer(`https://api.maptiler.com/maps/jp-mierune-streets/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`, {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        maxZoom: 19,
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);

    // Custom icons
    const visitIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background: #d81b2b; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    const hotelIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background: #c9a961; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    const foodIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background: #4a7c59; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.25);"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    // Tourist locations with coordinates (vérifiées GPS)
    const locations = [
        // TOKYO
        { lat: 35.6762, lng: 139.6503, name: 'Shibuya Crossing', type: 'visit', day: 1 },
        { lat: 35.7148, lng: 139.7967, name: 'Senso-ji Temple', type: 'visit', day: 2 },
        { lat: 35.6755, lng: 139.6986, name: 'Meiji Jingu', type: 'visit', day: 2 },
        { lat: 35.6702, lng: 139.7026, name: 'Harajuku', type: 'visit', day: 2 },
        { lat: 35.7022, lng: 139.7745, name: 'Akihabara', type: 'visit', day: 3 },
        { lat: 35.6329, lng: 139.7964, name: 'TeamLab Borderless', type: 'visit', day: 3 },
        { lat: 35.6586, lng: 139.7454, name: 'Ginza', type: 'visit', day: 3 },
        { lat: 35.6975, lng: 139.7931, name: 'Ryogoku Kokugikan (Sumo)', type: 'visit', day: 4 },
        { lat: 35.7148, lng: 139.7744, name: 'Ueno Park', type: 'visit', day: 4 },
        { lat: 35.7101, lng: 139.8107, name: 'Tokyo Skytree', type: 'visit', day: 4 },

        // KYOTO
        { lat: 34.9674, lng: 135.7726, name: 'Fushimi Inari Taisha', type: 'visit', day: 5 },
        { lat: 35.0037, lng: 135.7751, name: 'Gion', type: 'visit', day: 5 },
        { lat: 35.0394, lng: 135.7292, name: 'Kinkaku-ji (Pavillon d\'Or)', type: 'visit', day: 6 },
        { lat: 35.0093, lng: 135.6686, name: 'Arashiyama Bambouseraie', type: 'visit', day: 6 },
        { lat: 35.0050, lng: 135.7605, name: 'Nishiki Market', type: 'visit', day: 6 },
        { lat: 34.9948, lng: 135.7850, name: 'Kiyomizu-dera', type: 'visit', day: 7 },
        { lat: 35.0264, lng: 135.7983, name: 'Chemin du Philosophe', type: 'visit', day: 7 },

        // NARA
        { lat: 34.6851, lng: 135.8048, name: 'Nara Park (Daims)', type: 'visit', day: 8 },
        { lat: 34.6890, lng: 135.8398, name: 'Todai-ji Temple', type: 'visit', day: 8 },
        { lat: 34.6803, lng: 135.8485, name: 'Kasuga Taisha', type: 'visit', day: 8 },

        // OSAKA
        { lat: 34.6654, lng: 135.4325, name: 'Universal Studios Japan', type: 'visit', day: 9 },
        { lat: 34.6685, lng: 135.5008, name: 'Dotonbori', type: 'visit', day: 9 },
        { lat: 34.6874, lng: 135.5259, name: 'Château d\'Osaka', type: 'visit', day: 10 },
        { lat: 34.6662, lng: 135.5049, name: 'Kuromon Market', type: 'visit', day: 10 }
    ];

    // Accommodation placeholders (à renseigner plus tard)
    const hotels = [
        { lat: 35.6812, lng: 139.7671, name: 'Logement Tokyo (à renseigner)', type: 'hotel', days: '1-4' },
        { lat: 35.0116, lng: 135.7681, name: 'Logement Kyoto (à renseigner)', type: 'hotel', days: '5-8' },
        { lat: 34.6937, lng: 135.5023, name: 'Logement Osaka (à renseigner)', type: 'hotel', days: '9-10' }
    ];

    // Add markers for tourist locations
    locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng], { icon: visitIcon }).addTo(map);
        marker.bindPopup(`
            <h4>${location.name}</h4>
            <p style="margin: 0; color: #6b7280;">Jour ${location.day}</p>
        `);
    });

    // Add markers for hotels (placeholder)
    hotels.forEach(hotel => {
        const marker = L.marker([hotel.lat, hotel.lng], { icon: hotelIcon }).addTo(map);
        marker.bindPopup(`
            <h4>🏨 ${hotel.name}</h4>
            <p style="margin: 0; color: #6b7280;">Jours ${hotel.days}</p>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #c9a961; font-weight: 600;">📝 À compléter plus tard</p>
        `);
    });

    // Draw route lines connecting cities in order
    const routeCoordinates = [
        // Tokyo
        [35.6762, 139.6503], // Shibuya
        [35.7148, 139.7967], // Sensoji
        [35.6755, 139.6986], // Meiji (corrigé)
        [35.7022, 139.7745], // Akihabara
        [35.7101, 139.8107], // Skytree

        // Shinkansen to Kyoto
        [35.0116, 135.7681], // Kyoto station area

        // Kyoto
        [34.9674, 135.7726], // Fushimi Inari (corrigé)
        [35.0037, 135.7751], // Gion
        [35.0394, 135.7292], // Kinkaku-ji
        [35.0093, 135.6686], // Arashiyama
        [34.9948, 135.7850], // Kiyomizu-dera

        // Nara
        [34.6851, 135.8048], // Nara Park
        [34.6890, 135.8398], // Todai-ji

        // Osaka
        [34.6937, 135.5023], // Osaka area
        [34.6654, 135.4325], // Universal Studios (corrigé)
        [34.6685, 135.5008], // Dotonbori (corrigé)
        [34.6874, 135.5259]  // Château Osaka (corrigé)
    ];

    // Draw polyline for the route
    L.polyline(routeCoordinates, {
        color: '#d81b2b',
        weight: 3,
        opacity: 0.6,
        dashArray: '10, 10',
        smoothFactor: 1
    }).addTo(map);

    console.log('🗺️ Carte interactive initialisée avec', locations.length, 'lieux');
}

// ====================================
// APP INITIALIZATION - CENTRALIZED
// ====================================

// Single DOMContentLoaded listener for all initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('🇯🇵 Japon 2026 V2 - App moderne initialisée!');
    console.log('Navigation par écrans • Design épuré • Mobile-first');

    // 1. Dark mode
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
    document.body.classList.add('on-cover');

    // 2. Swipe gestures
    const itineraryScreen = document.getElementById('screen-itinerary');
    if (itineraryScreen) {
        itineraryScreen.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        itineraryScreen.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }, { passive: true });
    }

    // 3. Budget tracker
    loadBudgetV2();

    // 4. Checkboxes
    initializeCheckboxes();

    // 5. Countdown
    updateCountdown();
    setInterval(updateCountdown, 3600000);

    // 6. Notes
    loadNotes();

    // 7. Day completion
    loadCompletedDays();

    // 8. Map will be initialized lazily when user navigates to Places screen
}, { once: true });

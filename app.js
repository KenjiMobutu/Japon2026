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

    // Haptic feedback
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }

    // Scroll to top of new screen - with requestAnimationFrame for better performance
    const contentScroll = targetScreen.querySelector('.content-scroll');
    if (contentScroll) {
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
}, { once: true });

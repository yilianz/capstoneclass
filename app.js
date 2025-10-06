// Game state
let totalRolls = 0;
let highestRoll = 0;
let currentRoll = 0;
let deferredPrompt;

// DOM elements
const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const resetButton = document.getElementById('resetButton');
const currentRollElement = document.getElementById('currentRoll');
const totalRollsElement = document.getElementById('totalRolls');
const highestRollElement = document.getElementById('highestRoll');
const installPrompt = document.getElementById('installPrompt');

// Load saved stats from localStorage
function loadStats() {
    const savedStats = localStorage.getItem('diceGameStats');
    if (savedStats) {
        const stats = JSON.parse(savedStats);
        totalRolls = stats.totalRolls || 0;
        highestRoll = stats.highestRoll || 0;
        updateStatsDisplay();
    }
}

// Save stats to localStorage
function saveStats() {
    const stats = {
        totalRolls: totalRolls,
        highestRoll: highestRoll
    };
    localStorage.setItem('diceGameStats', JSON.stringify(stats));
}

// Update stats display
function updateStatsDisplay() {
    currentRollElement.textContent = currentRoll || '-';
    totalRollsElement.textContent = totalRolls;
    highestRollElement.textContent = highestRoll || '-';
}

// Roll the dice
function rollDice() {
    // Disable button during animation
    rollButton.disabled = true;
    
    // Add rolling animation
    dice.classList.add('rolling');
    
    // Generate random number between 1 and 6
    setTimeout(() => {
        currentRoll = Math.floor(Math.random() * 6) + 1;
        totalRolls++;
        
        // Update highest roll
        if (currentRoll > highestRoll) {
            highestRoll = currentRoll;
        }
        
        // Update display
        const face = dice.querySelector('.face');
        face.textContent = currentRoll;
        
        // Remove animation class
        dice.classList.remove('rolling');
        
        // Update stats and save
        updateStatsDisplay();
        saveStats();
        
        // Re-enable button
        rollButton.disabled = false;
    }, 600);
}

// Reset stats
function resetStats() {
    if (confirm('Are you sure you want to reset all statistics?')) {
        totalRolls = 0;
        highestRoll = 0;
        currentRoll = 0;
        
        const face = dice.querySelector('.face');
        face.textContent = '?';
        
        updateStatsDisplay();
        saveStats();
    }
}

// Event listeners
rollButton.addEventListener('click', rollDice);
resetButton.addEventListener('click', resetStats);
dice.addEventListener('click', rollDice);

// PWA Install prompt
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show install prompt
    installPrompt.style.display = 'block';
});

installPrompt.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        // Clear the deferredPrompt
        deferredPrompt = null;
        // Hide the install button
        installPrompt.style.display = 'none';
    }
});

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Initialize
loadStats();

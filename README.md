# 🎲 Dice Roll Game - Progressive Web App

A simple and fun dice rolling game that works offline and can be installed on your mobile phone!

## Features

- 🎲 Roll a virtual dice (1-6)
- 📊 Track your statistics:
  - Current roll
  - Total number of rolls
  - Highest roll achieved
- 💾 Persistent statistics (saved locally)
- 📱 Installable as a PWA on mobile devices
- 🔌 Works offline after first load
- 🎨 Beautiful and responsive design

## How to Play

1. Open the game in your web browser
2. Click the "Roll the Dice!" button or click directly on the dice
3. Watch the dice animate and see your result
4. Track your statistics over time
5. Reset stats anytime with the "Reset Stats" button

## Installing on Mobile

### Android (Chrome/Edge):
1. Open the game in Chrome or Edge browser
2. Tap the "Install" prompt that appears, or
3. Tap the menu (⋮) → "Install app" or "Add to Home Screen"
4. Follow the prompts to install

### iOS (Safari):
1. Open the game in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" to confirm

### Desktop (Chrome/Edge):
1. Open the game in Chrome or Edge
2. Click the install icon (⊕) in the address bar, or
3. Click menu (⋮) → "Install Dice Roll Game"

## Running Locally

Simply open `index.html` in a web browser, or serve the files using a local web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript
- Service Worker API (for offline functionality)
- Web App Manifest (for PWA features)
- LocalStorage API (for persistent data)

## Browser Support

Works on all modern browsers that support:
- Service Workers
- Web App Manifest
- LocalStorage

## License

MIT License - Feel free to use and modify!
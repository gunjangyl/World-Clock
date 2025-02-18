# World-Clock

# World Clock

A simple web-based World Clock that displays the current time for **India, China, and America** in real-time. The project uses **HTML, CSS, and JavaScript** to dynamically update the time based on the selected time zones.

## Features
✅ Displays the real-time clock for three different countries
✅ Uses JavaScript's `toLocaleTimeString()` to handle time zones
✅ Responsive and modern UI with hover effects
✅ Easy to customize and expand with more time zones

## Technologies Used
- HTML
- CSS (with Flexbox and modern UI styling)
- JavaScript (Date API for time conversion)

## File Structure
```
World-Clock/
│── index.html        # Main HTML file
│── css/
│   ├── style.css     # Styling for UI
│── js/
│   ├── script.js     # JavaScript logic for time update
│── README.md         # Project documentation
```

## Installation & Usage
1. **Clone the Repository** (or download the zip file):
   ```sh
   git clone https://github.com/gunjangyl/world-clock.git
   ```

2. **Open `index.html` in your browser**
   - Double-click `index.html` to open in your default browser.
   - Or run a simple local server using Python:
     ```sh
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000/` in your browser.

## How It Works
- The JavaScript function `clock()` fetches the current time for each country using `toLocaleTimeString()` with respective time zones.
- The function updates the time every second using `setInterval(clock, 1000)`.

## Customization
- You can add more countries by adding a new `<div class="clock-card">` in `index.html` and modifying `script.js` to include the respective time zone.
- Modify `style.css` for different color themes or animations.

## Live Demo
[**View Live Demo**](#) 


## Author
👤 **Your Name**  
GitHub: [@gunjangyl](https://github.com/gunjangyl)  


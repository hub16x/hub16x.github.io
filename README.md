# Hub 16x - Unblocked Games

<p align="center">
  <img src="assets/logo/logo.png" alt="Hub 16x Logo" width="200">
</p>

**Hub 16x** is a lightweight, static web platform designed to offer quick and free access to casual and classic web games without intrusive ads. The site is optimized for restricted network environments (such as schools or workplaces), focusing on performance, mobile responsiveness, and clean user experience.

The project is built entirely on the client side (no backend or database required), making it suitable for direct deployment on static hosting services like **GitHub Pages**.

---

## 🌟 Key Features

*   **Lightweight & Ad-Free:** Built using clean, native HTML, CSS, and JavaScript, avoiding heavy external scripts to ensure fast loading times.
*   **Integrated Game Viewer (IFrame Sandbox):** Runs games in a secured, sandboxed iframe with fullscreen capabilities.
*   **Open in `about:blank` (Cloaking):** Allows users to open games in an empty tab to bypass school tab-monitoring and restrictions.
*   **Favorites & Recent Games System:** Persists user data locally using `localStorage` to save favorite lists and play history.
*   **Real-Time Search & Pagination:** Instantly filters games through direct DOM manipulation and a responsive grid structure.
*   **Light/Dark Theme Toggle:** Supports visual preference settings that persist between sessions.
*   **Integrated Problem Reporting:** Allows users to submit game issues directly via an integration with the **Web3Forms** API.

---

## 🛠️ Tech Stack

*   **HTML5:** Semantic markup and layout structure.
*   **CSS3:** Custom properties (`:root`), masonry grid layout (`grid-template-columns`), custom animations, and a mobile-first responsive design.
*   **JavaScript (ES6):** DOM manipulation, pagination logic, search filtering, API integration, and local data persistence.
*   **Web3Forms (External Service):** Contact form and issue submission management without needing a custom backend server.

---

## 🚀 Local Installation & Deployment

Since this is a static website, it does not require complex build steps or installation.

### Prerequisites
*   A modern web browser.
*   A simple local server (recommended to avoid CORS issues when testing certain iframe resources locally). You can use VS Code's *Live Server* extension or Python:

```bash
# If you have Python installed
python -m http.server 8000
```

### Steps
1. Clone this repository or download the files:
   ```bash
   git clone https://github.com/hub16x/hub16x.github.io.git
   ```
2. Open the `index.html` file in your browser, or start your local server.
3. To deploy to production, simply enable **GitHub Pages** from the *Settings -> Pages* section of your GitHub repository.

---

## 🎮 How to Add New Games

To add a game to the catalog on the home page, append an `<a>` element inside the game grid container `<div class="card-masonry pagina-juegos" id="pagina-1">` (or corresponding page divs).

### Template Code:

```html
<!-- Game: GAME NAME -->
<a href="/?game=game-name-slug"
   onclick="abrirJuego('GAME_URL_HERE'); return false;" 
   class="card" 
   style="cursor: pointer; text-decoration: none;" 
   role="button" 
   tabindex="0">
    <img src="/images/game-name-slug.webp" alt="GAME NAME" class="img-fluid" loading="lazy" decoding="async">
    <div class="card-body">
        <span>GAME NAME</span>
    </div>
</a>
```

> **Note:** You can use the class `card large` instead of `card` if you want the game card to take up double the grid space in the masonry layout.

---

## 🔧 Configuring Issue Reports

The reporting form uses **Web3Forms** to send emails directly to your inbox when a user reports a broken game. To receive these emails yourself:

1. Register your email for free at [Web3Forms](https://web3forms.com/) to obtain an access key.
2. Open `index.html` and look for the `injectReportModal()` function.
3. Replace the `access_key` input value with your personal token:

```html
<input type="hidden" name="access_key" value="YOUR-NEW-TOKEN-HERE">
```

---

## 🤝 Credits

*   The basic layout structure and iframe integrations are inspired by and adapted from educational open-source templates and community resources.
*   Special thanks to [3kh0.github.io](https://3kh0.github.io) for curating and hosting reliable web game assets for open-source development.

---

## 📝 License

This project is shared for educational and personal development purposes. The games integrated within this platform belong to their respective developers and are embedded from their original sources or public mirrors.

# Hub 16x - Unblocked Games

<p align="center">
  <img src="assets/logo/logo.png" alt="Hub 16x Logo" width="200">
</p>

**Hub 16x** is a lightweight web platform designed to offer quick and free access to casual and classic web games without intrusive ads. The site is optimized for restricted network environments (such as schools or workplaces), focusing on performance, mobile responsiveness, and clean user experience.

The project is built primarily on the client side, utilizing **Serverless architectures (BaaS)** to eliminate the need for a dedicated backend server. This makes it suitable for direct deployment on static hosting services like **GitHub Pages**.

---

## 🌟 Key Features

*   **Lightweight & Ad-Free:** Built using clean, native HTML, CSS, and JavaScript, avoiding heavy external scripts to ensure fast loading times.
*   **Integrated Game Viewer (IFrame Sandbox):** Runs games in a secured, sandboxed iframe with fullscreen capabilities.
*   **Open in `about:blank` (Cloaking):** Allows users to open games in an empty tab to bypass school tab-monitoring and restrictions.
*   **Real-Time Comments & Ratings:** Users can leave reviews, rate games (1-5 stars), reply to threads, and like/dislike comments using an integrated Firebase Realtime Database.
*   **Favorites & Recent Games System:** Persists user data locally using `localStorage` to save favorite lists and play history.
*   **Real-Time Search & Pagination:** Instantly filters games through direct DOM manipulation and a responsive grid structure.
*   **Light/Dark Theme Toggle:** Supports visual preference settings that persist between sessions.
*   **Integrated Problem Reporting:** Allows users to submit game issues directly via an integration with the **Web3Forms** API.

---

## 🛠️ Tech Stack

*   **HTML5:** Semantic markup and layout structure.
*   **CSS3:** Custom properties (`:root`), masonry grid layout (`grid-template-columns`), custom animations, and a mobile-first responsive design.
*   **JavaScript (ES6):** DOM manipulation, pagination logic, search filtering, API integration, and local data persistence.
*   **Firebase Realtime Database:** Used as a BaaS (Backend as a Service) to securely store and fetch user comments and ratings in real-time.
*   **Web3Forms (External Service):** Contact form and issue submission management without needing a custom backend server.

---

## 🚀 Local Installation & Deployment

Since this is a static website powered by serverless APIs, it does not require complex build steps or installation.

### Prerequisites
*   A modern web browser.
*   A simple local server (recommended to avoid CORS issues when testing certain iframe resources locally). You can use VS Code's *Live Server* extension or Python:

```bash
# If you have Python installed
python -m http.server 8000

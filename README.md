---

<p align="center">
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="40" alt="wave" />
</p>

<h1 align="center">Human Verification System <img src="https://img.shields.io/badge/-Deep%20Dey's%20Project-%23FF5F1F?style=flat-square&logo=github&logoColor=white" alt="Project Badge" /></h1>

<p align="center">
  <b>Modular, Client-Side Human Verification | AI & JS Powered | GitHub Pages Ready</b><br>
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=800&color=3A0CA3&center=true&vCenter=true&width=500&lines=Text%2C+Math%2C+Slider%2C+Dot+Challenges;Session+Management+%2B+Redirects;Static+GitHub+Pages+Deployment" alt="Typing SVG">
</p>
<br>

---

## 📌 Table of Contents

* [Project Overview](#project-overview-🚀)
* [Features](#features-✨)
* [File Structure](#file-structure-📂)
* [Installation & Deployment](#installation--deployment-🛠️)
* [Usage](#usage-🚀)
* [dd.html Redirect Info](#ddhtml-redirect-info-🔗)
* [Workflow](#workflow-📈)
* [Technologies & Badges](#technologies--badges-💻)
* [Acknowledgements](#acknowledgements-🙏)
* [Contact & Socials](#contact--socials-🌐)

---

## Project Overview 🚀

A **modular, client-side human verification system** featuring multiple challenge modules (text, math, slider, moving dot), session management (6-hour token), and secure redirection. Fully static, professional, and deployable on GitHub Pages.

---

## Features ✨

* **Multiple Verification Modules:**

  * Text CAPTCHA, Arithmetic, Moving Dot, Slider
* **Session Management:**

  * LocalStorage-based token with 6-hour expiration
* **Secure Redirects:**

  * `dd.html` detects session validity, invalid access triggers 7-second fallback
* **Professional UI:**

  * Modern, responsive design, mobile + desktop compatible
* **Fully Static Deployment:**

  * Can run directly from GitHub Pages or any static host
* **Easy Extensibility:**

  * Add new modules or update redirect URL by modifying a single JS variable

---

## File Structure 📂

```
index.html          # Main entry page; challenge container
style.css           # Styling for pages & modules
utils.js            # Session/token management & helper functions
main.js             # Loads challenges, controls verification workflow
text.js             # Canvas-based text CAPTCHA
math.js             # Arithmetic challenge
dot.js              # Moving dot click challenge
slider.js           # Slider verification (desktop + mobile)
dd.html             # Redirect page; session detection & fallback
README.md           # This documentation
```

---

## Installation & Deployment 🛠️

1. Clone the repository:

```bash
git clone https://github.com/yourusername/human-verification-system.git
```

2. Navigate into the project folder:

```bash
cd human-verification-system
```

3. Open `index.html` in browser to test locally, or deploy on GitHub Pages.

---

## Usage 🚀

1. Open `index.html`.
2. Complete any challenge module.
3. Verified session is stored in localStorage (6 hours).
4. User is redirected to `dd.html`.

   * If session valid → direct redirect to target URL.
   * If invalid → 7-second countdown → back to verification page.

---

## dd.html Redirect Info 🔗

* **Redirect URL variable:**

```javascript
const REDIRECT_TARGET = "https://docs.google.com/forms/d/e/1FAIpQLSdqcVijtxP2qtiwFtuS-NFBL9_Pnbf6WwiydLnzh4nbxQWy1Q/viewform";
```

* **Location:** Top of the `<script>` section in `dd.html`, **before session check logic**.
* **Session Detection & Redirect:**

```javascript
if (localStorage.getItem("verifiedToken")) {
    // Session valid → direct redirect
    window.location.href = REDIRECT_TARGET;
} else {
    // Session invalid → show error + 7s countdown
    setTimeout(() => {
        window.location.href = "index.html"; // Back to verification
    }, 7000);
}
```

* **Purpose:** Prevents bots or direct access to `dd.html` without verification.

---

## Workflow 📈

```mermaid
flowchart LR
    A[User opens index.html] --> B{Challenge Module}
    B -->|Text CAPTCHA| C[Verify Success → Store Session]
    B -->|Math Challenge| C
    B -->|Moving Dot| C
    B -->|Slider| C
    C --> D[Redirect to dd.html]
    D -->|Session Valid| E[Redirect to Target Form]
    D -->|Session Invalid| F[7s Countdown → Back to index.html]
```

---

## Technologies & Badges 💻

**Frontend:**
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Canvas](https://img.shields.io/badge/Canvas-FF5733?style=for-the-badge\&logo=javascript\&logoColor=white)

**Tools & Utilities:**
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white)

---

## Acknowledgements 🙏

* Inspired by modern GitHub profile README designs
* Open-source libraries & JS canvas practices
* AI-powered project structure & modular design approach

---

## Contact & Socials 🌐

<p align="center">
  <a href="https://www.deepdeyiitk.com"><img src="https://img.shields.io/badge/Website-DeepDey-blue?style=for-the-badge" /></a>
  <a href="mailto:thedeeparise@gmail.com"><img src="https://img.shields.io/badge/Email-contact@deepdeyiitk.com-yellow?style=for-the-badge" /></a>
  <a href="https://www.instagram.com/deepdey.official/"><img src="https://img.shields.io/badge/Instagram-@deepdey.official-purple?style=for-the-badge" /></a>
  <a href="https://www.youtube.com/@deepdeyiit"><img src="https://img.shields.io/badge/YouTube-DeepDey-red?style=for-the-badge" /></a>
  <a href="https://x.com/deepdeyofficial"><img src="https://img.shields.io/badge/X-@deepdeyofficial-black?style=for-the-badge" /></a>
</p>

---

<p align="center">
  <em>Designed & Developed with ❤️ by <b>Deep Dey</b> — Professional, Modular, AI-assisted Frontend Verification System</em>
</p>

---

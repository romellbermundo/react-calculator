# 🧮 The Quiet Calculator

<div align="center">

**A Little Clarity Goes a Long Way.**

*A calm, thoughtful calculator for the little things that add up.*

[🌐 Open The Quiet Calculator](https://romellbermundo.github.io/react-calculator/) · [📦 Source Code](https://github.com/romellbermundo/react-calculator)

</div>

> **Deployment note:** The live link becomes available after GitHub Pages is enabled under **Settings → Pages → Build and deployment → Source: GitHub Actions** and the deployment workflow succeeds.

---

## 📑 Table of Contents

- [About The Quiet Calculator](#-about-the-quiet-calculator)
- [How It Works](#-how-it-works)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [Publishing on GitHub Pages](#-publishing-on-github-pages)
- [Project Structure](#-project-structure)
- [Technology](#-technology)
- [Design Philosophy](#-design-philosophy)
- [Privacy and Limitations](#-privacy-and-limitations)
- [Credits](#-credits)
- [Version History](#-version-history)

---

## 📖 About The Quiet Calculator

**The Quiet Calculator** is a lightweight, responsive React calculator for everyday arithmetic. It pairs a practical keypad with soft colors, welcoming language, and an interface that stays out of your way.

Originally developed as a React learning exercise, it has been thoughtfully rebuilt as a small portfolio application. The reducer and interface are now separated, the keypad is data-driven, and automated regression tests protect everyday arithmetic.

Visitors can use the published website in a browser without installing React, downloading the repository, creating an account, or signing in.

---

## 🔄 How It Works

```text
OPEN THE QUIET CALCULATOR
            │
            ▼
      ENTER A NUMBER
            │
            ▼
    CHOOSE AN OPERATION
      +   −   ×   ÷
            │
            ▼
      ENTER A NUMBER
            │
            ▼
       PRESS EQUALS
            │
            ▼
       VIEW THE RESULT
            │
      ┌─────┴──────┐
      ▼            ▼
    CONTINUE     CLEAR / DELETE
```

React's `useReducer` manages input and calculations. The pure logic lives in `src/calculator.js`, while `App.js` renders a data-driven keypad, handles keyboard shortcuts, and displays the result.

---

## ✨ Key Features

### ➕ Everyday Arithmetic

Add, subtract, multiply, and divide numbers using a straightforward four-column keypad.

### 🔢 Decimal Input

Enter decimal values, with duplicate decimal points prevented within a single number.

### 🧹 Clear and Delete

Use **AC** to reset the calculation or **DEL** to remove the most recent digit.

### 🔁 Chained Calculations

Continue with another operation without restarting from scratch.

### ⌨️ Keyboard Support

Use number keys, decimal point, `+`, `-`, `*`, `/`, Enter or `=`, Backspace, and Escape. The buttons also provide accessible labels and visible keyboard focus.

### 📱 Responsive Layout

A compact keypad adjusts to smaller screens, making the calculator practical on phones and desktop browsers.

### 🌿 Thoughtful Presentation

Soft greens, warm neutral colors, rounded keys, and clear typography create a welcoming everyday experience.

### 💬 Quiet, Expandable Footer

The **About** and **Disclaimer** controls reveal information in one shared, invisible, page-centered area. Supporting information stays hidden until requested.

---

## 🚀 Getting Started

### Option A — Use the live website

Visit **[The Quiet Calculator](https://romellbermundo.github.io/react-calculator/)** once GitHub Pages deployment has completed. No installation is needed.

### Option B — Run locally

Clone the repository:

```bash
git clone https://github.com/romellbermundo/react-calculator.git
cd react-calculator
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000).

To create the production website files:

```bash
npm run build
```

The optimized static website is generated in `build/`.

---

## 🌐 Publishing on GitHub Pages

The repository includes an automatic GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### One-time GitHub Pages setup

1. Open the repository's **Settings** tab.
2. Select **Pages** in the sidebar.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab to check the **Deploy React Calculator to GitHub Pages** workflow. If needed, select **Run workflow**.
5. Once deployment succeeds, open **https://romellbermundo.github.io/react-calculator/**.

After this setup, pushes to `main` automatically build and deploy the site. You can also trigger the workflow manually.

### Why the build works

Create React App reads the `homepage` setting in `package.json` to generate asset URLs under `/react-calculator/`. GitHub Actions installs dependencies with `npm ci`, builds the application, uploads `build/`, and publishes it through GitHub Pages.

**Important:** GitHub Pages hosts the compiled static website, not a development server. Visitors don't need Node.js or React installed.

---

## 🏗️ Project Structure

```text
react-calculator/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── calculator.js
│   ├── calculator.test.js
│   └── index.css
├── package.json
├── package-lock.json
└── README.md
```

The pure calculator module handles state transitions and arithmetic, `App.js` renders the interface, and the stylesheet defines the visual experience. The old tutorial components, starter test, React logo, and unused web-vitals boilerplate have been removed.

---

## 🛠️ Technology

| Layer | Technology |
|---|---|
| Interface | React 18, JavaScript, HTML, CSS |
| State management | React `useReducer` and a pure reducer module |
| Supporting UI state | React `useState` |
| Regression tests | Jest via react-scripts |
| Build tooling | Create React App / react-scripts |
| Hosting | GitHub Pages |
| Automated deployment | GitHub Actions |
| Version control | Git and GitHub |

---

## 🎨 Design Philosophy

**Meaningful, but not mechanical.**

The Quiet Calculator follows the Veritas approach to software design:

- **Simplicity first:** Keep the essential controls immediately available.
- **Human connection:** A small welcoming phrase can make everyday software feel personal.
- **Quiet elegance:** Use thoughtful spacing, restrained color, and readable typography.
- **Progressive disclosure:** Show supporting information only when requested.
- **Purposeful personality:** Give each application its own identity without unnecessary decoration.
- **Function before ornament:** Preserve the calculator's usefulness and predictable interactions.

*Simple on the surface. Thoughtful underneath. Beautiful by intention.*

---

## 🔒 Privacy and Limitations

- **No account required.** Calculations take place in the visitor's browser.
- **No personal calculation history or cloud synchronization.** Refreshing the page does not preserve a history of past calculations.
- **Floating-point limitations.** JavaScript arithmetic may show precision artifacts for some decimal calculations.
- **Not for critical calculations.** Independently verify figures used for financial, engineering, medical, or other high-stakes decisions.
- **Basic arithmetic only.** The application is not a scientific or graphing calculator.

---

## 🙏 Credits

**Original learning foundation:** [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified), whose React Calculator tutorial informed the original calculation logic and component structure.

**Portfolio adaptation and project development:** Romell Bermundo.

The subsequent visual refinement, responsive presentation, and documentation preserve the original tutorial credit while giving the project its own identity.

---

## 🏷️ Version History

### v1.1.0 — Architecture and reliability refactor

- Extracted calculation logic into a dedicated, testable reducer module.
- Rebuilt the keypad from a single declarative key configuration and added keyboard support.
- Fixed decimal handling, operand replacement, division-by-zero display, and common floating-point artifacts.
- Removed unused Create React App tutorial files and outdated starter tests.
- Added calculator regression tests and required them to pass before automatic deployment.
- Formatted the styles and simplified the React entry point while keeping the Quiet Calculator identity.

### v1.0.1 — GitHub Pages and portfolio documentation

- Configured the React production build for the GitHub Pages project URL.
- Added automatic deployment using GitHub Actions.
- Updated the browser title and metadata.
- Rebuilt the README using the Cooking Journal documentation pattern, including a table of contents, process diagram, setup and deployment instructions, technology, privacy, credits, and version history.

### v1.0.0 — The Quiet Calculator

- Introduced a warm, responsive visual identity and welcoming microcopy.
- Added an understated footer with a shared, invisible centered detail area.
- Preserved the original React reducer-based calculator functionality.

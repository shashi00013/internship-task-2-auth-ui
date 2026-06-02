# Authentication System UI (Frontend Only)

A premium, responsive **Login & Registration Portal UI** built for an internship assignment. This project showcases modern web design principles—specifically **glassmorphic design**, Harmonious dark-slate color combinations, glowing form inputs, micro-animations, and real-time JavaScript validation workflows.

---

## 🌟 Key Features

1. **Responsive & Sticky Navbar:**
   - Soft background blur effect (`backdrop-filter: blur(16px)`).
   - Sticky top placement on scroll.
   - Fluid hamburger toggle on mobile screens.
   - Dynamic page highlighting (active indicator toggles).

2. **Glassmorphic Hero Page:**
   - Ambient neon glowing orbs in the background.
   - Actionable CTAs to guide users to Login or Register panels.
   - Informative features list with interactive hover scaling.

3. **Portal Login Page:**
   - Sleek login card centered dynamically in the browser window.
   - Password eye-toggle button (swapping input types on click).
   - "Remember Me" checkbox and customized validation feedback.
   - Auto-fade success/error alerts using Bootstrap alert banners.

4. **Advanced Registration Form:**
   - Multi-field checklist validation (Full Name, Username, Email, Mobile, Password, Confirm Password).
   - **Debounced AJAX Username availability check:** Simulates server round-trip with a loading spinner and checks for duplicates against a mock database list (`admin`, `test`, `user123`, `shashi`).
   - **Real-Time Password Strength Meter:** Evaluates password complexity using regular expressions, displaying an color-shifting progress bar (Red/Orange/Yellow/Green) and checklist flags.
   - **Real-Time Match Validation:** Checks if the password matches the confirmation field inline and locks form submissions if they mismatch.
   - Interactive modal popup displaying custom Terms & Conditions.

5. **Aesthetic Footer:**
   - Includes an overview segment, detailed navigation page list, contact info, and custom circular social media icons with transition hover slides.

---

## 🛠️ Technology Stack

- **HTML5:** Semantic architecture structures.
- **CSS3:** Custom styles, custom scrollbar styling, floating labels, ambient radial blur orbs, and slide/shake keyframe animations.
- **Bootstrap 5 (Latest CDN):** Mobile-first utility grid system, cards, icons, modals, and dismissing alerts.
- **JavaScript (Vanilla JS):** Form element validation rules, event listeners, mock latency timers, debouncer mechanics, and dynamic component injection templates.

---

## 📂 Project Directory Structure

```text
auth-ui/
│
├── index.html          # Landing/Overview Portal Page
├── login.html          # Login Card Page
├── register.html       # User Registration Page with Validation UI
│
├── css/
│   └── style.css       # Core design tokens, gradients, and animations
│
├── js/
│   └── script.js       # Dynamic component rendering and validation systems
│
├── assets/
│   └── images/         # Asset directory (for logos/banners if added)
│
└── README.md           # Assignment walkthrough and documentation
```

---

## 🚀 How to Run Locally

Since this is a client-side frontend implementation, you do not need database setups or backend servers.

### Option A: Local Browser Launch
1. Open the project root folder `auth-ui/`.
2. Double-click [index.html](index.html) to open the landing page inside your preferred web browser.

### Option B: Local Development Server (Recommended)
Running through an HTTP server ensures assets, font requests, and internal anchors render correctly:
- **VS Code:** Install the **Live Server** extension, open the project folder, and click `Go Live` in the bottom-right status bar.
- **Python:** Run the following terminal command inside the `auth-ui/` directory:
  ```bash
  python -m http.server 8000
  ```
  Then, navigate to `http://localhost:8000` in your web browser.

---

## 📜 Git Commit Log (10-Step Timeline Plan)

If you are uploading this project to GitHub, follow this step-by-step execution plan to establish a clean, structured commit history:

1. **Commit 1: Project Setup**
   ```bash
   git init
   mkdir css js assets assets/images
   touch index.html css/style.css js/script.js README.md
   git add .
   git commit -m "Setup project folders and created initial placeholder files"
   ```

2. **Commit 2: Bootstrap Integration**
   - Link Bootstrap 5 and Bootstrap Icons CDNs in the HTML files.
   ```bash
   git add index.html
   git commit -m "Integrated Bootstrap 5 CSS, JS bundles and Bootstrap Icons CDNs"
   ```

3. **Commit 3: Navbar Component Added**
   - Write HTML container for the navbar placeholder and add the navbar builder template in JavaScript.
   ```bash
   git add js/script.js index.html css/style.css
   git commit -m "Added reusable responsive sticky navbar injected dynamically via JavaScript"
   ```

4. **Commit 4: Login Page UI Created**
   - Design the login HTML template card and floating layouts.
   ```bash
   git add login.html
   git commit -m "Created Login Page UI card with custom floating label inputs"
   ```

5. **Commit 5: Registration Page UI Created**
   - Structure the registration HTML cards and input grids.
   ```bash
   git add register.html
   git commit -m "Created Registration Page layout containing name, username, email, mobile, and password fields"
   ```

6. **Commit 6: Form Validation Added**
   - Wire input regex pattern checkers (Full Name length, Email validation format, Mobile 10-digit formats).
   ```bash
   git add js/script.js css/style.css
   git commit -m "Added form validation rules for Name, Email, and Mobile fields with visual feedback"
   ```

7. **Commit 7: Show/Hide Password Feature Added**
   - Implement event listeners on the eye icons to toggle types between `password` and `text`.
   ```bash
   git add js/script.js css/style.css login.html register.html
   git commit -m "Implemented show/hide toggle logic on password inputs using eye icons"
   ```

8. **Commit 8: Password Match Check Added**
   - Write confirmation checks matching the password field in real-time.
   ```bash
   git add js/script.js css/style.css register.html
   git commit -m "Implemented real-time password strength checklist and confirm-password matcher"
   ```

9. **Commit 9: AJAX Username Availability Check Added**
   - Implement debouncing and mock latency with loading spinners to look up accounts.
   ```bash
   git add js/script.js css/style.css register.html
   git commit -m "Added simulated AJAX username availability check with spinner and debounced timing"
   ```

10. **Commit 10: Footer, Responsiveness & Final Optimization**
    - Complete the responsive footer logic, cleanup unused variables, and write final documentation.
    ```bash
    git add .
    git commit -m "Added responsive footer component, applied fine-tuned CSS styles and finished documentation"
    ```

---

## 📹 3–5 Minute Demo Video Script

Use the script below to record an impressive walkthrough video of the project features.

### Segment 1: Introduction (0:00 - 0:30)
- **Visual:** Displaying the landing page (`index.html`) on screen. Cursor highlighting the header logo and hovering over navbar links.
- **Narrator Dialogue:**
  > *"Hello everyone! In this video, I am presenting my submission for the Authentication System UI project. The front-end layout is constructed using HTML5, CSS3, Bootstrap 5, and JavaScript. As you can see, the landing page features a modern dark-slate theme with glowing ambient orbs and glassmorphic cards. The header contains a sticky responsive navbar with clean hover states and active indicators."*

### Segment 2: Portal Navigation & Responsiveness (0:30 - 1:15)
- **Visual:** Resize the browser window to mobile view. Open the hamburger menu. Scroll down to show the footer links. Click on the "Terms & Conditions" link in the footer to show the pop-up modal.
- **Narrator Dialogue:**
  > *"The layout is fully responsive. When I scale the browser down to mobile widths, the navigation links collapse into a clean hamburger menu button. Scrolling down reveals the footer section which includes an About summary, social link buttons with micro-animations, and a Quick Links section. Clicking on the Terms and Conditions link opens up a sleek, blurred modal describing mock user regulations, which keeps the experience premium."*

### Segment 3: Login View Validation (1:15 - 2:00)
- **Visual:** Click on the "Login" navbar link to open `login.html`. Click the "Login" button without inputs to trigger error alerts. Type dummy user inputs and click the eye icon to show/hide the characters.
- **Narrator Dialogue:**
  > *"Let's head over to the Login page. If I try to submit the form empty, the login card shakes, and a Bootstrap alert drops down warning me that inputs are missing. Let's type in some credentials. Notice the password field: clicking the eye icon toggles the visibility of the password smoothly. When I click Login, it simulates a server network request, showing a loading indicator before displaying the welcome message and redirecting me back."*

### Segment 4: Registration Page & Real-Time Security checks (2:00 - 3:00)
- **Visual:** Click on the "Register" navbar link to open `register.html`. Type in the Full Name. Move to the Username field and type `admin` to show the duplicate error. Then type a new name to show the green success check.
- **Narrator Dialogue:**
  > *"Next, we have the Registration page. We have custom validation rules mapped here. Let's look at the Username field, which features a simulated AJAX check. If I type 'admin', which is a registered username in our mock database, a loading spinner appears, and then a red warning message displays: 'Username Already Taken'. If I change this to a new username, it immediately confirms availability with a green checkmark."*

### Segment 5: Password Strength & Match Checks (3:00 - 3:45)
- **Visual:** Type in a password (e.g. `123`). The checklist items under the input will show red crosses. Keep typing a strong password (e.g. `SecurePass@2026`). Watch the checklist items turn green and the progress bar fill up to a green 'Strong' status. In the Confirm Password field, type a mismatching string to show the red match warning, then type the matching password to see it turn green. Check the Terms box and click Register.
- **Narrator Dialogue:**
  > *"Our registration form is highly secure. As I start typing in the password field, you can see a real-time checklist indicating requirements like uppercase, numbers, and symbols. The strength progress bar changes colors from red to warning yellow, and finally to green as the password meets the criteria. When confirming the password, JavaScript verifies the match in real-time, displaying alert text. Finally, checking the Terms & Conditions and submitting the form triggers a loading sequence and a successful creation alert before routing us back to the portal."*

### Segment 6: Wrap Up (3:45 - End)
- **Visual:** Switch back to the landing page.
- **Narrator Dialogue:**
  > *"This concludes the demonstration of this frontend Authentication System. The code is modular, reusable, and carefully organized for production readiness. Thank you so much for watching!"*

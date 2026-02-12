# Urban Harvest 🌿

Urban Harvest is a web application promoting sustainable living through eco-friendly products, urban farming solutions, and community education.

## Features ✨

-   **Responsive Design**: Optimized for all devices (mobile, tablet, desktop).
-   **Dark Mode**: Persistent dark mode support, respecting user preference.
-   **Product Catalog**: Showcase of eco-friendly products.
-   **Blog/Community**: Articles and tips on sustainable living.
-   **Subscription Form**: Functional signup form with validation.

## Tech Stack 🛠️

-   **HTML5 & CSS3**
-   **JavaScript (ES6+)**
-   **Tailwind CSS** (for styling)
-   **Vite** (Build tool)

## Local Setup 🚀

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/vithusha24/Urban_harvests-.git
    cd Urban_harvests-
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

## Deployment 🌐

Since this project uses Vite, you must build the project before deploying to GitHub Pages or any static host.

### Building for Production

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  This will create a `dist` folder containing the optimized production files.

### Deploying to GitHub Pages

1.  **Push your changes**:
    ```bash
    git add .
    git commit -m "Update site design and functionality"
    git push origin main
    ```

2.  **Set up GitHub Pages**:
    -   Go to your GitHub repository Settings.
    -   Navigate to "Pages".
    -   Under "Build and deployment", select **GitHub Actions** (recommended for Vite) OR deploy the `dist` folder using `gh-pages` package.

    **Option A: Using `gh-pages` (Easiest)**
    1.  Install `gh-pages`: `npm install gh-pages --save-dev`
    2.  Add script to `package.json`: `"deploy": "gh-pages -d dist"`
    3.  Run: `npm run build && npm run deploy`

    **Option B: Manual Upload**
    1.  Run `npm run build`.
    2.  Use a tool like Netlify Drop or Vercel to upload the `dist` folder directly.

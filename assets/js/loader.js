//assets/js/loader.js
// Yeh script components load karegi
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

// Page load hone par header aur footer inject karo
document.addEventListener("DOMContentLoaded", () => {
    // Determine path based on current directory (useful for /sims/ pages)
    const isSimPage = window.location.pathname.includes('/sims/');
    const basePath = isSimPage ? '../' : './';

    Promise.all([
        loadComponent('header-placeholder', `${basePath}components/header.html`),
        loadComponent('footer-placeholder', `${basePath}components/footer.html`)
    ]).then(() => {
        // Load canvas logic ONLY after header (which contains the canvas elements) is loaded
        const script = document.createElement('script');
        script.src = `${basePath}assets/js/canvas.js`;
        document.body.appendChild(script);
    });
});

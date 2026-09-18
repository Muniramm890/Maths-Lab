// Canvas aur Context setup
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Math Symbols jo float karenge
const symbols = ['π', '∫', '∑', '∞', '√', 'θ', 'Δ', 'Ω'];
const particles = [];

// Particle Class
class MathParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.size = Math.random() * 20 + 10; // Font size 10 to 30
        this.speedY = Math.random() * 1 + 0.2; // Fall speed
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.y -= this.speedY; // Move upwards
        if (this.y < -50) {
            this.y = canvas.height + 50;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(74, 144, 226, ${this.opacity})`; // Primary color with opacity
        ctx.font = `${this.size}px Arial`;
        ctx.fillText(this.symbol, this.x, this.y);
    }
}

// Init particles
for (let i = 0; i < 50; i++) {
    particles.push(new MathParticle());
}

// Animation Loop
function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    requestAnimationFrame(animateCanvas);
}

// Start animation
animateCanvas();

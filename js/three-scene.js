// Three.js Scene Setup and Management
class ThreeScene {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.geometricShapes = [];
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        this.mouseVelocity = { x: 0, y: 0 };
        this.prevMouse = { x: 0, y: 0 };
        this.scrollVelocity = 0;
        this.prevScroll = 0;
        this.clock = new THREE.Clock();

        this.init();
        this.createGeometricShapes();
        this.setupEventListeners();
        this.animate();
    }

    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x000000, 1, 1000);

        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 50;

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('three-canvas'),
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x2d3748, 0.3);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x4a5568, 0.4);
        directionalLight.position.set(50, 50, 50);
        this.scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0x2b6cb0, 0.3, 100);
        pointLight.position.set(-50, -50, 50);
        this.scene.add(pointLight);
    }





    createGeometricShapes() {
        // Floating wireframe shapes
        const shapes = [
            { geometry: new THREE.IcosahedronGeometry(8, 0), position: [30, 20, -30] },
            { geometry: new THREE.OctahedronGeometry(6), position: [-40, -15, -20] },
            { geometry: new THREE.TetrahedronGeometry(10), position: [25, -25, -40] },
            { geometry: new THREE.DodecahedronGeometry(7), position: [-30, 30, -25] }
        ];

        shapes.forEach((shapeData, index) => {
            const material = new THREE.MeshBasicMaterial({
                color: [0x64b5f6, 0x81c784, 0xffb74d, 0xf06292][index],
                wireframe: true,
                transparent: true,
                opacity: 0.8
            });

            const mesh = new THREE.Mesh(shapeData.geometry, material);
            mesh.position.set(...shapeData.position);
            mesh.userData = {
                originalPosition: [...shapeData.position],
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.02,
                    y: (Math.random() - 0.5) * 0.02,
                    z: (Math.random() - 0.5) * 0.02
                }
            };

            this.geometricShapes.push(mesh);
            this.scene.add(mesh);
        });
    }

    setupEventListeners() {
        // Mouse movement with velocity tracking
        document.addEventListener('mousemove', (event) => {
            const newMouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const newMouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            // Calculate mouse velocity
            this.mouseVelocity.x = newMouseX - this.prevMouse.x;
            this.mouseVelocity.y = newMouseY - this.prevMouse.y;

            this.targetMouse.x = newMouseX;
            this.targetMouse.y = newMouseY;

            this.prevMouse.x = newMouseX;
            this.prevMouse.y = newMouseY;
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Scroll handling with velocity tracking
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            this.scrollVelocity = (currentScroll - this.prevScroll) * 0.01;
            this.prevScroll = currentScroll;

            const scrollPercent = currentScroll / (document.body.scrollHeight - window.innerHeight);
            this.camera.position.z = 50 + scrollPercent * 30;
            this.camera.rotation.x = scrollPercent * 0.3;
        });

        // Damping for mouse velocity
        setInterval(() => {
            this.mouseVelocity.x *= 0.9;
            this.mouseVelocity.y *= 0.9;
            this.scrollVelocity *= 0.9;
        }, 16);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const elapsedTime = this.clock.getElapsedTime();

        // Smooth mouse following
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;





        // Animate geometric shapes
        this.geometricShapes.forEach((shape, index) => {
            // Rotation
            shape.rotation.x += shape.userData.rotationSpeed.x;
            shape.rotation.y += shape.userData.rotationSpeed.y;
            shape.rotation.z += shape.userData.rotationSpeed.z;

            // Floating motion
            const originalPos = shape.userData.originalPosition;
            shape.position.x = originalPos[0] + Math.sin(elapsedTime * 0.5 + index) * 5;
            shape.position.y = originalPos[1] + Math.cos(elapsedTime * 0.3 + index) * 3;
            shape.position.z = originalPos[2] + Math.sin(elapsedTime * 0.4 + index) * 4;

            // Mouse interaction
            shape.position.x += this.mouse.x * 10;
            shape.position.y += this.mouse.y * 10;
        });

        // Camera subtle movement
        this.camera.position.x = this.mouse.x * 5;
        this.camera.position.y = this.mouse.y * 5;
        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
    }

    // Method to add custom objects to the scene
    addObject(object) {
        this.scene.add(object);
    }

    // Method to remove objects from the scene
    removeObject(object) {
        this.scene.remove(object);
    }

    // Method to update camera position for section transitions
    moveCamera(position, target, duration = 2000) {
        // This will be used for smooth transitions between sections
        const startPosition = this.camera.position.clone();
        const startTime = Date.now();

        const animateCamera = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            this.camera.position.lerpVectors(startPosition, position, easeInOutCubic);

            if (target) {
                this.camera.lookAt(target);
            }

            if (progress < 1) {
                requestAnimationFrame(animateCamera);
            }
        };

        animateCamera();
    }
}

// Initialize the scene when the script loads
let threeScene;

// Function to check if THREE.js is loaded
function initThreeScene() {
    if (typeof THREE !== 'undefined') {
        console.log('THREE.js loaded successfully');
        try {
            threeScene = new ThreeScene();
        } catch (error) {
            console.error('Error initializing Three.js scene:', error);
        }
    } else {
        console.log('THREE.js not loaded yet, retrying...');
        // Retry for up to 5 seconds
        if (!initThreeScene.attempts) initThreeScene.attempts = 0;
        initThreeScene.attempts++;

        if (initThreeScene.attempts < 50) {
            setTimeout(initThreeScene, 100);
        } else {
            console.error('Failed to load THREE.js after 5 seconds');
        }
    }
}

// Wait for DOM and then check for THREE.js
document.addEventListener('DOMContentLoaded', () => {
    initThreeScene();
});

// Three.js Scene Setup and Management
class ThreeScene {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.geometricShapes = [];
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        this.clock = new THREE.Clock();
        
        this.init();
        this.createParticleSystem();
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
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x00ffff, 0.8);
        directionalLight.position.set(50, 50, 50);
        this.scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xff00ff, 0.6, 100);
        pointLight.position.set(-50, -50, 50);
        this.scene.add(pointLight);
    }

    createParticleSystem() {
        const particleCount = 2000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const colorPalette = [
            new THREE.Color(0x00ffff),
            new THREE.Color(0xff00ff),
            new THREE.Color(0xffff00),
            new THREE.Color(0x00ff00),
            new THREE.Color(0xff0080)
        ];

        for (let i = 0; i < particleCount; i++) {
            // Positions
            positions[i * 3] = (Math.random() - 0.5) * 200;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

            // Colors
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            // Sizes
            sizes[i] = Math.random() * 3 + 1;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 }
            },
            vertexShader: `
                attribute float size;
                attribute vec3 color;
                varying vec3 vColor;
                uniform float time;
                
                void main() {
                    vColor = color;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    
                    // Add some movement
                    mvPosition.x += sin(time * 0.5 + position.y * 0.01) * 2.0;
                    mvPosition.y += cos(time * 0.3 + position.x * 0.01) * 2.0;
                    
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                
                void main() {
                    float distance = length(gl_PointCoord - vec2(0.5));
                    if (distance > 0.5) discard;
                    
                    float alpha = 1.0 - distance * 2.0;
                    gl_FragColor = vec4(vColor, alpha * 0.8);
                }
            `,
            transparent: true,
            vertexColors: true,
            blending: THREE.AdditiveBlending
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
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
                color: [0x00ffff, 0xff00ff, 0xffff00, 0x00ff00][index],
                wireframe: true,
                transparent: true,
                opacity: 0.6
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
        // Mouse movement
        document.addEventListener('mousemove', (event) => {
            this.targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Scroll handling for camera movement
        window.addEventListener('scroll', () => {
            const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
            this.camera.position.z = 50 + scrollPercent * 30;
            this.camera.rotation.x = scrollPercent * 0.3;
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const elapsedTime = this.clock.getElapsedTime();

        // Smooth mouse following
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

        // Update particle system
        if (this.particles && this.particles.material.uniforms) {
            this.particles.material.uniforms.time.value = elapsedTime;
            this.particles.rotation.y = elapsedTime * 0.1;
            
            // Mouse interaction with particles
            this.particles.rotation.x = this.mouse.y * 0.2;
            this.particles.rotation.z = this.mouse.x * 0.1;
        }

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
document.addEventListener('DOMContentLoaded', () => {
    threeScene = new ThreeScene();
});

import * as THREE from 'three';
import './style.css';

// Scene
const scene = new THREE.Scene();

//Create our Speheer
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
	color: '#00ff83',
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

// Lights
const light = new THREE.PointLight(0xffffff, 70, 100, 1.7);
light.position.set(0, 10, 10);
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(
	45,
	sizes.width / sizes.height,
	0.1,
	100
);
camera.position.z = 20;
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// resize
window.addEventListener('resize', () => {
	//update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

  //update camera
  camera.updateProjectionMatrix()
	camera.aspect = sizes.width / sizes.height;
  renderer.setSize(sizes.width, sizes.height);
  
});
const loop = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop)
}
loop()
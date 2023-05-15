//Roterande grön kub
import { useEffect } from "react";
import * as THREE from "three";

export default function App() {
  useEffect(() => {
    // Skapa en scen
    const scene = new THREE.Scene();

    // Skapa en kamera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Skapa en renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Skapa en kubik geometri
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Skapa ett material för kuben
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });

    // Skapa ett Mesh-objekt med geometri och material
    const cube = new THREE.Mesh(geometry, material);

    // Lägg till Mesh-objektet till scenen
    scene.add(cube);

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return null;
}

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Model from "../assets/models/spiderman.glb";

const SpiderMan = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, spiderMan;

    // Set up the scene
    scene = new THREE.Scene();
    scene.background = null;

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Add Spider-Man model to the scene
    const loader = new GLTFLoader(); // Use GLTFLoader
    loader.load(
      Model,
      (gltf) => {
        spiderMan = gltf.scene;
        spiderMan.scale.set(0.025, 0.025, 0.025); // Set scale to make the model smaller
        scene.add(spiderMan);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    // Position camera
    camera.position.z = 5;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 3, 0);
    scene.add(pointLight);

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div className="absolute animate-bounce w-full h-[150px] right-[35rem] top-48 z-50" ref={sceneRef} />;
};

export default SpiderMan;

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030308, 0.035);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x051525, 1.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 4, 20);
    cyanLight.position.set(4, 3, 4);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x9d4edd, 4, 20);
    purpleLight.position.set(-4, -3, 3);
    scene.add(purpleLight);

    const mouseLight = new THREE.PointLight(0x00f0ff, 2, 12);
    scene.add(mouseLight);

    // 5. Central 3D Cybernetic Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Outer Geodesic Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(2.2, 2);
    const wireframeGeo = new THREE.WireframeGeometry(outerGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeo, wireframeMat);
    coreGroup.add(wireframeMesh);

    // Faceted Crystal Interior
    const innerGeo = new THREE.IcosahedronGeometry(1.7, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x091428,
      emissive: 0x002b4d,
      roughness: 0.15,
      metalness: 0.9,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      transparent: true,
      opacity: 0.85
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Pulsing Nucleus Sphere
    const nucleusGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    coreGroup.add(nucleusMesh);

    // 6. Cybernetic Gyroscope Orbital Rings
    const createRing = (radius, tube, color, rotX, rotY) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(3.2, 0.018, 0x00f0ff, Math.PI / 3, 0);
    const ring2 = createRing(3.5, 0.015, 0x8a2be2, 0, Math.PI / 4);
    const ring3 = createRing(3.8, 0.012, 0x00ffff, Math.PI / 2, Math.PI / 6);
    coreGroup.add(ring1);
    coreGroup.add(ring2);
    coreGroup.add(ring3);

    // 7. Volumetric Particle Starfield
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x00f0ff);
    const c2 = new THREE.Color(0x8a2be2);
    const c3 = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 3 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.6 ? c1 : Math.random() > 0.3 ? c2 : c3;
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 8. Mouse Tracking & Smooth Parallax Physics
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x;
      targetMouseY = y;
    };

    window.addEventListener('mousemove', onMouseMove);

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 10. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate 3D Core with dynamic motion
      coreGroup.rotation.y = elapsedTime * 0.2 + mouseX * 0.5;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 - mouseY * 0.5;

      // Counter-rotate orbital rings
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.x = -elapsedTime * 0.25;
      ring3.rotation.y = elapsedTime * 0.3;

      // Inner crystal breathing pulsation
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.05;
      innerMesh.scale.set(scale, scale, scale);

      // Nucleus rotation and glow oscillation
      nucleusMesh.rotation.y = -elapsedTime * 0.8;
      nucleusMesh.rotation.z = elapsedTime * 0.5;
      const nucleusPulse = 1 + Math.cos(elapsedTime * 2.5) * 0.15;
      nucleusMesh.scale.set(nucleusPulse, nucleusPulse, nucleusPulse);

      // Rotate particle field slowly
      particles.rotation.y = -elapsedTime * 0.04;
      particles.rotation.x = elapsedTime * 0.02;

      // Mouse light position tracking
      mouseLight.position.set(mouseX * 5, mouseY * 5, 4);

      // Camera parallax
      camera.position.x = mouseX * 0.8;
      camera.position.y = mouseY * 0.6;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      outerGeo.dispose();
      innerGeo.dispose();
      nucleusGeo.dispose();
      particleGeo.dispose();
      wireframeGeo.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[520px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* 3D WebGL Canvas Mounting Point */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Atmospheric Vignette & Radial Light Backdrop */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#030308] via-transparent to-[#030308]/60" />
      <div className="absolute inset-0 pointer-events-none bg-radial from-cyan-500/10 via-transparent to-transparent opacity-60" />
    </div>
  );
}

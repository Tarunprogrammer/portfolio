import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SkillsConstellation() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group
    const constellationGroup = new THREE.Group();
    scene.add(constellationGroup);

    // Node coordinates & glowing spheres
    const nodes = [
      { name: 'WebGL', pos: [1.8, 1.2, 0.5], color: 0x00f0ff },
      { name: 'Three.js', pos: [-1.6, 1.4, -0.4], color: 0x00f0ff },
      { name: 'React 19', pos: [0, 2.0, 0.2], color: 0x61dafb },
      { name: 'GLSL', pos: [2.2, -0.6, -0.5], color: 0xa855f7 },
      { name: 'TypeScript', pos: [-2.0, -0.8, 0.6], color: 0x3178c6 },
      { name: 'Node.js', pos: [1.2, -1.8, 0.4], color: 0x22c55e },
      { name: 'Python', pos: [-1.2, -1.9, -0.3], color: 0xeab308 },
      { name: 'Tailwind', pos: [0, -0.2, 1.8], color: 0x38bdf8 },
      { name: 'Unreal 5', pos: [-0.8, 0.3, -1.8], color: 0xffffff },
      { name: 'Shaders', pos: [0.9, 0.8, -1.5], color: 0xec4899 }
    ];

    const sphereGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeMeshes = [];

    nodes.forEach(node => {
      const mat = new THREE.MeshBasicMaterial({
        color: node.color,
        wireframe: false
      });
      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.position.set(node.pos[0], node.pos[1], node.pos[2]);

      // Glowing outer ring for each node
      const ringGeo = new THREE.RingGeometry(0.16, 0.19, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: node.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      mesh.add(ring);

      constellationGroup.add(mesh);
      nodeMeshes.push({ mesh, initialPos: [...node.pos] });
    });

    // Neural filament connections between nodes
    const linePositions = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = Math.hypot(
          nodes[i].pos[0] - nodes[j].pos[0],
          nodes[i].pos[1] - nodes[j].pos[1],
          nodes[i].pos[2] - nodes[j].pos[2]
        );
        if (d < 3.0) {
          linePositions.push(...nodes[i].pos, ...nodes[j].pos);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    constellationGroup.add(lines);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', onMouseMove);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      constellationGroup.rotation.y = t * 0.15 + mouseX * 0.4;
      constellationGroup.rotation.x = Math.sin(t * 0.1) * 0.2 - mouseY * 0.3;

      // Gentle pulsating node float
      nodeMeshes.forEach((item, idx) => {
        const offset = Math.sin(t * 1.5 + idx) * 0.08;
        item.mesh.position.y = item.initialPos[1] + offset;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      sphereGeo.dispose();
      lineGeo.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] md:h-[440px] flex items-center justify-center overflow-hidden rounded-2xl glass-panel border border-cyan-500/20">
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs font-mono-tech text-cyan-400 bg-cyan-950/60 px-3 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        LIVE 3D NEURAL NODES • INTERACTIVE
      </div>
      <div className="absolute bottom-3 right-4 z-10 text-[11px] font-mono-tech text-gray-500">
        DRAG / HOVER TO ROTATE MATRIX
      </div>
    </div>
  );
}

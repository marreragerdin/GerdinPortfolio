import { shaderMaterial } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

// Same GLSL shader from React Bits PixelTrail
const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 36,
    pixelColor: new THREE.Color('#000000')
  },
  /* vertex */ `void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,
  /* fragment */ `
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;
      float trail = texture2D(mouseTrail, gridUvCenter).r;
      gl_FragColor = vec4(pixelColor, trail);
    }
  `
);

function Scene({ gridSize, maxAge, pixelColor }) {
  const { size, viewport } = useThree();
  const dotMaterial = useMemo(() => new DotMaterial(), []);

  // Offscreen 2D canvas used as the trail texture
  const trailCanvas = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 512;
    return c;
  }, []);

  const trailTexture = useMemo(() => {
    const tex = new THREE.CanvasTexture(trailCanvas);
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }, [trailCanvas]);

  const mouseRef = useRef({ x: -1, y: -1 });
  const trail = useRef([]);

  useEffect(() => {
    dotMaterial.uniforms.pixelColor.value.set(pixelColor);
  }, [dotMaterial, pixelColor]);

  useEffect(() => {
    return () => { dotMaterial.dispose(); trailTexture.dispose(); };
  }, [dotMaterial, trailTexture]);

  // Track mouse globally — works even with pointer-events:none on the canvas
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: 1 - e.clientY / window.innerHeight // flip Y for WebGL coords
      };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    const ctx = trailCanvas.getContext('2d');
    const w = trailCanvas.width;
    const h = trailCanvas.height;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    if (mx >= 0 && mx <= 1 && my >= 0 && my <= 1) {
      const gx = Math.floor(mx * gridSize);
      const gy = Math.floor(my * gridSize);
      const key = `${gx},${gy}`;
      const existing = trail.current.find(p => p.key === key);
      if (existing) {
        existing.birth = Date.now();
      } else {
        trail.current.push({ key, gx, gy, birth: Date.now() });
      }
    }

    const now = Date.now();
    trail.current = trail.current.filter(p => now - p.birth < maxAge);

    ctx.clearRect(0, 0, w, h);
    const cellSize = w / gridSize;
    trail.current.forEach(p => {
      const alpha = 1 - (now - p.birth) / maxAge;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#ffffff';
      // Flip Y to match WebGL's bottom-up coordinate system
      ctx.fillRect(
        p.gx * cellSize,
        (gridSize - 1 - p.gy) * cellSize,
        cellSize - 1,
        cellSize - 1
      );
    });
    ctx.globalAlpha = 1;
    trailTexture.needsUpdate = true;

    // Update shader uniforms every frame
    dotMaterial.uniforms.mouseTrail.value = trailTexture;
    dotMaterial.uniforms.gridSize.value = gridSize;
    dotMaterial.uniforms.resolution.value.set(
      size.width * viewport.dpr,
      size.height * viewport.dpr
    );
  });

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]}>
      <planeGeometry args={[2, 2]} />
      <primitive object={dotMaterial} />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 36,
  trailSize = 0.08,
  maxAge = 500,
  color = '#000000',
  className = ''
}) {
  return (
    <Canvas
      gl={{
        antialias: false,
        powerPreference: 'high-performance',
        alpha: true
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999
      }}
      className={className}
    >
      <Scene gridSize={gridSize} maxAge={maxAge} pixelColor={color} />
    </Canvas>
  );
}

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
}

const Particles = ({ count = 200 }: ParticlesProps) => {
  const mesh = useRef<THREE.Points>(null);
  const linesMesh = useRef<THREE.LineSegments>(null);

  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    
    return [positions, velocities];
  }, [count]);

  const linePositions = useMemo(() => {
    return new Float32Array(count * count * 6);
  }, [count]);

  const lineColors = useMemo(() => {
    return new Float32Array(count * count * 6);
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    
    const positionArray = mesh.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      positionArray[i * 3] += velocities[i * 3];
      positionArray[i * 3 + 1] += velocities[i * 3 + 1];
      positionArray[i * 3 + 2] += velocities[i * 3 + 2];
      
      // Boundary check
      if (Math.abs(positionArray[i * 3]) > 10) velocities[i * 3] *= -1;
      if (Math.abs(positionArray[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1;
      if (Math.abs(positionArray[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y += 0.0005;

    // Update connection lines
    if (linesMesh.current) {
      const linePos = linesMesh.current.geometry.attributes.position.array as Float32Array;
      const lineCol = linesMesh.current.geometry.attributes.color.array as Float32Array;
      let lineIndex = 0;
      
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = positionArray[i * 3] - positionArray[j * 3];
          const dy = positionArray[i * 3 + 1] - positionArray[j * 3 + 1];
          const dz = positionArray[i * 3 + 2] - positionArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (dist < 2 && lineIndex < linePositions.length - 6) {
            linePos[lineIndex] = positionArray[i * 3];
            linePos[lineIndex + 1] = positionArray[i * 3 + 1];
            linePos[lineIndex + 2] = positionArray[i * 3 + 2];
            linePos[lineIndex + 3] = positionArray[j * 3];
            linePos[lineIndex + 4] = positionArray[j * 3 + 1];
            linePos[lineIndex + 5] = positionArray[j * 3 + 2];
            
            const alpha = 1 - dist / 2;
            lineCol[lineIndex] = 0;
            lineCol[lineIndex + 1] = 0.96 * alpha;
            lineCol[lineIndex + 2] = 1 * alpha;
            lineCol[lineIndex + 3] = 0;
            lineCol[lineIndex + 4] = 0.96 * alpha;
            lineCol[lineIndex + 5] = 1 * alpha;
            
            lineIndex += 6;
          }
        }
      }
      
      // Clear remaining lines
      for (let i = lineIndex; i < linePositions.length; i++) {
        linePos[i] = 0;
      }
      
      linesMesh.current.geometry.attributes.position.needsUpdate = true;
      linesMesh.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  const positionAttribute = useMemo(() => {
    return new THREE.BufferAttribute(positions, 3);
  }, [positions]);

  const linePositionAttribute = useMemo(() => {
    return new THREE.BufferAttribute(linePositions, 3);
  }, [linePositions]);

  const lineColorAttribute = useMemo(() => {
    return new THREE.BufferAttribute(lineColors, 3);
  }, [lineColors]);

  return (
    <>
      <points ref={mesh}>
        <bufferGeometry>
          <primitive object={positionAttribute} attach="attributes-position" />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00f5ff"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      
      <lineSegments ref={linesMesh}>
        <bufferGeometry>
          <primitive object={linePositionAttribute} attach="attributes-position" />
          <primitive object={lineColorAttribute} attach="attributes-color" />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  );
};

const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating octahedron */}
      <mesh position={[-5, 2, -5]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.5} />
      </mesh>
      
      {/* Floating icosahedron */}
      <mesh position={[5, -2, -3]}>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.5} />
      </mesh>
      
      {/* Floating torus */}
      <mesh position={[3, 3, -6]}>
        <torusGeometry args={[0.6, 0.2, 8, 20]} />
        <meshBasicMaterial color="#b829dd" wireframe transparent opacity={0.4} />
      </mesh>
      
      {/* Floating cube */}
      <mesh position={[-4, -3, -4]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={150} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;

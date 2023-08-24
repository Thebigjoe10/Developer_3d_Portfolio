import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { Helmet } from 'react-helmet';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
   <Helmet>
        <title>Joseph Codes - 3D Developer Portfolio</title>
        <meta name="description" content="I'm Joseph Ejiro, a 3D developer passionate about creating immersive experiences." />
        
        {/* Open Graph (OG) meta tags for social media sharing */}
        <meta property="og:title" content="Joseph Ejiro - 3D Developer Portfolio" />
        <meta property="og:description" content="Explore my 3D development projects and creations." />
        <meta property="og:image" content="https://i.ibb.co/9ykhLtM/Thumbnail.png" />
        <meta property="og:url" content="https://joecodes.netlify.app/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joseph Ejiro - 3D Developer Portfolio" />
        <meta name="twitter:description" content="Explore my 3D development projects and creations." />
        <meta name="twitter:image" content="https://i.ibb.co/9ykhLtM/Thumbnail.png" />
        
        {/* Other meta tags */}
        <meta name="keywords" content="3D development, portfolio, projects, WebGL, virtual reality" />
        <meta name="author" content="Joseph Ejiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

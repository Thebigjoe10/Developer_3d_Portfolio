import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Helmet } from 'react-helmet';

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 3]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        /> <Helmet>
        <meta name="description" content="I'm Joseph Ejiro, a 3D developer passionate about creating immersive experiences." />
        
        <meta property="og:title" content="Joseph Ejiro - 3D Developer Portfolio" />
        <meta property="og:description" content="Explore my 3D development projects and creations." />
        <meta property="og:image" content="https://awesomescreenshot.s3.amazonaws.com/image/4683026/42484598-0b225ba26bd06667c1fefa32487567f0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20230825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230825T214457Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=417cd20171142fc1fcc919c7718f4d9950e2c988851b6d0f9c23493b7032e3e4" />
        <meta property="og:url" content="https://joecodes.netlify.app/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joseph Ejiro - 3D Developer Portfolio" />
        <meta name="twitter:description" content="Explore my 3D development projects and creations." />
        <meta name="twitter:image" content="https://awesomescreenshot.s3.amazonaws.com/image/4683026/42484598-0b225ba26bd06667c1fefa32487567f0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20230825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230825T214457Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=417cd20171142fc1fcc919c7718f4d9950e2c988851b6d0f9c23493b7032e3e4" />
        
        <meta name="keywords" content="3D development, portfolio, projects, WebGL, virtual reality" />
        <meta name="author" content="Joseph Ejiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

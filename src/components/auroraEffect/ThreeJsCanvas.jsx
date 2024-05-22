import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const ThreeJsCanvas = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas>
                <Stars radius={50} count={2500} factor={4} fade speed={2} />
            </Canvas>
        </div>
    )
}

export default ThreeJsCanvas
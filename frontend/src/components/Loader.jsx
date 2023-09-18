import { Html, useProgress } from '@react-three/drei'
import React from 'react'

function Loader() {
    const { progress } = useProgress()
    return (
        <Html>
            <span className='canvas-load'></span>
            <p style={{
                fontSize: 14,
                color: "white",
                fontWeight: 500,
                marginTop: 20
            }}>{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default Loader
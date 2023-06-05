import React from 'react';

import './model.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Model = () => {
    return (
        <div className='model'>
            <img src='./logo.svg' alt='logo' />
            <h1>Find 3D Objects, Mockups and Illustrations here.</h1>
        </div>
    );
};

export default Model;

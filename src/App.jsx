import Model from './components/Model';
import Form from './components/Form';

import './app.scss';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import HouseCanvas from './components/canvas/House';
import Loading from './components/Loading';
import { useEffect, useState } from 'react';

const App = () => {
    const [isPageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPageLoaded(true);
        }, 2000);
    }, []);

    return (
        <div className='signup'>
            {!isPageLoaded ? (
                <Loading />
            ) : (
                <div className='signup__wrapper'>
                    <div className='signup__left'>
                        <Model />
                        <div className='model__3d'>
                            <HouseCanvas />
                        </div>
                    </div>
                    <div className='signup__right'>
                        <Form />
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;

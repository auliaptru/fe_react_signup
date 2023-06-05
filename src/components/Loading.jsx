import React from 'react';

import './loading.scss';

const Loading = () => {
    return (
        <div className='loading'>
            <div className='loading__box-wrap'>
                <div className='box one'></div>
                <div className='box two'></div>
                <div className='box three'></div>
                <div className='box four'></div>
                <div className='box five'></div>
                <div className='box six'></div>
            </div>
        </div>
    );
};

export default Loading;

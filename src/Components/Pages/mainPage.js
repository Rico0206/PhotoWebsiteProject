import React from 'react';
import Header from '../Header/header';
import Slider from '../PictureSlider/pictureSlider';


const MainPage = () => {

    const mainDivStyles = {
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        overflow: 'hidden'
    }

    return (
        <div style={mainDivStyles}>
            <Header />
            <Slider />
        </div >
    );
}

export default MainPage;

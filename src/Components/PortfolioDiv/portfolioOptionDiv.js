import React from "react"
import Card from "./optionCard.js"
import Photos from '../../assets/photoCollection/index.js';

const Options = () => {

    const divStyles = {
        position: 'relative',
        height: "40rem",
        colour: "#DEDFEC",
        background: "#DEDFEC",
    };

    const cardContainerStyles = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    };

    const headerStyles = {
        textAlign: 'center',
        marginTop: '100px',
    }

    return (
        <div style={divStyles}>
            <h1 style={headerStyles}> PORTFOLIO</h1>
            <div style={cardContainerStyles}>
                <Card name={"Events"} photos={Photos[4].src} />
                <Card name={"Parties"} photos={Photos[6].src} />
                <Card name={"Streaming"} photos={Photos[8].src} />
            </div>
        </div>
    )
}

export default Options;
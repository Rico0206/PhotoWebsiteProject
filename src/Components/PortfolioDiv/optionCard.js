import React from "react"
import Card from 'react-bootstrap/Card';

const OptionCard = ({ photos, name }) => {

    const imageStyles = {
        height: "350px",
        width: "350px",
        top: "50%",
        borderRadius: "50%",
    }

    const pStyles = {
        textAlign: "center",
        margin: "20px 0 0 0"
    }

    const divStyles = {
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    function reSizeImage(e) {
        e.target.style.height = '400px';
        e.target.style.width = '400px';
    }

    function revertReSizeImage(e) {
        e.target.style.height = imageStyles.height;
        e.target.style.width = imageStyles.width;
    }


    return (
        <div style={{ margin: "10px 100px" }}>
            <img src={photos} style={imageStyles} onMouseEnter={reSizeImage} onMouseLeave={revertReSizeImage} />
            <p style={pStyles}>{name}</p>
        </div>
    )
}

export default OptionCard;
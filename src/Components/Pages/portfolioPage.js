import React from "react"
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import photos from "../../assets/photoCollection";

const PortfolioPage = () => {

    return (
        <div>
            <h1 style={{ alignText: 'center' }}>Murder</h1>
            <Gallery photos={photos} />
        </div>
    )
}

export default PortfolioPage;

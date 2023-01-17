import React from "react"
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Photos from "../../assets/photoCollection";

const Slider = () => {


    return (
        <MDBCarousel showControls >
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={Photos[2].src}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src={Photos[7].src}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src={Photos[10].src}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={4}
                src={Photos[13].src}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={5}
                src={Photos[14].src}
                alt='...'
            />
        </MDBCarousel>
    )
}

export default Slider;
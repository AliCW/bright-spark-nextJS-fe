"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "../../node_modules/react-responsive-carousel";

export default function LandingCarousel( { images } : { images: object[] } ){

    if(!images){
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    };

    return (
        <div>
            <Carousel
                ariaLabel="landing image carousel"
                swipeable={false}
                showArrows={false} 
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                autoPlay={true}
                autoFocus={true}
                infiniteLoop={true}
                animationHandler="fade"            
            >
                {images.map((image: {
                    carousel: boolean,
                    image_id: number,
                    raw_link: string,
                }) => {
                    return (
                        <div key={image.image_id}>
                            <img 
                                className="landingCarouselImages"
                                src={image.raw_link} 
                            />
                        </div>
                    )
                })}
                </Carousel>
        </div>
    );
};
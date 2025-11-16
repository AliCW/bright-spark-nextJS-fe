"use client"
import { useState } from "react";
import Lightbox,  { Plugin } from "yet-another-react-lightbox";
import { Fullscreen } from "yet-another-react-lightbox/plugins/fullscreen";
import { Thumbnails } from "yet-another-react-lightbox/plugins/thumbnails";
import { Inline } from "yet-another-react-lightbox/plugins/inline";
//import { Captions } from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

export default function Carousel( { images } : { images : object[] } ){
    const [open, setOpen] = useState(false);
    const [imagesIndex, setImagesIndex] = useState(0);

    const updateIndex = (index: number) => setImagesIndex(index);

    const openBox = () => {
        setOpen(!open);
    };

    return (
        <div>

            {!open ? 
            <Lightbox
                index={imagesIndex}
                
                close={() => openBox()}
                slides={images.map((image: {
                        event: string,
                        image_id: number,
                        raw_link: string,
                    }) => {
                        return {
                            "src": image.raw_link,
                            "title": image.event
                        }
                })}
                plugins={[Fullscreen as Plugin, Thumbnails, Inline]}
                on={{
                    view: updateIndex,
                    click: openBox
                }}
                carousel={{
                    finite: false,
                    padding: "50",
                    spacing: "0",
                }}
                inline={{
                    style: {
                        width: "100%",
                        maxWidth: "1200px",
                        aspectRatio: "3 / 2",
                        margin: "0 auto",
                        cursor: "pointer",
                    },
                }}
                animation={{
                    fade: 250,
                    swipe: 500,
                }}
                styles={{
                    container: {
                        backgroundColor: "#00000000"
                    },

                }}
            />
            :
            <Lightbox 
                index={imagesIndex}
                open={open}
                close={() => openBox()}
                slides={images.map((image : {
                        event: string,
                        image_id: number,
                        raw_link: string,                        
                }) => { return { "src": image.raw_link } })}
                on={{
                    view: updateIndex,
                }}
                animation={{
                    fade: 250,
                    swipe: 500
                }}
                styles={{
                    container: {
                        backgroundColor: "#000000c8"
                    },
                }}
            />
            }

        </div>
    );
};
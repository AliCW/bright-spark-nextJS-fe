"use client"
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/captions.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";



export default function Carousel( images : { images : object[] } ){
    const [open, setOpen] = useState(false);

    console.log(images, "carouselImagesHere")



    return (
        <div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images.images.map((image: {
                        event: string,
                        image_id: number,
                        raw_link: string,
                    }) => {
                        return {
                            "src": image.raw_link,
                            "title": image.event
                        }
                })}
                plugins={[Fullscreen, Video]}
            
            >
                

            </Lightbox>
            <button onClick={() => setOpen(true)}>Click Here</button>
        </div>
    )
}





// <<<<<<<< OLD below - cant get view function to work in typescript


// "use client";
// import { useState } from "react";
// import Inline from "yet-another-react-lightbox/plugins/inline";
// import Lightbox, { Plugin } from "yet-another-react-lightbox";
// import Thumbnails from "yet-another-react-lightbox"
// //import Captions from "yet-another-react-lightbox/dist/plugins/Captions";
// import { formatEventAndCollaborationNames } from "../lib/utils";

// export default function Carousel({images}: any){

//     const [open, setOpen] = useState(false);
//     const [index, setIndex] = useState(0);
//     // const [portraitOrientation, setPortraitOrientation] = useState(window.matchMedia("(orientation: portrait)").matches);

//     // window.matchMedia("(orientation: portrait)").addEventListener("change", event => {
//     //     const portrait = event.matches;
//     //     setPortraitOrientation(portrait)
//     // });

//   const toggleOpen = (state: boolean) => () => setOpen(state);

//   const updateIndex = (index: number) => {

//         setIndex(index);
      
//     };


//     return (
//         <div>
//                 {!open ?
//                     <Lightbox 
//                         index={index}
//                         slides={images.map((image) => { 
//                             return { 
//                                 "src": image.raw_link, 
//                                 "title": formatEventAndCollaborationNames(image.event),
//                             };
//                         })}
//                         plugins={[Inline, Thumbnails as Plugin]}
//                         on={{
//                             view: updateIndex(false),
//                             // click: toggleOpen(true),
//                         }}
//                         carousel={{
//                             finite: false,
//                             padding: 50,
//                             spacing: 0,
//                         }}
//                         inline={{
//                             style: {
//                                 width: "100%",
//                                 maxWidth: "1200px",
//                                 aspectRatio: "3 / 2",
//                                 margin: "0 auto",
//                                 cursor: "pointer",
//                             },
//                             }}

//                         animation={{
//                             fade: 250,
//                             swipe: 500,
//                         }}

//                     />
//                     :
//                     <Lightbox 
//                         index={index}
//                         open={open}
//                         close={() => toggleOpen(false)}
//                         slides={images.map((image) => { return { "src": image.raw_link } })}
//                         on={{
//                             view: updateIndex(true),
//                         }}
//                         animation={{
//                             fade: 250,
//                             swipe: 500
//                         }}

//                     />
//                 }
//         </div>
//     )
// }
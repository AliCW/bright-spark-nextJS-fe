'use client'
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GiCometSpark } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import Link from 'next/link';

export default function Nav(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <div>
            <nav>
                <div>
                    <>
                        <GiHamburgerMenu onClick={handleOpen} />
                            <Offcanvas show={show} onHide={handleClose} >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <br></br>
                                <Link href="/" onClick={handleClose} >
                                <div className="canvasButton">
                                    {<p className="canvasText">home</p>} 
                                    {<BsFillHouseDoorFill className="canvasIcon"/>}
                                </div>
                                </Link>
                                <br></br>
                                <Link href="/events" onClick={handleClose} >
                                <div className="canvasButton">
                                    {<p className="canvasText">events</p>} 
                                    {<GiCometSpark className="canvasIcon"/>}
                                </div>
                                </Link>
                                <br></br>
                                <Link href="/collaborations" onClick={handleClose} >
                                <div className="canvasButton">
                                    {<p className="canvasText">collaborations</p>}
                                    {<FaRegHandshake className="canvasIcon"/>}
                                </div>
                                </Link>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </>
                </div>
            </nav>
        </div>
    )
}
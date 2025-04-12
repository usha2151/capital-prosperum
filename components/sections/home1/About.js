'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/* About One Start  */}
        <section className="about-one" style={{ marginTop: "80px !important" }}>
            <div className="about-one__shape-2 float-bob-y">
                <img src="assets/images/shapes/about-one-shape-2.png" alt=""/>
            </div>
            <div className="about-one__shape-3 float-bob-x">
                <img src="assets/images/shapes/about-one-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img-box  wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-one__img">
                                    <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-one__img-2">
                                    <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-one__client-box">
                                    <div className="about-one__client-box-bg"
                                        style={{ backgroundImage: 'url(assets/images/shapes/about-one-client-box-bg-shape.png)' }} >
                                    </div>
                                    <div className="about-one__client-img">
                                        <img src="assets/images/resources/about-one-client-img.jpg" alt=""/>
                                    </div>
                                    <div className="about-one__client-content">
                                        <div className="about-one__count count-box">
                                            <h3 className="count-text">4.2</h3>
                                            <span>K</span>
                                        </div>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                                <div className="about-one__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="about-one__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="about-one__shape-1 float-bob-x">
                                    <img src="assets/images/shapes/about-one-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 ">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">KNOW ABOUT</p>
                                </div>
                                <h2 className="section-title__title">Since 2014, Prosperum Capital has facilitated in financially assisting small businesses and corporate organizations to thrive and flourish.</h2>
                            </div>
                            <p className="about-one__text-1" style={{textAlign: "justify"}}>Prosperum Capital understands and recognizes the challenges small businesses find themselves in, within an economy where most commercial lenders make it difficult to get the capital they are seeking to grow and prosper. Our vision for our clients and future clients are endless possibilities that they never thought conceivable. Our goals are based on the need to overcome the challenges that many small businesses face and offer sound and fast credit solutions that will make a huge difference for our clientele.<br/><br/>We work together with our clients and top professionals who are there every step of the way in an effortless application and approval process, in a timely manner that provides the flexible funding they require!

</p>
                           
                           
                            <div className="about-one__btn-and-contact">
                                <div className="about-one__btn-box">
                                    <Link href="about" className="about-one__btn thm-btn">Discover More</Link>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} /> 
        {/* About One End  */}
        </>
    )
}

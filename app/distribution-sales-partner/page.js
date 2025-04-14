import React from 'react'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import Brand from '@/components/sections/home1/Brand'
import ApplyOnline from '@/components/sections/home1/ApplyOnline'

function page() {
  return (
    <div>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Distribution Sales Partner">
             {/* Feature One Start  */}
        <section className="feature-one">
            <div className="container">
                <div className="row">
                    {/* Feature One Single Start */}
                    <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                            <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)' }} >
                            </div>
                            <div className="feature-one__icon">
                                <span className="icon-protection"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Tools to EnhancePerformance</p>
                                <h6 className="feature-one__title"><Link href="about">Our affiliate portal has real time tracking and our APIs incorporates effortlessly within your systems.</Link></h6>
                                {/* <Link href="about" className="feature-one__read-more">READ MORE<span
                                        className="icon-next"></span></Link> */}
                            </div>
                        </div>
                    </div>
                    {/* Feature One Single End */}
                    {/* Feature One Single Start */}
                    <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                            <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)' }} >
                            </div>
                            <div className="feature-one__icon">
                                <span className="icon-investment"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">TrainingSupport</p>
                                <h6 className="feature-one__title"><Link href="about">Quick, insightful and collaborative commitment to account maintenance.</Link></h6>
                                {/* <Link href="about" className="feature-one__read-more">READ MORE<span
                                        className="icon-next"></span></Link> */}
                            </div>
                        </div>
                    </div>
                    {/* Feature One Single End */}
                    {/* Feature One Single Start */}
                    <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="100ms">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                            <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)' }} >
                            </div>
                            <div className="feature-one__icon">
                                <span className="icon-risk-management"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Direct and Open-EndedCommissions</p>
                                <h6 className="feature-one__title"><Link href="about">Committed to customer renewals, our exclusive team members assist in developing trustworthy relationships, and influencing greater demand for commissions.</Link></h6>
                                {/* <Link href="about" className="feature-one__read-more">READ MORE<span
                                        className="icon-next"></span></Link> */}
                            </div>
                        </div>
                    </div>
                    {/* Feature One Single End */}
                </div>
            </div>
        </section>

        <section className="about-two">
                    <div className="about-two_-shape-3 img-bounce">
                        <img src="assets/images/shapes/about-two-shape-3.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5">
                                <div className="about-two__left">
                                    <div className="about-two__img-box  wow slideInLeft" data-wow-delay="100ms"
                                        data-wow-duration="2500ms">
                                        <div className="about-two__img">
                                            <img src="assets/images/resources/about-two-img-1.jpg" alt=""/>
                                        </div>
                                        <div className="about-two__img-2">
                                            <img src="assets/images/resources/about-two-img-2.jpg" alt=""/>
                                        </div>
                                        <div className="about-two__client-box">
                                            <div className="about-two__client-img">
                                                <img src="assets/images/resources/about-two-client-img.jpg" alt=""/>
                                            </div>
                                            <div className="about-two__client-content">
                                                <div className="about-two__count count-box">
                                                    <h3> 4.5</h3>
                                                    <span>K</span>
                                                </div>
                                                <p>Satisfied Clients</p>
                                            </div>
                                        </div>
                                        <div className="about-two__shape-1"></div>
                                        <div className="about-two__shape-2 float-bob-x">
                                            <img src="assets/images/shapes/about-two-shape-2.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="about-two__right">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">KNOW ABOUT SONCHOY</p>
                                        </div>
                                        {/* <h2 className="section-title__title">Choose Your Insurance
                                            <br/> Service Company</h2> */}
                                    </div>
                                    <p className="about-two__text">Prosperum Capital is highly professional, quick and easy to work with in getting our deals financed. We could not have asked for a better experience!</p>
                                    {/* <ul className="about-two__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-cashback"></span>
                                            </div>
                                            <h3>Moneyback
                                                <br/> Gurantee</h3>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-customer-service"></span>
                                            </div>
                                            <h3>Technical
                                                <br/> Support always</h3>
                                        </li>
                                    </ul> */}
                                    <h3 className="about-two__big-text">Mark Salner </h3>
                                    <p className="about-two__text">Would you like to discover more about becoming a Prosperum Capital sales partner?</p>
                                    <div className="about-two__btn-and-contact">
                                        {/* <div className="about-two__btn-box">
                                            <Link href="about" className="about-two__btn thm-btn">Discover More</Link>
                                        </div> */}
                                        <div className="about-two__contact">
                                            <div className="icon">
                                                <span className="icon-phone-1"></span>
                                            </div>
                                            <div className="content">
                                                <span>Call Us Free</span>
                                                <p><Link href="tel:844-804-3511">844-804-3511</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        {/* Feature One End  */}
            <ApplyOnline />
            <Brand />
            </Layout>
    </div>
  )
}

export default page
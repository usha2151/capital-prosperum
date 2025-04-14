import React from 'react'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import Brand from '@/components/sections/home1/Brand'
import ApplyOnline from '@/components/sections/home1/ApplyOnline'


function page() {
  return (
    <div>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Process">
         {/* About Three Start  */}
         <section className="about-three about-six mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-three__left">
                            <div className="about-three__img-box  wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-three__img">
                                    <img src="assets/images/resources/about-three-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-three__img-2">
                                    <img src="assets/images/resources/about-three-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-three__img-3">
                                    <img src="assets/images/resources/about-three-img-3.jpg" alt=""/>
                                </div>
                                <div className="about-three__shape-1">
                                    <img src="assets/images/shapes/about-three-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="about-three__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">Our Process</p>
                                </div>
                               
                            </div>
                            <p className="about-three__text">Once you have made the determination that a Merchant Cash Advance is the best way to fund your business, all you need to do is submit all of the required paperwork in our application and its off to the races. <br/><br/>
                            Once the application is in, our team of seasoned underwriters will use utmost expedience in determining whether your business qualifies for an MCA and what the prevailing dollar amount you can expect. In a vast majority of cases, a merchant can expect an offer and all the accompanying documentation to be in your inbox within several hours.
                            </p>
                           
                           
                            <div className="about-three__btn-and-client">
                                <div className="about-three__btn-box">
                                    <Link href="about" className="about-three__btn thm-btn">Discover More</Link>
                                </div>
                                <div className="about-three__client-img">
                                    <img src="assets/images/resources/about-three-client-img.jpg" alt=""/>
                                    <div className="about-three__client-signature">
                                        <img src="assets/images/shapes/about-three-client-signature.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Three End  */}
            <ApplyOnline/>
            <Brand/>
            </Layout>
    </div>
  )
}

export default page
import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Brand from "@/components/sections/home1/Brand";
import ApplyOnline from "@/components/sections/home1/ApplyOnline";

function page() {
  return (
    <div>
      {" "}
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Installment Loan"
      >
        <section className="services-five">
          <div className="services-five__shape-1 img-bounce">
            <img src="assets/images/shapes/services-five-shape-1.png" alt="" />
          </div>
          <div className="services-five__shape-2 float-bob-x">
            <img src="assets/images/shapes/services-five-shape-2.png" alt="" />
          </div>
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline">Installment Loan</p>
              </div>
              <h2 className="section-title__title text-center">
              Longer term loans with fixed monthly payments
              </h2>
            </div>
            <div className="services-five__inner">
              <div className="row">
                {/* Services Five Single Start */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="services-five__single">
                    <div className="services-five__icon">
                      <span className="icon-healthcare"></span>
                    </div>
                    <h3 className="services-five__title">
                      <Link href="health-insurance">Monthly Payments</Link>
                    </h3>
                    <Link
                      href="health-insurance"
                      className="services-five__arrow"
                    >
                      <span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
                {/* Services Five Single End */}
                {/* Services Five Single Start */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="services-five__single">
                    <div className="services-five__icon">
                      <span className="icon-protection-1"></span>
                    </div>
                    <h3 className="services-five__title">
                      <Link href="health-insurance">
                        Terms of2, 3 or 4 years
                      </Link>
                    </h3>
                    <Link
                      href="health-insurance"
                      className="services-five__arrow"
                    >
                      <span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
                {/* Services Five Single End */}
                {/* Services Five Single Start */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="services-five__single">
                    <div className="services-five__icon">
                      <span className="icon-family-insurance"></span>
                    </div>
                    <h3 className="services-five__title">
                      <Link href="family-insurance">
                        Interest rates ranging from12.9% to 24.9%
                      </Link>
                    </h3>
                    <Link
                      href="family-insurance"
                      className="services-five__arrow"
                    >
                      <span className="icon-next"></span>
                    </Link>
                  </div>
                </div>

                <div className="py-5">
                  <h2 className="text-center mt-5">
                    Your revenue may fluctuate, but your payments always stay
                    the same.
                  </h2>
                  <img
                    src="https://prosperum-capital.s3-eu-central-2.ionoscloud.com/graph.jpg"
                    alt=""
                    className="w-100 mt-4"
                  />
                </div>

                <section className="about-four">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="about-four__left">
                          <div
                            className="about-four__img-box  wow slideInLeft"
                            data-wow-delay="100ms"
                            data-wow-duration="2500ms"
                          >
                            <div className="about-four__img">
                              <img
                                src="assets/images/resources/about-four-img-1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="about-four__img-2">
                              <img
                                src="assets/images/resources/about-four-img-2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="about-four__client-box">
                              <div className="about-four__client-img">
                                <img
                                  src="assets/images/resources/about-four-client-img.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="about-four__client-content">
                                <div className="about-four__count count-box">
                                  <h3> 4.2 </h3>
                                  <span>K</span>
                                </div>
                                <p>Satisfied Clients</p>
                              </div>
                            </div>
                            <div className="about-four__shape-1 float-bob-x">
                              <img
                                src="assets/images/shapes/about-four-shape-1.png"
                                alt=""
                              />
                            </div>
                            <div className="about-four__shape-2 img-bounce">
                              <img
                                src="assets/images/shapes/about-four-shape-2.png"
                                alt=""
                              />
                            </div>
                            <div className="about-four__shape-3 float-bob-y">
                              <img
                                src="assets/images/shapes/about-four-shape-3.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="about-four__right">
                          <div className="section-title text-left">
                            <div className="section-title__tagline-box">
                              <p className="section-title__tagline">
                                KNOW ABOUT SONCHOY
                              </p>
                            </div>
                            <h2 className="section-title__title">
                              Get Insurence Solution With Our Expert
                            </h2>
                          </div>
                          <p className="about-four__text">
                            Arki features minimal and stylish design. The theme
                            is well crafted for all the modern architect and
                            interior design website. With Arki, it makes your
                            website look even more attractive and impressive to
                          </p>
                          <ul className="about-four__points list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-check-mark"></span>
                              </div>
                              <p>Fre Insurance Quotes</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-check-mark"></span>
                              </div>
                              <p>Experience & Qualified Agents</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-check-mark"></span>
                              </div>
                              <p>Large Member of Insurance Policies</p>
                            </li>
                          </ul>
                          <div className="about-four__btn-and-contact">
                            <div className="about-four__btn-box">
                              <Link
                                href="about"
                                className="about-four__btn thm-btn"
                              >
                                Discover More
                              </Link>
                            </div>
                            <div className="about-four__contact">
                              <div className="icon">
                                <span className="icon-phone-1"></span>
                              </div>
                              <div className="content">
                                <span>Call Us Free</span>
                                <p>
                                  <Link href="tel:+9993256589">
                                    +999 325 6589
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <ApplyOnline />
                <Brand />
              </div>
            </div>
          </div>
        </section>
      </Layout>{" "}
    </div>
  );
}

export default page;

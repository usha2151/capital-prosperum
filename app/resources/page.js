
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Brand from "@/components/sections/home1/Brand"
import ApplyOnline from "@/components/sections/home1/ApplyOnline"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blogs">
        {/* Blog Page Start */}
        <section className="blog-page">
            <div className="container">
                <div className="row">
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Insurance</span>
                                    <span>Agency</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-details">How Get People to
                                        Like Travel Insurance.</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="assets/images/blog/blog-one__client-img-1.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Janes Cooper</h3>
                                        <p>August 3, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLog One Single End */}
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Insurance</span>
                                    <span>Agency</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-details">Insurance Horizons
                                        Exploring the Offerings</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="assets/images/blog/blog-one__client-img-2.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Rosig Kerpt</h3>
                                        <p>August 3, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLog One Single End */}
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Insurance</span>
                                    <span>Agency</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-details">Safeguarding Futures
                                        The Passion Insurance</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="assets/images/blog/blog-one__client-img-3.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Tamu Jana</h3>
                                        <p>August 3, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLog One Single End */}
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Insurance</span>
                                    <span>Agency</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-details">Commodo venenatis ligula commodo
                                        leez</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="assets/images/blog/blog-one__client-img-4.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Robin Sons</h3>
                                        <p>August 3, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLog One Single End */}
                  
                   
                </div>
            </div>
        </section>
        {/* Blog Page End */}
<ApplyOnline/>
        <Brand/>


       
            </Layout>
        </>
    )
}
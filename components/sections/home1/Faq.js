'use client'
import { useState } from 'react'
 
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            {/* FAQ One Start  */}
            <section className="faq-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="faq-one__left">
                                    <div className="faq-one__shape-1 float-bob-x">
                                        <img src="assets/images/shapes/faq-one-shape-1.png" alt=""/>
                                    </div>
                                    <div className="faq-one__img-box">
                                        <div className="faq-one__img">
                                            <img src="assets/images/resources/faq-one-img-1.png" alt=""/>
                                        </div>
                                        <div className="faq-one__quick-box">
                                            <div className="faq-one__quick-icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <h4 className="faq-one__quick-text">Get Funded Fast</h4>
                                        </div>
                                        <div className="faq-one__policy">
                                            <div className="faq-one__policy-icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <h4 className="faq-one__policy-text">How We Make 
                                                <br/> Funding Easy</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="faq-one__right">
                                    <div className="section-title text-left mt-5">
                                        {/* <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">Get Funded Fast</p>
                                        </div> */}
                                        <h2 className="section-title__title mt-4">Get Funded Fast</h2>
                                    <ul class="ps-4 mt-2">
  <li class="mb-2 text-secondary">
    <strong>Equipment or Technology Purchases:</strong> Increase efficiency with new equipment or technology.
  </li>
  <li class="mb-2 text-secondary">
    <strong>Inventory:</strong> Take advantage of volume discounts, special buying opportunities, or seasonal purchases.
  </li>
  <li class="mb-2 text-secondary">
    <strong>Marketing:</strong> Brand your business and increase your sales by developing a strategic marketing plan.
  </li>
  <li class="text-secondary">
    <strong>Emergencies:</strong> Taxes, Bills, or unexpected expenses.
  </li>
</ul>
<h2 className="section-title__title mt-4">How We Make Funding Easy</h2>
<ul class="ps-4 text-secondary mt-2">
  <li class="mb-2">
    No Personal Guarantee Needed, We Only Take Business Collateral.
  </li>
  <li class="mb-2">
    Minimal Paperwork Required, Quickly Get Funded Within a Few Days
  </li>
  <li class="mb-2">
    Credit Problems In The Past May Not Matter. We Look At Your Business, Not Your Personal Life.
  </li>
  <li>
    Approvals Within 24 Hours, See How Much You Qualify for, Apply Now!
  </li>
</ul>

                                    </div>
                                   
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* FAQ One End  */}
            
        </>
    )
}

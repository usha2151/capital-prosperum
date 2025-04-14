'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }



}




export default function Brand() {
    return (
        <>
        {/* Brand One Start */}
        <section className="brand-one">
            <div className="container">
                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <img src="https://prosperum-capital.s3-eu-central-2.ionoscloud.com/CNN-Money.png" alt="" style={{height: "1"}}/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="https://prosperum-capital.s3-eu-central-2.ionoscloud.com/Forbes_logo.svg.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="https://prosperum-capital.s3-eu-central-2.ionoscloud.com/brand-logo3.jpg" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="https://prosperum-capital.s3-eu-central-2.ionoscloud.com/brand-logo4.jpg" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="https://prosperum-capital.s3-eu-central-2.ionoscloud.com/brand-logo5.jpg" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="https://prosperum-capital.s3-eu-central-2.ionoscloud.com/brand-logo6.jpg" alt=""/>
                        </SwiperSlide>
                        
                    </div>
                </Swiper>
            </div>
        </section>
        {/* Brand One End */}
        </>
    )
}

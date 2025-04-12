'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
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

export default function BrandSlider9() {
    return (
        <>


            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/brand/brand-1-1.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/brand/brand-1-2.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/brand/brand-1-3.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/brand/brand-1-4.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/brand/brand-1-5.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/brand/brand-1-1.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/brand/brand-1-2.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/brand/brand-1-3.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/brand/brand-1-4.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/brand/brand-1-5.png" alt=""/>
                        </SwiperSlide>
                    </div>
                </Swiper>
        </>
    )
}

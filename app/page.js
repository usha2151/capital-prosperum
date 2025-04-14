import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Feature from "@/components/sections/home1/Feature"
import Funfacts from "@/components/sections/home1/Funfacts"
import ApplyOnline from "@/components/sections/home1/ApplyOnline"
import Service from "@/components/sections/home1/Service"
import Video from "@/components/sections/home1/video"
import Work from "@/components/sections/home1/Work"
import Brand from "@/components/sections/home1/Brand"
import Blog from "@/components/sections/home1/Blog"
import Faq from "@/components/sections/home1/Faq"
import Quote from "@/components/sections/home1/Quote"
import Testimonial from "@/components/sections/home1/Testimonial"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                {/* <Feature /> */}
                <About />
                {/* <Funfacts /> */}
                {/* <Service /> */}
                <ApplyOnline />
                {/* <Video /> */}
                {/* <Work /> */}
                <Faq />
                {/* <Testimonial /> */}
                {/* <Quote /> */}
                <Brand />
                {/* <Blog /> */}
                
            </Layout>

        </>
    )
}
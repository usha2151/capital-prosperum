'use client'
import Brand from "@/components/sections/home1/Brand"
import Layout from "@/components/layout/Layout"
import ApplyOnline from "@/components/sections/home1/ApplyOnline"
import Link from "next/link"
import About from "@/components/sections/home1/About"


export default function Abouts() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About company">
       <About/>
        <ApplyOnline/>
        <Brand/>

                
            </Layout>
        </>
    )
}



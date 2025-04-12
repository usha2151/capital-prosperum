import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

       
            <ul className="main-menu__list">
                <li className="dropdown current">
                    <Link href="/">Home </Link>  
                </li>
               
                <li className="dropdown">
                    <Link href="#">Small Business Funding</Link>
                    <ul>
                        <li><Link href="blog">Term Loan</Link></li>
                        <li><Link href="blog-sidebar">Flex Loan</Link></li>
                        <li><Link href="blog-details">Installment Loan</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="about">Our Process</Link>
                </li>
                <li>
                    <Link href="contact">Resource</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Partners</Link>
                    <ul>
                        <li><Link href="products">Referral Sales Partner</Link></li>
                        <li><Link href="product-details">Distribution Sales Partner</Link></li>
                        <li><Link href="product-details">Financial Platforms Sales Partner</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="about">About Us</Link>
                </li>
                <li>
                    <Link href="contact">Contact Us</Link>
                </li>
            </ul>
        </>
    )
}

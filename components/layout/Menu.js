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
                        <li><Link href="term-loan">Term Loan</Link></li>
                        <li><Link href="flex-loan">Flex Loan</Link></li>
                        <li><Link href="installment-loan">Installment Loan</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="our-process">Our Process</Link>
                </li>
                <li>
                    <Link href="blog">Resource</Link>
                </li>
                <li className="dropdown">
                    <Link href="">Partners</Link>
                    <ul>
                        <li><Link href="referral-sales-partner">Referral Sales Partner</Link></li>
                        <li><Link href="distribution-sales-partner">Distribution Sales Partner</Link></li>
                        <li><Link href="financial-platforms-sales-partner">Financial Platforms Sales Partner</Link></li>
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

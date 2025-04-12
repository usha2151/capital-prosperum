import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            
        <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
            <div className="main-header__top">
                <div className="main-header__top-inner">
                    <ul className="list-unstyled main-header__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-maps-and-flags"></i>
                            </div>
                            <div className="text">
                                <p>465 NT Road. North West, England</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p><Link href="mailto:needhelpazent@gmail.cpm">needhelpazent@gmail.cpm</Link></p>
                            </div>
                        </li>
                    </ul>
                    <div className="main-header__top-social-box">
                        <p className="main-header__top-social-title">Follow us:</p>
                        <div className="main-header__top-social">
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            {/* <Link href="#"><i className="fab fa-facebook"></i></Link>
                            <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link> */}
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                            <Link href="/"><img src="https://prosperum-capital.s3-eu-central-2.ionoscloud.com/Prosperum%20capital%20Logo.png" alt="Prosperum capital" style={{width: "100%", height: "50px", objectFit: "cover"}}/></Link>
                            </div>
                           
                        </div>
                        <div className="main-menu__right">
                           
                        <div className="main-menu__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} />

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                <Link href="/"><img src="https://prosperum-capital.s3-eu-central-2.ionoscloud.com/Prosperum%20capital%20Logo.png" alt="Prosperum capital" style={{width: "100%", height: "50px", objectFit: "cover"}}/></Link>
                                </div>
                               
                            </div>
                            <div className="main-menu__right">
                            <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}

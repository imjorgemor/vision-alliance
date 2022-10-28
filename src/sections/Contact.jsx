import AppWrap from '../wrapper/AppWrap';
import Triangle from "../components/Triangle"
import WilsonLogo from "../assets/wmlogo.png"
import HuxleyLogo from "../assets/huxleylogo.png"
import "../styles/Contact.scss"

const PARTNER_LOGO = [WilsonLogo, HuxleyLogo]


const Contact = () => {
    return (
        <footer className='contact-cover'>
            <div className='flex--space-between'>
                <p className='contact-title'>UNION<br></br> VISION ALLIANCE</p>
                <a className='contact-top' href='#home'>
                    <svg width="24" height="24" fillRule="evenodd" clipRule="evenodd" ><path style={{ fillRule: "#1344ff" }} d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" /></svg>
                </a>
            </div>
            <div className='contact-info'>
                <div>
                    <h2 className='contacts-subtitle mt-2'>Useful contacts:</h2>
                </div>
                <div>
                    <h3 className='contacts-label mt-1'>Minessota laborers</h3>
                    <a href="https://mnlaborershealthwellnessclinics.org/your-health-benefits/health-fair/" className='link' target="_blank" rel="noreferrer"><span>Link here</span></a>
                </div>
                <div>
                    <h3 className='contacts-label mt-1'>Zenith MN office:</h3>
                    <a href="tel:(651) 403 0553 " className='link'><span><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z" /></svg></span>(651) 256-1900</span></a>
                </div>
                <div>
                    <h3 className='contacts-label mt-1'>How to get the UVA benefits</h3>
                    <a href="#how%20it%20works" className='link'><span>Learn more</span></a>
                </div>

            </div>

            <div className='partner-info'>
                <div>
                    <h2 className='contacts-subtitle mt-2'>Our partners:</h2>
                </div>
                <div>
                    <div className='mt-1'>
                        {
                            PARTNER_LOGO.map((logo, index) =>
                                <figure key={index} className='partner-logo'>
                                    <img src={logo} alt="wilson mcshane" />
                                </figure>)
                        }
                    </div>
                </div>
                <div>
                    <a href='mailto:Ryan@huxleyoptical.com' className="link"><span>Contact here to become a partner</span>
                    </a>
                </div>

                <Triangle className="triangle-bottom--right " color="#fff" rotate='rotate(90)' />

            </div>

            <div><p className='contacts-rights mt-2'>UNION VISION ALLIANCE<br /> &copy; All rights reserved</p></div>




        </footer>
    )
}

export default AppWrap(Contact, "contact", "primary-bg");
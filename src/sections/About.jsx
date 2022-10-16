import AppWrap from '../wrapper/AppWrap';
import { MAIN_FEATURES } from "../assets/aboutPage"
import "../styles/About.scss"
import Triangle from '../components/Triangle';

const About = () => {
    return (
        <section className='about-cover'>
            <div className="about-wrapper">
                <article className="about-title mr-2">
                    <h2 className='about-subtitle'>About</h2>
                </article>

                <article className="about-main mr-2">
                    <div>
                        <h3 className='about-subtitle'>Get your ophtalmologic review and new glasses without cost</h3>
                    </div>
                    <div>
                        <a href="#how it works" className='link link--black mt-1'><span>Learn more</span></a>
                    </div>
                    <div>
                        <Triangle color="#111" rotate="rotate(180)" className='triangle-bottom--left m-1' />
                    </div>
                </article>

                <article className="about-info">
                    {
                        MAIN_FEATURES.map(({ id, text }) =>
                            <div key={id} className='about-benefits'>
                                <p>{id}</p>
                                <hr />
                                <p>{text}</p>
                            </div>
                        )
                    }
                </article>
            </div>
        </section>
    )
}

export default AppWrap(About, "about", "white-bg");
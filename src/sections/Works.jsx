import AppWrap from '../wrapper/AppWrap';
import "../styles/Works.scss"
import Triangle from '../components/Triangle';
import { HOW_STEPS } from '../assets/howWorksPage';

const Works = () => {
    return (
        <section className='works-cover'>
            <div className="works-wrapper">
                <article className="works-title mr-2">
                    <h2 className='works-subtitle'>How it works</h2>
                </article>

                <article className="works-main mr-2">
                    <div>
                        <h3 className='works-subtitle'>We help union members get the most out of their vision benefits</h3>
                    </div>
                </article>
                <article className="works-info">
                    <Triangle color="#111" rotate="rotate(0)" className="triangle-top--right" />
                </article>
            </div>

            <div className="works-wrapper">
                <article className="works-title mr-2" />
                <article className="works-main--steps">
                {
                        HOW_STEPS.map(({ title, description, subdescription, link, href }) =>
                            <div key={title} className='work-steps'>
                                <p>{title}</p>
                                <hr />
                                <p>{description}</p>
                                <p>{subdescription}</p>
                                {link && <a className="link link--black"href={href}>{link}</a>}
                            </div>
                        )
                    }
                </article>
                <article className="works-info--steps" />
            </div>
        </section>
    )
}

export default AppWrap(Works, "how it works", "white-bg");
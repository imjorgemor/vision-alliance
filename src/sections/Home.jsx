import AppWrap from '../wrapper/AppWrap';
import "../styles/Home.scss";
import Triangle from '../components/Triangle';


const Home = () => {
    return (
        <>
            <section className='home-cover'>
                <div className='home-wrapper'>
                    <div>
                        <p className='title-text'>UNION VISION ALLIANCE</p>
                    </div>
                    <article className='mt-2'>
                        <h1 className="title-text">Helping union members get the most out of their vision benefits</h1>
                    </article>
                    <article className='info-box'>
                        <h2 className='subtitle-text'>No out of pocket costs and hundreds of eyeglass options. Find out how it works here</h2>
                        <a href="#how%20it%20works" className='link'><span>Learn more</span></a>
                    </article>
                    <article className='blue-box'>
                        <div>
                            <p>Get your summary of benefits emailed by answering a few questions here.</p>
                        </div>
                        <a className='link' href='https://form.typeform.com/to/q4ili7W6' target="_blank" rel="noreferrer"><span>Get the benefits</span></a>
                       <Triangle color="#fff" rotate='rotate(0)' className="triangle-top--right m-1"/>
                    </article>
                </div>
            </section>
        </>
    )
}

export default AppWrap(Home, "home", "home-bg");
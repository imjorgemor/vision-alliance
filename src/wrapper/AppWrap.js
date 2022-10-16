import { useEffect, useState } from 'react';
import background0 from '../assets/image0.jpeg';
import background1 from '../assets/image1.jpeg';
import background2 from '../assets/image2.jpeg';
import background3 from '../assets/image3.jpeg';
import background4 from '../assets/image4.jpeg';


const AppWrap = (Component, idName, classNames) => function HOC() {
    const [cover, setCover] = useState(background0)

    const images = [background0, background1, background2, background3, background4]

    useEffect(() => {
        setCover(images[Math.floor(Math.random() * 5)])
    }, [])
    
    return (
        <div
            id={idName}
            className={`container ${classNames}`}
            style={classNames === "home-bg" ? {backgroundImage: `url(${cover})`} : {}}
        >
            <div className="wrapper display-flex">
                <Component />
            </div>
        </div>
    )
}

export default AppWrap
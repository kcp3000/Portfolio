import { useEffect, useState } from "react"


function Carousel ({imgs}) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    
    useEffect(()=> {
        if (!autoPlay || imgs.length < 2) return;

        const timeout = setTimeout(() => {
            setCurrent(index => (index + 1) % imgs.length);
        }, 6500);

        return () => clearTimeout(timeout);
    }, [autoPlay, current, imgs.length]);

    return <div 
        className="carousel" 
        onMouseEnter={() => setAutoPlay(false)} 
        onMouseLeave={() => setAutoPlay(true)}
    >
        <div className="carousel_wrapper">
            {imgs.map((img, idx) => {
                return (
                        <div key={idx} className={
                            idx === current
                                ? "carousel_card carousel_card-active" 
                                : "carousel_card"
                            }
                         >
                            <h2 className="subtitle">
                                {img.title}
                            </h2>
                            <div className="res_img_container">
                                {img.images.map((img, idx) => {
                                    return (
                                        <div key={idx}>
                                            <img src={img} alt="" />
                                        </div> 
                                    )
                                })}
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
}

export default Carousel

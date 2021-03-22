import { Button } from './Button'
import React, { useState, useRef, useEffect } from 'react'
import * as s from '../components/Hero.Styles'

const  Hero = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        };

        timeout.current = setTimeout(nextSlide, 8000);

        return function(){
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        };
    },[current, length]);

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1);
        
    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <s.HeroSection>
            <s.HeroWrapper>
            {slides.map((slide, index) => {
                return(
                    <s.HeroSlide key={index}>
                        {index === current && (
                        <s.HeroSlider>
                            <s.HeroImage src={slide.image} alt={slide.alt}/>
                            <s.HeroContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button 
                                to={slide.path}
                                primary='true'
                                css={`max-width: 160px`}>
                                    {slide.label}
                                    <s.Arrow /> 
                                </Button>
                            </s.HeroContent> 
                        </s.HeroSlider>
                        )}
                    </s.HeroSlide>
                )
            })}
            <s.SliderButtons>
                <s.PrevArrow onClick= {prevSlide}/>
                <s.NextArrow onClick= {nextSlide}/>
            </s.SliderButtons>
            </s.HeroWrapper>
        </s.HeroSection>
    )
}

export default Hero

import styled, { css } from 'styled-components/macro'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const HeroSection = styled.section`
    height: 70vh;
    max-height: 1100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    

`; 
export const HeroSlide = styled.div` 
    z-index: 1;
    width:100%;
    height: 100%;
   
`;

export const HeroSlider = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    
`;


export const HeroImage = styled.img` 
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw; 
    height: 100%;
    object-fit: cover;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.2) 100%
        );
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 8px 0px 28px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }
`;
export const Arrow = styled(TrendingFlatIcon)`
 margin-left: 0.5rem;
`;
export const arrowButtons = css`
    width: 40px;
    height: 40px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: #cd853f;
        transform: scale(1.05);
    }

`;


export const PrevArrow = styled(ArrowBackIcon)`
    ${arrowButtons};
    
`;
export const NextArrow = styled(ArrowForwardIcon)`
    ${arrowButtons};
   
`;
export const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10; 
`;



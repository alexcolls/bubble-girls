import styled from "styled-components";
import COLORS from "../Colors";

export const InfoContainer = styled.div`
    color: ${ ({lightBg}) => ( lightBg ? COLORS.white2 : COLORS.black2 ) };
    background: ${ ({lightBg}) => ( lightBg ? COLORS.white2 : COLORS.black2 ) };
    height: 1000px;
    width: 100%;
    z-index: 6;
    position: relative;

    @media screen and (max-width: 768px) {
        padding: 100px 20px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 7;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    width: 100%;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${ ({imgStart}) => ( imgStart ? `'col2 col1'` : `'col1 col2'` ) };

    @media screen and (max-width: 768px) {
        grid-template-areas: ${ ({imgStart}) => ( imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` ) };
    }
`;

export const Column1 = styled.div`
    margin-right: 120px;
    grid-area: col1;
    width: 100%;
    align-items: left;
    justify-content: left;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    width: 100%;
`;

export const TextWrapper = styled.div`
    max-width: 2700px;
    padding: 22px;
`;

export const TopLine = styled.p`
    background: -webkit-linear-gradient(180deg,${COLORS.tertiary}, ${COLORS.secondary}, ${COLORS.primary} );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    max-width: 444px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${ ({lightText}) => ( lightText ? COLORS.white2 : COLORS.black2  ) };

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    color: ${ ({lightTextDesc}) => ( lightTextDesc ? COLORS.white2 : COLORS.black2  ) };
`;

export const Subtitle2 = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${ ({lightTextDesc}) => ( lightTextDesc ? COLORS.white2 : COLORS.black2  ) };
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

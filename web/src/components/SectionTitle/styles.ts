import styled from "styled-components"

export const TitleSection = styled.div`
    color: ${(props) => props.theme.text.white};
    display: inline-block;
    font-weight: bold;
    text-transform: capitalize;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    border-bottom: 0;
    font-size: 1.5rem;
    margin: 2.5rem 0 1.5rem;
    text-align: center;
    transition: all 250ms;
    cursor: default;

    &:hover {
        text-shadow: ${(props) => props.theme.text.shadow};
        transform: scale(1.01);
    }

    &::before {
        display: block;
        content: "";
        border-top: 2px solid rgba(255, 255, 255, 0.25);
        transform: scaleX(0);
        transform-origin: 100% 50%;
        transition: transform 250ms ease-in-out;
    }

    &:hover::before {
        transform: scaleX(1);
    }

    &::after {
        display: block;
        content: "";
        border-bottom: 2px solid rgba(255, 255, 255, 0.25);
        transform: scaleX(0);
        transform-origin: 0% 50%;
        transition: transform 250ms ease-in-out;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`

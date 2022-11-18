import styled from "styled-components"

export const BookBox = styled.div`
    background: ${(props) => props.theme.cards.background};
    border-radius: 0.5rem;
    padding: 1.5rem 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    min-height: 454px;
    max-width: 50%;
    width: 100%;

    &.description {
        justify-content: center;
        align-items: flex-start;
        padding: 1.5rem 3.5rem;
        gap: 1rem;
    }

    &.synopsis {
        min-height: initial;
        padding: 2rem 1.5rem;
        width: 100%;
        max-width: initial;
    }
`

export const BookImageContainer = styled.div`
    height: 350px;
    position: relative;
    display: block;

    img {
        object-fit: cover;
        max-height: 100%;
        width: auto;
        border-radius: 0.5rem;
    }
`

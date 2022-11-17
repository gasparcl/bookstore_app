import styled from "styled-components"

export const BookCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    overflow: hidden;
    padding: 1rem 0.5rem;
    color: #fff;
    border-radius: 0.25rem;
    transition: all 250ms;
    background-color: ${(props) => props.theme.cards.background};
    cursor: pointer;

    &:hover {
        box-shadow: ${(props) => props.theme.cards.hover.boxShadow};
        img {
            transform: scale(1.1);
        }
    }
`

export const BookImage = styled.div`
    overflow: hidden;

    img {
        transition: all 500ms;
        border-radius: 0.25rem;
        object-position: center;
        object-fit: cover;
    }
`

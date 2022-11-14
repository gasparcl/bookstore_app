import styled from "styled-components"

export const SeeMoreButton = styled.div`
    padding: 0.375rem 1rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition: all 200ms;
    cursor: pointer;
    border: 1px solid;
    border-color: ${(props) => props.theme.buttons.primary};

    &:hover {
        background: ${(props) => props.theme.buttons.hover.background};
        box-shadow: ${(props) => props.theme.buttons.hover.boxShadow};
    }
`

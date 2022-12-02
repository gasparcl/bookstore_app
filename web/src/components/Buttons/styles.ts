import styled from "styled-components"

export const Button = styled.button`
    padding: 0.375rem 1rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    transition: all 200ms;
    cursor: pointer;
    border: 1px solid;
    border-color: ${(props) => props.theme.buttons.primary};

    &:hover {
        background: ${(props) => props.theme.buttons.hover.background};
        box-shadow: ${(props) => props.theme.buttons.hover.boxShadow};
    }

    &.sm {
        padding: 0.25rem 0.5rem;
        font-size: 0.65rem;
    }

    &.lg {
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
    }
`

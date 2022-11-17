import styled from "styled-components"
import { Pagination } from "@mui/material"

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem;
    padding: 1.5rem 0;
    border-radius: 0.5rem;

    &.mobilePagination {
        width: 72.5vw;
    }
`

export const StyledPagination = styled(Pagination)`
    .MuiPaginationItem-outlined {
        border: 1px solid ${(props) => props.theme.buttons.primary};
    }

    .MuiPaginationItem-root {
        color: ${(props) => props.theme.primary};
    }

    .MuiPaginationItem-page:hover {
        background-color: ${(props) => props.theme.buttons.hover.lightenBg};
        box-shadow: ${(props) => props.theme.cards.hover.boxShadow};
    }

    .MuiPaginationItem-outlinedSecondary.Mui-selected {
        color: ${(props) => props.theme.primary};
        border: 1px solid ${(props) => props.theme.buttons.primary};
        background-color: ${(props) => props.theme.buttons.hover.lightenBg};
    }

    .MuiPaginationItem-outlinedSecondary.Mui-selected:hover,
    .MuiPaginationItem-outlinedSecondary.Mui-selected.Mui-focusVisible {
        background-color: ${(props) => props.theme.buttons.hover.background};
    }

    .css-1aczowp-MuiButtonBase-root-MuiPaginationItem-root:hover {
        background-color: ${(props) => props.theme.buttons.hover.lightenBg};
    }
`

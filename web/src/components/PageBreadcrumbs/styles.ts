import styled from "styled-components"
import { Link } from "react-router-dom"
import { Breadcrumbs } from "@mui/material"

export const BreadcrumbsList = styled(Breadcrumbs)`
    li {
        color: ${(props) => props.theme.text.white};
        font-weight: bold;
    }
`

export const BreadcrumbLinks = styled(Link)`
    &.disabled {
        pointer-events: none;
    }
`

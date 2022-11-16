import styled from "styled-components"
import Drawer from "@mui/material/Drawer"

export const DrawerBox = styled(Drawer)`
    .css-1160xiw-MuiPaper-root-MuiDrawer-paper {
        background: ${(props) => props.theme.background};
    }

    .MuiListItemIcon-root {
        color: ${(props) => props.theme.text.white};
    }

    .MuiListItemText-root {
        color: ${(props) => props.theme.text.white};
    }

    .MuiDivider-root {
        border-color: rgba(255, 255, 255, 0.1);
    }
`

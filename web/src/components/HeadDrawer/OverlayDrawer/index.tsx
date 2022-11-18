import { NavLink } from "react-router-dom"

import Box from "@mui/material/Box"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import HomeIcon from "@mui/icons-material/Home"
import Genre from "@mui/icons-material/LibraryBooks"
import Author from "@mui/icons-material/PersonSearch"
import Publisher from "@mui/icons-material/Villa"

import paths from "../../../consts/paths"

import { DrawerBox } from "../styles"
interface Props {
    isOpen: boolean
    setIsOpen: (arg: boolean) => void
}

type Anchor = "right"

export default function OverlayDrawer({ isOpen, setIsOpen }: Props) {
    const list = () => (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation"
        >
            <List>
                <NavLink to={paths.root}>
                    <ListItem key="Home" disablePadding>
                        <ListItemButton onClick={() => setIsOpen(false)}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            </List>
            <Divider />
            <List>
                {["Genres", "Authors", "Publishers"].map((text, index) => (
                    <NavLink
                        to={
                            index % 2 === 0 && index === 0
                                ? paths.genres.root
                                : index % 2 !== 0
                                ? paths.authors.root
                                : paths.publishers.root
                        }
                        key={text}
                    >
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setIsOpen(false)}>
                                <ListItemIcon>
                                    {index % 2 === 0 && index === 0 ? (
                                        <Genre />
                                    ) : index % 2 !== 0 ? (
                                        <Author />
                                    ) : (
                                        <Publisher />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </Box>
    )

    return (
        <DrawerBox
            anchor={"right"}
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            {list()}
        </DrawerBox>
    )
}

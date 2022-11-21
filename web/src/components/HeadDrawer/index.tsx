import { useEffect, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import InputBase from "@mui/material/InputBase"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"

import paths from "../../consts/paths"

import logo from "../../assets/bookCase_logo.png"
import OverlayDrawer from "./OverlayDrawer"
import { AppBarBox } from "./styles"
import SearchField from "../SearchField"
import usePagination from "../../hooks/usePagination"
import api from "../../services/api"
import apiEndPoints from "../../consts/apiEndPoints"

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

const StyledInputBase = styled(SearchField)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}))

export default function HeadDrawer() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const { state } = useLocation()
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const [searchBook, setSearchBook] = useState("")

    // ╔═╗╔═╗╔═╗╦╔╗╔╔═╗╔╦╗╦╔═╗╔╗╔
    // ╠═╝╠═╣║ ╦║║║║╠═╣ ║ ║║ ║║║║
    // ╩  ╩ ╩╚═╝╩╝╚╝╩ ╩ ╩ ╩╚═╝╝╚╝
    const {
        page,
        rowsPerPage,
        onPageChange,
        onRowsPerPageChange,
        calculateOffset,
        reset,
    } = usePagination({
        initialPage: state?.page,
        initialRowsPerpage: state?.pageSize,
    })

    const { data, isFetching, refetch } = useQuery(
        [
            "books",
            {
                page,
                rowsPerPage,
                search: searchBook,
            },
        ],
        async () => {
            const params = {}
            params.page = calculateOffset()
            params.pageSize = rowsPerPage
            params.filters = { title: searchBook }

            const response = await api.get(apiEndPoints.books.root, { params })
            const count = parseInt(response?.headers?.total_items)

            const books = response.data

            return { books, count }
        },
        {
            staleTime: 0,
            refetchOnWindowFocus: false,
        }
    )

    console.log(data?.books)

    return (
        <>
            <AppBarBox sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" className="px-10 py-4">
                    <Toolbar className="flex justify-between">
                        <NavLink
                            to={paths.root}
                            className="transition-all hover:scale-90"
                        >
                            <img src={logo} alt="logo" className="w-10/12" />
                        </NavLink>

                        <div className="flex items-center gap-10">
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    onSearch={setSearchBook}
                                />
                            </Search>

                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                                onClick={() => setOpen(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </AppBarBox>
            <OverlayDrawer isOpen={open} setIsOpen={setOpen} />
        </>
    )
}

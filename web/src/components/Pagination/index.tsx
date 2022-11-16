import { useMediaQuery, useTheme } from "@mui/material"
import { ChangeEventHandler } from "react"
import { PaginationContainer, StyledPagination } from "./styles"

interface PaginationProps {
    totalPages: number
    page: number
    handleChange: any
}

export default function Pagination({
    totalPages,
    handleChange,
    ...props
}: PaginationProps) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const theme = useTheme()
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <>
            <PaginationContainer
                className={IS_MOBILE ? "mobilePagination" : ""}
            >
                <StyledPagination
                    count={totalPages}
                    size={IS_MOBILE ? "small" : "medium"}
                    color={"secondary"}
                    variant="outlined"
                    onChange={handleChange}
                    {...props}
                />
            </PaginationContainer>
        </>
    )
}

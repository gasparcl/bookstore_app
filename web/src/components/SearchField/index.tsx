import { useState, useEffect } from "react"

import Clear from "@mui/icons-material/Clear"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"

import TextField from "../Textfield"
import { InputProps } from "@mui/material"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const SEARCH_TIMEOUT_DELAY_TIME = 1000 * 1 // 1 second

interface SearchProps {
    onSearch: (search: string) => void
    placeholder: string
}

interface inputProps extends InputProps {}

/** This component can only be used inside a `Form` */
export default function SearchField({ onSearch, ...props }: SearchProps) {
    const [search, setSearch] = useState("")

    useEffect(() => {
        let timeOut: undefined | number = undefined

        timeOut = setTimeout(() => {
            onSearch(search)
        }, SEARCH_TIMEOUT_DELAY_TIME)

        return () => {
            clearTimeout(timeOut)
        }
    }, [search])

    const handleChange = (e: any) => {
        const searchValue = e.target.value
        setSearch(searchValue)
    }

    const handleClear = () => setSearch("")

    return (
        <TextField
            value={search}
            onChange={handleChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleClear} size="small">
                            <Clear fontSize="small" />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            {...props}
        />
    )
}

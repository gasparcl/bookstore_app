import { ClipLoader } from "react-spinners"
import { Typography } from "@mui/material"

import { LoaderDiv } from "./styles"

interface LoaderProps {
    loaderText?: string
}

export default function Loader({ loaderText, ...props }: LoaderProps) {
    return (
        <>
            <LoaderDiv className="ResultsLoader" {...props}>
                <ClipLoader color="#1976d2" size={70} />
                <Typography
                    color="white"
                    variant="h5"
                    className="opacity-[0.87]"
                >
                    {loaderText}
                </Typography>
            </LoaderDiv>
        </>
    )
}

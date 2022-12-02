import { ButtonProps } from "@mui/material"
import { Button as Btn } from "../styles"

interface Props extends ButtonProps {
    label: string
    startIcon?: JSX.Element
    endIcon?: JSX.Element
}

export default function Button({ label, startIcon, endIcon, ...props }: Props) {
    return (
        <Btn {...props}>
            <span className="flex gap-2 items-center justify-center font-bold text-whiteText">
                {startIcon && startIcon}
                {label}
                {endIcon && endIcon}
            </span>
        </Btn>
    )
}

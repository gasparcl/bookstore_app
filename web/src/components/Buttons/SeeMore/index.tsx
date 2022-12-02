import SeeMoreIcon from "@mui/icons-material/Visibility"
import { ButtonProps } from "@mui/material"
import { Button } from "../styles"

interface Props extends ButtonProps {}

export default function SeeMore({ ...props }: Props) {
    return (
        <div className="mt-2">
            <Button {...props}>
                <span className="flex gap-2 items-center">
                    <SeeMoreIcon style={{ fontSize: "1rem" }} />
                    More details
                </span>
            </Button>
        </div>
    )
}

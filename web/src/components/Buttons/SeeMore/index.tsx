import SeeMoreIcon from "@mui/icons-material/Visibility"

import { SeeMoreButton } from "./styles"

export default function SeeMore() {
    return (
        <div className="mt-2">
            <SeeMoreButton>
                <span className="flex gap-2 items-center">
                    <SeeMoreIcon style={{ fontSize: "1rem" }} />
                    More details
                </span>
            </SeeMoreButton>
        </div>
    )
}

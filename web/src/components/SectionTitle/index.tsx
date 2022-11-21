import { ClassNamesProps } from "@emotion/react"
import { ClassNameMap } from "@mui/material"
import { TitleSection } from "./styles"

interface Props {
    description: string
    className?: string
}

export default function SectionTitle({ description, ...props }: Props) {
    return (
        <>
            <TitleSection {...props}>{description}</TitleSection>
        </>
    )
}

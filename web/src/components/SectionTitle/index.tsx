import { TitleSection } from "./styles"

interface Props {
    description: string
}

export default function SectionTitle({ description }: Props) {
    return (
        <>
            <TitleSection className="borderBottom">{description}</TitleSection>
        </>
    )
}

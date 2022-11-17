import { DataProps } from "../../components/BookCard"
import { BannerDiv, BannerImage } from "./styles"

interface Props {
    bookInfo: DataProps
}

export default function BookDetails({ bookInfo }: Props) {
    return (
        <>
            <div className="flex flex-col items-center">
                <BannerDiv>
                    <BannerImage
                        style={{
                            backgroundImage: bookInfo.url_image,
                        }}
                    />
                </BannerDiv>
            </div>
        </>
    )
}

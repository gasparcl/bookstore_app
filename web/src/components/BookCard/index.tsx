import SeeMore from "../Buttons/SeeMore"
import { BookCard, BookImage } from "./styles"

export interface DataProps {
    id: number
    title: string
    synopsis: string
    url_image: string
    name?: string
    description?: string
}

interface bookProps {
    book: DataProps
    isSlider?: boolean
}

export default function BookCards({ book, isSlider }: bookProps) {
    return (
        <BookCard
            className={`text-opacity-[0.87] ${
                isSlider ? "min-w-full" : "w-1/6"
            }`}
        >
            <BookImage>
                <img src={book.url_image} alt={book.title} />
            </BookImage>
            <p className="font-bold mt-2 text-ellipsis text-center text-sm min-h-[40px]">
                {book.title}
            </p>
            <SeeMore />
        </BookCard>
    )
}

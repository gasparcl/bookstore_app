import SeeMore from "../Buttons/SeeMore"
import { BookCard, BookImage } from "./styles"

interface dataProps {
    id: number
    title: string
    synopsis: string
    url_image: string
}

export interface BooksProps {
    data: Array<dataProps>
}

export default function Books({ data }: BooksProps) {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center gap-2">
                {data.map((book) => {
                    return (
                        <BookCard
                            key={book.id}
                            className=" text-opacity-[0.87] w-1/6"
                        >
                            <BookImage>
                                <img src={book.url_image} alt={book.title} />
                            </BookImage>
                            <p className="font-bold mt-2 text-ellipsis text-center">
                                {book.title}
                            </p>
                            <SeeMore />
                        </BookCard>
                    )
                })}
            </div>
        </>
    )
}

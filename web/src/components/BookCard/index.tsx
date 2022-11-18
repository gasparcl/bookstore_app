import { Link } from "react-router-dom"

import { scrollTop } from "../../services/utils"
import paths from "../../consts/paths"

import SeeMore from "../Buttons/SeeMore"
import { BookCard, BookImage } from "./styles"

export interface DataProps {
    id: number
    title: string
    synopsis: string
    url_image: string
    banner_url?: string
    // name?: string
    // description?: string
    release_date?: string
    page_count?: number
    language?: string
    isbn?: string
    author?: {
        id?: number
        name?: string
    }
    genre?: {
        id?: number
        description?: string
    }
    publisher?: {
        id?: number
        description?: string
    }
}

export interface bookProps {
    book: DataProps
    isSlider?: boolean
}

export default function BookCards({ book, isSlider }: bookProps) {
    const bookPath = paths.books.show.replace(":bookId", `${book.id}`)

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
            <Link to={bookPath}>
                <SeeMore onClick={scrollTop} />
            </Link>
        </BookCard>
    )
}

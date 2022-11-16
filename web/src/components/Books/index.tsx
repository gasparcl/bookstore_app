import { useEffect, useState } from "react"
import apiEndPoints from "../../consts/apiEndPoints"
import api from "../../services/api"

import SeeMore from "../Buttons/SeeMore"
import Loader from "../Loader"
import Pagination from "../Pagination"
import { BookCard, BookImage } from "./styles"

interface PageProps {
    _: object
    newPage: number
}
export interface DataProps {
    id: number
    title: string
    synopsis: string
    url_image: string
}

export interface BooksProps {
    url?: string
    data?: Array<DataProps>
}

export default function Books({ url, data }: BooksProps) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (url) {
            const initilizeData = async () => {
                try {
                    setIsLoading(true)
                    const response = await api.get(url, {
                        params: { page: page },
                    })
                    const books = response.data
                    console.log(response)
                    setBooks(books)
                } catch (err) {
                    console.log(err)
                } finally {
                    setIsLoading(false)
                }
            }
            initilizeData()
        } else {
            setIsLoading(false)
        }
    }, [url, page])

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleChangePage = (_: object, newPage: number) => {
        if (page !== newPage) setPage(newPage)
    }

    if (isLoading) return <Loader loaderText="Loading books..." />

    return (
        <>
            <div className="flex flex-wrap justify-center items-center gap-2">
                {data &&
                    data.map((book: DataProps) => {
                        return (
                            <BookCard
                                key={book.id}
                                className=" text-opacity-[0.87] w-1/6"
                            >
                                <BookImage>
                                    <img
                                        src={book.url_image}
                                        alt={book.title}
                                    />
                                </BookImage>
                                <p className="font-bold mt-2 text-ellipsis text-center text-sm min-h-[40px]">
                                    {book.title}
                                </p>
                                <SeeMore />
                            </BookCard>
                        )
                    })}
                {books &&
                    books.map((book: DataProps) => {
                        return (
                            <BookCard
                                key={book.id}
                                className=" text-opacity-[0.87] w-1/6"
                            >
                                <BookImage>
                                    <img
                                        src={book.url_image}
                                        alt={book.title}
                                    />
                                </BookImage>
                                <p className="font-bold mt-2 text-ellipsis text-center text-sm min-h-[40px]">
                                    {book.title}
                                </p>
                                <SeeMore />
                            </BookCard>
                        )
                    })}
                {url && (
                    <Pagination
                        handleChange={handleChangePage}
                        totalPages={10}
                        page={page}
                    />
                )}
            </div>
        </>
    )
}

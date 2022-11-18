import { useEffect, useState } from "react"

import api from "../../services/api"
import { scrollTop } from "../../services/utils"
import BookCards, { DataProps } from "../BookCard"

import Loader from "../Loader"
import Pagination from "../Pagination"

export interface PaginationProps {
    total_items: number
    total_pages: number
}

export interface BooksProps {
    url?: string
    data?: Array<DataProps> | []
}

export default function Books({ url, data, ...props }: BooksProps) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [paginationData, setPaginationData] = useState<PaginationProps>(
        {} as PaginationProps
    )
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (url) {
            const initilizeData = async () => {
                try {
                    setIsLoading(true)
                    const response = await api.get(url, {
                        params: { page: page },
                    })

                    const paginationData = {
                        total_items: Number(response.headers.total_items),
                        total_pages: Number(response.headers.total_pages),
                    }
                    const books = response.data

                    setPaginationData(paginationData)
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
        if (page !== newPage) {
            setPage(newPage)
            scrollTop()
        }
    }

    const hasPagination = paginationData?.total_pages > 1

    if (isLoading) return <Loader loaderText="Loading books..." />

    return (
        <>
            <div
                id="booksGrid"
                className="flex flex-wrap justify-center items-center gap-2"
                {...props}
            >
                {data &&
                    data.map((book: DataProps) => {
                        return <BookCards key={book.id} book={book} />
                    })}
                {books &&
                    books.map((book: DataProps) => {
                        return <BookCards key={book.id} book={book} />
                    })}
            </div>
            {url && (
                <>
                    {hasPagination && (
                        <Pagination
                            handleChange={handleChangePage}
                            totalPages={paginationData.total_pages}
                            page={page}
                        />
                    )}
                </>
            )}
        </>
    )
}

import { useEffect, useState } from "react"

import apiEndPoints from "../../consts/apiEndPoints"
import api from "../../services/api"
import { scrollTop } from "../../services/utils"

import { DataProps } from "../../components/BookCard"
import { PaginationProps } from "../../components/Books"
import Loader from "../../components/Loader"
import SectionTitle from "../../components/SectionTitle"
import Slider from "../../components/Slider"
import Pagination from "../../components/Pagination"
import { BooksGrid } from "./styles"

export interface AuthorProps {
    id: number
    name: string
    books: Array<DataProps>
}

export default function AuthorsPage() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [authors, setAuthors] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [paginationData, setPaginationData] = useState<PaginationProps>(
        {} as PaginationProps
    )
    const [page, setPage] = useState(1)

    useEffect(() => {
        const initilizeData = async () => {
            try {
                setIsLoading(true)
                const response = await api.get(apiEndPoints.authors.root, {
                    params: { page: page },
                })

                const paginationData = {
                    total_items: Number(response.headers.total_items),
                    total_pages: Number(response.headers.total_pages),
                }
                const authors = response.data

                setPaginationData(paginationData)
                setAuthors(authors)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        initilizeData()
    }, [page])

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

    if (isLoading) return <Loader loaderText="Loading authors page..." />

    return (
        <>
            {authors &&
                authors.map((author: AuthorProps) => {
                    return (
                        <div
                            className="flex flex-col items-center px-20"
                            key={author.id}
                        >
                            <SectionTitle description={author.name} />
                            {author.books.length > 4 ? (
                                <Slider data={author.books} />
                            ) : (
                                <BooksGrid data={author.books.slice(0, 15)} />
                            )}
                        </div>
                    )
                })}
            {hasPagination && (
                <Pagination
                    handleChange={handleChangePage}
                    totalPages={paginationData.total_pages}
                    page={page}
                />
            )}
        </>
    )
}

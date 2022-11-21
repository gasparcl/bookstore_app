import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import apiEndPoints from "../../consts/apiEndPoints"
import api from "../../services/api"

import Books from "../../components/Books"
import Loader from "../../components/Loader"
import SectionTitle from "../../components/SectionTitle"
import { paginateFromArr, scrollTop } from "../../services/utils"
import Pagination from "../../components/Pagination"
import { AuthorProps } from "../Authors"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const initialValues = {
    id: 0,
    name: "",
    books: [],
}
const LOADING_NEW_PAGE_TIMEOUT = 1000 * 0.75 // 0.75 seconds

export default function AuthorDetails() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const { authorId } = useParams()
    const [authorBooks, setAuthorBooks] = useState<AuthorProps>(initialValues)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const initilizeData = async () => {
            try {
                setIsLoading(true)
                const response = await api.get(
                    apiEndPoints.authors.author(authorId)
                )

                const authorBooks = response.data
                setAuthorBooks(authorBooks)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        initilizeData()
    }, [authorId])

    // ╔═╗╔═╗╔═╗╦╔╗╔╔═╗╔╦╗╦╔═╗╔╗╔
    // ╠═╝╠═╣║ ╦║║║║╠═╣ ║ ║║ ║║║║
    // ╩  ╩ ╩╚═╝╩╝╚╝╩ ╩ ╩ ╩╚═╝╝╚╝
    const ItemsPerPage = 15
    const PaginatedData = paginateFromArr(authorBooks.books, ItemsPerPage) || []

    const totalPages = PaginatedData.length

    const hasPagination = totalPages > 1
    const currentPage = page === 0 ? page + 1 : page

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleChangePage = (_: object, newPage: number) => {
        if (currentPage !== newPage) {
            setIsLoading(true)
            setPage(newPage)
            scrollTop()

            // set lazy loading timeout
            var timeOut: undefined | number = undefined
            timeOut = setTimeout(() => {
                setIsLoading(false)
            }, LOADING_NEW_PAGE_TIMEOUT)

            return () => clearTimeout(timeOut)
        }
    }

    if (isLoading) return <Loader loaderText="Loading author books..." />

    return (
        <>
            {authorBooks && (
                <div className="flex flex-col items-center">
                    <SectionTitle description={authorBooks.name} />
                    <Books data={PaginatedData[page !== 0 ? page - 1 : page]} />
                </div>
            )}
            {hasPagination && (
                <Pagination
                    handleChange={handleChangePage}
                    totalPages={totalPages}
                    page={currentPage}
                />
            )}
        </>
    )
}

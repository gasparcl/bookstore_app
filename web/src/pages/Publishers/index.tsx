import { useEffect, useState } from "react"

import apiEndPoints from "../../consts/apiEndPoints"
import api from "../../services/api"

import { DataProps } from "../../components/BookCard"
import { PaginationProps } from "../../components/Books"
import Loader from "../../components/Loader"
import Pagination from "../../components/Pagination"
import SectionTitle from "../../components/SectionTitle"
import Slider from "../../components/Slider"

export interface PublisherProps {
    id: number
    description: string
    books: Array<DataProps>
}

export default function PublishersPage() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [publishers, setPublishers] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [paginationData, setPaginationData] = useState<PaginationProps>(
        {} as PaginationProps
    )
    const [page, setPage] = useState(1)

    useEffect(() => {
        const initilizeData = async () => {
            try {
                setIsLoading(true)
                const response = await api.get(apiEndPoints.publishers.root, {
                    params: { page: page },
                })

                const paginationData = {
                    total_items: Number(response.headers.total_items),
                    total_pages: Number(response.headers.total_pages),
                }
                const publishers = response.data

                setPaginationData(paginationData)
                setPublishers(publishers)
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
        if (page !== newPage) setPage(newPage)
    }

    const hasPagination = paginationData?.total_pages > 1

    if (isLoading) return <Loader loaderText="Loading publishers page..." />

    return (
        <>
            {publishers &&
                publishers.map((publisher: PublisherProps) => {
                    return (
                        <>
                            <div
                                className="flex flex-col items-center px-20"
                                key={publisher.id}
                            >
                                <SectionTitle
                                    description={publisher.description}
                                />
                                <Slider data={publisher.books.slice(0, 15)} />
                            </div>
                        </>
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

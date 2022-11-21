import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import api from "../../services/api"
import apiEndPoints from "../../consts/apiEndPoints"

import { BannerDiv, BannerImage } from "./styles"
import { DataProps } from "../../components/BookCard"
import BookBoxes from "../../components/BookBoxes"
import Loader from "../../components/Loader"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const initialValues = {
    id: 0,
    title: "",
    synopsis: "",
    url_image: "",
    banner_url: "",
    name: "",
    description: "",
}

export default function BookDetails() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const { bookId } = useParams()
    const [bookDetails, setBookDetails] = useState<DataProps>(initialValues)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const initilizeData = async () => {
            try {
                setIsLoading(true)
                const response = await api.get(apiEndPoints.books.book(bookId))

                const bookDetails = response.data

                setBookDetails(bookDetails)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        initilizeData()
    }, [bookId])

    if (isLoading) return <Loader loaderText="Loading book details..." />

    return (
        <>
            <BookBoxes book={bookDetails} />
            <BannerDiv>
                <BannerImage
                    src={bookDetails.banner_url}
                    className="opacity-10 w-screen fixed object-cover object-center h-5/6 z-0 blur-[2px] bottom-0 left-0 right-0 top-28"
                />
            </BannerDiv>
        </>
    )
}

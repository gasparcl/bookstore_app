import { useEffect, useState } from "react"

import apiEndPoints from "../../consts/apiEndPoints"
import api from "../../services/api"

import Books from "../../components/Books"

export default function HomePage() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const initilizeData = async () => {
            try {
                const response = await api.get(apiEndPoints.books.root, {
                    params: { page: page },
                })
                const books = response.data.slice(0, 20)
                // console.log(response)
                setBooks(books)
            } catch (err) {
                console.log(err)
            }
        }
        initilizeData()
    }, [])

    // console.log(books)

    return (
        <>
            <Books data={books} />
        </>
    )
}

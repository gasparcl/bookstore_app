import { useEffect, useState } from "react"

import apiEndPoints from "../../consts/apiEndPoints"
import api from "../../services/api"

import Books from "../../components/Books"

export default function Home() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [books, setBooks] = useState([])

    useEffect(() => {
        const initilizeData = async () => {
            try {
                const response = await api.get(apiEndPoints.books.root, {
                    params: { page: 30 },
                })
                const books = response.data
                console.log(response)
                setBooks(books)
            } catch (err) {
                console.log(err)
            }
        }
        initilizeData()
    }, [])

    console.log(books)

    return (
        <>
            <Books data={books} />
        </>
    )
}

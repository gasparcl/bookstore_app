import { useEffect, useState } from "react"

import apiEndPoints from "./consts/apiEndPoints"
import api from "./services/api"

import Books from "./components/Books"

import "./App.css"

function App() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [books, setBooks] = useState([])

    useEffect(() => {
        const initilizeData = async () => {
            try {
                const response = await api.get(apiEndPoints.books.root)
                const books = response.data
                console.log(books)
                setBooks(books)
            } catch (err) {
                console.log(err)
            }
        }
        initilizeData()
    }, [])

    console.log(books)

    return (
        <div className="App">
            <h1>Hello World</h1>
            <Books data={books} />
        </div>
    )
}

export default App

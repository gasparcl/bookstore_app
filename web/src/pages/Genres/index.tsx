import { useEffect, useState } from "react"
import Books, { DataProps } from "../../components/Books"
import Loader from "../../components/Loader"
import SectionTitle from "../../components/SectionTitle"

import apiEndPoints from "../../consts/apiEndPoints"
import api from "../../services/api"

export interface GenreProps {
    id: number
    description: string
    books: Array<DataProps>
}

export default function GenresPage() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [genres, setGenres] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const initilizeData = async () => {
            try {
                setIsLoading(true)
                const response = await api.get(apiEndPoints.genres.root)
                const genres = response.data
                setGenres(genres)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        initilizeData()
    }, [])

    if (isLoading) return <Loader loaderText="Loading genres page..." />

    return (
        <>
            {genres &&
                genres.map((genre: GenreProps) => {
                    return (
                        <>
                            <div
                                className="flex flex-col items-center"
                                key={genre.id}
                            >
                                <SectionTitle description={genre.description} />
                                <Books data={genre.books} />
                            </div>
                        </>
                    )
                })}
        </>
    )
}

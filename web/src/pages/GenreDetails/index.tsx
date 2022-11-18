import { useParams } from "react-router-dom"

import Books from "../../components/Books"
import SectionTitle from "../../components/SectionTitle"
import apiEndPoints from "../../consts/apiEndPoints"

export default function GenreDetails() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const { id } = useParams()

    return (
        <>
            <div className="flex flex-col items-center">
                <SectionTitle description="All books" />
                <Books url={apiEndPoints.genres.genre(id)} />
            </div>
        </>
    )
}

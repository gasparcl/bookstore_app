import { useParams } from "react-router-dom"

import Books from "../../components/Books"
import SectionTitle from "../../components/SectionTitle"
import apiEndPoints from "../../consts/apiEndPoints"

export default function AuthorDetails() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const { id } = useParams()

    return (
        <>
            <div className="flex flex-col items-center">
                <SectionTitle description="All books" />
                <Books url={apiEndPoints.authors.author(id)} />
            </div>
        </>
    )
}

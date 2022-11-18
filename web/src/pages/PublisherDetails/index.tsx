import { useParams } from "react-router-dom"

import Books from "../../components/Books"
import SectionTitle from "../../components/SectionTitle"
import apiEndPoints from "../../consts/apiEndPoints"

export default function PublisherDetails() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const { id } = useParams()

    return (
        <>
            <div className="flex flex-col items-center">
                <SectionTitle description="All books" />
                <Books url={apiEndPoints.publishers.publisher(id)} />
            </div>
        </>
    )
}

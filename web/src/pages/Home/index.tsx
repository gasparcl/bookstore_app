import apiEndPoints from "../../consts/apiEndPoints"

import Books from "../../components/Books"
import SectionTitle from "../../components/SectionTitle"

export default function HomePage() {
    return (
        <>
            <div className="flex flex-col items-center">
                <SectionTitle description="All books" />
                <Books url={apiEndPoints.books.root} />
            </div>
        </>
    )
}

import apiEndPoints from "../../consts/apiEndPoints"

import Books from "../../components/Books"

export default function HomePage() {
    return (
        <>
            <Books url={apiEndPoints.books.root} />
        </>
    )
}

import styled from "styled-components"
import Books from "../../components/Books"

export const BooksGrid = styled(Books)`
    &#booksGrid {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
    }

    &#booksGrid > div {
        width: 21.5%;
    }
`

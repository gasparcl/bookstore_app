interface dataProps {
    id: number
    title: string
    body: string
}

export interface BooksProps {
    data: Array<dataProps>
}

export default function Books({ data }: BooksProps) {
    return (
        <>
            <h2>These books are fetched from API</h2>
            {data.map((book) => {
                return (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <p>{book.body}</p>
                    </div>
                )
            })}
        </>
    )
}

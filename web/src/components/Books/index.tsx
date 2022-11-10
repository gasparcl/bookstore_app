interface dataProps {
    id: number
    title: string
    synopsis: string
    url_image: string
}

export interface BooksProps {
    data: Array<dataProps>
}

export default function Books({ data }: BooksProps) {
    return (
        <>
            <div className="flex flex-wrap justify-between items-center">
                {data.map((book) => {
                    return (
                        <div
                            key={book.id}
                            className="text-white text-opacity-[0.87] flex flex-col gap-1 justify-center items-center w-1/4 mb-4 overflow-hidden"
                        >
                            <p>{book.title}</p>
                            <img
                                className="rounded"
                                src={book.url_image}
                                alt={book.title}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

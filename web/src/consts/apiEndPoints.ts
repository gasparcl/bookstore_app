export const apiEndPoints = {
    // Books
    books: {
        root: "books",
        book(id: string | undefined) {
            return `${this.root}/${id}`
        },
    },
    // Genres
    genres: {
        root: "genres",
        genre(id: string | undefined) {
            return `${this.root}/${id}`
        },
    },
    // Authors
    authors: {
        root: "authors",
        author(id: string | undefined) {
            return `${this.root}/${id}`
        },
    },
    // Publishers
    publishers: {
        root: "publishers",
        publisher(id: string | undefined) {
            return `${this.root}/${id}`
        },
    },
}

export default apiEndPoints

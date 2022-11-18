export const paths = {
    root: "/",
    // profile: {
    //     get root() {
    //         return `${paths.root}/usuario/:id?`
    //     },
    // },
    // BOOKS
    books: {
        get root() {
            return `${paths.root}books`
        },
        get show() {
            return `${this.root}/:bookId`
        },
    },
    // AUTHORS
    authors: {
        get root() {
            return `${paths.root}authors`
        },
        get show() {
            return `${this.root}/:authorId`
        },
    },
    // GENRES
    genres: {
        get root() {
            return `${paths.root}genres`
        },
        get show() {
            return `${this.root}/:genreId`
        },
    },
    // PUBLISHERS
    publishers: {
        get root() {
            return `${paths.root}publishers`
        },
        get show() {
            return `${this.root}/:publisherId`
        },
    },
}

export default paths

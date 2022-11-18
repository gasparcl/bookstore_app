import { Routes, Route } from "react-router-dom"
import paths from "../consts/paths"
import AuthorDetails from "../pages/AuthorDetails"
import AuthorsPage from "../pages/Authors"
import BookDetails from "../pages/BookDetails"
import GenreDetails from "../pages/GenreDetails"
import GenresPage from "../pages/Genres"
import HomePage from "../pages/Home"
import PublisherDetails from "../pages/PublisherDetails"
import PublishersPage from "../pages/Publishers"

export function AppRoutes() {
    return (
        <Routes>
            {/* MAIN PAGES */}
            {/* ROOT PATH (HOMEPAGE) GET ALL BOOKS */}
            <Route path={paths.root} element={<HomePage />} />
            <Route path={paths.books.root} element={<HomePage />} />
            <Route path={paths.genres.root} element={<GenresPage />} />
            <Route path={paths.authors.root} element={<AuthorsPage />} />
            <Route path={paths.publishers.root} element={<PublishersPage />} />

            {/* SHOW PAGES */}
            <Route path={paths.books.show} element={<BookDetails />} />
            <Route path={paths.authors.show} element={<AuthorDetails />} />
            <Route path={paths.genres.show} element={<GenreDetails />} />
            <Route
                path={paths.publishers.show}
                element={<PublisherDetails />}
            />
        </Routes>
    )
}

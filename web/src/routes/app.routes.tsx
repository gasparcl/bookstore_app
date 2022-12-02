import { Routes, Route } from "react-router-dom"
import ProtectedLayout from "../components/ProtectedLayout"
import paths from "../consts/paths"
import Login from "../pages/Auth/Login"
import SignUp from "../pages/Auth/SignUp"
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
        <>
            <Routes>
                {/* MAIN PAGES */}

                {/* ROOT PATH (HOMEPAGE) GET ALL BOOKS */}
                <Route path={paths.root} element={<HomePage />} />
                <Route path={paths.books.root} element={<HomePage />} />

                <Route
                    path={paths.genres.root}
                    element={
                        <ProtectedLayout>
                            <GenresPage />
                        </ProtectedLayout>
                    }
                />
                <Route
                    path={paths.authors.root}
                    element={
                        <ProtectedLayout>
                            <AuthorsPage />
                        </ProtectedLayout>
                    }
                />
                <Route
                    path={paths.publishers.root}
                    element={
                        <ProtectedLayout>
                            <PublishersPage />
                        </ProtectedLayout>
                    }
                />

                {/* SHOW PAGES */}
                <Route
                    path={paths.books.show}
                    element={
                        <ProtectedLayout>
                            <BookDetails />
                        </ProtectedLayout>
                    }
                />
                <Route
                    path={paths.authors.show}
                    element={
                        <ProtectedLayout>
                            <AuthorDetails />
                        </ProtectedLayout>
                    }
                />
                <Route
                    path={paths.genres.show}
                    element={
                        <ProtectedLayout>
                            <GenreDetails />
                        </ProtectedLayout>
                    }
                />
                <Route
                    path={paths.publishers.show}
                    element={
                        <ProtectedLayout>
                            <PublisherDetails />
                        </ProtectedLayout>
                    }
                />
            </Routes>

            <Routes>
                {/* AUTH PAGES */}
                <Route path={paths.auth.login.root} element={<Login />} />
                <Route path={paths.auth.signUp.root} element={<SignUp />} />
            </Routes>
        </>
    )
}

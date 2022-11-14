import { Routes, Route } from "react-router-dom"
import AuthorsPage from "../pages/Authors"
import GenresPage from "../pages/Genres"
import HomePage from "../pages/Home"
import PublishersPage from "../pages/Publishers"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/authors" element={<AuthorsPage />} />
            <Route path="/publishers" element={<PublishersPage />} />
        </Routes>
    )
}

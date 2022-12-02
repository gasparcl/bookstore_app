import { BrowserRouter as Router } from "react-router-dom"
import { Box, Container } from "@mui/material"

import { AppRoutes } from "./app.routes"
import HeadDrawer from "../components/HeadDrawer"
import PageBreadcrumbs from "../components/PageBreadcrumbs"

import bgImage from "../assets/bg-image.svg"

export default function Routes() {
    return (
        <Router>
            <HeadDrawer />
            <Box
                className="flex flex-1 flex-col"
                style={{
                    background: `url(${bgImage})`,
                    backgroundSize: "contain",
                }}
            >
                <Container
                    maxWidth="xl"
                    className="py-16 h-full"
                    style={{ minHeight: "calc(100vh - 96px)" }}
                >
                    <PageBreadcrumbs />
                    <AppRoutes />
                </Container>
            </Box>
        </Router>
    )
}

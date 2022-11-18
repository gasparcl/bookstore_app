import { BrowserRouter as Router } from "react-router-dom"
import { Box, Container } from "@mui/material"

import { AppRoutes } from "./app.routes"
import HeadDrawer from "../components/HeadDrawer"
import PageBreadcrumbs from "../components/PageBreadcrumbs"

export default function Routes() {
    return (
        <Router>
            <HeadDrawer />
            <Box className="bg-default-main flex flex-1 flex-col">
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

import { BrowserRouter as Router } from "react-router-dom"
import { Box, Container } from "@mui/material"

import { AppRoutes } from "./app.routes"
import HeadDrawer from "../components/HeadDrawer"
import PageBreadcrumbs from "../components/PageBreadcrumbs"

export default function Routes() {
    return (
        <Router>
            <HeadDrawer />
            <Box className="bg-default-main min-h-screen flex flex-1 flex-col overflow-hidden">
                <Container maxWidth="xl" className="py-16">
                    <PageBreadcrumbs />
                    <AppRoutes />
                </Container>
            </Box>
        </Router>
    )
}

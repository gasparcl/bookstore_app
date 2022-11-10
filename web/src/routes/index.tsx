import { BrowserRouter as Router } from "react-router-dom"
import { Box, Container } from "@mui/material"
import { AppRoutes } from "./app.routes"

export default function Routes() {
    return (
        <Router>
            <Box className="bg-[#151515] min-h-screen flex flex-1 flex-col overflow-hidden">
                <Container maxWidth="lg" className="py-16">
                    <AppRoutes />
                </Container>
            </Box>
        </Router>
    )
}

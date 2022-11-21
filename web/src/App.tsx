import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "styled-components"

import { queryClient } from "./services/queryClient"

import "./App.css"
import Routes from "./routes"
import theme from "./theme/theme"

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <Routes />
                </ThemeProvider>
            </QueryClientProvider>
        </>
    )
}

export default App

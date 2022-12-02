import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "styled-components"
import { Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { queryClient } from "./services/queryClient"
import { AuthProvider } from "./context/AuthProvider"

import "./App.css"
import Routes from "./routes"
import theme from "./theme/theme"

function App() {
    return (
        <>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider theme={theme}>
                        <Routes />
                    </ThemeProvider>
                </QueryClientProvider>
            </AuthProvider>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
        </>
    )
}

export default App

import { useNavigate } from "react-router-dom"
import { Container } from "@mui/material"

import { useAuth } from "../../../hooks/useAuth"
import { toast } from "react-toastify"

import Button from "../../../components/Buttons/Button"
import SectionTitle from "../../../components/SectionTitle"
import { FormInput } from "../styles"

export default function Login() {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = async (e: any, email: string, password: string) => {
        console.log(e.target)
        e.preventDefault()

        try {
            await auth.authenticate(email, password)
            navigate("/")
            toast.success("Logged in...")
        } catch (e) {
            console.log(e)
            toast.error("Invalid email or password")
        }
    }

    console.log(auth)

    return (
        <>
            <Container maxWidth="sm">
                <div className="text-center">
                    <SectionTitle description="access your account" />

                    <form
                        className="flex flex-col gap-6 border py-12 px-14  rounded bg-default-main bg-opacity-70"
                        onSubmit={handleLogin}
                    >
                        <FormInput type="email" label="e-mail" name="email" />
                        <FormInput
                            type="password"
                            label="password"
                            name="password"
                        />

                        <Button label="Login" className="lg mt-2" />
                    </form>
                </div>
            </Container>
        </>
    )
}

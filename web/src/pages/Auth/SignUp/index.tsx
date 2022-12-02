import { useNavigate } from "react-router-dom"
import { Container } from "@mui/material"

import { useAuth } from "../../../hooks/useAuth"

import Button from "../../../components/Buttons/Button"
import SectionTitle from "../../../components/SectionTitle"
import { FormInput } from "../styles"
import { toast } from "react-toastify"

export default function SignUp() {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleSignup = async (
        e: any,

        email: string,
        password: string,
        passwordConfirmation: string
    ) => {
        e.preventDefault()

        try {
            await auth.createAccount(email, password, passwordConfirmation)
            navigate("/")
            toast.success("Logged in...")
        } catch (e) {
            console.log(e)
            toast.error("Invalid email or password")
        }
    }

    return (
        <Container maxWidth="sm">
            <div className="text-center">
                <SectionTitle description="create your account" />

                <form
                    className="flex flex-col gap-6 border py-12 px-14 rounded bg-default-main bg-opacity-70"
                    onSubmit={handleSignup}
                >
                    <FormInput type="email" label="e-mail" name="email" />
                    <FormInput
                        type="password"
                        label="password"
                        name="password"
                    />
                    <FormInput
                        type="password"
                        label="password confirmation"
                        name="password_confirmation"
                    />

                    <Button label="Sign up" className="lg mt-2" />
                </form>
            </div>
        </Container>
    )
}

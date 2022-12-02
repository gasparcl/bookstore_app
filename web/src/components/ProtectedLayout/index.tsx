import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import Button from "../Buttons/Button"

export default function ProtectedLayout({
    children,
}: {
    children: JSX.Element
}) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const auth = useAuth()

    if (!auth.email) {
        return (
            <>
                <div className="mt-10 text-whiteText text-center">
                    <div className="my-4">
                        <h1 className="text-xl">You're not logged in...</h1>
                        <p className="text-sm">Log in or Create your account</p>
                    </div>
                    <div className="flex gap-2 text-sm items-center justify-center mb-8">
                        <Link to="/login">
                            <Button className="sm" label="Sign in" />
                        </Link>
                        or
                        <Link to="/sign-up">
                            <Button className="sm" label="Sign up" />
                        </Link>
                    </div>
                </div>
            </>
        )
    }
    return children
}

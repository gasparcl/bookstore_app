import { createContext, useEffect, useState } from "react"
import {
    getUserLocalStorage,
    LoginRequest,
    setUserLocalStorage,
    SignupRequest,
} from "../../services/utils"
import { IAuthProvider, IContext, IUser } from "./types"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage()

        if (user) setUser(user)
    }, [])

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const authenticate = async (email: string, password: string) => {
        const response = await LoginRequest(email, password)
        const payload = { token: response.token, email }

        setUser(payload)
        setUserLocalStorage(payload)
    }

    const createAccount = async (
        email: string,
        password: string,
        passwordConfirmation: string
    ) => {
        const response = await SignupRequest(
            email,
            password,
            passwordConfirmation
        )
        const payload = {
            token: response.token,
            email,
            password,
            passwordConfirmation,
        }

        setUser(payload)
        setUserLocalStorage(payload)
    }

    const logout = () => {
        setUser(null)
        setUserLocalStorage(null)
    }

    return (
        <AuthContext.Provider
            value={{ ...user, authenticate, createAccount, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

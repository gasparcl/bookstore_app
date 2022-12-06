/**
 * Void Function to make current page scroll up
 */

import { toast } from "react-toastify"
import { DataProps } from "../components/BookCard"
import { IUser } from "../context/AuthProvider/types"
import api, { authApi } from "./api"

const scrollTop = () => {
    let timeOut = <number | undefined>undefined
    timeOut = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, 200)

    return () => clearTimeout(timeOut)
}

/**
 * Function that returns capitalized paremeter string
 */
const capitalizeString = (string: string) => {
    if (string.length > 1) {
        const splittedString = string.replace("/", "").split("")
        splittedString[0] = splittedString[0].toUpperCase()

        const capitilizedString = splittedString.join("")

        return capitilizedString
    }

    return string
}

/**
 * Function to make pagination from array and slice it's items into groups of new arrays
 *
 */
const paginateFromArr = (arr: DataProps[], size: number) => {
    return arr.reduce((acc, val, i) => {
        let idx = Math.floor(i / size)
        //@ts-ignore
        let page = acc[idx] || (acc[idx] = [])
        //@ts-ignore
        page.push(val)

        return acc
    }, [])
}

/**
 * Function to save user to localStorage - Authentication
 *
 */
const setUserLocalStorage = (user: IUser | null) => {
    const jsonUser = JSON.stringify(user)

    // setted "u" as user key to obfuscate user info
    localStorage.setItem("u", jsonUser)
}

/**
 * Function to retrieve user from localStorage - Authentication
 *
 */
const getUserLocalStorage = () => {
    const jsonUser = localStorage.getItem("u")

    if (!jsonUser) return null

    const user = JSON.parse(jsonUser)
    return user ?? null
}

/**
 * Function to log in and log out users - Authentication
 *
 */
const LoginRequest = async (email: string, password: string) => {
    try {
        const request = await authApi.post("auth/login", { email, password })
        return request.data
    } catch (e) {
        console.log(e)
        return null
    }
}

/**
 * Function to create account for new users - Authentication
 *
 */
const SignupRequest = async (
    email: string,
    username: string,
    password: string,
    passwordConfirmation: string
) => {
    try {
        if (password === passwordConfirmation) {
            const request = await authApi.post("users", {
                email,
                username,
                password,
                passwordConfirmation,
            })
            toast.success("Account created with success!")
            return request.data
        } else
            toast.error("Password and password confirmation must be identical")
    } catch (e) {
        console.log(e)
        toast.error("Something went wrong. Try again later...")
        return null
    }
}

export {
    scrollTop,
    capitalizeString,
    paginateFromArr,
    setUserLocalStorage,
    getUserLocalStorage,
    LoginRequest,
    SignupRequest,
}

export interface IUser {
    email?: string
    token?: string
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>
    createAccount: (
        email: string,
        password: string,
        passwordConfirmation: string
    ) => Promise<void>
    logout: () => void
}

export interface IAuthProvider {
    children: JSX.Element
}

/**
 * Void Function to make current page scroll up
 */

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

export { scrollTop, capitalizeString }

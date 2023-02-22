// import { conformToMask } from "react-text-mask"
// import { cnpj, cpf, telefoneCelular, telefoneFixo, cep } from "../consts/regexp"
// import { unmask } from "../services/masks"

const LOCALE = "pt-BR"

const formats = (value: number | string) => ({
    toDecimal: ({ decimalCases = 2, ...other } = {}) => {
        if (!value) return value
        return `${Number(value).toLocaleString(LOCALE, {
            minimumFractionDigits: decimalCases,
            maximumFractionDigits: decimalCases,
            ...other,
        })}`
    },
    // toPercent: (float: number) => {
    //     return parseFloat(value * 100).toFixed(float) + "%"
    // },
    // toCNPJ: () => {
    //     switch (typeof value) {
    //         case "string":
    //             return conformToMask(value, cnpj.array).conformedValue
    //         default:
    //             return value
    //     }
    // },
    // toCPF: () => {
    //     switch (typeof value) {
    //         case "string":
    //             return conformToMask(value, cpf.array).conformedValue
    //         default:
    //             return value
    //     }
    // },
    // toCNPJorCPF: () => {
    //     switch (typeof value) {
    //         case "string":
    //             const mask = value.length === 11 ? cpf.array : cnpj.array
    //             if (value.length >= 11)
    //                 return conformToMask(value, mask).conformedValue
    //             else return value
    //         default:
    //             return value
    //     }
    // },
    // toTelefone: () => {
    //     switch (typeof value) {
    //         case "string": {
    //             if (unmask(value).length > 10)
    //                 return conformToMask(value, telefoneCelular.array)
    //                     .conformedValue

    //             return conformToMask(value, telefoneFixo.array).conformedValue
    //         }
    //         default:
    //             return value
    //     }
    // },
    // toCep: () => {
    //     switch (typeof value) {
    //         case "string": {
    //             return conformToMask(value, cep.array).conformedValue
    //         }
    //         default:
    //             return value
    //     }
    // },
    toSimpleDate: () => {
        return new Date(value).toLocaleDateString(LOCALE)
    },
    toDate: () => {
        switch (typeof value) {
            case "string":
                return new Date(value).toLocaleDateString(LOCALE, {
                    hour: "2-digit",
                    minute: "2-digit",
                })
            default:
                return value
        }
    },
    toTimeDate: ({ ...options } = {}) => {
        switch (typeof value) {
            case "string":
                return new Date(value).toLocaleTimeString(LOCALE, {
                    ...options,
                })
            default:
                return value
        }
    },
    toISOString: () => {
        switch (typeof value) {
            case "string":
                return new Date(value).toISOString().slice(0, 10)
            default:
                return value
        }
    },
})

export const formatter = (value: string | number) => formats(value)
export default formatter

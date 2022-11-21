import PropTypes from "prop-types"
import { TextFieldProps } from "@mui/material/TextField"
import TextMaskCustom from "../TextMaskCustom"
import { StyledTextField } from "./styles"
import { InputProps } from "@mui/material"
import { mergeAll, mergeDeepWith } from "ramda"

interface Props {
    textMaskProps?:
        | {
              mask?: Array<string | any> | Function
          }
        | any
    InputProps?: any
    inputProps?: any
    value?: string
    onChange?: (e: any) => void
}

export default function TextField({ textMaskProps, ...textFieldProps }: Props) {
    return (
        <StyledTextField
            {...textFieldProps}
            InputProps={mergeDeepWith(
                textMaskProps ? { inputComponent: TextMaskCustom } : {},
                textFieldProps.InputProps || {}
            )}
            inputProps={mergeDeepWith(
                textMaskProps,
                textFieldProps.inputProps || {}
            )}
        />
    )
}

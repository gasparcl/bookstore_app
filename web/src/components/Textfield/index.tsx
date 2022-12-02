import { TextFieldProps } from "@mui/material/TextField"
import TextMaskCustom from "../TextMaskCustom"
import { StyledTextField } from "./styles"
import { InputProps } from "@mui/material"
import { mergeAll, mergeDeepWith } from "ramda"

interface Props extends InputProps {
    textMaskProps?:
        | {
              mask?: Array<string | any> | Function
          }
        | any
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

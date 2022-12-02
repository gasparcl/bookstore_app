import styled from "styled-components"
import TextField from "../../components/Textfield"

export const FormInput = styled(TextField)`
    padding: 0 0.25rem;

    .MuiInputBase-input {
        color: rgba(255, 255, 255, 0.87);
    }

    .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
        color: rgba(255, 255, 255, 0.42);
    }

    .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.42);
    }

    .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
        color: rgba(255, 255, 255, 0.42);
    }
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover
        .MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.87);
    }
`

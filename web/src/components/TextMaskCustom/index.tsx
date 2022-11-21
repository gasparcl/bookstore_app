import MaskedInput from "react-text-mask"

interface TextMaskInterface {
    inputRef: Function | any
    mask: Array<string> | any
}

export default function TextMaskCustom({
    inputRef,
    mask,
    ...props
}: TextMaskInterface) {
    return (
        <MaskedInput
            {...props}
            placeholderChar={"\u2000"}
            mask={mask}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null)
            }}
        />
    )
}

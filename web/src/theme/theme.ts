export type ThemeType = typeof colors // This is the type definition for my theme object.

export const colors = {
    primary: "#1976d2",
    text: {
        primary: "rgba(0, 0, 0, 0.87)",
        white: "rgba(255, 255, 255, 0.87)",
    },
    background: "#11151c",
    buttons: {
        primary: "rgba(15, 118, 110, 0.5)",
        hover: {
            background: "rgba(15, 118, 110, 0.25)",
            boxShadow: "0px 0px 10px 1px rgba(15, 118, 110, 0.5)",
        },
    },
    cards: {
        background: "rgba(51, 65, 85, .1)",
        hover: {
            boxShadow: "0px 0px 2px 1px rgba(15, 118, 110, 0.5)",
        },
    },
}
// export const dark: ThemeType = {
//   primary: ...
//   ...
// }

const theme = colors // set the light theme as the default.
export default theme

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: "Roboto, sans-serif",
            },
            colors: {
                "default-main": "#151515",
            },
        },
    },
    plugins: [],
}

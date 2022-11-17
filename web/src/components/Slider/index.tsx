import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useMediaQuery, useTheme } from "@mui/material"

import { BooksProps } from "../Books"
import BookCards, { DataProps } from "../BookCard"

export default function Slider({ data }: BooksProps) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const theme = useTheme()
    const IS_TABLET_XL = useMediaQuery(theme.breakpoints.between("sm", "md"))
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        renderMode: "performance",
        slides: {
            perView: IS_MOBILE ? 1.5 : IS_TABLET_XL ? 2.5 : 4.5,
            spacing: 0,
        },
    })

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                {data &&
                    data.map((book: DataProps) => {
                        return (
                            <div
                                key={book.id}
                                className="keen-slider__slide rounded p-1 mb-2"
                            >
                                <BookCards book={book} isSlider />
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

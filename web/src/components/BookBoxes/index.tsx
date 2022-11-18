import formatter from "../../services/formatter"
import { bookProps } from "../BookCard"
import { BookBox, BookImageContainer } from "./styles"

export default function BookBoxes({ book: bookDetails }: bookProps) {
    return (
        <div className="flex flex-col items-center gap-2 z-[9] relative">
            <div className="flex flex-col items-center gap-2 max-w-[840px] w-full">
                <div className="flex justify-center items-center w-full gap-2">
                    <BookBox>
                        <h2 className="text-whiteText text-xl font-bold">
                            {bookDetails.title}
                        </h2>
                        <BookImageContainer>
                            <img src={bookDetails.url_image} />
                        </BookImageContainer>
                    </BookBox>
                    <BookBox className="description">
                        <span className="text-whiteText text-sm">
                            Original Title: <b>{bookDetails.title}</b>
                        </span>
                        <span className="text-whiteText text-sm">
                            Genre: <b>{bookDetails.genre?.description}</b>
                        </span>
                        <span className="text-whiteText text-sm">
                            Author: <b>{bookDetails.author?.name}</b>
                        </span>
                        <span className="text-whiteText text-sm">
                            Publisher:{" "}
                            <b>{bookDetails.publisher?.description}</b>
                        </span>
                        <span className="text-whiteText text-sm">
                            Release Date:{" "}
                            <b>
                                {formatter(
                                    bookDetails?.release_date || ""
                                ).toSimpleDate()}
                            </b>
                        </span>
                        <span className="text-whiteText text-sm">
                            Original Language: <b>{bookDetails.language}</b>
                        </span>
                        <span className="text-whiteText text-sm">
                            Nº of pages: <b>{bookDetails.page_count}</b>
                        </span>
                        <span className="text-whiteText text-sm">
                            ISBN: <b>{bookDetails.isbn}</b>
                        </span>
                    </BookBox>
                </div>
                <BookBox className="synopsis">
                    <span className="text-whiteText text-base">
                        <p className="font-bold">Synopsis:</p>
                        <div className="pl-4 mt-2">{bookDetails.synopsis}</div>
                    </span>
                </BookBox>
            </div>
        </div>
    )
}

import { useMemo } from "react"
import { useLocation } from "react-router-dom"

import paths from "../../consts/paths"
import { capitalizeString } from "../../services/utils"

import { BreadcrumbLinks, BreadcrumbsList } from "./styles"

export default function PageBreadcrumbs() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const path = useLocation()
    let currentLocation = path.pathname
    const displayLocation = capitalizeString(currentLocation)
    const hasMultipleChildren =
        displayLocation && displayLocation.split("/").length > 1

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleShowBreadcrumbsChildren = useMemo(() => {
        if (hasMultipleChildren) {
            const locationsArr = displayLocation?.split("/")
            const formattedLocationsArr = locationsArr.map((location) =>
                capitalizeString(location)
            )
            const arrLastIndex = formattedLocationsArr.length - 1
            const isArrLastIndex = (index: number) => arrLastIndex === index

            return (
                <div>
                    {formattedLocationsArr.map((item, i) => {
                        return (
                            <BreadcrumbLinks
                                key={i}
                                to={`/${item?.toLowerCase()}`}
                                className={
                                    isArrLastIndex(i) || item === "Books"
                                        ? "disabled"
                                        : ""
                                }
                            >
                                {isArrLastIndex(i) ? item : `${item}  /  `}
                            </BreadcrumbLinks>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <BreadcrumbLinks className="disabled" to={currentLocation}>
                    {displayLocation}
                </BreadcrumbLinks>
            )
        }
    }, [currentLocation])

    const breadcrumb = useMemo(() => {
        return (
            <div className="mb-8 mt-[-2rem] z-[9] relative block">
                {currentLocation.length > 1 && (
                    <div role="presentation">
                        <BreadcrumbsList aria-label="breadcrumb">
                            <BreadcrumbLinks to={paths.root}>
                                Home
                            </BreadcrumbLinks>
                            {handleShowBreadcrumbsChildren}
                        </BreadcrumbsList>
                    </div>
                )}
            </div>
        )
    }, [currentLocation])

    return breadcrumb
}

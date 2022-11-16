import { useMemo } from "react"
import { useLocation } from "react-router-dom"

import { BreadcrumbLinks, BreadcrumbsList } from "./styles"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const capitalizeString = (string: string) => {
    if (string.length > 1) {
        const splittedString = string.replace("/", "").split("")
        splittedString[0] = splittedString[0].toUpperCase()

        const capitilizedString = splittedString.join("")

        return capitilizedString
    }

    return
}

export default function PageBreadcrumbs() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const path = useLocation()
    let currentLocation = path.pathname
    const displayLocation = capitalizeString(currentLocation)

    const breadcrumb = useMemo(() => {
        return (
            <div className="mb-8 mt-[-2rem]">
                {currentLocation.length > 1 && (
                    <div role="presentation">
                        <BreadcrumbsList aria-label="breadcrumb">
                            <BreadcrumbLinks to="/">Home</BreadcrumbLinks>
                            <BreadcrumbLinks
                                className="disabled"
                                to={currentLocation}
                            >
                                {displayLocation}
                            </BreadcrumbLinks>
                        </BreadcrumbsList>
                    </div>
                )}
            </div>
        )
    }, [currentLocation])

    return breadcrumb
}

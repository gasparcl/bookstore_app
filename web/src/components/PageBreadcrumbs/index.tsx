import { useMemo } from "react"
import { Link, useLocation } from "react-router-dom"

import Typography from "@mui/material/Typography"
import Breadcrumbs from "@mui/material/Breadcrumbs"

import { BreadcrumbLinks, BreadcrumbsList } from "./styles"

export default function PageBreadcrumbs() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const path = useLocation()
    let currentLocation = path.pathname

    const breadcrumb = useMemo(() => {
        return (
            <>
                {currentLocation.length > 1 && (
                    <div role="presentation">
                        <BreadcrumbsList aria-label="breadcrumb">
                            <BreadcrumbLinks to="/">HOME</BreadcrumbLinks>
                            <BreadcrumbLinks
                                className="disabled"
                                to={currentLocation}
                            >
                                {currentLocation.replace("/", "").toUpperCase()}
                            </BreadcrumbLinks>
                        </BreadcrumbsList>
                    </div>
                )}
            </>
        )
    }, [path])

    return breadcrumb
}

import { useCallback, useState } from "react"

export default function usePagination({
    initialPage = 0,
    initialRowsPerpage = 10,
} = {}) {
    const [page, setPage] = useState(initialPage)
    const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerpage)

    /** TablePagination event handler: used for change current page */
    const onPageChange = (_: object, newPage: number) => setPage(newPage)

    /** TablePagination event handler: used for change current page limiter */
    const onRowsPerPageChange = (e: any) => {
        const value = e.target.value
        setRowsPerPage(parseInt(value, 10))
        setPage(0)
    }

    /** Used for calculate current records */
    const calculateNewPaginatorData = (records: object[]) => {
        const startIndex = page * rowsPerPage
        const lastIndex = startIndex + rowsPerPage

        const totalPages = Math.ceil(records.length / rowsPerPage)
        const currentPageRecords = records.slice(startIndex, lastIndex)

        return {
            totalPages,
            currentPageRecords,
        }
    }

    const calculateOffset = () => {
        const offset = page * rowsPerPage
        return offset <= 0 ? 0 : offset
    }

    /** Used for reseting pagination state */
    const reset = useCallback(() => {
        setRowsPerPage(initialRowsPerpage)
        setPage(initialPage)
    }, [initialRowsPerpage, initialPage])

    return {
        page,
        rowsPerPage,
        onPageChange,
        onRowsPerPageChange,
        calculateNewPaginatorData,
        calculateOffset,
        reset,
    }
}

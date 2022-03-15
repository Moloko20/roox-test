import React from 'react'

import { Button } from '../UI/Button'

import { Context } from 'Contexts/context'

const buttonsTitles = ['по городу', 'по компании']

export function SortListComponent() {
    const context = React.useContext(Context)

    const btnSortCity = React.useCallback(() => {
        context.sortByCity()
    }, [])

    const btnSortCompany = React.useCallback(() => {
        context.sortByCompany()
    }, [])

    require('./index.scss')

    return (
        <aside className="sortlist">
            <h2>Сортировка</h2>
            <Button title={buttonsTitles[0]} btnClick={btnSortCity} />
            <Button title={buttonsTitles[1]} btnClick={btnSortCompany} />
        </aside>
    )
}

export const SortList = React.memo(SortListComponent)
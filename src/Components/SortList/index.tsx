import React from 'react'

import { Button } from '../UI/Button'

import { Context } from 'Contexts/context'

const buttonsTitles = ['по городу', 'по компании']

export function SortListComponent() {
    const sorting = React.useContext(Context)

    const btnHendlerProp = React.useCallback((title: string) => {
        sorting(title)
    }, [])

    require('./index.scss')

    console.log('rerender sortlist')

    return (
        <aside className="sortlist">
            <h2>Сортировка</h2>
            <Button title={buttonsTitles[0]} btnClick={btnHendlerProp} />
            <Button title={buttonsTitles[1]} btnClick={btnHendlerProp} />
        </aside>
    )
}

export const SortList = React.memo(SortListComponent)
import React from 'react'
import { Button } from '../UI/Button'

const buttonsTitles = ['по городу', 'по компании']

export function SortList() {
    require('./index.scss')

    return (
        <aside className="sortlist">
            <h2>Сортировка</h2>
            <Button title={buttonsTitles[0]} />
            <Button title={buttonsTitles[1]} />
        </aside>
    )
}

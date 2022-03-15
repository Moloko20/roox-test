import React from 'react'

type ButtonProps = {
    title: string
    btnClick: (title: string) => void
    btnClass?: string
}

export function ButtonComponent({ title, btnClick, btnClass = '' }: ButtonProps) {
    const btnHendler = () => {
        btnClick(title)
    }

    const nameClass = `button ${btnClass}`

    require('./index.scss')

    return (
        <button className={nameClass} onClick={btnHendler}>
            {title}
        </button>
    )
}

export const Button = React.memo(ButtonComponent)
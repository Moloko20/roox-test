import React from 'react'

type ButtonProps = {
    title: string
    btnClick: (title: string) => void
    btnClass?: string
    btnDisabled?: true | false
}

export function ButtonComponent({ title, btnClick, btnClass = '', btnDisabled }: ButtonProps) {
    const btnHendler = () => {
        btnClick(title)
    }

    const nameClass = `button ${btnClass}`

    require('./index.scss')

    return (
        <button className={nameClass} onClick={btnHendler} disabled={btnDisabled}>
            {title}
        </button>
    )
}

export const Button = React.memo(ButtonComponent)
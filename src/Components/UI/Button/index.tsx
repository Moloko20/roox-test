import React from 'react'

type ButtonProps = {
    title: string
    btnClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    btnClass?: string
    btnDisabled?: true | false
    btnType?: 'button' | 'submit' | 'reset'
}

export function ButtonComponent({
    title,
    btnClick,
    btnClass = '',
    btnDisabled,
    btnType = 'button',
}: ButtonProps) {
    const btnHendler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        btnClick()
    }

    const nameClass = `button ${btnClass}`

    require('./index.scss')

    return (
        <button className={nameClass} onClick={btnHendler} disabled={btnDisabled} type={btnType}>
            {title}
        </button>
    )
}

export const Button = React.memo(ButtonComponent)
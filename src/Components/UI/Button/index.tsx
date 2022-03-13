import React from 'react'

type ButtonProps = {
    title: string
    btnClick: (title: string) => void
}

export function ButtonComponent({ title, btnClick }: ButtonProps) {
    const btnHendler = () => {
        btnClick(title)
    }

    console.log('rerender btn')

    require('./index.scss')

    return (
        <button className="button" onClick={btnHendler}>
            {title}
        </button>
    )
}

export const Button = React.memo(ButtonComponent)
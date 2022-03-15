import React from 'react'

type InputTypeProps = {
    inputTitle: string
    inputType: string
}

export function Input({ inputTitle, inputType }: InputTypeProps) {
    require('./index.scss')

    const editHandler = () => {}

    let input

    switch (inputType) {
        case 'text':
            input = <input type="text" className="input__field" onClick={editHandler} />
            break

        case 'textarea':
            input = (
                <textarea className="input__field input__field--textarea" onClick={editHandler} />
            )
            break

        default:
            break
    }

    return (
        <div className="input">
            <span className="input__title">{inputTitle}</span>
            {input}
        </div>
    )
}

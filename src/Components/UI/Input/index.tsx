import React from 'react'

type InputTypeProps = {
    inputTitle: string
    inputType: string
    inputValue: string
    inputStatus: true | false
}

export function Input({ inputTitle, inputType, inputValue = '', inputStatus }: InputTypeProps) {
    require('./index.scss')

    const editHandler = () => {}

    let input

    switch (inputType) {
        case 'text':
            input = (
                <input
                    type="text"
                    className="input__field"
                    onChange={editHandler}
                    defaultValue={inputValue}
                    disabled={inputStatus}
                />
            )
            break

        case 'textarea':
            input = (
                <textarea
                    className="input__field input__field--textarea"
                    onChange={editHandler}
                    disabled={inputStatus}
                />
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

import React from 'react'

type InputTypeProps = {
    inputTitle: string
    inputType: string
}

export function Input({ inputTitle, inputType }: InputTypeProps) {
    require('./index.scss')

    const editHandler = () => {}

    let className = 'input__field'

    if (inputType === 'textarea') {
        className += ' input__field--textarea'
    }

    return (
        <div className="input">
            <span className="input__title">{inputTitle}</span>
            <input type={inputType} className={className} onClick={editHandler} />
        </div>
    )
}

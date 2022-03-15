import React from 'react'

type InputTypeProps = {
    inputTitle: string
    inputType: string
    inputValue: string
    inputStatus: true | false
    inputRequired: true | false
    inputChange: (value: string, title: string) => void
}

type inputEventType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

export function InputComponent({
    inputTitle,
    inputType,
    inputValue = '',
    inputStatus,
    inputRequired,
    inputChange,
}: InputTypeProps) {
    const [inputError, setInputError] = React.useState(false)

    const editHandler = React.useCallback((event: inputEventType) => {
        if (inputRequired && !event.target.value) {
            setInputError(true)
        } else {
            setInputError(false)
        }

        inputChange(event.target.value, event.target.title)
    }, [])

    let input

    switch (inputType) {
        case 'text':
            input = (
                <input
                    type="text"
                    className={inputError ? 'input__field input__field--error' : 'input__field'}
                    onChange={editHandler}
                    defaultValue={inputValue}
                    disabled={inputStatus}
                    required={inputRequired}
                    title={inputTitle}
                />
            )
            break

        case 'textarea':
            input = (
                <textarea
                    className={
                        inputError
                            ? 'input__field input__field--error input__field--textarea'
                            : 'input__field input__field--textarea'
                    }
                    onChange={editHandler}
                    disabled={inputStatus}
                    required={inputRequired}
                    title={inputTitle}
                />
            )
            break

        default:
            break
    }

    require('./index.scss')

    return (
        <div className="input">
            <span className="input__title">{inputTitle}</span>
            {input}
        </div>
    )
}

export const Input = React.memo(InputComponent)
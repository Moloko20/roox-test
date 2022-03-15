import React from 'react'

import { Button } from 'Components/UI/Button'
import { Input } from 'Components/UI/Input'
import { UserType } from 'Components/UserItem'

import { formContext } from 'Contexts/formContext'

type ProfileProps = {
    user: UserType
}

type inputProp = {
    title: string
    type: string
    value: string
    required: true | false
}

export function Profile({ user }: ProfileProps) {
    const [isDisabled, setIsDisabled] = React.useState(true)
    const formData = React.useContext(formContext)

    const inputs: inputProp[] = [
        {
            title: 'Name',
            type: 'text',
            value: user?.name,
            required: true,
        },
        {
            title: 'User name',
            type: 'text',
            value: user?.username,
            required: true,
        },
        {
            title: 'E-mail',
            type: 'text',
            value: user?.email,
            required: true,
        },
        {
            title: 'Street',
            type: 'text',
            value: user?.address.street,
            required: true,
        },
        {
            title: 'City',
            type: 'text',
            value: user?.address.city,
            required: true,
        },
        {
            title: 'Zip code',
            type: 'text',
            value: user?.address.zipcode,
            required: true,
        },
        {
            title: 'Phone',
            type: 'text',
            value: user?.phone,
            required: true,
        },
        {
            title: 'Website',
            type: 'text',
            value: user?.website,
            required: true,
        },
        {
            title: 'Comment',
            type: 'textarea',
            value: '',
            required: false,
        },
    ]

    React.useEffect(() => {
        formData.setInputs(inputs)
    }, [])

    const editHandler = () => {
        setIsDisabled(false)
    }

    const validate = () => {
        return formData.inputs.find((input: inputProp) =>
            input.required ? input.value === '' : false,
        )
    }

    const sendHandler = () => {
        if (!validate()) {
            console.log(JSON.stringify(formData.inputs))
        } else {
            console.log('Something is wrong!')
        }
    }

    const inputOnChange = (inputValue: string, title: string) => {
        formData.setInputValue(inputValue, title)
    }

    require('./index.scss')
    require('../UsersList/index.scss')

    return (
        <div className="userslist">
            <form className="profile">
                <div className="profile-header">
                    <h1>Профиль пользователя</h1>
                    <Button
                        title={'Редактировать'}
                        btnClick={editHandler}
                        btnClass={'button--edit'}
                    />
                </div>
                <div className="profile-body">
                    {inputs.map((input, index) => (
                        <Input
                            key={index}
                            inputTitle={input.title}
                            inputType={input.type}
                            inputValue={input.value}
                            inputStatus={isDisabled}
                            inputRequired={input.required}
                            // inputError={input.error}
                            inputChange={inputOnChange}
                        />
                    ))}
                </div>
                <div className="profile-footer">
                    <Button
                        title={'Отправить'}
                        btnClick={sendHandler}
                        btnClass={'button--send'}
                        btnDisabled={isDisabled}
                        btnType={'submit'}
                    />
                </div>
            </form>
        </div>
    )
}

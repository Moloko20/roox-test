import React from 'react'

import { Button } from 'Components/UI/Button'
import { Input } from 'Components/UI/Input'

const inputs = [
    {
        title: 'Name',
        type: 'text',
    },
    {
        title: 'User name',
        type: 'text',
    },
    {
        title: 'E-mail',
        type: 'text',
    },
    {
        title: 'Street',
        type: 'text',
    },
    {
        title: 'City',
        type: 'text',
    },
    {
        title: 'Zip code',
        type: 'text',
    },
    {
        title: 'Phone',
        type: 'text',
    },
    {
        title: 'Website',
        type: 'text',
    },
    {
        title: 'Comment',
        type: 'textarea',
    },
]

export function Profile() {
    require('./index.scss')
    require('../UsersList/index.scss')

    const editHandler = () => {}

    return (
        <div className="userslist">
            <div className="profile">
                <div className="profile-header">
                    <h1>Профиль пользователя</h1>
                    <Button
                        title={'Редактировать'}
                        btnClick={editHandler}
                        btnClass={'button--edit'}
                    />
                </div>
                <div className="profile-body">
                    {inputs.map(input => (
                        <Input inputTitle={input.title} inputType={input.type} />
                    ))}
                </div>
                <div className="profile-footer">
                    <Button title={'Отправить'} btnClick={editHandler} btnClass={'button--edit'} />
                </div>
            </div>
        </div>
    )
}

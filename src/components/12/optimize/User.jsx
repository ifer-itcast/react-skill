import React from 'react';
import withFetch from './WithFetch';

const User = withFetch('https://randomuser.me/api/')(props => {
    return (
        <h1>邮箱：{props.data.results[0].email} 年龄：{props.age}</h1>
    );
});

export default User;
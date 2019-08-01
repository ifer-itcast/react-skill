import React from 'react';
import axios from 'axios';
React.Component.prototype.$http = axios;
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/api';
axios.defaults.transformRequest = [function(data, headers) {
    const arr = [];
    for(let attr in data) {
        arr.push(`${attr}=${data[attr]}`); // ['name=ifer', 'age=18']
    }
    return arr.join('&');
}];
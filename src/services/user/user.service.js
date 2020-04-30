//import config from 'config';
//import { authHeader, handleResponse } from '../utils/handle.response';

import config from '../config';

import { handleResponse } from '../utils/handle.response';
import { authHeader } from '../utils/auth.headers';

export const userService = {
    getAll,
    getById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}
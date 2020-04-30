import { BehaviorSubject } from 'rxjs';

import config from '../config';
import { handleResponse } from '../utils/handle.response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    signup,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'GET',
        headers: { Authorization: "Basic " + btoa(username + ":" + password) }
    };

    return fetch(`${config.apiUrl}/auth/login/token`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                currentUserSubject.next(user);
            }
            
            return user;
        });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function signup( name, email, password ) {

    const primaryRole = 1;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, primaryRole})
    };

    return fetch(`${config.apiUrl}/auth/register/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}
import { BehaviorSubject } from 'rxjs';

import config from '../config';
import axios from 'axios';

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
        headers: { Authorization: "Basic " + btoa(username + ":" + password) }
    };
    
    return axios.get(`${config.apiUrl}/auth/login/token`, requestOptions).then(user => {
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
        }
        return user;
    }).catch(error => alert(error));
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function signup( name, email, password ) {

    const primaryRole = '1';
    return axios.post(`${config.apiUrl}/auth/register/`, { name, email, password, primaryRole} , {'Content-Type': 'application/json' } ).then(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);
        return user;
    }).catch(error => alert(error));
}
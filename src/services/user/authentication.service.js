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
    }).catch(error => {
        if( "response" in error ){
            if( error.response !== undefined ){
                if('status' in error.response ) { alert(error.response.data.message);}
                else {console.log( error.response );}
            }else {
                console.log( error );
            }
        }else{
            console.log( error );
        }
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function signup( name, email, password ) {

    return axios.post(`${config.apiUrl}/auth/register/`, { name, email, password} , {'Content-Type': 'application/json' } ).then(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);
        return user;
    }).catch(error => {
        if( "response" in error ){
            if( error.response !== undefined ){
                if('status' in error.response ) { alert(error.response.data.message);}
                else {console.log( error.response );}
            }else {
                console.log( error );
            }
        }else{
            console.log( error );
        }
    });
}
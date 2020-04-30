import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import config from '../config';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const buyService = {
    buyPizzas,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function buyPizzas(user, data) {
    const requestOptions = {
        method: 'POST',
        headers: { token: 'buyService' },
        body: {user, data}
    };
    return axios({
        url: `${config.apiUrl}/buy/`,
        ...requestOptions
    }).then(resp => {
        return resp;
    }).catch(error => alert(error));

    /*
    return fetch(`${config.apiUrl}/buy/`, requestOptions)
        .then(handleResponse)
        .then(resp => {
            return resp;
        }).catch(error => alert(error));*/
}
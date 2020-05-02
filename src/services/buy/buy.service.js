import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import config from '../config'
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const buyService = {
    buyPizzas,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function buyPizzas(user, userinfo, items, price) {
    const header = {
        headers: {
            Authorization: `Bearer ${user.data.jwt}`
        },
        'Content-Type': 'application/json'
    };

    return axios.post(`${config.apiUrl}/buyitems/`, {user, userinfo, items, price}, header ).then(resp => {
        console.log(resp);
        return resp;
    }).catch(error => alert(error));
}
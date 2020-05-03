import axios from 'axios';
import config from '../config';

export const ordersService = {
    getBuys
};

function getBuys(user) {
    const headers = {
        headers: {
            Authorization: `Bearer ${user.data.data.jwt}`
        }
    };

    return axios.post(`${config.apiUrl}/buys/`, {user}, headers ).then(resp => {
        console.log(resp);
        return resp;
    }).catch(error => {
        if(error.response.status === 400){
            alert(error.response.data.message);
        }else{
            console.log(error.response);
        }
    });
}
import axios from 'axios';
import config from '../config'

export const buyService = {
    buyPizzas
};

function buyPizzas(user, userinfo, items, price) {
    const headers = {
        headers: {
            Authorization: `Bearer ${user.data.data.jwt}`
        }
    };

   // console.log(JSON.stringify(header));
    return axios.post(`${config.apiUrl}/buyitems/`, {user, userinfo, items, price}, headers ).then(resp => {
        alert(resp.data.message);
        return resp;
    }).catch(error => {
        if(error.response.status === 400){
            alert(error.response.data.message);
        }else{
            console.log(error.response);
        }
    });
}